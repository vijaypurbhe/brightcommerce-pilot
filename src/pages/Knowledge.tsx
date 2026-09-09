import { useState } from "react";
import { BookOpen, Search, Star, Plus } from "lucide-react";
import { Card } from "@/components/lightning/Primitives";
import { knowledgeArticles } from "@/data/extraData";

const categories = ["All", "Technical Support", "Field Service", "Order & Delivery", "Warranty / RMA", "Safety & Compliance", "Software & Licensing", "Account Management"] as const;

const Knowledge = () => {
  const [cat, setCat] = useState<typeof categories[number]>("All");
  const [q, setQ] = useState("");
  const rows = knowledgeArticles
    .filter((a) => cat === "All" || a.category === cat)
    .filter((a) => a.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="p-3 flex gap-3">
      <aside className="w-60 shrink-0 space-y-3">
        <Card title="Categories">
          <ul className="space-y-1 text-[12.5px]">
            {categories.map((c) => (
              <li key={c}>
                <button onClick={() => setCat(c)} className={`w-full text-left px-2 py-1 rounded ${cat === c ? "bg-primary/10 text-primary font-semibold" : "hover:bg-secondary"}`}>{c}</button>
              </li>
            ))}
          </ul>
        </Card>
        <Card title="Top Authors">
          <ul className="space-y-1 text-[12.5px] text-muted-foreground">
            <li>J. Rivera — 24 articles</li>
            <li>T. Nguyen — 18 articles</li>
            <li>A. Brooks — 14 articles</li>
          </ul>
        </Card>
      </aside>
      <div className="flex-1 slds-card">
        <div className="px-3 py-2 border-b border-border flex items-center gap-3">
          <div className="text-[12.5px] font-semibold flex items-center gap-1.5"><BookOpen className="w-4 h-4 text-primary" />Knowledge Articles <span className="text-muted-foreground font-normal">• {rows.length}</span></div>
          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search Knowledge..." className="h-7 pl-7 pr-2 w-56 text-[12px] border border-border rounded focus:outline-none focus:ring-1 focus:ring-primary" />
            </div>
            <button className="slds-button-brand"><Plus className="w-3 h-3" /> New Article</button>
          </div>
        </div>
        <ul className="divide-y divide-border">
          {rows.map((a) => (
            <li key={a.id} className="p-3 hover:bg-secondary/30 cursor-pointer">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-semibold text-primary hover:underline">{a.title}</span>
                    <span className="slds-pill text-[10px]">{a.category}</span>
                  </div>
                  <p className="text-[12px] text-muted-foreground mt-1 leading-relaxed">{a.excerpt}</p>
                  <div className="text-[11px] text-muted-foreground mt-1 flex items-center gap-3">
                    <span className="font-mono">{a.id}</span>
                    <span>{a.views.toLocaleString()} views</span>
                    <span className="inline-flex items-center gap-0.5"><Star className="w-3 h-3 text-warning" />{a.rating}</span>
                    <span>Updated {a.lastUpdated}</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Knowledge;
