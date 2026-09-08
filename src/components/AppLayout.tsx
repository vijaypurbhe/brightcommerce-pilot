import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Search, Bell, Settings, HelpCircle, AppWindow, ChevronDown, Plus,
  Phone, StickyNote, History, Bot, LogOut, FileText, Sun, Moon,
} from "lucide-react";
import { Outlet } from "react-router-dom";
import Login from "@/pages/Login";
import CopilotDock from "@/components/lightning/CopilotDock";
import syscoLogo from "@/assets/sysco-logo.png";
import { getAuthenticatedEmail, setAuthenticatedEmail, clearAuthenticatedEmail, isLoginReportAdmin } from "@/lib/demoAccess";

type AppKey = "sales" | "service";

interface NavTab { label: string; to: string; }

const APP_TABS: Record<AppKey, { name: string; color: string; tabs: NavTab[] }> = {
  sales: {
    name: "Sysco Sales Console",
    color: "bg-[hsl(var(--primary))]",
    tabs: [
      { label: "Dashboard", to: "/dashboards/sales" },
      { label: "Accounts", to: "/accounts" },
      { label: "Contacts", to: "/contacts" },
      { label: "Leads", to: "/leads" },
      { label: "Opportunities", to: "/opportunities" },
      { label: "Reports", to: "/reports" },
    ],
  },
  service: {
    name: "Sysco Service Console",
    color: "bg-[hsl(var(--accent))]",
    tabs: [
      { label: "Dashboard", to: "/dashboards/service" },
      { label: "Cases", to: "/cases" },
      { label: "Accounts", to: "/accounts" },
      { label: "Contacts", to: "/contacts" },
      { label: "Knowledge", to: "/knowledge" },
      { label: "Reports", to: "/reports" },
    ],
  },
};

const APP_STORAGE_KEY = "sysco.activeApp";

function deriveApp(pathname: string): AppKey | null {
  if (
    pathname.startsWith("/cases") ||
    pathname.startsWith("/case/") ||
    pathname.startsWith("/knowledge") ||
    pathname.startsWith("/service") ||
    pathname.startsWith("/dashboards/service")
  ) return "service";
  if (
    pathname.startsWith("/leads") ||
    pathname.startsWith("/opportunit") ||
    pathname.startsWith("/dashboards/sales") ||
    pathname === "/" ||
    pathname.startsWith("/home")
  ) return "sales";
  return null; // shared (accounts, contacts, reports) — keep current
}

const AppShell = () => {
  const [email, setEmail] = useState<string | null>(() => getAuthenticatedEmail());
  const [dark, setDark] = useState(false);
  const [launcherOpen, setLauncherOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [copilotOpen, setCopilotOpen] = useState(false);
  const [utilityOpen, setUtilityOpen] = useState<null | "phone" | "notes" | "history">(null);
  const location = useLocation();
  const navigate = useNavigate();
  const launcherRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const derived = deriveApp(location.pathname);
  const [activeApp, setActiveApp] = useState<AppKey>(() => {
    const stored = (typeof window !== "undefined" && (localStorage.getItem(APP_STORAGE_KEY) as AppKey | null)) || null;
    return derived ?? stored ?? "sales";
  });

  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (launcherRef.current && !launcherRef.current.contains(e.target as Node)) setLauncherOpen(false);
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) setUserMenuOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    if (derived && derived !== activeApp) {
      setActiveApp(derived);
      localStorage.setItem(APP_STORAGE_KEY, derived);
    }
  }, [derived, activeApp]);

  if (!email) {
    return <Login onAuthenticated={(e) => { setAuthenticatedEmail(e); setEmail(e); }} />;
  }

  const app = activeApp;
  const { name: appName, tabs } = APP_TABS[app];
  const initials = email.split("@")[0].split(".").map((s) => s[0]?.toUpperCase()).join("").slice(0, 2);
  const isAdmin = isLoginReportAdmin(email);

  const switchApp = (target: AppKey) => {
    setLauncherOpen(false);
    setActiveApp(target);
    localStorage.setItem(APP_STORAGE_KEY, target);
    if (target === "sales") navigate("/dashboards/sales");
    if (target === "service") navigate("/dashboards/service");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-[hsl(var(--header-bg))] text-[hsl(var(--header-fg))] h-12 flex items-center px-2 gap-2 relative z-40">
        <div className="relative" ref={launcherRef}>
          <button onClick={() => setLauncherOpen((o) => !o)} className="slds-icon-btn" aria-label="App Launcher">
            <AppWindow className="w-4 h-4" />
          </button>
          {launcherOpen && (
            <div className="absolute left-0 top-11 w-80 bg-card text-foreground border border-border rounded shadow-lg p-3 animate-fade-in">
              <div className="text-[11px] uppercase text-muted-foreground font-semibold mb-2 px-1">App Launcher</div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { k: "sales" as AppKey, label: "Sales Console", color: "bg-primary" },
                  { k: "service" as AppKey, label: "Service Console", color: "bg-accent" },
                ].map((a) => (
                  <button key={a.k} onClick={() => switchApp(a.k)} className="flex items-center gap-2 p-2 rounded hover:bg-secondary text-left">
                    <span className={`w-8 h-8 rounded ${a.color} text-white flex items-center justify-center text-[10px] font-bold`}>
                      {a.label[0]}
                    </span>
                    <span className="text-[12px] font-medium">{a.label}</span>
                  </button>
                ))}
              </div>
              <div className="border-t border-border my-2" />
              <div className="text-[11px] uppercase text-muted-foreground font-semibold mb-1 px-1">Items</div>
              <div className="flex flex-col">
                {[
                  ["Accounts", "/accounts"], ["Contacts", "/contacts"], ["Leads", "/leads"],
                  ["Opportunities", "/opportunities"], ["Cases", "/cases"], ["Knowledge", "/knowledge"],
                  ["Reports", "/reports"], ["Sales Dashboard", "/dashboards/sales"], ["Service Dashboard", "/dashboards/service"],
                ].map(([l, t]) => (
                  <Link key={t} to={t} onClick={() => setLauncherOpen(false)} className="px-1 py-1 text-[12px] hover:bg-secondary rounded">
                    {l}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <Link to="/" className="flex items-center gap-2 pl-1 hover:opacity-90" title="Agentic Desktop">
          <div className="h-7 w-auto bg-white rounded px-1.5 flex items-center">
            <img src={syscoLogo} alt="Sysco" className="h-5 w-auto" />
          </div>
          <span className="font-semibold text-[14px] tracking-tight">{appName}</span>
        </Link>

        <div className="flex-1 max-w-[640px] mx-4">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-foreground/50" />
            <input
              placeholder={`Search Sysco ${app === "sales" ? "Sales" : "Service"}...`}
              className="w-full h-8 pl-8 pr-3 rounded text-[12.5px] bg-white text-foreground border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/40 placeholder:text-foreground/40"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-0.5">
          <button className="slds-icon-btn" onClick={() => setDark((d) => !d)} aria-label="Theme">
            {dark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button className="slds-icon-btn" aria-label="Help"><HelpCircle className="w-4 h-4" /></button>
          <button className="slds-icon-btn relative" aria-label="Notifications">
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))]" />
          </button>
          <button className="slds-icon-btn" aria-label="Setup"><Settings className="w-4 h-4" /></button>
          <div className="relative" ref={userMenuRef}>
            <button onClick={() => setUserMenuOpen((o) => !o)} className="flex items-center gap-1 pl-1 pr-1 h-8 rounded hover:bg-white/10">
              <span className="w-7 h-7 rounded-full bg-white text-primary font-bold text-[11px] flex items-center justify-center">{initials}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {userMenuOpen && (
              <div className="absolute right-0 top-10 w-64 bg-card text-foreground border border-border rounded shadow-lg animate-fade-in">
                <div className="px-3 py-2 border-b border-border">
                  <div className="text-[12px] font-semibold">{email.split("@")[0]}</div>
                  <div className="text-[11px] text-muted-foreground truncate">{email}</div>
                </div>
                <div className="py-1 text-[12.5px]">
                  <div className="px-3 py-1.5 text-muted-foreground text-[11px] uppercase tracking-wide">Options</div>
                  <button className="w-full text-left px-3 py-1.5 hover:bg-secondary">Switch Account</button>
                  <button className="w-full text-left px-3 py-1.5 hover:bg-secondary">Settings</button>
                  {isAdmin && (
                    <Link to="/login-report" onClick={() => setUserMenuOpen(false)} className="w-full text-left px-3 py-1.5 hover:bg-secondary flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5" /> Login Report
                    </Link>
                  )}
                  <button onClick={() => { clearAuthenticatedEmail(); setEmail(null); }} className="w-full text-left px-3 py-1.5 hover:bg-secondary text-destructive flex items-center gap-2">
                    <LogOut className="w-3.5 h-3.5" /> Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="bg-card border-b border-border h-10 flex items-center pl-3 pr-2 gap-0 sticky top-0 z-30">
        <div className="flex items-center gap-0 overflow-x-auto">
          {tabs.map((t) => {
            const active = location.pathname === t.to || location.pathname.startsWith(t.to + "/");
            return (
              <Link key={t.to} to={t.to} className="slds-tab" data-active={active}>{t.label}</Link>
            );
          })}
        </div>
        <div className="ml-auto flex items-center gap-1">
          <button className="slds-button"><Plus className="w-3 h-3" /> New</button>
        </div>
      </div>

      <main className="flex-1 min-h-0 overflow-auto pb-12"><Outlet /></main>

      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border h-9 flex items-center px-2 gap-1 z-40 text-[12px]">
        {[
          { k: "phone" as const, label: "Phone", Icon: Phone },
          { k: "notes" as const, label: "Notes", Icon: StickyNote },
          { k: "history" as const, label: "History", Icon: History },
        ].map((u) => (
          <button key={u.k} onClick={() => setUtilityOpen(utilityOpen === u.k ? null : u.k)} className={`h-7 px-2.5 rounded inline-flex items-center gap-1.5 hover:bg-secondary ${utilityOpen === u.k ? "bg-secondary" : ""}`}>
            <u.Icon className="w-3.5 h-3.5 text-muted-foreground" /> {u.label}
          </button>
        ))}
        <div className="flex-1" />
        <button onClick={() => setCopilotOpen(true)} className="h-7 px-3 rounded inline-flex items-center gap-1.5 bg-primary/10 text-primary hover:bg-primary/15">
          <Bot className="w-3.5 h-3.5" /> Einstein Copilot
        </button>
        <button onClick={() => setCopilotOpen(true)} className="h-7 px-3 rounded inline-flex items-center gap-1.5 bg-accent/15 text-accent hover:bg-accent/20">
          <Bot className="w-3.5 h-3.5" /> Agentforce
        </button>
      </div>

      {utilityOpen && (
        <div className="fixed bottom-9 right-2 w-80 bg-card border border-border rounded-t shadow-lg z-40 animate-slide-up">
          <div className="px-3 py-2 border-b border-border flex items-center justify-between bg-secondary/40">
            <span className="text-[12px] font-semibold capitalize">{utilityOpen}</span>
            <button onClick={() => setUtilityOpen(null)} className="text-muted-foreground text-[14px]">×</button>
          </div>
          <div className="p-3 text-[12px] text-muted-foreground">
            {utilityOpen === "phone" && (
              <div className="space-y-2">
                <div className="text-foreground font-medium">Service Cloud Voice</div>
                <div>No active call.</div>
                <button className="slds-button-brand w-full mt-2"><Phone className="w-3 h-3" /> Make a call</button>
              </div>
            )}
            {utilityOpen === "notes" && (
              <textarea placeholder="Type a quick note..." className="w-full h-28 p-2 text-[12px] border border-border rounded resize-none focus:outline-none focus:ring-1 focus:ring-primary" />
            )}
            {utilityOpen === "history" && (
              <ul className="space-y-1.5">
                <li>• Viewed ACC-1001 — 2 min ago</li>
                <li>• Opened CASE-44188 — 8 min ago</li>
                <li>• Pipeline report — 22 min ago</li>
              </ul>
            )}
          </div>
        </div>
      )}

      <CopilotDock open={copilotOpen} onClose={() => setCopilotOpen(false)} initialAgentId={app === "service" ? "service" : "salesCoach"} />
    </div>
  );
};

export default AppShell;
