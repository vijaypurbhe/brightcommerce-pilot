import { useEffect, useState } from "react";
import { LogOut, FileText } from "lucide-react";
import { getLoginAuditLog, type LoginAuditEntry, clearAuthenticatedEmail, getAuthenticatedEmail } from "@/lib/demoAccess";
import forgedFiberLogo from "@/assets/forged-fiber-logo.png";

const LoginReport = () => {
  const [entries, setEntries] = useState<LoginAuditEntry[]>([]);
  const email = getAuthenticatedEmail();

  useEffect(() => { setEntries(getLoginAuditLog()); }, []);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <img src={forgedFiberLogo} alt="Forged Fiber 37" className="h-12 w-auto object-contain" />
            <div>
              <h1 className="text-[18px] font-bold text-foreground">Login Audit Report</h1>
              <p className="text-[12px] text-muted-foreground">Forged Fiber 37 demo access log</p>
            </div>
          </div>
          <button
            onClick={() => { clearAuthenticatedEmail(); window.location.href = "/"; }}
            className="slds-button text-destructive border-destructive/30 hover:bg-destructive/10"
          >
            <LogOut className="w-3.5 h-3.5" /> Sign Out
          </button>
        </div>

        <div className="slds-card p-4">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="w-4 h-4 text-primary" />
            <span className="font-semibold text-[14px]">Recent demo logins</span>
            <span className="ml-auto text-[12px] text-muted-foreground">{entries.length} entries</span>
          </div>
          <table className="slds-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Time (UTC)</th>
                <th>User Agent</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={e.id} className={e.email === email ? "bg-primary/5" : ""}>
                  <td className="font-medium">{e.email}</td>
                  <td>{new Date(e.loggedInAt).toLocaleString()}</td>
                  <td className="text-muted-foreground truncate max-w-xs">{e.userAgent}</td>
                </tr>
              ))}
              {entries.length === 0 && (
                <tr><td colSpan={3} className="text-center text-muted-foreground py-6">No login records yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LoginReport;
