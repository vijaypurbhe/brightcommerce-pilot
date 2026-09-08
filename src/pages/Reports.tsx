import { Folder, Star, Search, ChevronDown } from "lucide-react";
import { Card } from "@/components/lightning/Primitives";

const reports = [
  { name: "Pipeline by Stage & Owner", folder: "Sales — Executive", type: "Matrix", lastRun: "Today 9:14 AM", subs: 12 },
  { name: "Win/Loss by Segment (TTM)", folder: "Sales — Executive", type: "Summary", lastRun: "Yesterday", subs: 8 },
  { name: "At-Risk Accounts — Save Plays", folder: "Sales — Coaching", type: "Tabular", lastRun: "Today 7:00 AM", subs: 22 },
  { name: "Cases by Channel & SLA", folder: "Service — Operations", type: "Matrix", lastRun: "Today 10:02 AM", subs: 18 },
  { name: "Agentforce Deflection Trend", folder: "Service — Agentforce", type: "Joined", lastRun: "Today 9:45 AM", subs: 31 },
  { name: "Top 25 Accounts by YTD Spend", folder: "Sales — Field", type: "Summary", lastRun: "Today 6:00 AM", subs: 14 },
  { name: "CSAT by Channel (30d)", folder: "Service — Quality", type: "Matrix", lastRun: "Today 8:00 AM", subs: 9 },
  { name: "Pipeline Aging > 60 days", folder: "Sales — Coaching", type: "Tabular", lastRun: "Yesterday", subs: 6 },
];

const Reports = () => (
  <div className="p-3 flex gap-3">
    <aside className="w-60 shrink-0">
      <Card title="Folders">
        <ul className="space-y-1 text-[12.5px]">
          {["All Reports", "Recent", "Created by Me", "Private Reports", "Public Reports", "Sales — Executive", "Sales — Coaching", "Service — Operations", "Service — Agentforce"].map((f) => (
            <li key={f} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-secondary cursor-pointer">
              <Folder className="w-3.5 h-3.5 text-muted-foreground" /> {f}
            </li>
          ))}
        </ul>
      </Card>
    </aside>
    <div className="flex-1 slds-card">
      <div className="px-3 py-2 border-b border-border flex items-center gap-3">
        <div className="text-[12.5px] font-semibold">All Reports <span className="text-muted-foreground font-normal">• {reports.length} items</span></div>
        <div className="ml-auto flex items-center gap-2">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input placeholder="Search reports..." className="h-7 pl-7 pr-2 w-56 text-[12px] border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary" />
          </div>
          <button className="slds-button-brand">New Report</button>
        </div>
      </div>
      <table className="slds-table">
        <thead><tr><th></th><th>Report Name</th><th>Folder</th><th>Format</th><th>Subscriptions</th><th>Last Run</th></tr></thead>
        <tbody>
          {reports.map((r) => (
            <tr key={r.name}>
              <td><Star className="w-3.5 h-3.5 text-muted-foreground" /></td>
              <td><span className="text-primary hover:underline">{r.name}</span></td>
              <td>{r.folder}</td>
              <td>{r.type}</td>
              <td>{r.subs}</td>
              <td>{r.lastRun}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Reports;
