import { Link } from "react-router-dom";
import { useState } from "react";
import { Calendar, CheckSquare, Briefcase, TrendingUp, Sparkles, ChevronRight } from "lucide-react";
import { Card } from "@/components/lightning/Primitives";
import AgentsPanel from "@/components/lightning/AgentsPanel";
import { topAccounts, opportunities, revenueChartData } from "@/data/mockData";

const tasks = [
  { id: 1, subject: "Follow up on Mercy Health proposal", due: "Today", related: "Mercy Health Network", priority: "High" },
  { id: 2, subject: "Prep QBR deck — Cheesecake Factory", due: "Today", related: "Cheesecake Factory — NE", priority: "High" },
  { id: 3, subject: "Send menu-cost analysis to Cosmo Casinos", due: "Tomorrow", related: "Cosmo Casinos — LV", priority: "Normal" },
  { id: 4, subject: "Review at-risk save play — Bluebird Diner", due: "Tomorrow", related: "Bluebird Diner Group", priority: "High" },
  { id: 5, subject: "Schedule kickoff — Brookline Public Schools", due: "Dec 12", related: "Brookline Public Schools", priority: "Normal" },
];

const events = [
  { id: 1, time: "10:30 AM", title: "Discovery call — Hyatt Regency TX", attendees: "D. Chen, K. Pham", duration: "30m" },
  { id: 2, time: "1:00 PM",  title: "QBR — Cheesecake Factory NE", attendees: "M. Alvarez, J. Lee, R. Costa", duration: "60m" },
  { id: 3, time: "3:30 PM",  title: "Pricing review — Cosmo Casinos", attendees: "M. Alvarez", duration: "30m" },
  { id: 4, time: "4:30 PM",  title: "Sales Coach standup", attendees: "Team Northeast", duration: "15m" },
];

const recent = [
  { id: "ACC-1001", name: "Cheesecake Factory — Northeast", type: "Account" },
  { id: "OPP-7821", name: "Cheesecake Factory Q1 Expansion", type: "Opportunity" },
  { id: "ACC-1003", name: "Cosmo Casinos — Las Vegas", type: "Account" },
  { id: "OPP-7855", name: "Mercy Health FY26 Renewal", type: "Opportunity" },
];

const Index = () => {
  const [period, setPeriod] = useState<"Q" | "Y">("Q");
  const maxRev = Math.max(...revenueChartData.map((r) => r.revenue));
  const maxQuota = Math.max(...revenueChartData.map((r) => r.target));
  const yMax = Math.max(maxRev, maxQuota);

  return (
    <div className="p-3 grid grid-cols-12 gap-3">
      {/* Performance chart */}
      <Card
        title="Quarterly Performance"
        className="col-span-12 xl:col-span-8"
        action={
          <div className="flex items-center gap-1">
            <button onClick={() => setPeriod("Q")} className={`text-[11.5px] px-2 py-0.5 rounded ${period === "Q" ? "bg-secondary text-foreground" : "text-muted-foreground"}`}>Quarter</button>
            <button onClick={() => setPeriod("Y")} className={`text-[11.5px] px-2 py-0.5 rounded ${period === "Y" ? "bg-secondary text-foreground" : "text-muted-foreground"}`}>Year</button>
          </div>
        }
      >
        <div className="flex items-baseline gap-6 mb-3">
          <div>
            <div className="text-[11px] text-muted-foreground">Closed</div>
            <div className="text-[20px] font-bold text-foreground">$184M</div>
          </div>
          <div>
            <div className="text-[11px] text-muted-foreground">Goal</div>
            <div className="text-[20px] font-semibold text-muted-foreground">$162M</div>
          </div>
          <div>
            <div className="text-[11px] text-muted-foreground">Attainment</div>
            <div className="text-[20px] font-semibold text-success">113%</div>
          </div>
        </div>
        <div className="relative h-44">
          <svg viewBox="0 0 600 160" preserveAspectRatio="none" className="w-full h-full">
            <line x1="0" y1="40" x2="600" y2="40" stroke="hsl(var(--border))" strokeDasharray="3 3" />
            <line x1="0" y1="80" x2="600" y2="80" stroke="hsl(var(--border))" strokeDasharray="3 3" />
            <line x1="0" y1="120" x2="600" y2="120" stroke="hsl(var(--border))" strokeDasharray="3 3" />
            {/* Quota line */}
            <polyline
              points={revenueChartData.map((d, i) => `${(i / (revenueChartData.length - 1)) * 600},${160 - (d.target / yMax) * 140}`).join(" ")}
              fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" strokeDasharray="4 3"
            />
            {/* Closed line */}
            <polyline
              points={revenueChartData.map((d, i) => `${(i / (revenueChartData.length - 1)) * 600},${160 - (d.revenue / yMax) * 140}`).join(" ")}
              fill="none" stroke="hsl(var(--primary))" strokeWidth="2.5"
            />
            {revenueChartData.map((d, i) => (
              <circle key={i} cx={(i / (revenueChartData.length - 1)) * 600} cy={160 - (d.revenue / yMax) * 140} r="3" fill="hsl(var(--primary))" />
            ))}
          </svg>
        </div>
        <div className="flex justify-between mt-1 text-[10.5px] text-muted-foreground">
          {revenueChartData.map((d) => <span key={d.month}>{d.month}</span>)}
        </div>
        <div className="flex items-center gap-4 mt-3 text-[11px]">
          <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-primary" /> Closed</span>
          <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-muted-foreground" style={{ borderTop: "1px dashed" }} /> Quota</span>
        </div>
      </Card>

      {/* Assistant */}
      <Card
        title="Assistant"
        className="col-span-12 xl:col-span-4"
        action={<Sparkles className="w-4 h-4 text-primary" />}
      >
        <div className="space-y-2">
          {[
            { title: "OPP-7855 needs your attention", body: "Mercy Health FY26 renewal — GPO compliance question from procurement. Respond before EOD.", action: "Open opportunity", to: "/opportunities/OPP-7855" },
            { title: "Pipeline coverage at 3.2x", body: "Stronger than 2.4x last quarter. 38 deals worth $94M scored as high win-likelihood.", action: "View pipeline", to: "/opportunities" },
            { title: "Bluebird Diner is at risk", body: "Inactive 11 days and 4 open cases. Save-play queued by Sales Coach.", action: "Review account", to: "/accounts/ACC-1005" },
          ].map((t) => (
            <Link key={t.title} to={t.to} className="block border border-border rounded p-2.5 hover:bg-secondary/40">
              <div className="text-[12.5px] font-semibold text-foreground">{t.title}</div>
              <div className="text-[11.5px] text-muted-foreground leading-relaxed mt-0.5">{t.body}</div>
              <div className="text-[11.5px] text-primary mt-1.5 flex items-center gap-1">{t.action} <ChevronRight className="w-3 h-3" /></div>
            </Link>
          ))}
        </div>
      </Card>

      {/* Today's Events */}
      <Card
        title="Today's Events"
        className="col-span-12 lg:col-span-6"
        action={<Calendar className="w-4 h-4 text-muted-foreground" />}
      >
        <ul className="divide-y divide-border -my-1">
          {events.map((e) => (
            <li key={e.id} className="py-2 flex items-start gap-3">
              <div className="text-[11.5px] font-mono text-muted-foreground w-16 shrink-0 pt-0.5">{e.time}</div>
              <div className="flex-1 min-w-0">
                <div className="text-[12.5px] font-medium text-foreground truncate">{e.title}</div>
                <div className="text-[11px] text-muted-foreground">{e.attendees} • {e.duration}</div>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* Today's Tasks */}
      <Card
        title="Today's Tasks"
        className="col-span-12 lg:col-span-6"
        action={<CheckSquare className="w-4 h-4 text-muted-foreground" />}
      >
        <ul className="divide-y divide-border -my-1">
          {tasks.map((t) => (
            <li key={t.id} className="py-2 flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <div className="flex-1 min-w-0">
                <div className="text-[12.5px] font-medium text-foreground">{t.subject}</div>
                <div className="text-[11px] text-muted-foreground">{t.related} • Due {t.due}</div>
              </div>
              {t.priority === "High" && <span className="slds-pill text-destructive border-destructive/30 bg-destructive/10">High</span>}
            </li>
          ))}
        </ul>
      </Card>

      {/* Recent Records */}
      <Card title="Recent Records" className="col-span-12 lg:col-span-6">
        <ul className="divide-y divide-border -my-1">
          {recent.map((r) => (
            <li key={r.id} className="py-2 flex items-center gap-3">
              <span className="w-7 h-7 rounded flex items-center justify-center bg-primary/10 text-primary">
                {r.type === "Account" ? <Briefcase className="w-3.5 h-3.5" /> : <TrendingUp className="w-3.5 h-3.5" />}
              </span>
              <div className="flex-1 min-w-0">
                <Link to={r.type === "Account" ? `/accounts/${r.id}` : `/opportunities/${r.id}`} className="text-[12.5px] font-medium text-primary hover:underline truncate block">
                  {r.name}
                </Link>
                <div className="text-[11px] text-muted-foreground">{r.type} • {r.id}</div>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      {/* Top accounts */}
      <Card title="Top Accounts" className="col-span-12 lg:col-span-6"
        action={<Link to="/accounts" className="text-[11.5px] text-primary hover:underline">View All</Link>}>
        <table className="slds-table">
          <thead><tr><th>Account</th><th className="text-right">YTD Spend</th><th className="text-right">Health</th></tr></thead>
          <tbody>
            {topAccounts.slice(0, 6).map((a) => (
              <tr key={a.id} onClick={() => window.location.assign(`/accounts/${a.id}`)}>
                <td>
                  <span className="text-primary font-medium">{a.name}</span>
                  <div className="text-[10.5px] text-muted-foreground">{a.segment}</div>
                </td>
                <td className="text-right font-mono">${(a.ytdSpend / 1_000_000).toFixed(2)}M</td>
                <td className="text-right">
                  <span className={`slds-pill ${a.healthScore >= 80 ? "text-success bg-success/10 border-success/30" : a.healthScore >= 65 ? "text-warning bg-warning/10 border-warning/30" : "text-destructive bg-destructive/10 border-destructive/30"}`}>
                    {a.healthScore}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {/* Sales Agentforce */}
      <div className="col-span-12 lg:col-span-6">
        <AgentsPanel category="Sales" title="Sales Agentforce" />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <AgentsPanel category="Sysco Custom" title="Sysco Industry Agents" />
      </div>
    </div>
  );
};

export default Index;
