import { useState } from "react";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import { ALLOWED_DEMO_DOMAIN, appendLoginAuditEntry, isAllowedDemoEmail, normalizeEmail } from "@/lib/demoAccess";
import honeywellLogo from "@/assets/honeywell-logo.png";

interface LoginProps {
  onAuthenticated: (email: string) => void;
}

const Login = ({ onAuthenticated }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = normalizeEmail(email);
    if (!trimmed) return setError("Please enter your username.");
    if (!isAllowedDemoEmail(trimmed)) return setError(`Access restricted to ${ALLOWED_DEMO_DOMAIN} addresses.`);
    setLoading(true);
    appendLoginAuditEntry(trimmed);
    setTimeout(() => onAuthenticated(trimmed), 350);
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(222,28%,8%)] via-[hsl(197,55%,14%)] to-[hsl(222,28%,6%)]" />

      {/* Floating orbs (Honeywell blue + orange) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(197,100%,45%,0.20)] rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[hsl(17,100%,45%,0.16)] rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(197,90%,40%,0.10)] rounded-full blur-[140px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0,0%,100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0,0%,100%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Logo area */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-[hsl(197,100%,55%,0.5)] rounded-2xl blur-xl" />
            <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-white shadow-lg shadow-[hsl(197,100%,40%,0.35)] overflow-hidden">
              <img src={honeywellLogo} alt="Honeywell" className="h-12 w-12 object-contain" />
            </div>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-white">Honeywell</h1>
          <p className="mt-2 text-sm text-[hsl(215,20%,65%)]">Sales + Service Cloud powered by Agentforce</p>
        </div>

        {/* Glass card */}
        <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-2xl shadow-2xl shadow-black/30">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />

          <div className="relative p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-medium text-[hsl(215,20%,60%)] uppercase tracking-wider">
                  Username
                </label>
                <input
                  id="email"
                  type="email"
                  autoFocus
                  placeholder={`you${ALLOWED_DEMO_DOMAIN}`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className="w-full h-12 px-4 rounded-xl border border-white/[0.08] bg-white/[0.04] text-white placeholder:text-[hsl(215,20%,38%)] text-sm focus:outline-none focus:border-[hsl(197,100%,55%,0.6)] focus:ring-1 focus:ring-[hsl(197,100%,55%,0.4)] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-xs font-medium text-[hsl(215,20%,60%)] uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-12 pl-4 pr-11 rounded-xl border border-white/[0.08] bg-white/[0.04] text-white placeholder:text-[hsl(215,20%,38%)] text-sm focus:outline-none focus:border-[hsl(197,100%,55%,0.6)] focus:ring-1 focus:ring-[hsl(197,100%,55%,0.4)] transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[hsl(215,20%,50%)] hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <p className="text-xs text-[hsl(354,80%,70%)] bg-[hsl(354,75%,42%,0.12)] border border-[hsl(354,75%,55%,0.25)] rounded-lg px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group w-full h-12 rounded-xl bg-gradient-to-r from-[hsl(197,100%,38%)] to-[hsl(197,100%,50%)] hover:from-[hsl(197,100%,34%)] hover:to-[hsl(197,100%,46%)] text-white font-semibold text-sm shadow-lg shadow-[hsl(197,100%,45%,0.3)] transition-all duration-300 hover:shadow-xl hover:shadow-[hsl(197,100%,45%,0.4)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Log In
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                )}
              </button>

              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-[hsl(215,20%,60%)] cursor-pointer">
                  <input type="checkbox" className="accent-[hsl(197,100%,55%)]" />
                  Remember me
                </label>
                <button
                  type="button"
                  className="text-[hsl(197,90%,68%)] hover:text-[hsl(197,90%,78%)] transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            </form>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-[hsl(215,20%,45%)]">
          Restricted to {ALLOWED_DEMO_DOMAIN} users • Enterprise SSO ready
        </p>
      </div>
    </div>
  );
};

export default Login;
