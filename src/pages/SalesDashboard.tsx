import { Card } from "@/components/lightning/Primitives";
import { kpiData, pipelineByStage, opportunities, topAccounts, revenueChartData } from "@/data/mockData";
import AgentsPanel from "@/components/lightning/AgentsPanel";
import { Link } from "react-router-dom";

const SalesDashboard = () => {
  const totalPipeline = pipelineByStage.reduce((s, g) => s + g.value, 0);
  const maxRev = Math.max(...revenueChartData.map((r) => r.revenue));
  const salesKpis = ["Build Pipeline", "Partner NRR", "AI Deflection", "At-Risk ARR"];

  // Top reps (synthetic)
  const reps = [
    { name: "M. Alvarez", quota: 12_000_000, closed: 14_120_000, deals: 18 },
    { name: "D. Chen", quota: 10_000_000, closed: 9_840_000, deals: 12 },
    { name: "S. Okafor", quota: 11_000_000, closed: 12_240_000, deals: 14 },
    { name: "L. Kim", quota: 8_000_000, closed: 8_960_000, deals: 11 },
    { name: "R. Patel", quota: 6_500_000, closed: 5_120_000, deals: 9 },
  ];

  return (
    <div className="p-3 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[11px] text-muted-foreground">Dashboard</div>
          <h1 className="text-[18px] font-bold">Sales Operations — Forged Fiber 37</h1>
        </div>
        <div className="flex gap-1.5">
          <button className="slds-button">Refresh</button>
          <button className="slds-button">Subscribe</button>
          <button className="slds-button-brand">Edit</button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-3">
        {salesKpis.map((label) => {
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

        <Card title="Pipeline by Stage" className="col-span-12 lg:col-span-8">
          <div className="space-y-1.5">
            {pipelineByStage.filter((s) => s.stage !== "Closed Lost").map((g) => {
              const pct = (g.value / Math.max(totalPipeline, 1)) * 100;
              return (
                <div key={g.stage}>
                  <div className="flex justify-between text-[11.5px] mb-0.5"><span>{g.stage} ({g.count})</span><span className="font-mono">${(g.value / 1_000_000).toFixed(1)}M</span></div>
                  <div className="h-5 bg-secondary rounded">
                    <div className="h-full bg-primary rounded flex items-center px-2 text-[10px] text-primary-foreground" style={{ width: `${pct}%` }}>
                      {pct > 12 && `${pct.toFixed(0)}%`}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Quota Attainment" className="col-span-12 lg:col-span-4">
          <div className="text-center">
            <div className="relative inline-flex">
              <svg width="160" height="100" viewBox="0 0 160 100">
                <path d="M10,90 A70,70 0 0 1 150,90" fill="none" stroke="hsl(var(--secondary))" strokeWidth="14" strokeLinecap="round" />
                <path d="M10,90 A70,70 0 0 1 150,90" fill="none" stroke="hsl(var(--primary))" strokeWidth="14" strokeLinecap="round" strokeDasharray="220" strokeDashoffset={220 - (220 * 1.13 / 1.5)} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
                <div className="text-[22px] font-bold text-foreground leading-none">113%</div>
                <div className="text-[10.5px] text-muted-foreground">of $162M goal</div>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Closed Revenue vs Target (6 mo)" className="col-span-12 lg:col-span-8">
          <div className="flex items-end gap-3 h-40 px-2">
            {revenueChartData.map((d) => {
              const h = (d.revenue / maxRev) * 100;
              const tH = (d.target / maxRev) * 100;
              return (
                <div key={d.month} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex items-end gap-1 h-32">
                    <div className="flex-1 bg-primary rounded-t" style={{ height: `${h}%` }} />
                    <div className="flex-1 bg-accent/70 rounded-t" style={{ height: `${tH}%` }} />
                  </div>
                  <div className="text-[10.5px] text-muted-foreground">{d.month}</div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mt-2 text-[11px]">
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-primary rounded-sm" /> Closed</span>
            <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 bg-accent/70 rounded-sm" /> Target</span>
          </div>
        </Card>

        <Card title="Top Reps — QTD" className="col-span-12 lg:col-span-4">
          <table className="slds-table">
            <thead><tr><th>Rep</th><th className="text-right">Closed</th><th className="text-right">Attain</th></tr></thead>
            <tbody>
              {reps.map((r) => {
                const pct = (r.closed / r.quota) * 100;
                return (
                  <tr key={r.name}>
                    <td>{r.name}<div className="text-[10.5px] text-muted-foreground">{r.deals} deals</div></td>
                    <td className="text-right font-mono">${(r.closed / 1_000_000).toFixed(2)}M</td>
                    <td className="text-right"><span className={`font-mono ${pct >= 100 ? "text-success" : pct >= 80 ? "text-warning" : "text-destructive"}`}>{pct.toFixed(0)}%</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>

        <Card title="Highest Win-Likelihood Opportunities" className="col-span-12 lg:col-span-8" action={<Link to="/opportunities" className="text-[11.5px] text-primary hover:underline">All Opportunities</Link>}>
          <table className="slds-table">
            <thead><tr><th>Account</th><th>Stage</th><th className="text-right">Amount</th><th>Close</th><th className="text-right">Einstein</th></tr></thead>
            <tbody>
              {opportunities.filter((o) => o.stage !== "Closed Lost" && o.stage !== "Closed Won").sort((a,b) => b.einsteinScore - a.einsteinScore).slice(0, 6).map((o) => (
                <tr key={o.id} onClick={() => window.location.assign(`/opportunities/${o.id}`)}>
                  <td><span className="text-primary">{o.account}</span></td>
                  <td>{o.stage}</td>
                  <td className="text-right font-mono">${(o.amount/1000).toFixed(0)}K</td>
                  <td>{o.closeDate}</td>
                  <td className="text-right"><span className={`font-mono ${o.einsteinScore>=80?"text-success":o.einsteinScore>=60?"text-warning":"text-muted-foreground"}`}>{o.einsteinScore}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <div className="col-span-12 lg:col-span-4">
          <AgentsPanel category="Forged Fiber" title="Forged Fiber Agentforce" />
        </div>

        <Card title="Top Accounts (YTD)" className="col-span-12 lg:col-span-8">
          <table className="slds-table">
            <thead><tr><th>Account</th><th>Type</th><th>Market</th><th className="text-right">YTD Revenue</th><th className="text-center">Health</th></tr></thead>
            <tbody>
              {topAccounts.slice(0, 7).map((a) => (
                <tr key={a.id} onClick={() => window.location.assign(`/accounts/${a.id}`)}>
                  <td><span className="text-primary">{a.name}</span></td>
                  <td>{a.type}</td>
                  <td>{a.market}</td>
                  <td className="text-right font-mono">${(a.ytdRevenue/1_000_000).toFixed(2)}M</td>
                  <td className="text-center">
                    <span className={`slds-pill ${a.healthScore>=80?"text-success bg-success/10 border-success/30":a.healthScore>=65?"text-warning bg-warning/10 border-warning/30":"text-destructive bg-destructive/10 border-destructive/30"}`}>{a.healthScore}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default SalesDashboard;
