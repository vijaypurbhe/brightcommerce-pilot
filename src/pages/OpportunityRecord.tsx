import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { Sparkles, Edit } from "lucide-react";
import { Highlights, Path, RecordTabs, Card, InfoGrid } from "@/components/lightning/Primitives";
import { opportunities } from "@/data/mockData";

const STAGES = ["Qualification", "Site Survey", "Permitting", "Construction", "Live", "Closed Won"];

const OpportunityRecord = () => {
  const { id } = useParams();
  const opp = opportunities.find((o) => o.id === id);
  const [tab, setTab] = useState("Activity");

  if (!opp) return <Navigate to="/opportunities" replace />;

  const stagePath = opp.stage === "Closed Lost" ? STAGES : STAGES;

  return (
    <div className="p-3">
      <Highlights
        icon="💼"
        recordType="Opportunity"
        name={opp.account}
        actions={<>
          <button className="slds-button"><Edit className="w-3 h-3" /> Edit</button>
          <button className="slds-button">Clone</button>
          <button className="slds-button-brand">Mark Stage as Complete</button>
        </>}
        fields={[
          { label: "Account Name", value: opp.account },
          { label: "Amount", value: `$${(opp.amount / 1000).toFixed(0)}K` },
          { label: "Close Date", value: opp.closeDate },
          { label: "Stage", value: opp.stage },
          { label: "Opportunity Owner", value: opp.owner },
          { label: "Segment", value: opp.segment },
          { label: "Einstein Score", value: <span className="text-primary font-semibold">{opp.einsteinScore} / 100</span> },
          { label: "Opportunity Number", value: opp.id },
        ]}
      />

      <Path stages={stagePath} current={opp.stage === "Closed Lost" ? "Live" : opp.stage} />

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 xl:col-span-8">
          <div className="slds-card">
            <RecordTabs tabs={["Activity", "Details", "Related"]} active={tab} onChange={setTab} />
            {tab === "Activity" && (
              <div className="p-3 space-y-3 text-[12.5px]">
                <div className="text-[11px] uppercase text-muted-foreground font-semibold">Recent</div>
                {[
                  { who: "M. Alvarez", what: "Logged a call with plant engineering", when: "Today 9:14 AM" },
                  { who: "Einstein", what: "Surfaced 3 similar won build contracts as references", when: "Yesterday" },
                  { who: "M. Alvarez", what: "Sent construction milestone update v3", when: "Dec 4" },
                ].map((a, i) => (
                  <div key={i} className="border-l-2 border-primary pl-3">
                    <div className="text-foreground"><strong>{a.who}</strong> — {a.what}</div>
                    <div className="text-[11px] text-muted-foreground">{a.when}</div>
                  </div>
                ))}
              </div>
            )}
            {tab === "Details" && (
              <div className="p-3">
                <InfoGrid rows={[
                  { label: "Opportunity Name", value: opp.account },
                  { label: "Account", value: opp.account },
                  { label: "Type", value: "Automation Project / Service Contract" },
                  { label: "Lead Source", value: "Inbound — Customer Support Portal" },
                  { label: "Amount", value: `$${opp.amount.toLocaleString()}` },
                  { label: "Probability", value: `${opp.einsteinScore}%` },
                  { label: "Expected Revenue", value: `$${Math.round(opp.amount * opp.einsteinScore / 100).toLocaleString()}` },
                  { label: "Close Date", value: opp.closeDate },
                  { label: "Stage", value: opp.stage },
                  { label: "Next Step", value: opp.nba },
                  { label: "Forecast Category", value: opp.stage === "Live" ? "Commit" : "Pipeline" },
                  { label: "Owner", value: opp.owner },
                ]} />
              </div>
            )}
            {tab === "Related" && (
              <div className="p-3 space-y-3">
                <Card title="Build Milestones (4)">
                  <table className="slds-table">
                    <thead><tr><th>Milestone</th><th className="text-right">Planned</th><th className="text-right">Actual</th><th className="text-right">Status</th></tr></thead>
                    <tbody>
                      <tr><td>Site Survey</td><td className="text-right">Oct 12</td><td className="text-right">Oct 10</td><td className="text-right text-success">Complete</td></tr>
                      <tr><td>Solution Design</td><td className="text-right">Nov 15</td><td className="text-right">Nov 18</td><td className="text-right text-success">Complete</td></tr>
                      <tr><td>Construction Start</td><td className="text-right">Dec 01</td><td className="text-right">Dec 02</td><td className="text-right text-warning">In Progress</td></tr>
                      <tr><td>Commissioning</td><td className="text-right">Dec 28</td><td className="text-right">—</td><td className="text-right text-muted-foreground">Pending</td></tr>
                    </tbody>
                  </table>
                </Card>
                <Card title="Contact Roles (2)">
                  <table className="slds-table">
                    <thead><tr><th>Contact</th><th>Role</th><th>Primary</th></tr></thead>
                    <tbody>
                      <tr><td>James Wu</td><td>Decision Maker</td><td>✓</td></tr>
                      <tr><td>Maria Costa</td><td>Technical Influencer</td><td></td></tr>
                    </tbody>
                  </table>
                </Card>
              </div>
            )}
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4 space-y-3">
          <Card title="Einstein Opportunity Insights" action={<Sparkles className="w-4 h-4 text-primary" />}>
            <div className="space-y-2 text-[12.5px]">
              <div>
                <div className="text-[10.5px] uppercase text-muted-foreground font-semibold">Win Likelihood</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${opp.einsteinScore}%` }} />
                  </div>
                  <span className="font-mono font-bold text-foreground">{opp.einsteinScore}%</span>
                </div>
              </div>
              <div className="p-2 rounded bg-primary/5 border border-primary/20">
                <div className="text-[10.5px] uppercase text-primary font-semibold mb-0.5">Next Best Action</div>
                <div>{opp.nba}</div>
              </div>
              <div>
                <div className="text-[10.5px] uppercase text-muted-foreground font-semibold mb-1">Key Signals</div>
                <ul className="space-y-1">
                  <li>✓ Decision maker engaged in last 7 days</li>
                  <li>✓ Construction timeline within historical win range</li>
                  <li>⚠ Competitive bid from an alternate automation vendor logged Nov 28</li>
                </ul>
              </div>
            </div>
          </Card>
          <Card title="Sales Coach Suggestions" action={<Sparkles className="w-4 h-4 text-primary" />}>
            <ul className="space-y-2 text-[12.5px]">
              <li className="border-l-2 border-primary pl-2">Share 3 reference wins from comparable municipal builds.</li>
              <li className="border-l-2 border-primary pl-2">Counter incumbent objection with route-diversity pilot.</li>
              <li className="border-l-2 border-primary pl-2">Schedule executive sponsor call before Friday.</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OpportunityRecord;
