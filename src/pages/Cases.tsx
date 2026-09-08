import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { cases, type CaseChannel, type CasePriority } from "@/data/mockData";

const priorityColor: Record<CasePriority, string> = {
  P1: "text-destructive bg-destructive/10 border-destructive/30",
  P2: "text-warning bg-warning/10 border-warning/30",
  P3: "text-primary bg-primary/10 border-primary/30",
  P4: "text-muted-foreground bg-secondary border-border",
};

const Cases = () => {
  const [q, setQ] = useState("");
  const [channel, setChannel] = useState<"All" | CaseChannel>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = cases
    .filter((c) => channel === "All" || c.channel === channel)
    .filter((c) => c.subject.toLowerCase().includes(q.toLowerCase()) || c.account.toLowerCase().includes(q.toLowerCase()));

  const selected = selectedId ? cases.find((c) => c.id === selectedId) ?? null : null;

  return (
    <div className="p-0 h-[calc(100vh-130px)] flex">
      {/* Left: case list */}
      <aside className="w-[420px] border-r border-border bg-card flex flex-col">
        <div className="p-2 border-b border-border">
          <div className="flex items-center gap-1 text-[12.5px] mb-2">
            <button className="flex items-center gap-1 font-semibold hover:text-primary">My Open Cases <ChevronDown className="w-3 h-3" /></button>
            <span className="text-muted-foreground ml-1">• {filtered.length}</span>
          </div>
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search cases..." className="w-full h-7 pl-7 pr-2 text-[12px] border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary" />
          </div>
          <div className="flex gap-1 mt-2 flex-wrap">
            {(["All", "Voice", "Chat", "Email", "Web", "SMS"] as const).map((c) => (
              <button key={c} onClick={() => setChannel(c)} className={`text-[10.5px] px-2 py-0.5 rounded ${channel === c ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}>{c}</button>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {filtered.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedId(c.id)}
              className={`w-full text-left px-3 py-2.5 border-b border-border hover:bg-secondary/40 ${selectedId === c.id ? "bg-primary/5 border-l-4 border-l-primary" : ""}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[12.5px] font-medium text-primary truncate">{c.id}</span>
                <span className={`slds-pill text-[10px] ${priorityColor[c.priority]}`}>{c.priority}</span>
              </div>
              <div className="text-[12.5px] text-foreground truncate mt-0.5">{c.subject}</div>
              <div className="text-[11px] text-muted-foreground truncate">{c.account} • {c.channel}</div>
            </button>
          ))}
        </div>
      </aside>

      {/* Right: case workspace */}
      <div className="flex-1 min-w-0 overflow-y-auto bg-background">
        {!selected ? (
          <div className="h-full flex items-center justify-center text-muted-foreground text-[13px]">
            Select a case to view details.
          </div>
        ) : (
          <CaseWorkspace caseId={selected.id} />
        )}
      </div>
    </div>
  );
};

// Inline workspace shared with /cases/:id
import CaseRecordInner from "./CaseRecord";
const CaseWorkspace = ({ caseId }: { caseId: string }) => <CaseRecordInner overrideId={caseId} />;

export default Cases;
