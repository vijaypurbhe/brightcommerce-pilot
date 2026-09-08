import { Link } from "react-router-dom";
import { Bot, ChevronRight } from "lucide-react";
import { agents } from "@/data/mockData";

const statusDot: Record<string, string> = {
  monitoring: "bg-success",
  alert: "bg-warning",
  acting: "bg-primary",
};

interface Props {
  category?: "Service" | "Sales" | "Forged Fiber" | "All";
  title?: string;
  onChat?: (agentId: string) => void;
}

const AgentsPanel = ({ category = "All", title = "Agentforce Agents", onChat }: Props) => {
  const list = category === "All" ? agents : agents.filter((a) => a.category === category);
  return (
    <section className="slds-card">
      <header className="slds-card-header">
        <h2 className="text-[13px] font-semibold text-foreground flex items-center gap-1.5">
          <Bot className="w-4 h-4 text-primary" /> {title}
        </h2>
        <span className="text-[11px] text-muted-foreground">{list.length} active</span>
      </header>
      <ul className="divide-y divide-border">
        {list.map((a) => (
          <li key={a.id} className="p-3 hover:bg-secondary/30">
            <div className="flex items-start gap-2.5">
              <div className="w-9 h-9 rounded bg-primary/10 text-primary flex items-center justify-center text-base shrink-0">
                {a.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[12.5px] font-semibold text-foreground truncate">{a.name}</span>
                  <span className="slds-pill text-[10px] gap-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${statusDot[a.status]}`} />
                    {a.status}
                  </span>
                </div>
                <p className="text-[11.5px] text-muted-foreground leading-relaxed mt-1 line-clamp-2">
                  {a.insight}
                </p>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[11px] text-success font-mono">{a.impact}</span>
                  {onChat ? (
                    <button onClick={() => onChat(a.id)} className="text-[11px] text-primary hover:underline flex items-center gap-0.5">
                      Chat <ChevronRight className="w-3 h-3" />
                    </button>
                  ) : (
                    <Link to="/agentic" className="text-[11px] text-primary hover:underline flex items-center gap-0.5">
                      Details <ChevronRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AgentsPanel;
