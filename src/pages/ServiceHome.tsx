import { Link } from "react-router-dom";
import { Headphones, AlertTriangle, MessageSquare, Phone, ChevronRight, Sparkles } from "lucide-react";
import { Card } from "@/components/lightning/Primitives";
import { cases, kpiData, channelData } from "@/data/mockData";
import AgentsPanel from "@/components/lightning/AgentsPanel";

const ServiceHome = () => {
  const myQueue = cases.filter((c) => c.status !== "Resolved").slice(0, 6);
  const csat = kpiData.find((k) => k.label === "CSAT")!;
  const sla = kpiData.find((k) => k.label === "SLA Compliance")!;
  const openCases = kpiData.find((k) => k.label === "Open Cases")!;
  const deflection = kpiData.find((k) => k.label === "AI Deflection")!;

  return (
    <div className="p-3 grid grid-cols-12 gap-3">
      {/* KPI strip */}
      <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[openCases, sla, csat, deflection].map((k) => (
          <div key={k.label} className="slds-card p-3">
            <div className="text-[11px] text-muted-foreground">{k.label}</div>
            <div className="text-[22px] font-bold text-foreground mt-0.5">{k.value}</div>
            <div className={`text-[11.5px] ${k.trend === "up" ? "text-success" : "text-destructive"}`}>
              {k.change > 0 ? "▲" : "▼"} {Math.abs(k.change)}% <span className="text-muted-foreground">{k.period}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Omni-channel queue */}
      <Card title="My Omni-Channel Queue" className="col-span-12 xl:col-span-8" action={<Link to="/cases" className="text-[11.5px] text-primary hover:underline">View all cases</Link>}>
        <table className="slds-table">
          <thead><tr><th>Case</th><th>Subject</th><th>Account</th><th>Channel</th><th>Priority</th><th>Owner</th><th className="text-right">SLA</th></tr></thead>
          <tbody>
            {myQueue.map((c) => {
              const pct = Math.min(100, (c.ageHours / c.slaHours) * 100);
              return (
                <tr key={c.id} onClick={() => window.location.assign(`/cases/${c.id}`)}>
                  <td><Link to={`/cases/${c.id}`} className="text-primary hover:underline">{c.id}</Link></td>
                  <td className="max-w-[260px] truncate">{c.subject}</td>
                  <td>{c.account}</td>
                  <td>{c.channel}</td>
                  <td>{c.priority}</td>
                  <td>{c.owner}</td>
                  <td className="text-right"><span className={pct > 75 ? "text-destructive" : pct > 50 ? "text-warning" : "text-success"}>{pct.toFixed(0)}%</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>

      {/* Channel mix */}
      <Card title="Contact Channels (Today)" className="col-span-12 xl:col-span-4">
        <ul className="space-y-2 text-[12.5px]">
          {channelData.map((c) => (
            <li key={c.channel} className="border-b border-border pb-1.5 last:border-0">
              <div className="flex items-center justify-between">
                <span className="font-medium">{c.channel}</span>
                <span className="font-mono text-muted-foreground">{c.contacts}</span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-[11px] text-muted-foreground">
                <span>CSAT {c.csat}</span>
                <span>•</span>
                <span>Deflected {c.deflected}%</span>
                <div className="ml-auto h-1.5 w-20 bg-secondary rounded overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: `${c.deflected}%` }} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* Service alerts */}
      <Card title="Service Alerts" className="col-span-12 xl:col-span-8" action={<AlertTriangle className="w-4 h-4 text-warning" />}>
        <div className="space-y-2">
          {[
            { t: "P1 — Backbone outage, Region 7 ring", b: "Redundant path holding. Field crew dispatched to splice closure 7-B. ETA to restore: 42 min. NOC lead: T. Nguyen.", to: "/cases/CASE-44188", chip: "P1" },
            { t: "Storm-related performance degradation — Southeast", b: "18 circuits impacted by weather. Network Operations Agent auto-notifying affected partners and rolling truck rolls.", to: "/cases", chip: "Voice" },
            { t: "Repeat provisioning delays — NorthStar Regional ISP", b: "2nd missed turn-up this quarter. Sales Coach Agent flagged as churn risk; CSM intervention queued.", to: "/cases/CASE-44158", chip: "P2" },
          ].map((a) => (
            <Link key={a.t} to={a.to} className="block border border-border rounded p-2.5 hover:bg-secondary/40">
              <div className="flex items-center gap-2">
                <span className="slds-pill text-[10px] bg-destructive/10 text-destructive border-destructive/30">{a.chip}</span>
                <div className="text-[12.5px] font-semibold text-foreground">{a.t}</div>
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground ml-auto" />
              </div>
              <div className="text-[11.5px] text-muted-foreground leading-relaxed mt-1">{a.b}</div>
            </Link>
          ))}
        </div>
      </Card>

      {/* Service Agents */}
      <div className="col-span-12 xl:col-span-4">
        <AgentsPanel category="Forged Fiber" title="Forged Fiber Agentforce" />
      </div>

      {/* Einstein recommendations */}
      <Card title="Einstein Recommendations" className="col-span-12 xl:col-span-4" action={<Sparkles className="w-4 h-4 text-primary" />}>
        <div className="space-y-2 text-[12.5px]">
          <div className="p-2 rounded bg-primary/5 border border-primary/20">
            <div className="text-[10.5px] uppercase text-primary font-semibold">Capacity</div>
            Open Wholesale Partner Support Agent for circuit status and SLA inquiries ≤$10K impact — +$2.8M annual cost-to-serve reduction.
          </div>
          <div className="p-2 rounded bg-accent/5 border border-accent/20">
            <div className="text-[10.5px] uppercase text-accent font-semibold">CSAT</div>
            Route City of Austin inbound directly to M. Alvarez — 4 open cases and declining CSAT trend.
          </div>
          <div className="p-2 rounded bg-warning/5 border border-warning/20">
            <div className="text-[10.5px] uppercase text-warning font-semibold">SLA</div>
            38 cases predicted to breach SLA in next 2 hrs. Pre-assign 4 agents from Tier 2 pool.
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ServiceHome;
