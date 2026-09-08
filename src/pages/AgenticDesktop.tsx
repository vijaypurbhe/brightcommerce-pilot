import { useState, useEffect, useMemo, useRef, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  Sparkles, Bot, ShieldCheck, Activity, Workflow,
  Search, Bell, Settings, Zap, BookOpen,
  CheckCircle2, AlertTriangle, TrendingUp, TrendingDown, ArrowRight,
  Server, Cable, Handshake, Plug, RefreshCw, Phone, MessageSquare,
  Mail, Briefcase, Headphones, LogOut, FileText, Eye, Star, Send,
} from "lucide-react";
import { toast } from "sonner";
import Login from "@/pages/Login";
import ChatMessage from "@/components/ChatMessage";
import CopilotDock from "@/components/lightning/CopilotDock";
import forgedFiberLogo from "@/assets/forged-fiber-logo.png";
import {
  getAuthenticatedEmail, setAuthenticatedEmail, clearAuthenticatedEmail,
  isLoginReportAdmin,
} from "@/lib/demoAccess";
import { agents } from "@/data/mockData";
import { streamChat, type Msg } from "@/lib/streamChat";

/* ---------- primitives (match consoles) ---------- */

const Pill = ({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "ok" | "warn" | "danger" | "brand" }) => {
  const tones: Record<string, string> = {
    default: "bg-secondary text-foreground/70 border-border",
    ok: "bg-success/10 text-success border-success/30",
    warn: "bg-warning/15 text-[hsl(35_100%_28%)] border-warning/40",
    danger: "bg-destructive/10 text-destructive border-destructive/30",
    brand: "bg-primary/10 text-primary border-primary/30",
  };
  return <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${tones[tone]}`}>{children}</span>;
};

/* ---------- page ---------- */

const AgenticDesktop = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string | null>(() => getAuthenticatedEmail());
  const [now, setNow] = useState<Date>(new Date());
  const [activeAgentId, setActiveAgentId] = useState<string>("networkOps");
  const [dockOpen, setDockOpen] = useState(false);
  const [dockAgentId, setDockAgentId] = useState<string>("networkOps");

  // chat
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => { setMessages([]); }, [activeAgentId]);
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const agent = useMemo(() => agents.find((a) => a.id === activeAgentId) ?? agents[0], [activeAgentId]);
  const initials = (email ?? "").split("@")[0].split(".").map((s) => s[0]?.toUpperCase()).join("").slice(0, 2);
  const isAdmin = isLoginReportAdmin(email);

  const send = async (text: string, routeAgentId?: string) => {
    const targetAgent = routeAgentId ?? activeAgentId;
    if (routeAgentId && routeAgentId !== activeAgentId) setActiveAgentId(routeAgentId);
    const base = routeAgentId && routeAgentId !== activeAgentId ? [] : messages;
    const next: Msg[] = [...base, { role: "user", content: text }];
    setMessages(next); setStreaming(true);
    let buf = "";
    try {
      await streamChat({
        messages: next, agentId: targetAgent,
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

  const onSend = () => { if (!input.trim() || streaming) return; const t = input.trim(); setInput(""); send(t); };


  if (!email) {
    return <Login onAuthenticated={(e) => { setAuthenticatedEmail(e); setEmail(e); }} />;
  }

  const kpis = [
    { l: "Autonomous Resolutions · 24h", v: "8,420", d: "▲ 18%", tone: "ok" as const, icon: CheckCircle2 },
    { l: "HITL Approvals", v: "184", d: "12 pending", tone: "warn" as const, icon: ShieldCheck },
    { l: "Avg MTTR", v: "28m", d: "▼ 6m", tone: "ok" as const, icon: Activity },
    { l: "Cost-to-Serve Saved · QTD", v: "$4.2M", d: "▲ $0.8M", tone: "ok" as const, icon: TrendingUp },
    { l: "Guardrail Interventions", v: "23", d: "▼ 9", tone: "warn" as const, icon: AlertTriangle },
    { l: "Agent Trust Score", v: "94.2", d: "+1.6 pts", tone: "ok" as const, icon: Star },
  ];

  const liveFeed = [
    { i: CheckCircle2, tone: "ok", t: "Auto-issued SLA credit — CASE-44291", w: "PulseNet ISP · 14-min outage · Policy KB-0612", a: "Network Operations Agent · auto", time: "2s ago" },
    { i: CheckCircle2, tone: "ok", t: "Capacity upgrade quote pushed to 184 wholesale partners", w: "Midwest + Southeast regions · 100G wave promo", a: "Wholesale Partner Support Agent · batch", time: "14s ago" },
    { i: AlertTriangle, tone: "warn", t: "Approval required: route-diversity upgrade $14,200/mo", w: "Summit Data Centers · OPP-7821 · Negotiate", a: "Sales Coach Agent · governed", time: "38s ago" },
    { i: CheckCircle2, tone: "ok", t: "Provisioning ETA inquiry resolved in 28s · Circuit #847", w: "Partner Support Agent answered 1,284 status requests today", a: "Wholesale Partner Support Agent · auto", time: "1m ago" },
    { i: AlertTriangle, tone: "danger", t: "Sentiment drop — NorthStar Regional ISP voice call", w: "Frustration rising — supervisor barge suggested", a: "Agent Assist · monitor", time: "2m ago" },
    { i: CheckCircle2, tone: "ok", t: "Fiber Enablement qualified 6 municipal sites", w: "4 auto-scheduled for site survey this week", a: "Fiber Enablement Agent · proactive", time: "3m ago" },
    { i: CheckCircle2, tone: "ok", t: "Auto-summarized 142 case wraps", w: "Avg saved: 47s / case", a: "Agentforce · batch", time: "4m ago" },
  ];

  const queues = [
    { name: "Network Operations Agent", inflight: 348, queued: 12, sla: 94, icon: Server, tone: "ok" as const },
    { name: "Wholesale Partner Support Agent", inflight: 184, queued: 2, sla: 99, icon: Handshake, tone: "ok" as const },
    { name: "Sales Coach Agent", inflight: 84, queued: 12, sla: 76, icon: Briefcase, tone: "warn" as const },
    { name: "Fiber Enablement Agent", inflight: 2160, queued: 0, sla: 100, icon: Plug, tone: "ok" as const },
    { name: "Agent Assist · Live Cases", inflight: 142, queued: 0, sla: 91, icon: Bot, tone: "ok" as const },
  ];

  const channels = [
    { ch: "Voice", vals: [82, 64, 38, 12, 90], icon: Phone },
    { ch: "Chat", vals: [70, 88, 55, 30, 44], icon: MessageSquare },
    { ch: "Email", vals: [22, 41, 60, 18, 28], icon: Mail },
    { ch: "Partner Portal", vals: [66, 72, 48, 22, 38], icon: Cable },
  ];
  const qNames = ["Status", "Billing", "Provisioning", "Performance", "Sales"];
  const heatColor = (v: number) =>
    v > 75 ? "hsl(var(--destructive))" : v > 50 ? "hsl(var(--warning))" : v > 25 ? "hsl(var(--primary))" : "hsl(var(--muted))";


  const suggestedPrompts: Record<string, string[]> = {
    networkOps: ["What's the current backbone health across all regions?", "Summarize open P1 network outages", "Which circuits are at risk of SLA breach in the next 2 hours?"],
    salesCoach: ["Show top 12 at-risk partner accounts", "Meeting brief for Summit Data Centers", "Win-likelihood drivers this quarter"],
    partnerSupport: ["Which partners have open capacity-upgrade quotes?", "Deflection rate by channel today", "Onboarding status for CloudBridge ISP"],
    fiberEnablement: ["How many eligibility checks completed this week?", "Top 5 municipal opportunities by pipeline", "Site-survey scheduling backlog"],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* ============ HEADER (matches consoles) ============ */}
      <header className="bg-[hsl(var(--header-bg))] text-[hsl(var(--header-fg))] h-12 flex items-center px-3 gap-2 relative z-40">
        <div className="h-7 bg-white rounded px-1.5 flex items-center">
          <img src={forgedFiberLogo} alt="Forged Fiber 37" className="h-5 w-auto" />
        </div>
        <div className="flex items-center gap-1.5 ml-1">
          <div className="size-6 rounded flex items-center justify-center bg-accent/30">
            <Sparkles className="size-3.5" />
          </div>
          <span className="font-semibold text-[15px] tracking-tight">Forged Fiber 37 Agentic Desktop</span>
        </div>

        <div className="flex-1 max-w-[640px] mx-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-foreground/50" />
            <input
              placeholder="Ask Agentforce, search accounts, cases, agents…"
              className="w-full h-9 pl-9 pr-3 rounded text-[13.5px] bg-white text-foreground border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 placeholder:text-foreground/40"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-1">
          <button onClick={() => navigate("/dashboards/sales")} className="h-8 px-3 rounded text-[13px] font-medium inline-flex items-center gap-1.5 hover:bg-white/10">
            <Briefcase className="size-4" /> Sales Console <ArrowRight className="size-3.5 opacity-60" />
          </button>
          <button onClick={() => navigate("/dashboards/service")} className="h-8 px-3 rounded text-[13px] font-medium inline-flex items-center gap-1.5 hover:bg-white/10">
            <Headphones className="size-4" /> Service Console <ArrowRight className="size-3.5 opacity-60" />
          </button>
          <span className="text-[12px] opacity-60 hidden md:block mx-2">{now.toLocaleTimeString()}</span>
          <button className="slds-icon-btn"><Bell className="w-4 h-4" /></button>
          <button className="slds-icon-btn"><Settings className="w-4 h-4" /></button>
          {isAdmin && (
            <button onClick={() => navigate("/login-report")} className="slds-icon-btn" title="Login Report"><FileText className="w-4 h-4" /></button>
          )}
          <div className="size-8 rounded-full bg-white text-[hsl(var(--primary))] font-bold text-[12px] flex items-center justify-center">{initials}</div>
          <button onClick={() => { clearAuthenticatedEmail(); setEmail(null); }} className="slds-icon-btn" title="Sign out"><LogOut className="w-4 h-4" /></button>
        </div>
      </header>

      {/* ============ STATUS STRIP ============ */}
      <div className="bg-card border-b border-border h-11 flex items-center px-3 gap-2">
        <Pill tone="ok"><span className="size-2 rounded-full bg-success animate-pulse" /> Agentforce live</Pill>
        <Pill tone="brand">4 agents · 24 workers</Pill>
        <Pill>Trust Layer enforced</Pill>
        <span className="ml-auto text-[12px] text-muted-foreground">{now.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}</span>
      </div>

      {/* ============ KPI STRIP ============ */}
      <section className="px-4 pt-3">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {kpis.map((k) => (
            <div key={k.l} className="slds-card p-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{k.l}</span>
                <k.icon className={`size-4 ${k.tone === "warn" ? "text-warning" : "text-success"}`} />
              </div>
              <div className="mt-1 text-[26px] font-bold tracking-tight text-foreground">{k.v}</div>
              <div className={`text-[11.5px] ${k.tone === "warn" ? "text-warning" : "text-success"}`}>{k.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ MAIN GRID ============ */}
      <section className="px-4 py-3 grid grid-cols-12 gap-3 flex-1">

        {/* LEFT — Agent fleet */}
        <div className="col-span-12 lg:col-span-3 slds-card p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><Bot className="size-4 text-primary" /> Agent Fleet</div>
            <Pill tone="ok">{agents.length} active</Pill>
          </div>
          <div className="space-y-1.5">
            {agents.map((a) => (
              <button key={a.id} onClick={() => { setActiveAgentId(a.id); setDockAgentId(a.id); setDockOpen(true); }}
                className={`w-full text-left rounded border p-2.5 transition ${activeAgentId === a.id ? "bg-primary/5 border-primary/40" : "bg-card border-border hover:bg-secondary/60"}`}>
                <div className="flex items-start gap-2">
                  <div className="size-9 rounded bg-primary/10 flex items-center justify-center text-lg shrink-0">{a.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-semibold text-foreground truncate">{a.name}</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className={`size-2 rounded-full ${a.status === "acting" ? "bg-primary" : a.status === "alert" ? "bg-warning" : "bg-success"} animate-pulse`} />
                      <span className="text-[11px] text-muted-foreground capitalize">{a.status} · {a.category}</span>
                    </div>
                    <div className="text-[11.5px] text-success font-medium mt-0.5 truncate">{a.impact}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CENTER — Selected agent + contextual chat */}
        <div className="col-span-12 lg:col-span-6 space-y-3 flex flex-col">
          <div className="slds-card p-4">
            <div className="flex items-start gap-3">
              <div className="size-14 rounded bg-primary/10 flex items-center justify-center text-2xl">{agent.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-[17px] font-semibold tracking-tight text-foreground">{agent.name}</h3>
                  <Pill tone={agent.status === "alert" ? "warn" : agent.status === "acting" ? "brand" : "ok"}>{agent.status}</Pill>
                  <Pill>{agent.audience}</Pill>
                  <Pill tone="ok">{agent.confidence}% conf</Pill>
                </div>
                <p className="text-[13.5px] text-muted-foreground leading-relaxed mt-1.5">{agent.insight}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-3">
              <div className="rounded border border-border bg-secondary/40 p-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1"><Zap className="size-3" /> Next action</div>
                <div className="text-[13px] mt-1 leading-snug text-foreground">{agent.action}</div>
              </div>
              <div className="rounded border border-success/30 bg-success/5 p-3">
                <div className="text-[10px] uppercase tracking-wider text-success font-semibold">Projected impact</div>
                <div className="text-[13px] font-semibold mt-1 text-success">{agent.impact}</div>
              </div>
              <div className="rounded border border-border bg-secondary/40 p-3">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-1"><BookOpen className="size-3" /> Grounding</div>
                <div className="text-[13px] mt-1 leading-snug text-foreground">Data Cloud + OSS/BSS + Partner Portal + GIS</div>
              </div>
            </div>

            <div className="flex gap-1.5 mt-3">
              <button className="slds-button-brand"><Sparkles className="w-3.5 h-3.5" /> Approve & run</button>
              <button className="slds-button">Edit plan</button>
              <button className="slds-button">View audit trail</button>
            </div>
          </div>

          {/* CONTEXTUAL CHAT */}
          <div className="slds-card flex flex-col flex-1 min-h-[420px]">
            <div className="slds-card-header">
              <h2 className="text-[14px] font-semibold text-foreground flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-primary" />
                Conversation with {agent.name}
              </h2>
              {streaming && <Pill tone="brand">Thinking…</Pill>}
            </div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
              {messages.length === 0 && (
                <div className="text-center text-muted-foreground text-[13px] py-8">
                  <Bot className="w-8 h-8 mx-auto mb-3 text-primary" />
                  Ask {agent.name} about its work, recommendations, or impact.
                  <div className="mt-4 flex flex-col gap-2 max-w-[480px] mx-auto">
                    {(suggestedPrompts[activeAgentId] ?? []).map((q) => (
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
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && onSend()}
                  placeholder={`Message ${agent.name}…`}
                  className="flex-1 h-10 px-4 text-[13.5px] border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button onClick={onSend} disabled={!input.trim() || streaming} className="slds-button-brand disabled:opacity-50 h-10 px-4">
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Queues + Governance + Live feed */}
        <div className="col-span-12 lg:col-span-3 space-y-3">
          <div className="slds-card p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><Workflow className="size-4 text-primary" /> Agent workloads</div>
              <Pill tone="ok">Live</Pill>
            </div>
            <div className="space-y-1.5">
              {queues.map((q) => (
                <div key={q.name} className="rounded border border-border bg-secondary/30 p-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <q.icon className="size-3.5 text-muted-foreground shrink-0" />
                      <span className="text-[12.5px] font-medium text-foreground truncate">{q.name}</span>
                    </div>
                    <Pill tone={q.tone}>{q.inflight}</Pill>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full" style={{ width: `${q.sla}%`, background: q.sla > 90 ? "hsl(var(--success))" : q.sla > 80 ? "hsl(var(--warning))" : "hsl(var(--destructive))" }} />
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>SLA {q.sla}%</span><span>{q.queued} queued</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slds-card p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><ShieldCheck className="size-4 text-success" /> Trust Layer · Governance</div>
              <Pill tone="ok">enforced</Pill>
            </div>
            <div className="space-y-1 text-[12.5px]">
              {[
                ["Issue SLA credit ≤ $500", "ok", "auto"],
                ["Dispatch emergency reroute", "ok", "auto"],
                ["Contract amendment > $10k/mo", "warn", "approval"],
                ["Cancel partner contract", "danger", "supervisor"],
                ["Export network topology / PII", "danger", "CISO sign-off"],
              ].map(([k, tone, v]) => (
                <div key={k as string} className="flex items-center justify-between rounded border border-border bg-secondary/30 px-2.5 py-2">
                  <span className="text-foreground">{k}</span>
                  <Pill tone={tone as "ok" | "warn" | "danger"}>{v}</Pill>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============ LIVE AUDIT FEED ============ */}
        <div className="col-span-12 lg:col-span-7 slds-card p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><Activity className="size-4 text-success" /> Agentforce action audit · live</div>
            <div className="flex gap-1.5">
              <Pill>All actions</Pill>
              <Pill tone="warn"><AlertTriangle className="size-3" /> 3 guardrail flags</Pill>
            </div>
          </div>
          <div className="divide-y divide-border">
            {liveFeed.map((r, i) => (
              <div key={i} className="flex items-start gap-2.5 py-2.5">
                <r.i className={`mt-0.5 size-4 shrink-0 ${r.tone === "ok" ? "text-success" : r.tone === "warn" ? "text-warning" : "text-destructive"}`} />
                <div className="flex-1 min-w-0">
                  <div className="text-[13.5px] font-medium text-foreground">{r.t}</div>
                  <div className="text-[11.5px] text-muted-foreground mt-0.5">{r.w} · <span className="italic">{r.a}</span></div>
                </div>
                <span className="text-[11px] text-muted-foreground shrink-0">{r.time}</span>
                <button className="text-[12px] font-semibold text-primary hover:underline shrink-0">Investigate →</button>
              </div>
            ))}
          </div>
        </div>

        {/* ============ CHANNEL × INTENT ============ */}
        <div className="col-span-12 lg:col-span-5 slds-card p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5"><Eye className="size-4 text-primary" /> Channel × intent pressure</div>
            <Pill>SLA-weighted</Pill>
          </div>
          <div className="grid grid-cols-[110px_repeat(5,1fr)] gap-1 text-[11.5px]">
            <div />
            {qNames.map((q) => <div key={q} className="px-1 text-center font-semibold text-muted-foreground uppercase tracking-wider">{q}</div>)}
            {channels.map((row) => (
              <Fragment key={row.ch}>
                <div className="flex items-center gap-1.5 text-[12px] font-medium text-foreground">
                  <row.icon className="size-3.5" /> {row.ch}
                </div>
                {row.vals.map((v, i) => (
                  <div key={i} className="flex h-9 items-center justify-center rounded text-[12px] font-bold text-white" style={{ background: heatColor(v), opacity: 0.9 }}>
                    {v}
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {[
              { t: "Storm-related outage · Southeast", d: "up", icon: Server },
              { t: "Provisioning acceptance ▲", d: "up", icon: RefreshCw },
              { t: "Performance complaints", d: "down", icon: AlertTriangle },
              { t: "Fiber enablement surge Q1", d: "up", icon: Plug },
            ].map((c) => (
              <div key={c.t} className="rounded border border-border bg-secondary/30 px-2.5 py-2 flex items-center gap-2 text-[12px]">
                <c.icon className="size-3.5 text-muted-foreground" />
                <span className="flex-1 truncate text-foreground">{c.t}</span>
                {c.d === "up" ? <TrendingUp className="size-3.5 text-destructive" /> : <TrendingDown className="size-3.5 text-success" />}
              </div>
            ))}
          </div>
        </div>

      </section>

      <CopilotDock open={dockOpen} onClose={() => setDockOpen(false)} initialAgentId={dockAgentId} />
    </div>
  );
};

export default AgenticDesktop;
