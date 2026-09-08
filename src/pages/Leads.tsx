import { useState } from "react";
import { Search, Filter, Download, ChevronDown, Sparkles } from "lucide-react";
import { leads, type LeadStatus } from "@/data/extraData";
import AgentsPanel from "@/components/lightning/AgentsPanel";

const statusStyle: Record<LeadStatus, string> = {
  New: "bg-primary/10 text-primary border-primary/30",
  Working: "bg-warning/10 text-warning border-warning/30",
  Nurturing: "bg-secondary text-foreground border-border",
  Qualified: "bg-success/10 text-success border-success/30",
  Disqualified: "bg-destructive/10 text-destructive border-destructive/30",
};

const Leads = () => {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<"All" | LeadStatus>("All");
  const rows = leads
    .filter((l) => status === "All" || l.status === status)
    .filter((l) => l.name.toLowerCase().includes(q.toLowerCase()) || l.company.toLowerCase().includes(q.toLowerCase()));
  const totalValue = rows.reduce((s, l) => s + l.estValue, 0);

  return (
    <div className="p-3 grid grid-cols-12 gap-3">
      <div className="col-span-12 xl:col-span-9 slds-card">
        <div className="px-3 py-2 border-b border-border flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1 text-[12.5px]">
            <button className="flex items-center gap-1 font-semibold hover:text-primary">All Open Leads <ChevronDown className="w-3 h-3" /></button>
            <span className="text-muted-foreground">• {rows.length} items • ${(totalValue / 1_000_000).toFixed(2)}M pipeline est.</span>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <button className="slds-button"><Filter className="w-3 h-3" /> Filters</button>
            <button className="slds-button"><Download className="w-3 h-3" /> Export</button>
            <button className="slds-button-brand">New Lead</button>
          </div>
        </div>
        <div className="px-3 py-2 border-b border-border bg-secondary/30 flex items-center gap-2 flex-wrap">
          <div className="relative max-w-xs flex-1">
            <Search className="w-3.5 h-3.5 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search leads..." className="w-full h-7 pl-7 pr-2 text-[12px] border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary bg-card" />
          </div>
          <div className="flex items-center gap-1">
            {(["All", "New", "Working", "Nurturing", "Qualified", "Disqualified"] as const).map((s) => (
              <button key={s} onClick={() => setStatus(s)} className={`text-[11.5px] px-2 py-0.5 rounded ${status === s ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}>{s}</button>
            ))}
          </div>
        </div>
        <table className="slds-table">
          <thead><tr><th>Lead</th><th>Company</th><th>Title</th><th>Source</th><th>Region</th><th className="text-right">Est. Value</th><th className="text-right">Einstein</th><th>Status</th><th className="text-right">Age</th></tr></thead>
          <tbody>
            {rows.map((l) => (
              <tr key={l.id}>
                <td><span className="text-primary font-medium hover:underline">{l.name}</span><div className="text-[10.5px] text-muted-foreground font-mono">{l.id}</div></td>
                <td>{l.company}</td>
                <td>{l.title}</td>
                <td>{l.source}</td>
                <td>{l.region}</td>
                <td className="text-right font-mono">${l.estValue.toLocaleString()}</td>
                <td className="text-right">
                  <span className={`font-mono inline-flex items-center gap-1 ${l.einsteinScore >= 80 ? "text-success" : l.einsteinScore >= 60 ? "text-warning" : "text-muted-foreground"}`}>
                    <Sparkles className="w-3 h-3" />{l.einsteinScore}
                  </span>
                </td>
                <td><span className={`slds-pill text-[10.5px] ${statusStyle[l.status]}`}>{l.status}</span></td>
                <td className="text-right">{l.createdDays}d</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="col-span-12 xl:col-span-3 space-y-3">
        <AgentsPanel category="Sales" title="Sales Agentforce" />
      </div>
    </div>
  );
};

export default Leads;
