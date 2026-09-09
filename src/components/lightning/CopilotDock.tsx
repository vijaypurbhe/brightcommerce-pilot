import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { X, Send, ChevronDown, Bot } from "lucide-react";
import { streamChat, type Msg } from "@/lib/streamChat";
import ChatMessage from "@/components/ChatMessage";
import { agents } from "@/data/mockData";
import { toast } from "sonner";

interface Props { open: boolean; onClose: () => void; initialAgentId?: string; initialPrompt?: string; }

const CopilotDock = ({ open, onClose, initialAgentId = "command", initialPrompt }: Props) => {
  const location = useLocation();
  const console_: "sales" | "service" = useMemo(() => {
    const p = location.pathname;
    if (/^\/(cases|case|knowledge|service|dashboards\/service)/.test(p)) return "service";
    return "sales";
  }, [location.pathname]);

  const [agentId, setAgentId] = useState<string>(initialAgentId);

  const agentPrompts: Record<string, string[]> = {
    techSupport: [
      "What is fault code E-118 on a sortation induct drive?",
      "Show open equipment-down cases and restoration estimates",
      "Which product lines drove the most tier-1 contacts this week?",
    ],
    accountGrowth: [
      "Which service contract renewals are at risk this quarter?",
      "Coach me on the Gulf Coast Refining Experion migration",
      "Pipeline forecast vs quota for the process plant segment",
    ],
    orderWarranty: [
      "Where is the Cascade Distribution scanner order right now?",
      "Is serial 8842-VX still under warranty, and can you open an RMA?",
      "Which distributor orders are on backorder past their promise date?",
    ],
    fieldService: [
      "Dispatch a certified technician for the Meridian line 4 outage",
      "Which parts are on the van for a gas detector calibration call?",
      "Show today's first-time-fix rate by region",
    ],
    command: [
      "Give me a cross-domain snapshot of contact center performance",
      "Where is service contract revenue exposed by repeat downtime?",
      "What should my team focus on today?",
    ],
  };

  const contextualPrompts =
    agentPrompts[agentId] ??
    (console_ === "service"
      ? [
          "Summarize cases breaching SLA in the next 2 hours",
          "Draft a customer reply for the Meridian line 4 outage",
          "Which accounts have repeat equipment-down events this week?",
        ]
      : [
          "Show my top at-risk service contract accounts this quarter",
          "Pipeline forecast vs quota for warehouse automation",
          "Suggest the next best action for Gulf Coast Refining",
        ]);

  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [menu, setMenu] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sendRef = useRef<(text: string, agentOverride?: string) => Promise<void>>();
  useEffect(() => {
    setAgentId(initialAgentId);
    setMessages([]);
    if (open && initialPrompt) sendRef.current?.(initialPrompt, initialAgentId);
  }, [initialAgentId, initialPrompt, open]);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const label = agentId === "command" ? "Einstein Copilot" : agents.find((a) => a.id === agentId)?.name ?? "Agent";

  const send = async (text: string, agentOverride?: string) => {
    const next: Msg[] = agentOverride ? [{ role: "user", content: text }] : [...messages, { role: "user", content: text }];
    setMessages(next); setStreaming(true);
    let buf = "";
    try {
      await streamChat({
        messages: next, agentId: agentOverride ?? agentId,
        onDelta: (d) => {
          buf += d;
          const content = buf;
          setMessages((prev) => {
            const last = prev[prev.length - 1];
            if (last?.role === "assistant") return prev.map((m, i) => i === prev.length - 1 ? { ...m, content } : m);
            return [...prev, { role: "assistant", content }];
          });
        },
        onDone: () => setStreaming(false),
        onError: (e) => { setStreaming(false); toast.error(e); },
      });
    } catch { setStreaming(false); toast.error("Failed to reach Agentforce"); }
  };
  sendRef.current = send;

  const onSend = () => { if (!input.trim() || streaming) return; const t = input.trim(); setInput(""); send(t); };

  if (!open) return null;

  return (
    <div className="fixed bottom-9 right-2 w-[420px] h-[580px] bg-card border border-border rounded-t shadow-2xl z-50 flex flex-col animate-slide-up">
      <div className="px-3 py-2.5 border-b border-border flex items-center justify-between bg-primary text-primary-foreground rounded-t">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5" />
          <div className="relative">
            <button onClick={() => setMenu((o) => !o)} className="flex items-center gap-1 text-[14px] font-semibold">
              {label} <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {menu && (
              <div className="absolute top-8 left-0 bg-card text-foreground border border-border rounded shadow-lg w-64 z-10">
                <button onClick={() => { setAgentId("command"); setMenu(false); setMessages([]); }} className="w-full text-left px-3 py-2 text-[13px] hover:bg-secondary">Einstein Copilot</button>
                <div className="border-t border-border my-1" />
                <div className="px-3 py-1 text-[11px] uppercase text-muted-foreground">Agentforce</div>
                {agents.map((a) => (
                  <button key={a.id} onClick={() => { setAgentId(a.id); setMenu(false); setMessages([]); }} className="w-full text-left px-3 py-2 text-[13px] hover:bg-secondary flex items-center gap-2">
                    <span>{a.icon}</span> {a.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <button onClick={onClose} className="hover:bg-white/10 rounded p-1"><X className="w-5 h-5" /></button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
        {messages.length === 0 && (
          <div className="text-center text-muted-foreground text-[13px] py-8">
            <Bot className="w-8 h-8 mx-auto mb-3 text-primary" />
            Hi — I'm {label}. Ask anything about your accounts, opportunities, cases, or service operations.
            <div className="mt-4 flex flex-col gap-2 max-w-[280px] mx-auto">
              {contextualPrompts.map((q) => (
                <button key={q} onClick={() => send(q)} className="text-left text-[12.5px] px-3 py-2 rounded border border-border hover:bg-secondary">{q}</button>
              ))}
            </div>
          </div>
        )}
        {messages.map((m, i) => (
          <ChatMessage key={i} role={m.role} content={m.content} isStreaming={streaming && i === messages.length - 1 && m.role === "assistant"} />
        ))}
      </div>

      <div className="p-3 border-t border-border">
        <div className="flex gap-2">
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && onSend()} placeholder="Ask Agentforce..." className="flex-1 h-9 px-3 text-[13.5px] border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary" />
          <button onClick={onSend} disabled={!input.trim() || streaming} className="slds-button-brand disabled:opacity-50 h-9 px-3"><Send className="w-4 h-4" /></button>
        </div>
      </div>
    </div>
  );
};

export default CopilotDock;
