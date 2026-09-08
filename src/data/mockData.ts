// Mock data for Sysco Foods Sales + Service + Agentforce demo
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
    label: "Pipeline Value", value: "$842M", change: +14.2, trend: "up", period: "vs last quarter",
    chartData: [
      { month: "Jul", value: 680, previous: 612 }, { month: "Aug", value: 712, previous: 640 },
      { month: "Sep", value: 748, previous: 668 }, { month: "Oct", value: 782, previous: 698 },
      { month: "Nov", value: 812, previous: 720 }, { month: "Dec", value: 842, previous: 738 },
    ],
    breakdown: [
      { label: "Independent Restaurants", value: "$312M", pct: 37 },
      { label: "Regional Chains", value: "$248M", pct: 29 },
      { label: "Hospitality / Hotels", value: "$148M", pct: 18 },
      { label: "Healthcare & K-12", value: "$134M", pct: 16 },
    ],
    insight: "Independent restaurant pipeline accelerated +18% QoQ on local-sourcing campaigns. Hospitality recovering post-conference season. Einstein deal-scoring flagged 38 deals worth $94M as 'high win-likelihood' for the quarter.",
  },
  {
    label: "Win Rate", value: "32.4%", change: +3.8, trend: "up", period: "vs last quarter",
    chartData: [
      { month: "Jul", value: 27.6, previous: 25.4 }, { month: "Aug", value: 28.4, previous: 26.0 },
      { month: "Sep", value: 29.8, previous: 26.8 }, { month: "Oct", value: 30.6, previous: 27.4 },
      { month: "Nov", value: 31.5, previous: 28.0 }, { month: "Dec", value: 32.4, previous: 28.6 },
    ],
    breakdown: [
      { label: "Renewals", value: "84%", pct: 38 },
      { label: "Expansion", value: "46%", pct: 26 },
      { label: "New Logo (warm)", value: "28%", pct: 22 },
      { label: "New Logo (cold)", value: "11%", pct: 14 },
    ],
    insight: "Sales Coach Agent now surfaces three NBAs per opportunity. Reps using Agent-suggested actions close at 41% vs 24% baseline. Renewal win rate climbed to 84% after Einstein churn-risk alerts.",
  },
  {
    label: "Avg Weekly Order", value: "$8,640", change: +6.1, trend: "up", period: "per active account",
    chartData: [
      { month: "Jul", value: 7820, previous: 7480 }, { month: "Aug", value: 7980, previous: 7560 },
      { month: "Sep", value: 8120, previous: 7640 }, { month: "Oct", value: 8280, previous: 7740 },
      { month: "Nov", value: 8460, previous: 7860 }, { month: "Dec", value: 8640, previous: 7980 },
    ],
    breakdown: [
      { label: "Regional Chains", value: "$14,200", pct: 38 },
      { label: "Hotels / Casinos", value: "$11,800", pct: 28 },
      { label: "Independents", value: "$5,420", pct: 22 },
      { label: "Healthcare / K-12", value: "$7,640", pct: 12 },
    ],
    insight: "Menu Advisor Agent's seasonal-substitution recommendations lift basket by an average of $640 per order. Protein + produce attach rate at 78% among accounts using the AI-suggested order pad.",
  },
  {
    label: "Open Cases", value: "1,284", change: -8.4, trend: "down", period: "vs last week",
    chartData: [
      { month: "Jul", value: 1820, previous: 1940 }, { month: "Aug", value: 1740, previous: 1880 },
      { month: "Sep", value: 1620, previous: 1820 }, { month: "Oct", value: 1520, previous: 1760 },
      { month: "Nov", value: 1402, previous: 1720 }, { month: "Dec", value: 1284, previous: 1680 },
    ],
    breakdown: [
      { label: "Late / Missed Delivery", value: "412", pct: 32 },
      { label: "Order Short / Sub", value: "286", pct: 22 },
      { label: "Damaged Goods", value: "204", pct: 16 },
      { label: "Credit / Invoice", value: "382", pct: 30 },
    ],
    insight: "Service Agent (Agentforce) is auto-resolving 34% of order-status and ETA cases. Backlog down 8.4% week-over-week despite 12% case volume growth driven by storm-related delivery delays in the Southeast.",
  },
  {
    label: "CSAT", value: "4.62/5", change: +0.18, trend: "up", period: "rolling 30 days",
    chartData: [
      { month: "Jul", value: 4.32, previous: 4.18 }, { month: "Aug", value: 4.38, previous: 4.22 },
      { month: "Sep", value: 4.46, previous: 4.28 }, { month: "Oct", value: 4.52, previous: 4.34 },
      { month: "Nov", value: 4.58, previous: 4.40 }, { month: "Dec", value: 4.62, previous: 4.44 },
    ],
    breakdown: [
      { label: "Voice (live agent)", value: "4.71", pct: 36 },
      { label: "Voice (Agentforce)", value: "4.58", pct: 24 },
      { label: "Chat", value: "4.62", pct: 22 },
      { label: "Email / Web", value: "4.48", pct: 18 },
    ],
    insight: "Agent Assist's real-time reply drafts cut average handle time by 38 seconds while pushing CSAT higher. Customers in the Agentforce voice queue rate the experience 4.58/5 — within 0.13 of human agents.",
  },
  {
    label: "SLA Compliance", value: "94.8%", change: +2.4, trend: "up", period: "vs last quarter",
    chartData: [
      { month: "Jul", value: 89.2, previous: 86.8 }, { month: "Aug", value: 90.4, previous: 87.6 },
      { month: "Sep", value: 91.8, previous: 88.2 }, { month: "Oct", value: 92.6, previous: 88.8 },
      { month: "Nov", value: 93.6, previous: 89.4 }, { month: "Dec", value: 94.8, previous: 90.2 },
    ],
    breakdown: [
      { label: "Priority 1 (urgent)", value: "98.2%", pct: 30 },
      { label: "Priority 2", value: "95.6%", pct: 28 },
      { label: "Priority 3", value: "93.4%", pct: 24 },
      { label: "Priority 4", value: "90.8%", pct: 18 },
    ],
    insight: "Omni-channel routing + Agentforce triage moved SLA compliance above the 94% executive target. Predictive escalation now flags at-risk cases 22 minutes before breach on average.",
  },
  {
    label: "AI Deflection", value: "38.6%", change: +12.4, trend: "up", period: "of inbound contacts",
    chartData: [
      { month: "Jul", value: 18.4, previous: 12.8 }, { month: "Aug", value: 22.6, previous: 14.2 },
      { month: "Sep", value: 27.2, previous: 16.0 }, { month: "Oct", value: 31.8, previous: 18.4 },
      { month: "Nov", value: 35.2, previous: 22.6 }, { month: "Dec", value: 38.6, previous: 26.2 },
    ],
    breakdown: [
      { label: "Order status / ETA", value: "62%", pct: 32 },
      { label: "Reorder / Standing PO", value: "48%", pct: 24 },
      { label: "Credit / Returns (≤$500)", value: "41%", pct: 22 },
      { label: "Invoice copies", value: "78%", pct: 22 },
    ],
    insight: "Sysco Service Agent (Agentforce) now deflects 38.6% of inbound contacts without human handoff. Each point of deflection saves ~$1.4M annually in contact-center cost.",
  },
  {
    label: "At-Risk ARR", value: "$24.8M", change: -18.6, trend: "down", period: "vs last quarter",
    chartData: [
      { month: "Jul", value: 38.4, previous: 42.6 }, { month: "Aug", value: 35.2, previous: 41.0 },
      { month: "Sep", value: 32.6, previous: 39.4 }, { month: "Oct", value: 29.8, previous: 38.2 },
      { month: "Nov", value: 27.2, previous: 36.4 }, { month: "Dec", value: 24.8, previous: 35.0 },
    ],
    breakdown: [
      { label: "Inactive 30+ days", value: "$9.2M", pct: 37 },
      { label: "Repeated late deliveries", value: "$6.4M", pct: 26 },
      { label: "Competitor activity", value: "$5.4M", pct: 22 },
      { label: "Price-pressured", value: "$3.8M", pct: 15 },
    ],
    insight: "Sales Coach Agent flagged 84 accounts; CSMs intervened on 62 and saved $11.4M ARR last quarter. Remaining $24.8M concentrated in 38 accounts — 12 require executive sponsorship.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SALES CLOUD
// ─────────────────────────────────────────────────────────────────────────────

export const revenueChartData = [
  { month: "Jul", revenue: 142000000, target: 130000000 },
  { month: "Aug", revenue: 148000000, target: 135000000 },
  { month: "Sep", revenue: 156000000, target: 142000000 },
  { month: "Oct", revenue: 164000000, target: 148000000 },
  { month: "Nov", revenue: 172000000, target: 156000000 },
  { month: "Dec", revenue: 184000000, target: 162000000 },
];

export type OpportunityStage = "Prospect" | "Qualify" | "Propose" | "Negotiate" | "Closed Won" | "Closed Lost";

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
  { id: "OPP-7821", account: "Cheesecake Factory — Northeast", segment: "Regional Chain", amount: 2_840_000, stage: "Negotiate", closeDate: "Dec 28", owner: "M. Alvarez", einsteinScore: 87, nba: "Send menu-cost analysis with seasonal protein alternatives." },
  { id: "OPP-7834", account: "Hyatt Regency — TX Cluster", segment: "Hospitality", amount: 1_920_000, stage: "Propose", closeDate: "Jan 14", owner: "D. Chen", einsteinScore: 78, nba: "Loop in produce specialist for banquet-season volume commitment." },
  { id: "OPP-7842", account: "Bluebird Diner Group", segment: "Independent", amount: 480_000, stage: "Qualify", closeDate: "Jan 22", owner: "R. Patel", einsteinScore: 64, nba: "Schedule on-site test kitchen with chef-owner." },
  { id: "OPP-7855", account: "Mercy Health Network — Midwest", segment: "Healthcare", amount: 3_200_000, stage: "Negotiate", closeDate: "Dec 30", owner: "S. Okafor", einsteinScore: 92, nba: "Confirm GPO compliance + lock-in pricing for FY26." },
  { id: "OPP-7861", account: "Cosmo Casinos — Las Vegas", segment: "Hospitality", amount: 4_180_000, stage: "Propose", closeDate: "Feb 10", owner: "M. Alvarez", einsteinScore: 81, nba: "Bundle prime cuts + seafood program; surface 3-yr TCO." },
  { id: "OPP-7878", account: "Brookline Public Schools", segment: "K-12", amount: 720_000, stage: "Closed Won", closeDate: "Dec 04", owner: "L. Kim", einsteinScore: 95, nba: "Kick off 90-day onboarding with cafeteria director." },
  { id: "OPP-7882", account: "Tap House Brewing Co.", segment: "Independent", amount: 312_000, stage: "Qualify", closeDate: "Feb 02", owner: "R. Patel", einsteinScore: 58, nba: "Share craft-beer-friendly bar menu reference deck." },
  { id: "OPP-7891", account: "St. Luke's Hospital System", segment: "Healthcare", amount: 1_640_000, stage: "Prospect", closeDate: "Mar 18", owner: "S. Okafor", einsteinScore: 52, nba: "Trigger Marketing Cloud nurture: patient-centric menu series." },
  { id: "OPP-7902", account: "Marriott Resorts — FL", segment: "Hospitality", amount: 2_240_000, stage: "Negotiate", closeDate: "Jan 08", owner: "D. Chen", einsteinScore: 84, nba: "Counter with seafood + wine bundle; CSM ride-along." },
  { id: "OPP-7910", account: "Burger Hub Franchise (28 stores)", segment: "Regional Chain", amount: 1_120_000, stage: "Propose", closeDate: "Feb 24", owner: "M. Alvarez", einsteinScore: 71, nba: "Demo Sysco Shop AI reorder with their POS data." },
  { id: "OPP-7920", account: "Sunrise Senior Living", segment: "Healthcare", amount: 980_000, stage: "Qualify", closeDate: "Mar 05", owner: "L. Kim", einsteinScore: 67, nba: "Send heart-healthy / soft-diet specification sheet." },
  { id: "OPP-7934", account: "The Local Bistro Group", segment: "Independent", amount: 540_000, stage: "Closed Lost", closeDate: "Nov 28", owner: "R. Patel", einsteinScore: 22, nba: "Re-engage in 60 days; lost on freight surcharge." },
];

export const pipelineByStage = (["Prospect", "Qualify", "Propose", "Negotiate", "Closed Won", "Closed Lost"] as OpportunityStage[]).map((stage) => ({
  stage,
  count: opportunities.filter((o) => o.stage === stage).length,
  value: opportunities.filter((o) => o.stage === stage).reduce((s, o) => s + o.amount, 0),
}));

// ─────────────────────────────────────────────────────────────────────────────
// ACCOUNTS (Top Accounts table + Account 360)
// ─────────────────────────────────────────────────────────────────────────────

export interface SyscoAccount {
  id: string;
  name: string;
  segment: string;
  region: string;
  csm: string;
  weeklySpend: number;
  ytdSpend: number;
  healthScore: number;
  lastOrderDays: number;
  trend: "up" | "down" | "flat";
  churnRisk: "low" | "medium" | "high";
  openCases: number;
}

export const topAccounts: SyscoAccount[] = [
  { id: "ACC-1001", name: "Cheesecake Factory — Northeast", segment: "Regional Chain", region: "Northeast", csm: "M. Alvarez", weeklySpend: 142_000, ytdSpend: 6_840_000, healthScore: 92, lastOrderDays: 2, trend: "up", churnRisk: "low", openCases: 1 },
  { id: "ACC-1002", name: "Hyatt Regency — TX Cluster", segment: "Hospitality", region: "South Central", csm: "D. Chen", weeklySpend: 98_000, ytdSpend: 4_620_000, healthScore: 78, lastOrderDays: 4, trend: "flat", churnRisk: "low", openCases: 2 },
  { id: "ACC-1003", name: "Cosmo Casinos — Las Vegas", segment: "Hospitality", region: "Southwest", csm: "M. Alvarez", weeklySpend: 186_000, ytdSpend: 8_240_000, healthScore: 88, lastOrderDays: 1, trend: "up", churnRisk: "low", openCases: 0 },
  { id: "ACC-1004", name: "Mercy Health Network", segment: "Healthcare", region: "Midwest", csm: "S. Okafor", weeklySpend: 124_000, ytdSpend: 5_980_000, healthScore: 84, lastOrderDays: 3, trend: "up", churnRisk: "low", openCases: 1 },
  { id: "ACC-1005", name: "Bluebird Diner Group (12 locations)", segment: "Independent", region: "Northeast", csm: "R. Patel", weeklySpend: 22_400, ytdSpend: 1_120_000, healthScore: 58, lastOrderDays: 11, trend: "down", churnRisk: "high", openCases: 4 },
  { id: "ACC-1006", name: "Sunrise Senior Living", segment: "Healthcare", region: "West", csm: "L. Kim", weeklySpend: 38_000, ytdSpend: 1_840_000, healthScore: 72, lastOrderDays: 5, trend: "flat", churnRisk: "medium", openCases: 2 },
  { id: "ACC-1007", name: "Brookline Public Schools", segment: "K-12", region: "Northeast", csm: "L. Kim", weeklySpend: 14_200, ytdSpend: 612_000, healthScore: 90, lastOrderDays: 2, trend: "up", churnRisk: "low", openCases: 0 },
  { id: "ACC-1008", name: "Tap House Brewing Co.", segment: "Independent", region: "South Central", csm: "R. Patel", weeklySpend: 8_400, ytdSpend: 384_000, healthScore: 64, lastOrderDays: 14, trend: "down", churnRisk: "high", openCases: 3 },
  { id: "ACC-1009", name: "Marriott Resorts — FL", segment: "Hospitality", region: "Southeast", csm: "D. Chen", weeklySpend: 162_000, ytdSpend: 7_240_000, healthScore: 81, lastOrderDays: 2, trend: "up", churnRisk: "low", openCases: 1 },
  { id: "ACC-1010", name: "Burger Hub Franchise (28 stores)", segment: "Regional Chain", region: "Mountain", csm: "M. Alvarez", weeklySpend: 84_000, ytdSpend: 3_640_000, healthScore: 76, lastOrderDays: 3, trend: "flat", churnRisk: "medium", openCases: 2 },
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
  category: "Late Delivery" | "Order Short" | "Damaged" | "Credit / Invoice" | "Equipment Service" | "Product Quality";
  aiSummary: string;
  agentAssistDeflected?: boolean;
}

export const cases: ServiceCase[] = [
  { id: "CASE-44201", subject: "Truck #847 ETA — Cheesecake Factory Boston", account: "Cheesecake Factory — Northeast", channel: "Voice", priority: "P2", status: "In Progress", ageHours: 0.5, slaHours: 4, owner: "Agentforce", category: "Late Delivery", aiSummary: "Customer asking for revised ETA on weekly produce drop. Truck delayed 90 min due to traffic on I-90.", agentAssistDeflected: true },
  { id: "CASE-44198", subject: "Missing case of ribeye on PO 88421", account: "Cosmo Casinos — Las Vegas", channel: "Email", priority: "P2", status: "New", ageHours: 1.2, slaHours: 8, owner: "Unassigned", category: "Order Short", aiSummary: "Receiving reports 1 of 4 cases of bone-in ribeye missing. Customer ordered as P1 banquet event tonight." },
  { id: "CASE-44192", subject: "Credit request — spoiled romaine (12 cases)", account: "Mercy Health Network", channel: "Chat", priority: "P3", status: "In Progress", ageHours: 3.4, slaHours: 24, owner: "J. Rivera", category: "Credit / Invoice", aiSummary: "12 cases of romaine arrived warm; receiving photos attached. Within auto-credit policy (<$500 per case)." },
  { id: "CASE-44188", subject: "Walk-in cooler temperature alarm", account: "Hyatt Regency — TX Cluster", channel: "Voice", priority: "P1", status: "Escalated", ageHours: 0.8, slaHours: 2, owner: "T. Nguyen (Field Svc)", category: "Equipment Service", aiSummary: "Chef reports walk-in at 48°F; full beef + dairy inventory at risk. Technician dispatched, ETA 35 min." },
  { id: "CASE-44175", subject: "Standing order paused — need confirmation", account: "Bluebird Diner Group", channel: "Email", priority: "P3", status: "Waiting on Customer", ageHours: 28, slaHours: 48, owner: "A. Brooks", category: "Late Delivery", aiSummary: "Customer requested 2-week pause; no response to confirmation email since Tuesday. Churn-risk signal." },
  { id: "CASE-44170", subject: "Invoice INV-998421 disputed", account: "Burger Hub Franchise", channel: "Web", priority: "P3", status: "In Progress", ageHours: 6, slaHours: 24, owner: "Agentforce", category: "Credit / Invoice", aiSummary: "Customer claims duplicate billing on freight surcharge. Reviewing PO + delivery receipts — preliminary: charge is valid.", agentAssistDeflected: true },
  { id: "CASE-44164", subject: "Salmon quality complaint — soft texture", account: "Marriott Resorts — FL", channel: "Chat", priority: "P2", status: "In Progress", ageHours: 4.2, slaHours: 8, owner: "J. Rivera", category: "Product Quality", aiSummary: "Sous chef rates 6/10 on Atlantic salmon delivered 12/3. Lot # traced to supplier batch with 2 prior complaints." },
  { id: "CASE-44158", subject: "Late delivery — 2nd this week", account: "Tap House Brewing Co.", channel: "Voice", priority: "P2", status: "Escalated", ageHours: 1.6, slaHours: 4, owner: "M. Alvarez (CSM)", category: "Late Delivery", aiSummary: "Repeat late-delivery pattern. Sales Coach Agent flagged account as churn-risk; CSM intervention requested." },
  { id: "CASE-44150", subject: "Need invoice copies for FY tax audit", account: "Brookline Public Schools", channel: "Web", priority: "P4", status: "Resolved", ageHours: 0.2, slaHours: 48, owner: "Agentforce", category: "Credit / Invoice", aiSummary: "Customer requested 14 invoice copies. Service Agent generated PDF bundle and emailed within 90 seconds.", agentAssistDeflected: true },
  { id: "CASE-44142", subject: "Substitution requested — no skinless chicken thigh", account: "Sunrise Senior Living", channel: "SMS", priority: "P3", status: "Resolved", ageHours: 0.4, slaHours: 8, owner: "Agentforce", category: "Order Short", aiSummary: "Out-of-stock alert. Agent proposed boneless dark-meat substitute with price match; customer approved.", agentAssistDeflected: true },
];

// Case-channel breakdown for the home dashboard
export const channelData = [
  { channel: "Voice (Service Cloud Voice)", revenue: 0, sessions: 8400, conversion: 4.71, roas: null, contacts: "8.4K", deflected: 28, csat: 4.71 },
  { channel: "Chat (Web + Mobile)",          revenue: 0, sessions: 6200, conversion: 4.62, roas: null, contacts: "6.2K", deflected: 52, csat: 4.62 },
  { channel: "Email",                        revenue: 0, sessions: 4800, conversion: 4.48, roas: null, contacts: "4.8K", deflected: 24, csat: 4.48 },
  { channel: "Web Self-Service",             revenue: 0, sessions: 11200, conversion: 4.55, roas: null, contacts: "11.2K", deflected: 78, csat: 4.55 },
  { channel: "SMS",                          revenue: 0, sessions: 2100, conversion: 4.58, roas: null, contacts: "2.1K", deflected: 64, csat: 4.58 },
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
  category: "Service" | "Sales" | "Sysco Custom";
}

export const agents: Agent[] = [
  {
    id: "service",
    name: "Sysco Service Agent",
    status: "acting",
    audience: "Customer",
    category: "Service",
    insight: "Handling 1,840 customer voice + chat sessions today. Auto-resolving order status, delivery ETA, reorder, and invoice copy requests without human handoff.",
    confidence: 94,
    action: "Expand deflection to credit requests under $500 with auto-issued credit memo",
    impact: "+$4.2M annual cost savings",
    icon: "📞",
  },
  {
    id: "agentAssist",
    name: "Agent Assist (Employee)",
    status: "monitoring",
    audience: "Employee",
    category: "Service",
    insight: "Real-time case summarization + reply drafts active on 78% of human-handled cases. AHT reduced by 38 seconds. CSAT lift of +0.18.",
    confidence: 91,
    action: "Activate next-best-action recommendations on Tier-2 escalations",
    impact: "-2.4 min AHT / +0.22 CSAT",
    icon: "🎧",
  },
  {
    id: "salesCoach",
    name: "Sales Coach Agent",
    status: "alert",
    audience: "Employee",
    category: "Sales",
    insight: "84 high-value accounts flagged as at-risk this quarter. 38 deals worth $94M identified as high win-likelihood; 12 require executive sponsorship to close.",
    confidence: 89,
    action: "Trigger meeting-prep briefs + outreach cadence for top 12 at-risk accounts",
    impact: "$11.4M ARR protected",
    icon: "📈",
  },
  {
    id: "reorder",
    name: "Reorder Agent (Sysco Custom)",
    status: "acting",
    audience: "Customer",
    category: "Sysco Custom",
    insight: "Pattern-based reorder suggestions sent to 4,280 active accounts. 62% acceptance rate. Auto-orders for standing-PO accounts running 99.4% on-time.",
    confidence: 93,
    action: "Roll out predictive reorder to 1,800 additional independent restaurants",
    impact: "+$28M incremental quarterly revenue",
    icon: "🔄",
  },
  {
    id: "menuAdvisor",
    name: "Menu Advisor Agent (Sysco Custom)",
    status: "monitoring",
    audience: "Customer",
    category: "Sysco Custom",
    insight: "Surfaces seasonal SKU swaps + margin-optimized menu items. 78% attach rate on AI-suggested produce + protein bundles. Avg basket lift: +$640.",
    confidence: 87,
    action: "Push winter root-vegetable program to 2,400 independent restaurant accounts",
    impact: "+$8.4M incremental basket value",
    icon: "🍽️",
  },
  {
    id: "creditReturns",
    name: "Credit & Returns Agent (Sysco Custom)",
    status: "monitoring",
    audience: "Customer",
    category: "Sysco Custom",
    insight: "Auto-handles credit memos within policy thresholds. 41% of credit requests resolved end-to-end without rep involvement; average cycle time 4 minutes.",
    confidence: 85,
    action: "Raise auto-credit ceiling from $500 to $1,000 with photo evidence",
    impact: "$2.8M / yr cost-to-serve reduction",
    icon: "📑",
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
    title: "Contact Center Deflection Lift",
    trigger: "Service Cloud detects 42% of inbound volume is order-status + invoice-copy traffic",
    steps: [
      { label: "Volume Analyzed", detail: "Einstein Conversation Mining clusters intents from 28K transcripts", status: "complete" },
      { label: "Sysco Service Agent Activated", detail: "Agentforce handles top 4 intents with backend SAP + SFDC tools", status: "complete" },
      { label: "Live Pilot — 3 Regions", detail: "Northeast + Texas + Florida live; 38.6% deflection in week 4", status: "active" },
      { label: "National Rollout", detail: "Expand to all 18 regions; layer in credit-issuance tools", status: "pending" },
      { label: "Measured Impact", detail: "Projected $42M annual cost-to-serve reduction", status: "pending" },
    ],
    impact: "$42M / yr cost saved",
    deepDive: {
      rootCause: "Sysco's contact center handles 1.8M inbound contacts annually. Conversation mining shows 42% are repetitive intents (order status, ETA, reorder, invoice copy) that don't require human judgment — they require backend system lookups. Agentforce can authenticate the caller, query SAP + SFDC, and respond in under 30 seconds.",
      dataPoints: [
        "Annual inbound contacts: 1.8M (voice + chat + email)",
        "Repetitive-intent share: 42% (order status 18%, ETA 12%, reorder 7%, invoice copy 5%)",
        "Current deflection: 38.6% in pilot regions (vs 12% pre-Agentforce)",
        "Customer CSAT on deflected contacts: 4.58/5 (within 0.13 of human agents)",
        "Average handle time on deflected contact: 28 seconds (vs 4m12s human)",
      ],
      financialImpact: [
        { label: "Pilot deflection rate", value: "38.6%" },
        { label: "Cost per human contact", value: "$8.40" },
        { label: "Cost per Agentforce contact", value: "$0.62" },
        { label: "Projected annual savings", value: "$42M" },
        { label: "Payback period", value: "4.2 months" },
      ],
      recommendation: "Complete the national rollout of Sysco Service Agent across all 18 regions. Expand the tool surface to include automated credit memos up to $1,000 with photo evidence, and standing-PO modifications. Keep human escalation explicit for any case touching food-safety, regulatory complaints, or accounts on Sales Coach Agent's at-risk list.",
    },
  },
  {
    id: "menu",
    title: "Menu Advisor — Seasonal Substitution",
    trigger: "Produce-cost spikes detected on 14 SKUs heading into Q1; 1,840 menus exposed",
    steps: [
      { label: "Cost Anomaly Detected", detail: "Einstein Discovery flags >8% wholesale increase on 14 produce SKUs", status: "complete" },
      { label: "Menu Impact Modeled", detail: "Menu Advisor cross-references 1,840 customer menus using those SKUs", status: "complete" },
      { label: "Substitutions Proposed", detail: "Per-account AI recommendations with margin + flavor profile match", status: "active" },
      { label: "Customer Outreach", detail: "Marketing Cloud journey + rep talking points pushed", status: "pending" },
      { label: "Protect Customer Margin", detail: "Avoid menu-price increases on price-sensitive accounts", status: "pending" },
    ],
    impact: "+$8.4M basket value",
    deepDive: {
      rootCause: "Q1 produce cost volatility (lettuce, berries, citrus) historically drives independent restaurants to cut category spend or switch distributors. Menu Advisor preempts this by surfacing margin-equivalent substitutions before the customer sees the price shock on their next invoice.",
      dataPoints: [
        "Cost-spiked SKUs: 14 (avg wholesale increase +12.4%)",
        "Customer menus using those SKUs: 1,840",
        "Acceptance rate on AI-suggested substitutions: 78%",
        "Avg basket lift per accepting account: +$640 / week",
        "Customer retention vs control: +6.2 percentage points",
      ],
      financialImpact: [
        { label: "Accounts addressable", value: "1,840" },
        { label: "Expected acceptance", value: "78%" },
        { label: "Weekly basket lift / account", value: "+$640" },
        { label: "Quarterly revenue impact", value: "+$8.4M" },
        { label: "Customer retention impact", value: "+$3.1M ARR" },
      ],
      recommendation: "Trigger Menu Advisor proactive outreach 21 days before each customer's standing order would be impacted. Pair with rep talking points so CSMs can have substantive conversations rather than reactive damage control. Track basket-lift and retention by region for the FY25 QBR.",
    },
  },
  {
    id: "atrisk",
    title: "At-Risk Account Save Play",
    trigger: "Sales Coach Agent flags 84 high-value accounts inactive 30+ days or repeated late deliveries",
    steps: [
      { label: "Risk Signals Aggregated", detail: "Einstein combines order cadence, case history, NPS, and competitor visit data", status: "complete" },
      { label: "Accounts Ranked", detail: "84 accounts scored; top 12 require executive sponsorship", status: "complete" },
      { label: "Meeting Prep Generated", detail: "Auto-built brief with order history, complaints, and recovery offer", status: "active" },
      { label: "CSM Intervention", detail: "62 CSMs engaged this quarter; 78% save rate observed", status: "active" },
      { label: "ARR Protected", detail: "$11.4M saved YTD; remaining $24.8M in active workflow", status: "pending" },
    ],
    impact: "$11.4M ARR protected",
    deepDive: {
      rootCause: "Top 8% of accounts drive 52% of revenue. Late-delivery patterns, repeated quality complaints, and reduced order cadence are leading indicators of churn 60-90 days before the contract event. Sales Coach Agent aggregates these signals from Service Cloud, Data Cloud, and order history into a single risk score so CSMs can act early.",
      dataPoints: [
        "High-value accounts monitored: 1,240",
        "Currently flagged at-risk: 84 ($24.8M ARR)",
        "Save rate when CSM engages within 7 days: 78%",
        "Save rate when CSM engages after 30 days: 34%",
        "Top churn signal: 2+ late deliveries in a 14-day window (correlates to 64% of churn events)",
      ],
      financialImpact: [
        { label: "ARR at risk", value: "$24.8M" },
        { label: "YTD saves", value: "$11.4M" },
        { label: "Avg recovery cost", value: "$18K / account" },
        { label: "ROI on save plays", value: "23x" },
        { label: "Projected FY save", value: "$18.6M" },
      ],
      recommendation: "Push the top 12 executive-sponsor accounts into a structured save play this week. For the remaining 72, queue CSM outreach with auto-generated meeting briefs from Sales Coach Agent. Wire repeated-late-delivery and quality-complaint signals into the Agentforce Service Agent so it can proactively offer credits or expedited replacements before the customer escalates.",
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
  name: "Cheesecake Factory — Northeast",
  id: "ACC-1001",
  type: "Regional Chain — 38 locations",
  contractValue: "$6.84M YTD",
  predictedLifetimeValue: "$42.1M (5-yr)",
  riskScore: 12,
  segment: "Regional Chain — Casual Dining",
  fleet: "38 locations across NY, NJ, MA, PA, CT — weekly delivery on Tue/Fri",
  csa: "Sysco Brand Loyalty — Tier 1",
  lastOutage: "Last order: 2 days ago ($142K)",
  digitalProducts: ["Sysco Shop AI", "Standing PO", "Menu Advisor", "Quality Dashboard"],
  topAssets: ["Sysco Imperial proteins ($2.4M YTD)", "Produce program ($1.8M YTD)", "Seafood specialty ($940K YTD)", "Bakery & dessert ($720K YTD)"],
  recentEvents: [
    { type: "Sales", detail: "Opportunity OPP-7821 ($2.84M expansion) in Negotiate stage", time: "Today" },
    { type: "Service", detail: "Truck #847 ETA inquiry resolved by Service Agent in 38 seconds", time: "2 hours ago" },
    { type: "Commercial", detail: "Menu Advisor proposed 6 winter protein substitutions; chef-owner accepted 5", time: "3 days ago" },
    { type: "Digital", detail: "Sysco Shop AI usage up 18% MoM; 92% of orders now placed digitally", time: "Last 30 days" },
  ],
  nextBestAction: "Loop in produce specialist for Negotiate-stage expansion. Sales Coach Agent drafted a menu-cost analysis with three seasonal alternatives — review before Friday's QBR.",
  aiSummary: "Cheesecake Factory Northeast is a tier-1 strategic account with $6.84M YTD spend and the strongest health score (92) in the Northeast region. Weekly cadence is steady, CSAT is 4.78, and they're an active adopter of Sysco Shop AI + Menu Advisor. The active $2.84M expansion opportunity (OPP-7821) is in Negotiate stage with an 87 Einstein win-likelihood score. Primary risks are minimal: one open P2 case (delivery ETA) currently with Service Agent. CSM M. Alvarez should drive the produce-program expansion and accelerate the negotiation before quarter-close.",
};

// Backwards-compat — AiCommandInput no longer reads canned responses,
// but keep the export in case other modules import it.
export const aiResponses: Record<string, string> = {};
