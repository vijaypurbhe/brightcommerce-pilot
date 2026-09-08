import { Card } from "@/components/lightning/Primitives";
import { kpiData, cases, channelData } from "@/data/mockData";
import AgentsPanel from "@/components/lightning/AgentsPanel";
import { Link } from "react-router-dom";

const ServiceDashboard = () => {
  const labels = ["Open Cases", "SLA Compliance", "CSAT", "AI Deflection"];
  const escalated = cases.filter((c) => c.status === "Escalated").length;
  const maxContacts = Math.max(...channelData.map((c) => c.sessions));

  const ahtSeries = [
    { day: "Mon", aht: 4.6 }, { day: "Tue", aht: 4.4 }, { day: "Wed", aht: 4.2 },
    { day: "Thu", aht: 4.1 }, { day: "Fri", aht: 4.0 }, { day: "Sat", aht: 3.9 }, { day: "Sun", aht: 3.8 },
  ];
  const maxAht = Math.max(...ahtSeries.map((a) => a.aht));

  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] text-muted-foreground">Dashboard</div>
          <h1 className="text-[18px] font-bold">Service Operations — Forged Fiber 37 Network Care</h1>
        </div>
        <div className="flex gap-1.5">
          <button className="slds-button">Refresh</button>
          <button className="slds-button">Subscribe</button>
          <button className="slds-button-brand">Edit</button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3">
        {labels.map((label) => {
          const k = kpiData.find((x) => x.label === label)!;
          return (
            <div key={label} className="col-span-6 md:col-span-3 slds-card p-3">
              <div className="text-[11px] text-muted-foreground">{k.label}</div>
              <div className="text-[22px] font-bold text-foreground mt-1">{k.value}</div>
              <div className={`text-[11.5px] ${k.trend === "up" ? "text-success" : "text-destructive"}`}>
                {k.change > 0 ? "▲" : "▼"} {Math.abs(k.change)}% <span className="text-muted-foreground">{k.period}</span>
              </div>
            </div>
          );
        })}

        <Card title="Cases by Channel" className="col-span-12 lg:col-span-7">
          <div className="space-y-2">
            {channelData.map((c) => {
              const pct = (c.sessions / maxContacts) * 100;
              return (
                <div key={c.channel}>
                  <div className="flex justify-between text-[12px] mb-0.5"><span>{c.channel}</span><span className="font-mono text-muted-foreground">{c.sessions.toLocaleString()} • CSAT {c.csat}</span></div>
                  <div className="h-4 bg-secondary rounded overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="text-[10.5px] text-muted-foreground mt-0.5">Agentforce deflection: {c.deflected}%</div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Case Status Mix" className="col-span-12 lg:col-span-5">
          <ul className="space-y-2 text-[12.5px]">
            {(["New", "In Progress", "Waiting on Customer", "Escalated", "Resolved"] as const).map((s) => {
              const count = cases.filter((c) => c.status === s).length;
              const pct = (count / cases.length) * 100;
              return (
                <li key={s}>
                  <div className="flex items-center justify-between"><span>{s}</span><span className="font-mono text-muted-foreground">{count}</span></div>
                  <div className="h-2 bg-secondary rounded mt-1 overflow-hidden">
                    <div className={`h-full ${s === "Escalated" ? "bg-destructive" : s === "Resolved" ? "bg-success" : "bg-primary"}`} style={{ width: `${pct}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="text-[11px] text-muted-foreground mt-3">Escalated: <span className="text-destructive font-semibold">{escalated}</span> currently active.</div>
        </Card>

        <Card title="Average Handle Time (7d)" className="col-span-12 lg:col-span-5">
          <div className="flex items-end gap-3 h-36">
            {ahtSeries.map((a) => (
              <div key={a.day} className="flex-1 h-full flex flex-col items-center justify-end gap-1">
                <div className="text-[10.5px] font-mono text-muted-foreground">{a.aht.toFixed(1)}m</div>
                <div className="w-full bg-accent rounded-t" style={{ height: `${(a.aht / maxAht) * 90}%`, minHeight: 4 }} />
                <div className="text-[10.5px] text-muted-foreground">{a.day}</div>
              </div>
            ))}
          </div>
          <div className="text-[11px] text-muted-foreground mt-2">Agent Assist live drafts reduced AHT by 38 sec WoW.</div>
        </Card>

        <Card title="Live Case Queue" className="col-span-12 lg:col-span-7" action={<Link to="/cases" className="text-[11.5px] text-primary hover:underline">View all</Link>}>
          <table className="slds-table">
            <thead><tr><th>Case</th><th>Subject</th><th>Priority</th><th>Owner</th><th className="text-right">SLA</th></tr></thead>
            <tbody>
              {cases.filter((c) => c.status !== "Resolved").slice(0, 7).map((c) => {
                const pct = Math.min(100, (c.ageHours / c.slaHours) * 100);
                return (
                  <tr key={c.id} onClick={() => window.location.assign(`/cases/${c.id}`)}>
                    <td><Link to={`/cases/${c.id}`} className="text-primary hover:underline">{c.id}</Link></td>
                    <td className="truncate max-w-[260px]">{c.subject}</td>
                    <td>{c.priority}</td>
                    <td>{c.owner}</td>
                    <td className="text-right"><span className={pct > 75 ? "text-destructive" : pct > 50 ? "text-warning" : "text-success"}>{pct.toFixed(0)}%</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>

        <div className="col-span-12 lg:col-span-7">
          <AgentsPanel category="Forged Fiber" title="Forged Fiber Agentforce" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDashboard;
