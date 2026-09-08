import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, LayoutGrid, List as ListIcon, Sparkles } from "lucide-react";
import { Card } from "@/components/lightning/Primitives";
import { opportunities, type OpportunityStage } from "@/data/mockData";

const STAGES: OpportunityStage[] = ["Qualification", "Site Survey", "Permitting", "Construction", "Live", "Closed Won", "Closed Lost"];

const Opportunities = () => {
  const [view, setView] = useState<"kanban" | "list">("kanban");

  const groups = STAGES.map((stage) => ({
    stage,
    items: opportunities.filter((o) => o.stage === stage),
    total: opportunities.filter((o) => o.stage === stage).reduce((s, o) => s + o.amount, 0),
  }));

  return (
    <div className="p-3 space-y-3">
      <div className="slds-card">
        <div className="px-3 py-2 border-b border-border flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1 text-[12.5px]">
            <button className="flex items-center gap-1 font-semibold text-foreground hover:text-primary">
              All Opportunities <ChevronDown className="w-3 h-3" />
            </button>
            <span className="text-muted-foreground">• {opportunities.length} items</span>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <button onClick={() => setView("kanban")} className={`h-7 w-7 inline-flex items-center justify-center rounded border ${view === "kanban" ? "bg-primary/10 text-primary border-primary/30" : "border-border text-muted-foreground"}`}><LayoutGrid className="w-3.5 h-3.5" /></button>
            <button onClick={() => setView("list")} className={`h-7 w-7 inline-flex items-center justify-center rounded border ${view === "list" ? "bg-primary/10 text-primary border-primary/30" : "border-border text-muted-foreground"}`}><ListIcon className="w-3.5 h-3.5" /></button>
            <button className="slds-button-brand ml-2">New Opportunity</button>
          </div>
        </div>

        {view === "kanban" ? (
          <div className="p-3 grid grid-flow-col auto-cols-[260px] gap-3 overflow-x-auto">
            {groups.map((g) => (
              <div key={g.stage} className="bg-secondary/40 rounded border border-border flex flex-col min-h-[400px]">
                <div className="px-2.5 py-2 border-b border-border">
                  <div className="text-[11.5px] font-semibold text-foreground uppercase tracking-wide">{g.stage}</div>
                  <div className="text-[11px] text-muted-foreground">{g.items.length} • ${(g.total / 1_000_000).toFixed(2)}M</div>
                </div>
                <div className="p-2 space-y-2 flex-1">
                  {g.items.map((o) => (
                    <Link
                      key={o.id} to={`/opportunities/${o.id}`}
                      className="block bg-card border border-border rounded p-2.5 hover:border-primary/40 hover:shadow-sm"
                    >
                      <div className="text-[12.5px] font-medium text-primary line-clamp-2">{o.account}</div>
                      <div className="text-[10.5px] font-mono text-muted-foreground mt-0.5">{o.id}</div>
                      <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-[13.5px] font-bold text-foreground">${(o.amount / 1000).toFixed(0)}K</span>
                        <span className="text-[10.5px] text-muted-foreground">{o.closeDate}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-1.5 text-[10.5px]">
                        <Sparkles className="w-2.5 h-2.5 text-primary" />
                        <span className={`font-mono ${o.einsteinScore >= 80 ? "text-success" : o.einsteinScore >= 60 ? "text-warning" : "text-muted-foreground"}`}>
                          Einstein {o.einsteinScore}
                        </span>
                        <span className="text-muted-foreground ml-auto">{o.owner}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <table className="slds-table">
            <thead><tr><th>Opportunity</th><th>Account</th><th>Stage</th><th className="text-right">Amount</th><th>Close Date</th><th className="text-right">Einstein</th><th>Owner</th></tr></thead>
            <tbody>
              {opportunities.map((o) => (
                <tr key={o.id} onClick={() => window.location.assign(`/opportunities/${o.id}`)}>
                  <td><Link to={`/opportunities/${o.id}`} className="text-primary hover:underline">{o.id}</Link></td>
                  <td>{o.account}</td>
                  <td>{o.stage}</td>
                  <td className="text-right font-mono">${(o.amount / 1000).toFixed(0)}K</td>
                  <td>{o.closeDate}</td>
                  <td className="text-right font-mono">{o.einsteinScore}</td>
                  <td>{o.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Opportunities;
