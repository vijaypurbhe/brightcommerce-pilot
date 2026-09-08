import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown, Search, Filter, Pin, Download, Upload } from "lucide-react";
import { topAccounts } from "@/data/mockData";

const listViews = ["All Active Accounts", "My Accounts", "At-Risk Accounts", "Top 25 by Spend", "Recently Viewed"];

const Accounts = () => {
  const [view, setView] = useState(listViews[0]);
  const [q, setQ] = useState("");
  const [sortBy, setSortBy] = useState<keyof typeof topAccounts[0]>("ytdSpend");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  const rows = topAccounts
    .filter((a) => a.name.toLowerCase().includes(q.toLowerCase()) || a.segment.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => {
      const av = a[sortBy] as number | string; const bv = b[sortBy] as number | string;
      if (av === bv) return 0;
      return (av > bv ? 1 : -1) * (sortDir === "asc" ? 1 : -1);
    });

  const toggleSort = (k: keyof typeof topAccounts[0]) => {
    if (sortBy === k) setSortDir((d) => d === "asc" ? "desc" : "asc");
    else { setSortBy(k); setSortDir("desc"); }
  };

  return (
    <div className="p-3">
      <div className="slds-card">
        <div className="px-3 py-2 border-b border-border flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1 text-[12.5px]">
            <Pin className="w-3.5 h-3.5 text-muted-foreground" />
            <button className="flex items-center gap-1 font-semibold text-foreground hover:text-primary">
              {view} <ChevronDown className="w-3 h-3" />
            </button>
            <span className="text-muted-foreground">• {rows.length} items</span>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <button className="slds-button"><Filter className="w-3 h-3" /> Filters</button>
            <button className="slds-button"><Upload className="w-3 h-3" /> Import</button>
            <button className="slds-button"><Download className="w-3 h-3" /> Export</button>
            <button className="slds-button-brand">New Account</button>
          </div>
        </div>
        <div className="px-3 py-2 border-b border-border flex items-center gap-2 bg-secondary/30">
          <div className="relative max-w-xs flex-1">
            <Search className="w-3.5 h-3.5 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q} onChange={(e) => setQ(e.target.value)}
              placeholder="Search this list..."
              className="w-full h-7 pl-7 pr-2 text-[12px] border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary bg-card"
            />
          </div>
          <div className="flex items-center gap-1">
            {listViews.slice(0, 3).map((v) => (
              <button key={v} onClick={() => setView(v)} className={`text-[11.5px] px-2 py-0.5 rounded ${view === v ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"}`}>{v}</button>
            ))}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="slds-table">
            <thead>
              <tr>
                <th><button onClick={() => toggleSort("name")} className="uppercase">Account Name {sortBy === "name" && (sortDir === "asc" ? "▲" : "▼")}</button></th>
                <th>Segment</th>
                <th>Region</th>
                <th>Account Owner</th>
                <th className="text-right"><button onClick={() => toggleSort("weeklySpend")} className="uppercase">Weekly Spend {sortBy === "weeklySpend" && (sortDir === "asc" ? "▲" : "▼")}</button></th>
                <th className="text-right"><button onClick={() => toggleSort("ytdSpend")} className="uppercase">YTD Spend {sortBy === "ytdSpend" && (sortDir === "asc" ? "▲" : "▼")}</button></th>
                <th className="text-center">Health</th>
                <th className="text-center">Open Cases</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((a) => (
                <tr key={a.id} onClick={() => window.location.assign(`/accounts/${a.id}`)}>
                  <td>
                    <Link to={`/accounts/${a.id}`} className="text-primary font-medium hover:underline">{a.name}</Link>
                    <div className="text-[10.5px] text-muted-foreground font-mono">{a.id}</div>
                  </td>
                  <td>{a.segment}</td>
                  <td>{a.region}</td>
                  <td>{a.csm}</td>
                  <td className="text-right font-mono">${a.weeklySpend.toLocaleString()}</td>
                  <td className="text-right font-mono">${(a.ytdSpend / 1_000_000).toFixed(2)}M</td>
                  <td className="text-center">
                    <span className={`slds-pill ${a.healthScore >= 80 ? "text-success bg-success/10 border-success/30" : a.healthScore >= 65 ? "text-warning bg-warning/10 border-warning/30" : "text-destructive bg-destructive/10 border-destructive/30"}`}>{a.healthScore}</span>
                  </td>
                  <td className="text-center">{a.openCases}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
