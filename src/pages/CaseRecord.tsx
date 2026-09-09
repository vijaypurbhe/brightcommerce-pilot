import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { Sparkles, Phone, Mail, BookOpen, FileText, Clock } from "lucide-react";
import { Highlights, RecordTabs, Card, InfoGrid } from "@/components/lightning/Primitives";
import { cases } from "@/data/mockData";

const CaseRecord = ({ overrideId }: { overrideId?: string }) => {
  const { id: paramId } = useParams();
  const id = overrideId ?? paramId;
  const c = cases.find((x) => x.id === id);
  const [tab, setTab] = useState("Feed");

  if (!c) return <Navigate to="/cases" replace />;

  const slaPct = Math.min(100, (c.ageHours / c.slaHours) * 100);

  return (
    <div className="p-3">
      <Highlights
        icon="🛎"
        recordType="Case"
        name={c.subject}
        actions={<>
          <button className="slds-button">Change Owner</button>
          <button className="slds-button">Escalate</button>
          <button className="slds-button-brand">Close Case</button>
        </>}
        fields={[
          { label: "Case Number", value: c.id },
          { label: "Account", value: c.account },
          { label: "Priority", value: c.priority },
          { label: "Status", value: c.status },
          { label: "Channel", value: c.channel },
          { label: "Owner", value: c.owner },
          { label: "Age", value: `${c.ageHours}h` },
          { label: "SLA", value: <span className={slaPct > 75 ? "text-destructive" : slaPct > 50 ? "text-warning" : "text-foreground"}>{slaPct.toFixed(0)}% elapsed</span> },
        ]}
      />

      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 xl:col-span-8">
          <div className="slds-card">
            <RecordTabs tabs={["Feed", "Details", "Related"]} active={tab} onChange={setTab} />
            {tab === "Feed" && (
              <div className="p-3 space-y-3">
                <div className="flex gap-1.5 border-b border-border pb-2 mb-2">
                  {["Post", "Email", "Log a Call", "Question"].map((t, i) => (
                    <button key={t} className={`text-[12px] px-2.5 py-1 rounded ${i === 0 ? "bg-secondary text-foreground font-semibold" : "text-muted-foreground hover:bg-secondary/60"}`}>{t}</button>
                  ))}
                </div>
                <textarea placeholder="Share an update..." className="w-full h-20 p-2 text-[12.5px] border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary resize-none" />
                <div className="flex justify-end"><button className="slds-button-brand">Share</button></div>

                <div className="border-t border-border pt-3 space-y-3">
                  {[
                    { who: c.owner, what: c.aiSummary, when: "Just now", channel: c.channel },
                    { who: "Customer", what: `Reached out via ${c.channel.toLowerCase()}. Subject: ${c.subject}`, when: `${c.ageHours}h ago`, channel: c.channel },
                  ].map((p, i) => (
                    <div key={i} className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[11px] font-semibold shrink-0">{p.who[0]}</div>
                      <div className="flex-1">
                        <div className="text-[12.5px]"><strong>{p.who}</strong> <span className="text-muted-foreground">posted • {p.when}</span></div>
                        <div className="mt-1 p-2 bg-secondary/40 rounded text-[12.5px] text-foreground">{p.what}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab === "Details" && (
              <div className="p-3">
                <InfoGrid rows={[
                  { label: "Case Number", value: c.id },
                  { label: "Subject", value: c.subject },
                  { label: "Account", value: c.account },
                  { label: "Contact", value: "Maria Costa" },
                  { label: "Type", value: c.category },
                  { label: "Reason", value: c.category },
                  { label: "Priority", value: c.priority },
                  { label: "Status", value: c.status },
                  { label: "Origin", value: c.channel },
                  { label: "Owner", value: c.owner },
                  { label: "Date/Time Opened", value: `${c.ageHours}h ago` },
                  { label: "SLA Target", value: `${c.slaHours}h` },
                ]} />
              </div>
            )}
            {tab === "Related" && (
              <div className="p-3 space-y-3 text-[12.5px]">
                <Card title="Case Comments (2)">
                  <ul className="space-y-2">
                    <li className="border-l-2 border-border pl-2"><strong>J. Rivera:</strong> Confirmed lot # with QA. Awaiting supplier response.</li>
                    <li className="border-l-2 border-border pl-2"><strong>System:</strong> Escalated to Tier 2 per SLA policy.</li>
                  </ul>
                </Card>
                <Card title="Files (3)">
                  <ul className="space-y-1">
                    <li>📎 delivery-photo-1.jpg</li>
                    <li>📎 delivery-photo-2.jpg</li>
                    <li>📎 PO-88421.pdf</li>
                  </ul>
                </Card>
              </div>
            )}
          </div>
        </div>

        <div className="col-span-12 xl:col-span-4 space-y-3">
          <Card title="Einstein Reply Recommendations" action={<Sparkles className="w-4 h-4 text-primary" />}>
            <div className="space-y-2 text-[12.5px]">
              {[
                "Confirm truck #847 revised ETA and enroll customer in proactive SMS updates.",
                "Offer an advance exchange on the failed unit and dispatch a certified technician tomorrow AM.",
                "Loop in territory CSM if this is a repeat issue in the last 30 days.",
              ].map((r, i) => (
                <div key={i} className="p-2 rounded border border-border hover:border-primary/40 cursor-pointer">
                  <div className="text-[11px] text-muted-foreground mb-0.5">Suggested reply #{i + 1}</div>
                  {r}
                </div>
              ))}
            </div>
          </Card>
          <Card title="Agent Assist" action={<Sparkles className="w-4 h-4 text-primary" />}>
            <div className="text-[12.5px] space-y-2">
              <div><strong>Case summary:</strong> {c.aiSummary}</div>
              <div><strong>Sentiment:</strong> <span className="text-warning">Frustrated</span></div>
              <div><strong>Similar resolved cases:</strong> 12 in last 30 days · avg resolve 38m</div>
            </div>
          </Card>
          <Card title="Knowledge" action={<BookOpen className="w-4 h-4 text-muted-foreground" />}>
            <ul className="space-y-1.5 text-[12.5px] text-primary">
              <li className="hover:underline cursor-pointer">KB-0142: Late delivery proactive workflow</li>
              <li className="hover:underline cursor-pointer">KB-0218: Credit policy thresholds &amp; approvals</li>
              <li className="hover:underline cursor-pointer">KB-0307: Service Cloud Voice escalation script</li>
            </ul>
          </Card>
          <Card title="SLA">
            <div className="flex items-center gap-2 text-[12.5px]">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <div className="flex-1">
                <div className="flex justify-between text-[11px]"><span>{c.ageHours}h elapsed</span><span>{c.slaHours}h target</span></div>
                <div className="h-1.5 bg-secondary rounded mt-1 overflow-hidden">
                  <div className={`h-full ${slaPct > 75 ? "bg-destructive" : slaPct > 50 ? "bg-warning" : "bg-success"}`} style={{ width: `${slaPct}%` }} />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CaseRecord;
