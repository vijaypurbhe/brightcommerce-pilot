import { useParams, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { Sparkles, Briefcase, Phone, Mail, Edit, ChevronRight } from "lucide-react";
import { Highlights, RecordTabs, Card, InfoGrid } from "@/components/lightning/Primitives";
import { topAccounts, opportunities, cases, customerProfile } from "@/data/mockData";

const AccountRecord = () => {
  const { id } = useParams();
  const account = topAccounts.find((a) => a.id === id);
  const [tab, setTab] = useState("Activity");

  if (!account) return <Navigate to="/accounts" replace />;

  const acctOpps = opportunities.filter((o) => o.account.startsWith(account.name.split(" — ")[0]));
  const acctCases = cases.filter((c) => c.account === account.name);

  return (
    <div className="p-3">
      <Highlights
        icon="🏢"
        recordType="Account"
        name={account.name}
        actions={
          <>
            <button className="slds-button"><Edit className="w-3 h-3" /> Edit</button>
            <button className="slds-button">New Contact</button>
            <button className="slds-button-brand">New Opportunity</button>
          </>
        }
        fields={[
          { label: "Type", value: account.segment },
          { label: "Region", value: account.region },
          { label: "Account Owner", value: account.csm },
          { label: "YTD Spend", value: `$${(account.ytdSpend / 1_000_000).toFixed(2)}M` },
          { label: "Weekly Spend", value: `$${account.weeklySpend.toLocaleString()}` },
          { label: "Health Score", value: <span className={account.healthScore >= 80 ? "text-success" : account.healthScore >= 65 ? "text-warning" : "text-destructive"}>{account.healthScore} / 100</span> },
          { label: "Churn Risk", value: <span className="capitalize">{account.churnRisk}</span> },
          { label: "Last Order", value: `${account.lastOrderDays}d ago` },
        ]}
      />

      <div className="grid grid-cols-12 gap-3">
        {/* Main column */}
        <div className="col-span-12 xl:col-span-8">
          <div className="slds-card">
            <RecordTabs tabs={["Activity", "Details", "Related", "News"]} active={tab} onChange={setTab} />
            {tab === "Activity" && (
              <div className="p-3 space-y-3">
                <div className="text-[11px] uppercase text-muted-foreground font-semibold">Upcoming & Overdue</div>
                <div className="border-l-2 border-primary pl-3 space-y-3">
                  {customerProfile.recentEvents.map((ev, i) => (
                    <div key={i}>
                      <div className="text-[12px] font-medium text-foreground">{ev.type}: {ev.detail}</div>
                      <div className="text-[11px] text-muted-foreground">{ev.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab === "Details" && (
              <div className="p-3">
                <InfoGrid rows={[
                  { label: "Account Name", value: account.name },
                  { label: "Parent Account", value: "—" },
                  { label: "Account Number", value: account.id },
                  { label: "Type", value: account.segment },
                  { label: "Industry", value: "Telecommunications — Fiber Wholesale" },
                  { label: "Phone", value: "+1 (212) 555-0140" },
                  { label: "Website", value: "www.example.com" },
                  { label: "Billing Address", value: `${account.region}, USA` },
                  { label: "Annual Revenue", value: `$${(account.ytdSpend * 1.4 / 1_000_000).toFixed(1)}M` },
                  { label: "Employees", value: "240" },
                  { label: "Rating", value: account.healthScore >= 80 ? "Hot" : account.healthScore >= 65 ? "Warm" : "Cold" },
                  { label: "Owner", value: account.csm },
                ]} />
              </div>
            )}
            {tab === "Related" && (
              <div className="p-3 space-y-3">
                <Card title={`Opportunities (${acctOpps.length})`} action={<button className="slds-button">New</button>}>
                  <table className="slds-table">
                    <thead><tr><th>Name</th><th>Stage</th><th className="text-right">Amount</th><th>Close</th></tr></thead>
                    <tbody>
                      {acctOpps.map((o) => (
                        <tr key={o.id} onClick={() => window.location.assign(`/opportunities/${o.id}`)}>
                          <td><Link to={`/opportunities/${o.id}`} className="text-primary hover:underline">{o.id}</Link></td>
                          <td>{o.stage}</td>
                          <td className="text-right font-mono">${(o.amount / 1000).toFixed(0)}K</td>
                          <td>{o.closeDate}</td>
                        </tr>
                      ))}
                      {acctOpps.length === 0 && <tr><td colSpan={4} className="text-center text-muted-foreground py-3">No opportunities.</td></tr>}
                    </tbody>
                  </table>
                </Card>
                <Card title={`Cases (${acctCases.length})`} action={<button className="slds-button">New</button>}>
                  <table className="slds-table">
                    <thead><tr><th>Number</th><th>Subject</th><th>Priority</th><th>Status</th></tr></thead>
                    <tbody>
                      {acctCases.map((c) => (
                        <tr key={c.id} onClick={() => window.location.assign(`/cases/${c.id}`)}>
                          <td><Link to={`/cases/${c.id}`} className="text-primary hover:underline">{c.id}</Link></td>
                          <td>{c.subject}</td>
                          <td>{c.priority}</td>
                          <td>{c.status}</td>
                        </tr>
                      ))}
                      {acctCases.length === 0 && <tr><td colSpan={4} className="text-center text-muted-foreground py-3">No open cases.</td></tr>}
                    </tbody>
                  </table>
                </Card>
                <Card title="Contacts (3)">
                  <table className="slds-table">
                    <thead><tr><th>Name</th><th>Title</th><th>Email</th><th>Phone</th></tr></thead>
                    <tbody>
                      <tr><td><span className="text-primary">Maria Costa</span></td><td>Director of Network Engineering</td><td>maria.costa@austintexas.gov</td><td>(512) 555-0141</td></tr>
                      <tr><td><span className="text-primary">James Wu</span></td><td>Chief Technology Officer</td><td>j.wu@summitdatacenters.com</td><td>(602) 555-0142</td></tr>
                      <tr><td><span className="text-primary">Linda Park</span></td><td>VP of Development</td><td>l.park@atlasmultifamily.com</td><td>(303) 555-0143</td></tr>
                    </tbody>
                  </table>
                </Card>
              </div>
            )}
            {tab === "News" && (
              <div className="p-3 space-y-2 text-[12.5px] text-muted-foreground">
                <div className="border-l-2 border-primary pl-3"><span className="text-foreground font-medium">Telecom Industry Brief:</span> {account.name.split(" — ")[0]} expands fiber footprint by 12% in Q1.</div>
                <div className="border-l-2 border-primary pl-3"><span className="text-foreground font-medium">Network World:</span> Open-access wholesale transport demand accelerates across Midwest markets.</div>
              </div>
            )}
          </div>
        </div>

        {/* Right rail */}
        <div className="col-span-12 xl:col-span-4 space-y-3">
          <Card title="Einstein Account Insights" action={<Sparkles className="w-4 h-4 text-primary" />}>
            <div className="text-[12.5px] leading-relaxed text-foreground">{customerProfile.aiSummary}</div>
            <div className="mt-3 p-2 rounded bg-primary/5 border border-primary/20 text-[12px]">
              <div className="text-[10.5px] uppercase text-primary font-semibold mb-0.5">Next Best Action</div>
              {customerProfile.nextBestAction}
            </div>
          </Card>
          <Card title="Quick Actions">
            <div className="grid grid-cols-2 gap-2">
              <button className="slds-button"><Phone className="w-3 h-3" /> Call</button>
              <button className="slds-button"><Mail className="w-3 h-3" /> Email</button>
              <button className="slds-button">Log Visit</button>
              <button className="slds-button">New Task</button>
            </div>
          </Card>
          <Card title="Digital Products">
            <ul className="space-y-1 text-[12.5px]">
              {customerProfile.digitalProducts.map((p) => (
                <li key={p} className="flex items-center justify-between"><span>{p}</span><ChevronRight className="w-3 h-3 text-muted-foreground" /></li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AccountRecord;
