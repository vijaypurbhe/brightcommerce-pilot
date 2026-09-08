// Mock data for Forged Fiber 37 Sales + Service + Agentforce demo
// Scope: Salesforce Sales Cloud, Service Cloud, Service Cloud Voice, Data Cloud, Agentforce

// ─────────────────────────────────────────────────────────────────────────────
// KPI TILES (used on home / cross-domain dashboard)
// ─────────────────────────────────────────────────────────────────────────────

export interface KpiDetail {
  label: string;
  value: string;
  change: number;
  trend: "up" | "down";
  period: string;
  chartData: { month: string; value: number; previous: number }[];
  breakdown: { label: string; value: string; pct: number }[];
  insight: string;
}

export const kpiData: KpiDetail[] = [
  {
    label: "Network Availability", value: "99.97%", change: +0.04, trend: "up", period: "vs last month",
    chartData: [
      { month: "Jul", value: 99.91, previous: 99.88 }, { month: "Aug", value: 99.92, previous: 99.89 },
      { month: "Sep", value: 99.93, previous: 99.90 }, { month: "Oct", value: 99.95, previous: 99.91 },
      { month: "Nov", value: 99.96, previous: 99.93 }, { month: "Dec", value: 99.97, previous: 99.94 },
    ],
    breakdown: [
      { label: "Core Backbone", value: "99.999%", pct: 40 },
      { label: "Metro Rings", value: "99.98%", pct: 30 },
      { label: "Last Mile", value: "99.94%", pct: 20 },
      { label: "Data Centers", value: "99.99%", pct: 10 },
    ],
    insight: "Network Operations Agent reduced mean-time-to-detect by 18% through AI-correlated alarm triage. Zero unplanned backbone outages in 42 days.",
  },
  {
    label: "Build Pipeline", value: "$1.24B", change: +22.5, trend: "up", period: "vs last quarter",
    chartData: [
      { month: "Jul", value: 840, previous: 760 }, { month: "Aug", value: 920, previous: 810 },
      { month: "Sep", value: 1010, previous: 880 }, { month: "Oct", value: 1080, previous: 940 },
      { month: "Nov", value: 1160, previous: 1000 }, { month: "Dec", value: 1240, previous: 1060 },
    ],
    breakdown: [
      { label: "Municipal FTTH", value: "$482M", pct: 39 },
      { label: "Multi-Family", value: "$318M", pct: 26 },
      { label: "Wholesale Transport", value: "$286M", pct: 23 },
      { label: "Enterprise / Data Center", value: "$154M", pct: 12 },
    ],
    insight: "Sales Coach Agent flagged 18 deals worth $340M as high win-likelihood this quarter. Fiber Enablement requests are up 34% after the self-service eligibility portal launch.",
  },
  {
    label: "Partner NRR", value: "108.4%", change: +2.1, trend: "up", period: "vs last quarter",
    chartData: [
      { month: "Jul", value: 103.2, previous: 102.8 }, { month: "Aug", value: 104.1, previous: 103.1 },
      { month: "Sep", value: 105.0, previous: 103.6 }, { month: "Oct", value: 106.2, previous: 104.0 },
      { month: "Nov", value: 107.3, previous: 104.6 }, { month: "Dec", value: 108.4, previous: 105.2 },
    ],
    breakdown: [
      { label: "Capacity upgrades", value: "6.2%", pct: 35 },
      { label: "New market adds", value: "4.8%", pct: 28 },
      { label: "SLA uplift", value: "3.1%", pct: 22 },
      { label: "Cross-sell", value: "2.3%", pct: 15 },
    ],
    insight: "Wholesale Partner Support Agent deflected 41% of tier-1 partner inquiries and shortened onboarding from 14 to 9 days. Net retention rate now exceeds 108%.",
  },
  {
    label: "Open Cases", value: "624", change: -12.3, trend: "down", period: "vs last week",
    chartData: [
      { month: "Jul", value: 1120, previous: 1200 }, { month: "Aug", value: 980, previous: 1140 },
      { month: "Sep", value: 860, previous: 1080 }, { month: "Oct", value: 760, previous: 1020 },
      { month: "Nov", value: 690, previous: 980 }, { month: "Dec", value: 624, previous: 940 },
    ],
    breakdown: [
      { label: "Network outage", value: "142", pct: 23 },
      { label: "Provisioning", value: "186", pct: 30 },
      { label: "Permit / ROW", value: "98", pct: 16 },
      { label: "Partner billing", value: "198", pct: 31 },
    ],
    insight: "Network Operations Agent auto-resolves 36% of alarm-driven cases and pre-dispatches field crews before customer impact. Backlog down 12.3% despite storm season.",
  },
  {
    label: "CSAT", value: "4.58/5", change: +0.14, trend: "up", period: "rolling 30 days",
    chartData: [
      { month: "Jul", value: 4.32, previous: 4.18 }, { month: "Aug", value: 4.38, previous: 4.22 },
      { month: "Sep", value: 4.44, previous: 4.26 }, { month: "Oct", value: 4.50, previous: 4.32 },
      { month: "Nov", value: 4.54, previous: 4.38 }, { month: "Dec", value: 4.58, previous: 4.44 },
    ],
    breakdown: [
      { label: "Voice (live agent)", value: "4.68", pct: 32 },
      { label: "Voice (Agentforce)", value: "4.52", pct: 24 },
      { label: "Chat", value: "4.58", pct: 24 },
      { label: "Email / Web", value: "4.48", pct: 20 },
    ],
    insight: "Agent Assist's real-time reply drafts cut average handle time by 44 seconds while pushing CSAT higher. Partner NPS improved 6 points after the AI onboarding flow.",
  },
  {
    label: "SLA Compliance", value: "96.2%", change: +3.4, trend: "up", period: "vs last quarter",
    chartData: [
      { month: "Jul", value: 90.4, previous: 88.2 }, { month: "Aug", value: 91.8, previous: 89.0 },
      { month: "Sep", value: 93.1, previous: 89.8 }, { month: "Oct", value: 94.4, previous: 90.6 },
      { month: "Nov", value: 95.3, previous: 91.4 }, { month: "Dec", value: 96.2, previous: 92.2 },
    ],
    breakdown: [
      { label: "Priority 1 (outage)", value: "99.4%", pct: 28 },
      { label: "Priority 2", value: "97.1%", pct: 28 },
      { label: "Priority 3", value: "94.8%", pct: 24 },
      { label: "Priority 4", value: "91.2%", pct: 20 },
    ],
    insight: "Omni-channel routing + Agentforce triage moved SLA compliance above the 95% executive target. Predictive escalation now flags at-risk cases 18 minutes before breach.",
  },
  {
    label: "AI Deflection", value: "41.2%", change: +9.8, trend: "up", period: "of inbound contacts",
    chartData: [
      { month: "Jul", value: 24.2, previous: 18.4 }, { month: "Aug", value: 28.6, previous: 20.2 },
      { month: "Sep", value: 32.4, previous: 22.0 }, { month: "Oct", value: 36.0, previous: 24.6 },
      { month: "Nov", value: 38.8, previous: 27.4 }, { month: "Dec", value: 41.2, previous: 30.2 },
    ],
    breakdown: [
      { label: "Status / ETA requests", value: "68%", pct: 30 },
      { label: "Eligibility checks", value: "52%", pct: 24 },
      { label: "Partner billing", value: "44%", pct: 22 },
      { label: "Knowledge lookups", value: "76%", pct: 24 },
    ],
    insight: "Agentforce now deflects 41.2% of inbound contacts without human handoff. Each point of deflection saves ~$1.1M annually in contact-center cost.",
  },
  {
    label: "At-Risk ARR", value: "$18.6M", change: -14.2, trend: "down", period: "vs last quarter",
    chartData: [
      { month: "Jul", value: 28.4, previous: 32.0 }, { month: "Aug", value: 25.8, previous: 31.0 },
      { month: "Sep", value: 23.2, previous: 29.8 }, { month: "Oct", value: 21.4, previous: 28.6 },
      { month: "Nov", value: 19.8, previous: 27.4 }, { month: "Dec", value: 18.6, previous: 26.2 },
    ],
    breakdown: [
      { label: "Contract renewal risk", value: "$7.2M", pct: 39 },
      { label: "Competitive threat", value: "$4.8M", pct: 26 },
      { label: "Service quality issues", value: "$3.6M", pct: 19 },
      { label: "Price-pressured", value: "$3.0M", pct: 16 },
    ],
    insight: "Sales Coach Agent flagged 42 partner accounts; account managers intervened on 31 and saved $8.4M ARR last quarter. Remaining $18.6M concentrated in 18 accounts.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SALES CLOUD
// ─────────────────────────────────────────────────────────────────────────────

export const revenueChartData = [
  { month: "Jul", revenue: 84000000, target: 78000000 },
  { month: "Aug", revenue: 92000000, target: 84000000 },
  { month: "Sep", revenue: 101000000, target: 92000000 },
  { month: "Oct", revenue: 108000000, target: 98000000 },
  { month: "Nov", revenue: 116000000, target: 106000000 },
  { month: "Dec", revenue: 124000000, target: 112000000 },
];

export type OpportunityStage = "Qualification" | "Site Survey" | "Permitting" | "Construction" | "Live" | "Closed Won" | "Closed Lost";

export interface Opportunity {
  id: string;
  account: string;
  segment: string;
  amount: number;
  stage: OpportunityStage;
  closeDate: string;
  owner: string;
  einsteinScore: number; // 0-100
  nba: string;
}

export const opportunities: Opportunity[] = [
  { id: "OPP-7821", account: "City of Austin — Smart City Fiber", segment: "Municipality", amount: 24_200_000, stage: "Construction", closeDate: "Dec 28", owner: "M. Alvarez", einsteinScore: 89, nba: "Share construction milestone update and SLA certification package." },
  { id: "OPP-7834", account: "Atlas Multi-Family — Denver Portfolio", segment: "Property Developer", amount: 8_400_000, stage: "Permitting", closeDate: "Jan 14", owner: "D. Chen", einsteinScore: 82, nba: "Loop in ROW/permit specialist to accelerate city approval." },
  { id: "OPP-7842", account: "PulseNet ISP — Midwest Backbone", segment: "Wholesale ISP", amount: 18_600_000, stage: "Negotiate", closeDate: "Jan 22", owner: "R. Patel", einsteinScore: 78, nba: "Schedule technical design review for 400G wave capacity." },
  { id: "OPP-7855", account: "Summit Data Centers — Phoenix", segment: "Data Center", amount: 32_000_000, stage: "Live", closeDate: "Dec 30", owner: "S. Okafor", einsteinScore: 94, nba: "Confirm turn-up date and hand off to Network Operations." },
  { id: "OPP-7861", account: "Riverwalk Corporate Campus", segment: "Enterprise", amount: 4_180_000, stage: "Site Survey", closeDate: "Feb 10", owner: "M. Alvarez", einsteinScore: 76, nba: "Provide site-survey timeline and construction cost estimate." },
  { id: "OPP-7878", account: "Hillsborough County Schools", segment: "Municipality", amount: 7_200_000, stage: "Closed Won", closeDate: "Dec 04", owner: "L. Kim", einsteinScore: 96, nba: "Kick off 90-day implementation with district IT lead." },
  { id: "OPP-7882", account: "Blue Harbor Apartments — Miami", segment: "Property Developer", amount: 2_800_000, stage: "Qualification", closeDate: "Feb 02", owner: "R. Patel", einsteinScore: 61, nba: "Send fiber-enablement eligibility checklist." },
  { id: "OPP-7891", account: "CloudBridge ISP — Southeast", segment: "Wholesale ISP", amount: 14_600_000, stage: "Prospect", closeDate: "Mar 18", owner: "S. Okafor", einsteinScore: 55, nba: "Trigger partner nurture: open-access pricing deck." },
  { id: "OPP-7902", account: "MetroHealth System — Ohio", segment: "Enterprise", amount: 9_200_000, stage: "Construction", closeDate: "Jan 08", owner: "D. Chen", einsteinScore: 86, nba: "Confirm redundant path diversity and failover test date." },
  { id: "OPP-7910", account: "Vertex Industrial Park", segment: "Property Developer", amount: 6_400_000, stage: "Permitting", closeDate: "Feb 24", owner: "M. Alvarez", einsteinScore: 73, nba: "Present anchor-tenant pre-commitment letter." },
  { id: "OPP-7920", account: "NorthStar Regional ISP", segment: "Wholesale ISP", amount: 11_800_000, stage: "Site Survey", closeDate: "Mar 05", owner: "L. Kim", einsteinScore: 69, nba: "Coordinate OTDR baseline and route feasibility study." },
  { id: "OPP-7934", account: "Bayfront Condos — Tampa", segment: "Property Developer", amount: 2_200_000, stage: "Closed Lost", closeDate: "Nov 28", owner: "R. Patel", einsteinScore: 28, nba: "Re-engage in 90 days; lost to incumbent price lock." },
];

export const pipelineByStage = (["Qualification", "Site Survey", "Permitting", "Construction", "Live", "Closed Won", "Closed Lost"] as OpportunityStage[]).map((stage) => ({
  stage,
  count: opportunities.filter((o) => o.stage === stage).length,
  value: opportunities.filter((o) => o.stage === stage).reduce((s, o) => s + o.amount, 0),
}));

// ─────────────────────────────────────────────────────────────────────────────
// ACCOUNTS (Top Accounts table + Account 360)
// ─────────────────────────────────────────────────────────────────────────────

export interface FiberAccount {
  id: string;
  name: string;
  type: "Municipality" | "Property Developer" | "Wholesale ISP" | "Enterprise" | "Data Center";
  market: string;
  csm: string;
  mrr: number;
  ytdRevenue: number;
  healthScore: number;
  lastTicketDays: number;
  trend: "up" | "down" | "flat";
  churnRisk: "low" | "medium" | "high";
  openCases: number;
  fiberStatus: "Live" | "In Build" | "Permitting" | "Qualified" | "Prospect";
}

export const topAccounts: FiberAccount[] = [
  { id: "ACC-1001", name: "City of Austin — Smart City Fiber", type: "Municipality", market: "Austin, TX", csm: "M. Alvarez", mrr: 580_000, ytdRevenue: 6_840_000, healthScore: 94, lastTicketDays: 2, trend: "up", churnRisk: "low", openCases: 1, fiberStatus: "In Build" },
  { id: "ACC-1002", name: "PulseNet ISP — Midwest Backbone", type: "Wholesale ISP", market: "Chicago, IL", csm: "D. Chen", mrr: 420_000, ytdRevenue: 4_620_000, healthScore: 82, lastTicketDays: 4, trend: "flat", churnRisk: "low", openCases: 2, fiberStatus: "Live" },
  { id: "ACC-1003", name: "Summit Data Centers — Phoenix", type: "Data Center", market: "Phoenix, AZ", csm: "M. Alvarez", mrr: 760_000, ytdRevenue: 8_240_000, healthScore: 90, lastTicketDays: 1, trend: "up", churnRisk: "low", openCases: 0, fiberStatus: "Live" },
  { id: "ACC-1004", name: "MetroHealth System — Ohio", type: "Enterprise", market: "Cleveland, OH", csm: "S. Okafor", mrr: 310_000, ytdRevenue: 3_980_000, healthScore: 86, lastTicketDays: 3, trend: "up", churnRisk: "low", openCases: 1, fiberStatus: "In Build" },
  { id: "ACC-1005", name: "Blue Harbor Apartments — Miami", type: "Property Developer", market: "Miami, FL", csm: "R. Patel", mrr: 42_000, ytdRevenue: 520_000, healthScore: 56, lastTicketDays: 11, trend: "down", churnRisk: "high", openCases: 4, fiberStatus: "Qualified" },
  { id: "ACC-1006", name: "NorthStar Regional ISP", type: "Wholesale ISP", market: "Denver, CO", csm: "L. Kim", mrr: 180_000, ytdRevenue: 1_840_000, healthScore: 74, lastTicketDays: 5, trend: "flat", churnRisk: "medium", openCases: 2, fiberStatus: "Site Survey" },
  { id: "ACC-1007", name: "Hillsborough County Schools", type: "Municipality", market: "Tampa, FL", csm: "L. Kim", mrr: 92_000, ytdRevenue: 612_000, healthScore: 92, lastTicketDays: 2, trend: "up", churnRisk: "low", openCases: 0, fiberStatus: "Live" },
  { id: "ACC-1008", name: "Riverwalk Corporate Campus", type: "Enterprise", market: "San Antonio, TX", csm: "R. Patel", mrr: 58_000, ytdRevenue: 384_000, healthScore: 68, lastTicketDays: 14, trend: "down", churnRisk: "high", openCases: 3, fiberStatus: "Permitting" },
  { id: "ACC-1009", name: "Atlas Multi-Family — Denver Portfolio", type: "Property Developer", market: "Denver, CO", csm: "D. Chen", mrr: 520_000, ytdRevenue: 5_240_000, healthScore: 84, lastTicketDays: 2, trend: "up", churnRisk: "low", openCases: 1, fiberStatus: "Permitting" },
  { id: "ACC-1010", name: "CloudBridge ISP — Southeast", type: "Wholesale ISP", market: "Atlanta, GA", csm: "M. Alvarez", mrr: 280_000, ytdRevenue: 2_640_000, healthScore: 78, lastTicketDays: 3, trend: "flat", churnRisk: "medium", openCases: 2, fiberStatus: "Prospect" },
];

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE CLOUD — CASES
// ─────────────────────────────────────────────────────────────────────────────

export type CaseChannel = "Voice" | "Chat" | "Email" | "Web" | "SMS";
export type CasePriority = "P1" | "P2" | "P3" | "P4";
export type CaseStatus = "New" | "In Progress" | "Waiting on Customer" | "Escalated" | "Resolved";

export interface ServiceCase {
  id: string;
  subject: string;
  account: string;
  channel: CaseChannel;
  priority: CasePriority;
  status: CaseStatus;
  ageHours: number;
  slaHours: number;
  owner: string;
  category: "Network Outage" | "Provisioning" | "Permit / ROW" | "Partner Billing" | "Performance" | "Field Service";
  aiSummary: string;
  agentAssistDeflected?: boolean;
}

export const cases: ServiceCase[] = [
  { id: "CASE-44201", subject: "Latency spike — City of Austin ring 3", account: "City of Austin — Smart City Fiber", channel: "Voice", priority: "P2", status: "In Progress", ageHours: 0.5, slaHours: 4, owner: "Agentforce", category: "Performance", aiSummary: "Customer reports 18ms latency on ring 3. OTDR trace shows a likely microbend near MLK corridor. Field crew en route.", agentAssistDeflected: true },
  { id: "CASE-44198", subject: "Turn-up delay — Summit Data Center PHX-2", account: "Summit Data Centers — Phoenix", channel: "Email", priority: "P2", status: "New", ageHours: 1.2, slaHours: 8, owner: "Unassigned", category: "Provisioning", aiSummary: "Cross-connect at PHX-2 data hall delayed due to missing LOA. Customer needs revised turn-up window." },
  { id: "CASE-44192", subject: "Permit extension — Atlas Denver building C", account: "Atlas Multi-Family — Denver Portfolio", channel: "Chat", priority: "P3", status: "In Progress", ageHours: 3.4, slaHours: 24, owner: "J. Rivera", category: "Permit / ROW", aiSummary: "City requested additional traffic-control plan for building C. ROW team uploading revised drawings." },
  { id: "CASE-44188", subject: "Backbone outage — Region 7 south span", account: "PulseNet ISP — Midwest Backbone", channel: "Voice", priority: "P1", status: "Escalated", ageHours: 0.8, slaHours: 2, owner: "T. Nguyen (NetOps)", category: "Network Outage", aiSummary: "Fiber cut on south span due to third-party construction. Redundant path active; repair ETA 4 hours." },
  { id: "CASE-44175", subject: "SLA credit request — recurring drops", account: "Blue Harbor Apartments — Miami", channel: "Email", priority: "P3", status: "Waiting on Customer", ageHours: 28, slaHours: 48, owner: "A. Brooks", category: "Partner Billing", aiSummary: "Customer requested SLA credit for 3 drops last month. Auto-credit policy threshold met with logs attached." },
  { id: "CASE-44170", subject: "Invoice dispute — CloudBridge Q4 transport", account: "CloudBridge ISP — Southeast", channel: "Web", priority: "P3", status: "In Progress", ageHours: 6, slaHours: 24, owner: "Agentforce", category: "Partner Billing", aiSummary: "Customer disputes 400G wave overage charges. Usage logs confirm billing is valid; draft reply ready.", agentAssistDeflected: true },
  { id: "CASE-44164", subject: "Splice closure alarm — NorthStar hub", account: "NorthStar Regional ISP", channel: "Chat", priority: "P2", status: "In Progress", ageHours: 4.2, slaHours: 8, owner: "J. Rivera", category: "Field Service", aiSummary: "Environmental sensor in splice closure reporting humidity threshold breach. Technician scheduled for tomorrow." },
  { id: "CASE-44158", subject: "Repeated packet loss — Riverwalk campus", account: "Riverwalk Corporate Campus", channel: "Voice", priority: "P2", status: "Escalated", ageHours: 1.6, slaHours: 4, owner: "M. Alvarez (CSM)", category: "Performance", aiSummary: "Repeat performance issue on campus edge. Sales Coach Agent flagged account as churn-risk; CSM intervention requested." },
  { id: "CASE-44150", subject: "MTR copies requested for audit", account: "Hillsborough County Schools", channel: "Web", priority: "P4", status: "Resolved", ageHours: 0.2, slaHours: 48, owner: "Agentforce", category: "Provisioning", aiSummary: "Customer requested 14 MTR/test reports. Service Agent generated PDF bundle and emailed within 90 seconds.", agentAssistDeflected: true },
  { id: "CASE-44142", subject: "Service-order status — Hillsborough", account: "Hillsborough County Schools", channel: "SMS", priority: "P3", status: "Resolved", ageHours: 0.4, slaHours: 8, owner: "Agentforce", category: "Provisioning", aiSummary: "Out-of-stock cross-connect hardware delayed install. Agent proposed alternate vendor with same SLA; customer approved.", agentAssistDeflected: true },
];

// Case-channel breakdown for the home dashboard
export const channelData = [
  { channel: "Voice (Service Cloud Voice)", revenue: 0, sessions: 8400, conversion: 4.68, roas: null, contacts: "8.4K", deflected: 28, csat: 4.68 },
  { channel: "Chat (Web + Mobile)",          revenue: 0, sessions: 6200, conversion: 4.58, roas: null, contacts: "6.2K", deflected: 52, csat: 4.58 },
  { channel: "Email",                        revenue: 0, sessions: 4800, conversion: 4.48, roas: null, contacts: "4.8K", deflected: 24, csat: 4.48 },
  { channel: "Web Self-Service",             revenue: 0, sessions: 11200, conversion: 4.55, roas: null, contacts: "11.2K", deflected: 78, csat: 4.55 },
  { channel: "SMS",                          revenue: 0, sessions: 2100, conversion: 4.52, roas: null, contacts: "2.1K", deflected: 64, csat: 4.52 },
];

// ─────────────────────────────────────────────────────────────────────────────
// AGENTFORCE AGENTS
// ─────────────────────────────────────────────────────────────────────────────

export type AgentStatus = "monitoring" | "alert" | "acting";

export interface Agent {
  id: string;
  name: string;
  status: AgentStatus;
  insight: string;
  confidence: number;
  action: string;
  impact: string;
  icon: string;
  audience: "Customer" | "Employee";
  category: "Forged Fiber";
}

export const agents: Agent[] = [
  {
    id: "networkOps",
    name: "Network Operations Agent",
    status: "acting",
    audience: "Employee",
    category: "Forged Fiber",
    insight: "Monitoring 4,200+ network elements across backbone, metro rings, and last-mile hubs. Correlated 18 alarms into 3 actionable incidents and pre-dispatched 2 field crews.",
    confidence: 96,
    action: "Auto-resolve low-severity alarms and escalate outage clusters to NetOps with route-impact analysis",
    impact: "−18% MTTD, 99.97% availability",
    icon: "🌐",
  },
  {
    id: "salesCoach",
    name: "Sales Coach Agent",
    status: "alert",
    audience: "Employee",
    category: "Forged Fiber",
    insight: "42 partner accounts flagged as at-risk this quarter. 18 deals worth $340M are high win-likelihood; 8 need executive sponsorship to close before quarter-end.",
    confidence: 91,
    action: "Trigger meeting-prep briefs + outreach cadence for top 8 at-risk and high-win accounts",
    impact: "$8.4M ARR protected",
    icon: "📈",
  },
  {
    id: "partnerSupport",
    name: "Wholesale Partner Support Agent",
    status: "monitoring",
    audience: "Customer",
    category: "Forged Fiber",
    insight: "Handling 2,840 partner voice + chat sessions today. Auto-resolving onboarding, capacity, SLA, and billing inquiries. Partner onboarding cycle shortened from 14 to 9 days.",
    confidence: 93,
    action: "Expand deflection to capacity-upgrade quotes and SLA uplift requests",
    impact: "108.4% NRR, −5 days onboarding",
    icon: "🤝",
  },
  {
    id: "fiberEnablement",
    name: "Fiber Enablement Agent",
    status: "acting",
    audience: "Customer",
    category: "Forged Fiber",
    insight: "Guiding property owners, developers, and municipalities through fiber-build eligibility. 2,160 eligibility checks completed this month; 34% uplift in qualified requests.",
    confidence: 89,
    action: "Pre-qualify multi-family and municipal sites and schedule site surveys automatically",
    impact: "+34% qualified pipeline",
    icon: "🔌",
  },
];

// Greetings + canned responses are no longer used (live Gemini handles all chat)
export const agentConversations: Record<string, never> = {};

// ─────────────────────────────────────────────────────────────────────────────
// SCENARIOS (closed-loop simulation panel)
// ─────────────────────────────────────────────────────────────────────────────

export interface Scenario {
  id: string;
  title: string;
  trigger: string;
  steps: { label: string; detail: string; status: "complete" | "active" | "pending" }[];
  impact: string;
  deepDive: {
    rootCause: string;
    dataPoints: string[];
    financialImpact: { label: string; value: string }[];
    recommendation: string;
  };
}

export const scenarios: Scenario[] = [
  {
    id: "deflection",
    title: "Partner Support Deflection Lift",
    trigger: "Service Cloud detects 44% of partner inbound volume is status, billing, and onboarding inquiries",
    steps: [
      { label: "Volume Analyzed", detail: "Einstein Conversation Mining clusters intents from 18K partner transcripts", status: "complete" },
      { label: "Partner Support Agent Activated", detail: "Agentforce handles top 5 intents with backend OSS/BSS tools", status: "complete" },
      { label: "Live Pilot — 3 Regions", detail: "Midwest + Southeast + Southwest live; 41.2% deflection in week 4", status: "active" },
      { label: "National Rollout", detail: "Expand to all partner success teams; layer in capacity-quote tools", status: "pending" },
      { label: "Measured Impact", detail: "Projected $28M annual cost-to-serve reduction", status: "pending" },
    ],
    impact: "$28M / yr cost saved",
    deepDive: {
      rootCause: "Forged Fiber 37's wholesale partner success team handles 1.2M inbound contacts annually. Conversation mining shows 44% are repetitive intents (circuit status, billing, onboarding, SLA, capacity) that don't require human judgment — they require OSS/BSS lookups. Agentforce can authenticate the partner, query systems, and respond in under 30 seconds.",
      dataPoints: [
        "Annual partner inbound contacts: 1.2M (voice + chat + email)",
        "Repetitive-intent share: 44% (status 18%, billing 12%, onboarding 8%, SLA 4%, capacity 2%)",
        "Current deflection: 41.2% in pilot regions (vs 14% pre-Agentforce)",
        "Partner CSAT on deflected contacts: 4.52/5",
        "Average handle time on deflected contact: 26 seconds (vs 5m10s human)",
      ],
      financialImpact: [
        { label: "Pilot deflection rate", value: "41.2%" },
        { label: "Cost per human contact", value: "$11.20" },
        { label: "Cost per Agentforce contact", value: "$0.58" },
        { label: "Projected annual savings", value: "$28M" },
        { label: "Payback period", value: "5.1 months" },
      ],
      recommendation: "Complete the national rollout of Wholesale Partner Support Agent across all partner success pods. Expand the tool surface to include automated capacity-upgrade quotes and SLA uplift proposals. Keep human escalation explicit for any case touching contract disputes, regulatory complaints, or accounts on Sales Coach Agent's at-risk list.",
    },
  },
  {
    id: "fiberEnablement",
    title: "Fiber Enablement Self-Service",
    trigger: "Property owners and municipalities submit 2,160 eligibility requests monthly; 60% are repetitive data-gathering",
    steps: [
      { label: "Demand Analyzed", detail: "Einstein Discovery maps request patterns by property type and geography", status: "complete" },
      { label: "Eligibility Engine Built", detail: "Fiber Enablement Agent integrates GIS, permit history, and build-cost model", status: "complete" },
      { label: "Portal + Chat Pilot", detail: "Self-service eligibility + auto site-survey scheduling live in 4 markets", status: "active" },
      { label: "Sales Handoff", detail: "Qualified leads routed to account managers with pre-built proposals", status: "pending" },
      { label: "Pipeline Impact", detail: "Projected +$180M qualified pipeline annually", status: "pending" },
    ],
    impact: "+$180M qualified pipeline",
    deepDive: {
      rootCause: "Fiber-build demand outpaces sales capacity. Most early-stage inquiries ask the same questions: Is my property eligible? What's the timeline? What's the cost? The Fiber Enablement Agent answers these instantly using GIS, existing permit data, and a standardized build-cost model, then schedules site surveys without human intake.",
      dataPoints: [
        "Monthly eligibility requests: 2,160",
        "Repetitive data-gathering share: 60%",
        "Qualified-request uplift in pilot: +34%",
        "Site-survey scheduling time: from 4 days to same-day",
        "Lead-to-opportunity conversion: 22% vs 12% baseline",
      ],
      financialImpact: [
        { label: "Addressable annual requests", value: "25,920" },
        { label: "Expected qualification rate", value: "38%" },
        { label: "Avg qualified opportunity", value: "$4.2M" },
        { label: "Projected qualified pipeline", value: "$180M" },
        { label: "Sales capacity freed", value: "~12 FTEs" },
      ],
      recommendation: "Launch the Fiber Enablement Agent across all top-20 markets. Tie eligibility outputs directly into the opportunity object so Sales Coach Agent can prioritize high-propensity sites. Track conversion from eligibility check → site survey → closed build.",
    },
  },
  {
    id: "atrisk",
    title: "At-Risk Partner Save Play",
    trigger: "Sales Coach Agent flags 42 partner accounts inactive 60+ days or with repeated service issues",
    steps: [
      { label: "Risk Signals Aggregated", detail: "Einstein combines usage, case history, NPS, and competitive win/loss data", status: "complete" },
      { label: "Accounts Ranked", detail: "42 accounts scored; top 8 require executive sponsorship", status: "complete" },
      { label: "Meeting Prep Generated", detail: "Auto-built brief with usage history, complaints, and recovery offer", status: "active" },
      { label: "CSM Intervention", detail: "31 account managers engaged this quarter; 76% save rate observed", status: "active" },
      { label: "ARR Protected", detail: "$8.4M saved YTD; remaining $18.6M in active workflow", status: "pending" },
    ],
    impact: "$8.4M ARR protected",
    deepDive: {
      rootCause: "Top 12% of partner accounts drive 56% of wholesale revenue. Repeated outages, late provisioning, and reduced bandwidth growth are leading indicators of churn 90-120 days before renewal. Sales Coach Agent aggregates these signals into a single risk score so account managers can act early.",
      dataPoints: [
        "High-value partner accounts monitored: 840",
        "Currently flagged at-risk: 42 ($18.6M ARR)",
        "Save rate when AM engages within 14 days: 76%",
        "Save rate when AM engages after 45 days: 31%",
        "Top churn signal: 2+ P2/P3 incidents in 30 days (correlates to 58% of churn events)",
      ],
      financialImpact: [
        { label: "ARR at risk", value: "$18.6M" },
        { label: "YTD saves", value: "$8.4M" },
        { label: "Avg recovery cost", value: "$24K / account" },
        { label: "ROI on save plays", value: "18x" },
        { label: "Projected FY save", value: "$14.2M" },
      ],
      recommendation: "Push the top 8 executive-sponsor accounts into a structured save play this week. For the remaining 34, queue AM outreach with auto-generated meeting briefs from Sales Coach Agent. Wire repeated-incident signals into Network Operations Agent so it can proactively offer service credits or expedited remediation before the partner escalates.",
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// CUSTOMER 360 (Account profile widget)
// ─────────────────────────────────────────────────────────────────────────────

export interface CustomerAccount {
  name: string;
  id: string;
  type: string;
  contractValue: string;
  predictedLifetimeValue: string;
  riskScore: number;
  segment: string;
  fleet: string;
  csa: string;
  lastOutage: string;
  digitalProducts: string[];
  topAssets: string[];
  recentEvents: { type: string; detail: string; time: string }[];
  nextBestAction: string;
  aiSummary: string;
}

// Reused by CustomerProfile widget on the home dashboard (now an account spotlight)
export const customerProfile: CustomerAccount = {
  name: "City of Austin — Smart City Fiber",
  id: "ACC-1001",
  type: "Municipality — 200+ connected sites",
  contractValue: "$6.84M YTD",
  predictedLifetimeValue: "$58.2M (10-yr)",
  riskScore: 8,
  segment: "Municipality — Smart City",
  fleet: "200+ sites across Austin metro — schools, libraries, traffic, public safety",
  csa: "Forged Fiber 37 Tier 1 Partner",
  lastOutage: "Last unplanned outage: 62 days ago (planned maintenance 4 days ago)",
  digitalProducts: ["Partner Portal", "Network Visibility", "Fiber Enablement Self-Service", "SLA Dashboard"],
  topAssets: ["City backbone ring ($2.4M YTD)", "Public safety transport ($1.8M YTD)", "School district fiber ($940K YTD)", "Smart traffic / IoT ($720K YTD)"],
  recentEvents: [
    { type: "Sales", detail: "Opportunity OPP-7821 ($24.2M expansion) in Construction stage", time: "Today" },
    { type: "Service", detail: "P2 latency case resolved by Network Operations Agent in 28 minutes", time: "2 hours ago" },
    { type: "Commercial", detail: "Fiber Enablement portal generated 6 qualified municipal leads", time: "3 days ago" },
    { type: "Digital", detail: "Partner Portal usage up 22% MoM; 94% of tickets opened digitally", time: "Last 30 days" },
  ],
  nextBestAction: "Share construction milestone update and SLA certification package for the $24.2M expansion. Sales Coach Agent drafted a route-diversity brief — review before Friday's QBR.",
  aiSummary: "City of Austin is a tier-1 strategic municipality with $6.84M YTD revenue and the strongest health score (94) in the South Central region. Network availability is 99.98%, CSAT is 4.82, and they are active adopters of Partner Portal + Network Visibility. The active $24.2M expansion opportunity (OPP-7821) is in Construction stage with a 89 Einstein win-likelihood score. Primary risks are minimal: one open P2 performance case currently with Network Operations Agent. CSM M. Alvarez should drive the expansion milestone and accelerate close before quarter-close.",
};

// Backwards-compat — AiCommandInput no longer reads canned responses,
// but keep the export in case other modules import it.
export const aiResponses: Record<string, string> = {};
