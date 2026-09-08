import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, Filter, Download, ChevronDown, Phone, Mail } from "lucide-react";
import { contacts } from "@/data/extraData";

const Contacts = () => {
  const [q, setQ] = useState("");
  const rows = contacts.filter((c) =>
    c.name.toLowerCase().includes(q.toLowerCase()) || c.account.toLowerCase().includes(q.toLowerCase()) || c.title.toLowerCase().includes(q.toLowerCase())
  );
  return (
    <div className="p-3">
      <div className="slds-card">
        <div className="px-3 py-2 border-b border-border flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1 text-[12.5px]">
            <button className="flex items-center gap-1 font-semibold hover:text-primary">All Foodservice Contacts <ChevronDown className="w-3 h-3" /></button>
            <span className="text-muted-foreground">• {rows.length} items</span>
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <button className="slds-button"><Filter className="w-3 h-3" /> Filters</button>
            <button className="slds-button"><Download className="w-3 h-3" /> Export</button>
            <button className="slds-button-brand">New Contact</button>
          </div>
        </div>
        <div className="px-3 py-2 border-b border-border bg-secondary/30">
          <div className="relative max-w-xs">
            <Search className="w-3.5 h-3.5 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search contacts..." className="w-full h-7 pl-7 pr-2 text-[12px] border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary bg-card" />
          </div>
        </div>
        <table className="slds-table">
          <thead><tr><th>Name</th><th>Title</th><th>Account</th><th>Email</th><th>Phone</th><th>Last Activity</th></tr></thead>
          <tbody>
            {rows.map((c) => (
              <tr key={c.id}>
                <td><span className="text-primary font-medium hover:underline">{c.name}</span><div className="text-[10.5px] text-muted-foreground font-mono">{c.id}</div></td>
                <td>{c.title}</td>
                <td><Link to="/accounts" className="text-primary hover:underline">{c.account}</Link></td>
                <td><a href={`mailto:${c.email}`} className="text-primary hover:underline inline-flex items-center gap-1"><Mail className="w-3 h-3" />{c.email}</a></td>
                <td><span className="inline-flex items-center gap-1"><Phone className="w-3 h-3 text-muted-foreground" />{c.phone}</span></td>
                <td>{c.lastActivity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Contacts;
