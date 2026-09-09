// Mock data for Honeywell Industrial Automation — Contact Center + Sales/Service demo
// Scope: Salesforce Service Cloud, Service Cloud Voice, Sales Cloud, Data Cloud, Agentforce
// Business context: Honeywell Industrial Automation — Process Solutions (Experion PKS, UOP),
// Sensing & Safety Technologies, Productivity Solutions & Services (scanners, mobile computers),
// and Warehouse & Workflow Solutions. Customers = process plants, warehouses, distributors,
// OEMs and utilities. The contact center serves customers, distributors AND field technicians.

// ─────────────────────────────────────────────────────────────────────────────
// KPI TILES — contact center first
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
    label: "AI Deflection", value: "43.6%", change: +11.2, trend: "up", period: "of inbound contacts",
    chartData: [
      { month: "Jul", value: 24.8, previous: 17.2 }, { month: "Aug", value: 29.4, previous: 19.6 },
      { month: "Sep", value: 33.2, previous: 21.8 }, { month: "Oct", value: 37.6, previous: 24.4 },
      { month: "Nov", value: 40.8, previous: 27.2 }, { month: "Dec", value: 43.6, previous: 30.0 },
    ],
    breakdown: [
      { label: "Order & shipment status", value: "71%", pct: 30 },
      { label: "Scanner / mobility how-to", value: "58%", pct: 26 },
      { label: "Warranty & RMA eligibility", value: "49%", pct: 22 },
      { label: "Manual / firmware lookups", value: "78%", pct: 22 },
    ],
    insight: "Agentforce resolves 43.6% of inbound contacts end to end across voice, chat, and the distributor portal. Each point of deflection removes roughly $1.4M of annual cost-to-serve.",
  },
  {
    label: "First Contact Resolution", value: "82.4%", change: +6.8, trend: "up", period: "vs last quarter",
    chartData: [
      { month: "Jul", value: 71.2, previous: 68.4 }, { month: "Aug", value: 73.6, previous: 69.2 },
      { month: "Sep", value: 76.0, previous: 70.4 }, { month: "Oct", value: 78.4, previous: 71.8 },
      { month: "Nov", value: 80.6, previous: 73.0 }, { month: "Dec", value: 82.4, previous: 74.6 },
    ],
    breakdown: [
      { label: "Sensing & safety products", value: "88.2%", pct: 28 },
      { label: "Scanners & mobile computers", value: "85.4%", pct: 28 },
      { label: "Experion / control systems", value: "74.1%", pct: 26 },
      { label: "Warehouse automation", value: "78.9%", pct: 18 },
    ],
    insight: "Technical Support Agent grounds every answer in the product knowledge base, service bulletins, and installed-base records, so advisors resolve on first contact instead of booking a callback.",
  },
  {
    label: "Avg Handle Time", value: "6m 12s", change: -21.4, trend: "down", period: "vs last quarter",
    chartData: [
      { month: "Jul", value: 8.4, previous: 9.1 }, { month: "Aug", value: 8.0, previous: 9.0 },
      { month: "Sep", value: 7.5, previous: 8.8 }, { month: "Oct", value: 7.0, previous: 8.6 },
      { month: "Nov", value: 6.6, previous: 8.4 }, { month: "Dec", value: 6.2, previous: 8.2 },
    ],
    breakdown: [
      { label: "Voice (live advisor)", value: "7m 48s", pct: 34 },
      { label: "Chat", value: "5m 20s", pct: 26 },
      { label: "Email / web case", value: "6m 05s", pct: 22 },
      { label: "Technician hotline", value: "5m 44s", pct: 18 },
    ],
    insight: "Real-time Agent Assist drafts replies, pulls serial-number history, and writes the case wrap automatically — saving 47 seconds per contact on after-call work alone.",
  },
  {
    label: "Open Cases", value: "1,842", change: -14.6, trend: "down", period: "vs last week",
    chartData: [
      { month: "Jul", value: 3120, previous: 3380 }, { month: "Aug", value: 2840, previous: 3260 },
      { month: "Sep", value: 2510, previous: 3080 }, { month: "Oct", value: 2240, previous: 2940 },
      { month: "Nov", value: 2010, previous: 2810 }, { month: "Dec", value: 1842, previous: 2680 },
    ],
    breakdown: [
      { label: "Technical support", value: "628", pct: 34 },
      { label: "Order & delivery", value: "486", pct: 26 },
      { label: "Warranty / RMA", value: "402", pct: 22 },
      { label: "Field service dispatch", value: "326", pct: 18 },
    ],
    insight: "Backlog is down 14.6% week over week despite 9% higher volume, because Agentforce closes routine order-status and RMA-eligibility cases without a queue.",
  },
  {
    label: "CSAT", value: "4.61/5", change: +0.17, trend: "up", period: "rolling 30 days",
    chartData: [
      { month: "Jul", value: 4.30, previous: 4.14 }, { month: "Aug", value: 4.36, previous: 4.20 },
      { month: "Sep", value: 4.44, previous: 4.24 }, { month: "Oct", value: 4.51, previous: 4.30 },
      { month: "Nov", value: 4.56, previous: 4.36 }, { month: "Dec", value: 4.61, previous: 4.42 },
    ],
    breakdown: [
      { label: "Voice (live advisor)", value: "4.72", pct: 32 },
      { label: "Voice (Agentforce)", value: "4.54", pct: 22 },
      { label: "Chat", value: "4.60", pct: 24 },
      { label: "Technician hotline", value: "4.66", pct: 22 },
    ],
    insight: "Field technicians rate the hotline 4.66 since Field Service Agent began pre-loading wiring diagrams, torque specs, and part availability before the call connects.",
  },
  {
    label: "Equipment-Down MTTR", value: "3.8 hrs", change: -26.9, trend: "down", period: "vs last quarter",
    chartData: [
      { month: "Jul", value: 6.2, previous: 6.8 }, { month: "Aug", value: 5.8, previous: 6.6 },
      { month: "Sep", value: 5.2, previous: 6.4 }, { month: "Oct", value: 4.6, previous: 6.2 },
      { month: "Nov", value: 4.1, previous: 6.0 }, { month: "Dec", value: 3.8, previous: 5.8 },
    ],
    breakdown: [
      { label: "Sortation / conveyor lines", value: "3.1 hrs", pct: 30 },
      { label: "Experion control nodes", value: "4.6 hrs", pct: 28 },
      { label: "Gas & flame detection", value: "2.9 hrs", pct: 22 },
      { label: "Scanning / mobility fleet", value: "4.2 hrs", pct: 20 },
    ],
    insight: "Field Service Agent triages the fault code, confirms the part is on the van, and dispatches the nearest qualified technician — cutting mean time to repair by nearly 27%.",
  },
  {
    label: "SLA Compliance", value: "96.8%", change: +4.1, trend: "up", period: "vs last quarter",
    chartData: [
      { month: "Jul", value: 89.6, previous: 87.4 }, { month: "Aug", value: 91.2, previous: 88.2 },
      { month: "Sep", value: 92.8, previous: 89.0 }, { month: "Oct", value: 94.4, previous: 90.2 },
      { month: "Nov", value: 95.8, previous: 91.4 }, { month: "Dec", value: 96.8, previous: 92.4 },
    ],
    breakdown: [
      { label: "P1 line-down", value: "99.2%", pct: 30 },
      { label: "P2 degraded", value: "97.4%", pct: 26 },
      { label: "P3 standard", value: "95.6%", pct: 24 },
      { label: "P4 request", value: "92.8%", pct: 20 },
    ],
    insight: "Omni-channel routing plus predictive escalation flags at-risk cases 22 minutes before breach, keeping premium service-contract customers inside their contracted response windows.",
  },
  {
    label: "Contract ARR at Risk", value: "$22.4M", change: -16.8, trend: "down", period: "vs last quarter",
    chartData: [
      { month: "Jul", value: 34.2, previous: 38.0 }, { month: "Aug", value: 31.4, previous: 36.8 },
      { month: "Sep", value: 28.8, previous: 35.4 }, { month: "Oct", value: 26.2, previous: 34.0 },
      { month: "Nov", value: 24.1, previous: 32.6 }, { month: "Dec", value: 22.4, previous: 31.2 },
    ],
    breakdown: [
      { label: "Repeat equipment-down events", value: "$8.6M", pct: 38 },
      { label: "Lapsed renewals", value: "$5.8M", pct: 26 },
      { label: "Competitive displacement", value: "$4.4M", pct: 20 },
      { label: "Obsolescence / migration stalls", value: "$3.6M", pct: 16 },
    ],
    insight: "Account Growth Agent links case history to renewal dates: accounts with 2+ P1 events in 60 days renew at 44%. Early intervention recovered $9.8M of contract ARR year to date.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SALES CLOUD — service contracts, migrations, automation projects
// ─────────────────────────────────────────────────────────────────────────────

export const revenueChartData = [
  { month: "Jul", revenue: 68000000, target: 64000000 },
  { month: "Aug", revenue: 74000000, target: 70000000 },
  { month: "Sep", revenue: 81000000, target: 76000000 },
  { month: "Oct", revenue: 88000000, target: 82000000 },
  { month: "Nov", revenue: 94000000, target: 88000000 },
  { month: "Dec", revenue: 102000000, target: 94000000 },
];

export type OpportunityStage =
  | "Qualification"
  | "Solution Design"
  | "Proposal"
  | "Negotiation"
  | "Commissioning"
  | "Closed Won"
  | "Closed Lost";

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
  { id: "OPP-7821", account: "Gulf Coast Refining — Experion Migration", segment: "Process Plant", amount: 18_400_000, stage: "Commissioning", closeDate: "Dec 28", owner: "M. Alvarez", einsteinScore: 89, nba: "Share the cutover runbook and confirm the site-acceptance test window with plant operations." },
  { id: "OPP-7834", account: "Meridian Logistics — Sortation Upgrade", segment: "Warehouse / DC", amount: 9_600_000, stage: "Proposal", closeDate: "Jan 14", owner: "D. Chen", einsteinScore: 84, nba: "Attach a 5-year connected service contract; uptime data supports a 3.1% throughput case." },
  { id: "OPP-7842", account: "Northbridge Chemicals — Safety System Refresh", segment: "Process Plant", amount: 12_200_000, stage: "Closed Won", closeDate: "Jan 22", owner: "R. Patel", einsteinScore: 91, nba: "Hand off to commissioning; schedule gas-detection calibration training for site EHS." },
  { id: "OPP-7855", account: "Cascade Distribution — Scanner Fleet Renewal", segment: "Distributor", amount: 4_800_000, stage: "Negotiation", closeDate: "Dec 30", owner: "S. Okafor", einsteinScore: 78, nba: "Counter the competitive bid with total-cost-of-ownership data from repair-rate history." },
  { id: "OPP-7861", account: "Lakeside Utilities — Gas Detection Expansion", segment: "Utility", amount: 3_400_000, stage: "Solution Design", closeDate: "Feb 10", owner: "M. Alvarez", einsteinScore: 74, nba: "Provide the detector placement study and hazardous-area certification pack." },
  { id: "OPP-7878", account: "Beacon Foods — Warehouse Execution Software", segment: "Warehouse / DC", amount: 6_800_000, stage: "Closed Won", closeDate: "Dec 04", owner: "L. Kim", einsteinScore: 95, nba: "Kick off the 90-day implementation with the distribution-center operations lead." },
  { id: "OPP-7882", account: "Delta Packaging — Mobility Fleet Pilot", segment: "Distributor", amount: 1_240_000, stage: "Qualification", closeDate: "Feb 02", owner: "R. Patel", einsteinScore: 58, nba: "Send the rugged-mobility ROI calculator and offer a 20-unit pilot." },
  { id: "OPP-7891", account: "Harborview Terminals — OEM Sensor Program", segment: "OEM / Sensing", amount: 7_600_000, stage: "Qualification", closeDate: "Mar 18", owner: "S. Okafor", einsteinScore: 55, nba: "Trigger nurture: pressure and position sensing design-in guide." },
  { id: "OPP-7902", account: "Summit Pharma — Batch Control Modernization", segment: "Process Plant", amount: 14_800_000, stage: "Solution Design", closeDate: "Jan 08", owner: "D. Chen", einsteinScore: 86, nba: "Confirm the validation strategy and GxP documentation scope with quality." },
  { id: "OPP-7910", account: "Ironline Steel — Analyzer Service Contract", segment: "Process Plant", amount: 2_900_000, stage: "Proposal", closeDate: "Feb 24", owner: "M. Alvarez", einsteinScore: 71, nba: "Present an outcome-based uptime SLA priced against last year's unplanned downtime." },
  { id: "OPP-7920", account: "Vantage Parcel — Robotics Add-On", segment: "Warehouse / DC", amount: 8_200_000, stage: "Negotiation", closeDate: "Mar 05", owner: "L. Kim", einsteinScore: 69, nba: "Bring in the robotics specialist for a peak-season throughput simulation." },
  { id: "OPP-7934", account: "Redstone Mills — Controller Retrofit", segment: "Process Plant", amount: 1_800_000, stage: "Closed Lost", closeDate: "Nov 28", owner: "R. Patel", einsteinScore: 26, nba: "Re-engage in 90 days; lost on capital timing, not technical fit." },
];

export const pipelineByStage = (["Qualification", "Solution Design", "Proposal", "Negotiation", "Commissioning", "Closed Won", "Closed Lost"] as OpportunityStage[]).map((stage) => ({
  stage,
  count: opportunities.filter((o) => o.stage === stage).length,
  value: opportunities.filter((o) => o.stage === stage).reduce((s, o) => s + o.amount, 0),
}));

// ─────────────────────────────────────────────────────────────────────────────
// ACCOUNTS (Top Accounts table + Account 360)
// ─────────────────────────────────────────────────────────────────────────────

export interface HoneywellAccount {
  id: string;
  name: string;
  type: "Process Plant" | "Warehouse / DC" | "Distributor" | "OEM / Sensing" | "Utility";
  market: string;
  csm: string;
  mrr: number;
  ytdRevenue: number;
  healthScore: number;
  lastTicketDays: number;
  trend: "up" | "down" | "flat";
  churnRisk: "low" | "medium" | "high";
  openCases: number;
  serviceStatus: "Under Contract" | "Commissioning" | "Migration" | "Renewal Due" | "Prospect";
}

// Backwards-compatible alias for older imports
export type FiberAccount = HoneywellAccount;

export const topAccounts: HoneywellAccount[] = [
  { id: "ACC-1001", name: "Gulf Coast Refining", type: "Process Plant", market: "Houston, TX", csm: "M. Alvarez", mrr: 480_000, ytdRevenue: 5_760_000, healthScore: 93, lastTicketDays: 2, trend: "up", churnRisk: "low", openCases: 2, serviceStatus: "Migration" },
  { id: "ACC-1002", name: "Meridian Logistics", type: "Warehouse / DC", market: "Columbus, OH", csm: "D. Chen", mrr: 365_000, ytdRevenue: 4_180_000, healthScore: 81, lastTicketDays: 4, trend: "flat", churnRisk: "low", openCases: 3, serviceStatus: "Under Contract" },
  { id: "ACC-1003", name: "Northbridge Chemicals", type: "Process Plant", market: "Baton Rouge, LA", csm: "M. Alvarez", mrr: 640_000, ytdRevenue: 7_320_000, healthScore: 90, lastTicketDays: 1, trend: "up", churnRisk: "low", openCases: 1, serviceStatus: "Under Contract" },
  { id: "ACC-1004", name: "Summit Pharma", type: "Process Plant", market: "Raleigh, NC", csm: "S. Okafor", mrr: 290_000, ytdRevenue: 3_460_000, healthScore: 87, lastTicketDays: 3, trend: "up", churnRisk: "low", openCases: 1, serviceStatus: "Commissioning" },
  { id: "ACC-1005", name: "Delta Packaging", type: "Distributor", market: "Miami, FL", csm: "R. Patel", mrr: 38_000, ytdRevenue: 462_000, healthScore: 54, lastTicketDays: 12, trend: "down", churnRisk: "high", openCases: 5, serviceStatus: "Renewal Due" },
  { id: "ACC-1006", name: "Cascade Distribution", type: "Distributor", market: "Portland, OR", csm: "L. Kim", mrr: 156_000, ytdRevenue: 1_720_000, healthScore: 72, lastTicketDays: 5, trend: "flat", churnRisk: "medium", openCases: 3, serviceStatus: "Renewal Due" },
  { id: "ACC-1007", name: "Beacon Foods", type: "Warehouse / DC", market: "Tampa, FL", csm: "L. Kim", mrr: 84_000, ytdRevenue: 596_000, healthScore: 92, lastTicketDays: 2, trend: "up", churnRisk: "low", openCases: 0, serviceStatus: "Under Contract" },
  { id: "ACC-1008", name: "Ironline Steel", type: "Process Plant", market: "Gary, IN", csm: "R. Patel", mrr: 52_000, ytdRevenue: 368_000, healthScore: 66, lastTicketDays: 15, trend: "down", churnRisk: "high", openCases: 4, serviceStatus: "Renewal Due" },
  { id: "ACC-1009", name: "Vantage Parcel", type: "Warehouse / DC", market: "Denver, CO", csm: "D. Chen", mrr: 445_000, ytdRevenue: 4_920_000, healthScore: 84, lastTicketDays: 2, trend: "up", churnRisk: "low", openCases: 2, serviceStatus: "Under Contract" },
  { id: "ACC-1010", name: "Harborview Terminals", type: "OEM / Sensing", market: "Savannah, GA", csm: "M. Alvarez", mrr: 210_000, ytdRevenue: 2_280_000, healthScore: 77, lastTicketDays: 3, trend: "flat", churnRisk: "medium", openCases: 2, serviceStatus: "Prospect" },
];

// ─────────────────────────────────────────────────────────────────────────────
// SERVICE CLOUD — CONTACT CENTER CASES
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
  category: "Equipment Down" | "Technical Support" | "Order & Delivery" | "Warranty / RMA" | "Field Service" | "Software & Licensing";
  aiSummary: string;
  agentAssistDeflected?: boolean;
}

export const cases: ServiceCase[] = [
  { id: "CASE-44201", subject: "Sortation line 4 stopped — fault code E-118", account: "Meridian Logistics", channel: "Voice", priority: "P1", status: "In Progress", ageHours: 0.4, slaHours: 2, owner: "Agentforce", category: "Equipment Down", aiSummary: "Induct motor drive fault on line 4. Agent matched code E-118 to service bulletin SB-2291, confirmed the spare drive is on the local technician's van, and dispatched with a 90-minute ETA.", agentAssistDeflected: true },
  { id: "CASE-44198", subject: "Experion node failover after patch window", account: "Gulf Coast Refining", channel: "Email", priority: "P2", status: "New", ageHours: 1.1, slaHours: 8, owner: "Unassigned", category: "Technical Support", aiSummary: "Redundant controller pair failed over during the Tuesday patch window. Customer needs a root-cause review before the next scheduled outage." },
  { id: "CASE-44192", subject: "RMA eligibility — 42 handheld scanners", account: "Cascade Distribution", channel: "Chat", priority: "P3", status: "In Progress", ageHours: 2.8, slaHours: 24, owner: "Agentforce", category: "Warranty / RMA", aiSummary: "Serial-number sweep shows 38 of 42 units in warranty. Agent generated return labels and flagged 4 out-of-warranty units for a repair quote.", agentAssistDeflected: true },
  { id: "CASE-44188", subject: "Gas detector nuisance alarms — unit 7 area", account: "Northbridge Chemicals", channel: "Voice", priority: "P1", status: "Escalated", ageHours: 0.9, slaHours: 2, owner: "T. Nguyen (Tech Support L3)", category: "Equipment Down", aiSummary: "Three flame detectors reporting nuisance alarms after a wash-down. Safety critical, escalated to L3 with a certified technician en route." },
  { id: "CASE-44175", subject: "Backordered conveyor belt — PO 88214", account: "Beacon Foods", channel: "Email", priority: "P3", status: "Waiting on Customer", ageHours: 26, slaHours: 48, owner: "A. Brooks", category: "Order & Delivery", aiSummary: "Original part is on a 6-week lead time. Agent proposed an approved alternate with the same rating; awaiting customer sign-off." },
  { id: "CASE-44170", subject: "Invoice dispute — service contract true-up", account: "Delta Packaging", channel: "Web", priority: "P3", status: "In Progress", ageHours: 7, slaHours: 24, owner: "Agentforce", category: "Order & Delivery", aiSummary: "Customer disputes the mid-term seat true-up. Usage records confirm 18 added devices; draft explanation with the entitlement report is ready to send.", agentAssistDeflected: true },
  { id: "CASE-44164", subject: "Technician hotline — analyzer calibration drift", account: "Ironline Steel", channel: "Voice", priority: "P2", status: "In Progress", ageHours: 3.6, slaHours: 8, owner: "J. Rivera", category: "Field Service", aiSummary: "Field technician on site requested the calibration procedure and gas-cell part number. Agent pushed the procedure and confirmed depot stock." },
  { id: "CASE-44158", subject: "Repeat scanner drop-offs on plant Wi-Fi", account: "Vantage Parcel", channel: "Voice", priority: "P2", status: "Escalated", ageHours: 1.4, slaHours: 4, owner: "M. Alvarez (CSM)", category: "Technical Support", aiSummary: "Fourth repeat contact in 30 days. Account Growth Agent flagged renewal risk on a $1.1M contract and requested CSM intervention." },
  { id: "CASE-44150", subject: "Software license activation for 3 new seats", account: "Summit Pharma", channel: "Web", priority: "P4", status: "Resolved", ageHours: 0.2, slaHours: 48, owner: "Agentforce", category: "Software & Licensing", aiSummary: "Agent validated the entitlement, issued activation keys, and emailed the installation guide in under two minutes.", agentAssistDeflected: true },
  { id: "CASE-44142", subject: "Where is my shipment — order 771294", account: "Harborview Terminals", channel: "SMS", priority: "P3", status: "Resolved", ageHours: 0.3, slaHours: 8, owner: "Agentforce", category: "Order & Delivery", aiSummary: "Agent retrieved the carrier tracking event, confirmed a two-day delay, and offered a partial expedited split shipment; customer accepted.", agentAssistDeflected: true },
];

// Contact-channel breakdown for the contact center dashboard
export const channelData = [
  { channel: "Voice (Service Cloud Voice)", revenue: 0, sessions: 14200, conversion: 4.72, roas: null, contacts: "14.2K", deflected: 31, csat: 4.72 },
  { channel: "Chat (Web + Mobile)",          revenue: 0, sessions: 9800, conversion: 4.60, roas: null, contacts: "9.8K", deflected: 56, csat: 4.60 },
  { channel: "Email",                        revenue: 0, sessions: 6400, conversion: 4.48, roas: null, contacts: "6.4K", deflected: 27, csat: 4.48 },
  { channel: "Distributor Portal",           revenue: 0, sessions: 12600, conversion: 4.58, roas: null, contacts: "12.6K", deflected: 81, csat: 4.58 },
  { channel: "Technician Hotline",           revenue: 0, sessions: 5100, conversion: 4.66, roas: null, contacts: "5.1K", deflected: 48, csat: 4.66 },
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
  category: "Honeywell";
}

export const agents: Agent[] = [
  {
    id: "techSupport",
    name: "Technical Support Agent",
    status: "acting",
    audience: "Customer",
    category: "Honeywell",
    insight: "Handling 6,400 technical contacts today across control systems, sensing, scanning, and warehouse automation. Matches fault codes to service bulletins and installed-base history before a human picks up.",
    confidence: 95,
    action: "Auto-resolve tier-1 fault codes and configuration questions; escalate safety-critical faults to L3",
    impact: "82.4% first contact resolution",
    icon: "🛠️",
  },
  {
    id: "fieldService",
    name: "Field Service Agent",
    status: "alert",
    audience: "Employee",
    category: "Honeywell",
    insight: "Supporting 1,180 technicians in the field. Confirms parts on the van, pushes wiring diagrams and torque specs, and books the nearest qualified technician for equipment-down events.",
    confidence: 92,
    action: "Triage equipment-down cases and dispatch the nearest certified technician with the right parts",
    impact: "MTTR down to 3.8 hrs",
    icon: "🔧",
  },
  {
    id: "orderWarranty",
    name: "Order & Warranty Agent",
    status: "monitoring",
    audience: "Customer",
    category: "Honeywell",
    insight: "Resolving order status, lead times, backorders, RMA eligibility, and invoice questions for customers and distributors. 71% of order-status contacts never reach a human advisor.",
    confidence: 94,
    action: "Expand automation to backorder substitutions and multi-unit RMA batches",
    impact: "43.6% deflection, −$1.4M/pt",
    icon: "📦",
  },
  {
    id: "accountGrowth",
    name: "Account Growth Agent",
    status: "acting",
    audience: "Employee",
    category: "Honeywell",
    insight: "Linking case history to renewal dates across 940 service contracts. 36 accounts are flagged at risk; 22 have a strong service-attach or upgrade play worth $84M.",
    confidence: 90,
    action: "Queue save plays for at-risk renewals and push attach offers to account managers",
    impact: "$9.8M contract ARR saved YTD",
    icon: "📈",
  },
];

// Greetings + canned responses are no longer used (live model handles all chat)
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
    trigger: "Conversation mining shows 47% of inbound contacts are order status, warranty eligibility, and how-to questions",
    steps: [
      { label: "Volume Analyzed", detail: "Einstein Conversation Mining clusters intents from 240K contact transcripts", status: "complete" },
      { label: "Order & Warranty Agent Activated", detail: "Agentforce handles the top 6 intents with ERP, entitlement, and carrier tools", status: "complete" },
      { label: "Live Pilot — 3 Regions", detail: "North America, EMEA, and India live; 43.6% deflection in week 6", status: "active" },
      { label: "Global Rollout", detail: "Extend to all customer care and distributor support pods", status: "pending" },
      { label: "Measured Impact", detail: "Projected $34M annual cost-to-serve reduction", status: "pending" },
    ],
    impact: "$34M / yr cost saved",
    deepDive: {
      rootCause: "Honeywell Industrial Automation's contact center handles roughly 2.1M inbound contacts a year from plants, warehouses, distributors, and field technicians. 47% are repetitive lookups — order status, lead time, warranty eligibility, firmware and manual requests — that need a system query, not human judgment. Agentforce authenticates the caller, queries ERP and the installed base, and answers in under 40 seconds.",
      dataPoints: [
        "Annual inbound contacts: 2.1M (voice, chat, email, portal, technician hotline)",
        "Repetitive-intent share: 47% (order status 19%, warranty/RMA 11%, how-to 9%, invoicing 5%, licensing 3%)",
        "Current deflection: 43.6% in pilot regions (vs 12% before Agentforce)",
        "CSAT on deflected contacts: 4.54/5",
        "Average handle time on a deflected contact: 38 seconds vs 6m12s with an advisor",
      ],
      financialImpact: [
        { label: "Pilot deflection rate", value: "43.6%" },
        { label: "Cost per advisor contact", value: "$13.40" },
        { label: "Cost per Agentforce contact", value: "$0.62" },
        { label: "Projected annual savings", value: "$34M" },
        { label: "Payback period", value: "4.4 months" },
      ],
      recommendation: "Complete the global rollout of the Order & Warranty Agent across customer care and distributor support. Extend the tool surface to backorder substitutions and multi-unit RMA batches. Keep explicit human escalation for safety-related product issues, recalls, and any account flagged at risk by the Account Growth Agent.",
    },
  },
  {
    id: "fieldService",
    title: "First-Time Fix on Equipment Down",
    trigger: "31% of equipment-down dispatches need a second visit because the technician arrives without the right part or procedure",
    steps: [
      { label: "Failure Patterns Mined", detail: "Einstein correlates fault codes, asset age, and parts consumption across the installed base", status: "complete" },
      { label: "Field Service Agent Built", detail: "Agent joins fault code, service bulletins, van inventory, and technician certifications", status: "complete" },
      { label: "Hotline + Dispatch Pilot", detail: "Live for sortation, analyzers, and gas detection in North America", status: "active" },
      { label: "Global Technician Rollout", detail: "Extend to all 1,180 field technicians with mobile agent assist", status: "pending" },
      { label: "Uptime Impact", detail: "Projected 26% MTTR reduction and a 12-point first-time-fix gain", status: "pending" },
    ],
    impact: "First-time fix 68% → 86%",
    deepDive: {
      rootCause: "When a line stops, the cost is measured in production hours, not case minutes. Repeat visits were driven by three gaps: the fault code was not translated into a likely failed component, van stock was not checked before dispatch, and the technician's certification did not match the asset. The Field Service Agent closes all three before the truck rolls.",
      dataPoints: [
        "Equipment-down cases per month: 3,240",
        "Second-visit rate before pilot: 31%",
        "First-time fix in pilot: 86% (from 68%)",
        "Mean time to repair: 3.8 hrs (from 5.2 hrs)",
        "Average customer cost of one hour of downtime: $46K on a high-volume sortation line",
      ],
      financialImpact: [
        { label: "Avoided second visits / yr", value: "9,400" },
        { label: "Cost per truck roll", value: "$620" },
        { label: "Annual dispatch savings", value: "$5.8M" },
        { label: "Customer downtime avoided", value: "18,600 hrs" },
        { label: "Service contract renewal lift", value: "+7.4 pts" },
      ],
      recommendation: "Roll the Field Service Agent out to all field technicians with mobile agent assist and offline procedure caching. Feed first-time-fix outcomes back into the parts-stocking model so van inventory follows real failure patterns rather than regional averages.",
    },
  },
  {
    id: "renewalrisk",
    title: "Service Contract Save Play",
    trigger: "Account Growth Agent flags 36 service contracts at risk from repeat incidents and lapsed renewals",
    steps: [
      { label: "Risk Signals Aggregated", detail: "Case history, downtime hours, NPS, and renewal dates combined into one score", status: "complete" },
      { label: "Accounts Ranked", detail: "36 accounts scored; 11 need executive sponsorship before renewal", status: "complete" },
      { label: "Save Briefs Generated", detail: "Auto-built brief with incident history, uptime credits, and upgrade offer", status: "active" },
      { label: "CSM Intervention", detail: "27 account managers engaged this quarter; 74% save rate observed", status: "active" },
      { label: "ARR Protected", detail: "$9.8M saved YTD; $22.4M still in active workflow", status: "pending" },
    ],
    impact: "$9.8M contract ARR saved",
    deepDive: {
      rootCause: "Service contracts renew on schedule, but confidence erodes months earlier. Two or more P1 equipment-down events in 60 days drops renewal probability to 44%. The Account Growth Agent watches case history against renewal dates so account managers act while there is still time to rebuild trust.",
      dataPoints: [
        "Active service contracts monitored: 940",
        "Currently flagged at risk: 36 ($22.4M ARR)",
        "Save rate when the CSM engages within 14 days: 74%",
        "Save rate when the CSM engages after 45 days: 29%",
        "Top churn signal: 2+ P1 events in 60 days (present in 61% of non-renewals)",
      ],
      financialImpact: [
        { label: "Contract ARR at risk", value: "$22.4M" },
        { label: "YTD saves", value: "$9.8M" },
        { label: "Average recovery cost", value: "$28K / account" },
        { label: "ROI on save plays", value: "16x" },
        { label: "Projected full-year save", value: "$16.4M" },
      ],
      recommendation: "Put the 11 executive-sponsor accounts into a structured save play this week. Queue auto-generated briefs for the remaining 25. Wire repeat-incident signals into the Field Service Agent so it can proactively offer a preventive maintenance visit or uptime credit before the customer escalates.",
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

export const customerProfile: CustomerAccount = {
  name: "Gulf Coast Refining",
  id: "ACC-1001",
  type: "Process Plant — 3 sites, 1,840 connected assets",
  contractValue: "$5.76M YTD",
  predictedLifetimeValue: "$48.6M (10-yr)",
  riskScore: 9,
  segment: "Refining & Petrochemical",
  fleet: "1,840 assets — Experion controllers, analyzers, gas & flame detection, rugged mobility",
  csa: "Honeywell Premium Service Contract — 24/7 response",
  lastOutage: "Last unplanned equipment-down event: 38 days ago",
  digitalProducts: ["Customer Portal", "Remote Monitoring", "Performance Analytics", "Parts & Warranty Self-Service"],
  topAssets: ["Experion control network ($2.1M YTD)", "Process analyzers ($1.4M YTD)", "Gas & flame detection ($1.2M YTD)", "Rugged mobility fleet ($0.9M YTD)"],
  recentEvents: [
    { type: "Sales", detail: "Opportunity OPP-7821 ($18.4M control system migration) in Commissioning", time: "Today" },
    { type: "Service", detail: "P2 controller failover case triaged by Technical Support Agent in 22 minutes", time: "2 hours ago" },
    { type: "Field", detail: "Preventive maintenance visit completed on analyzer bank 3 — first-time fix", time: "3 days ago" },
    { type: "Digital", detail: "Customer Portal usage up 26% MoM; 91% of cases now opened digitally", time: "Last 30 days" },
  ],
  nextBestAction: "Send the migration cutover runbook and confirm the site-acceptance test window. Account Growth Agent drafted an uptime-guarantee attach for the analyzer fleet — review before Friday's business review.",
  aiSummary: "Gulf Coast Refining is a strategic refining account with $5.76M YTD revenue and the strongest health score (93) in the Gulf region. Equipment availability is 99.6%, CSAT is 4.79, and they are heavy users of the Customer Portal and remote monitoring. The active $18.4M control system migration (OPP-7821) is in Commissioning with an 89 win-likelihood score. Risk is low: two open cases, one a P2 controller failover already with Technical Support Agent. CSM M. Alvarez should drive the cutover milestone and attach the analyzer uptime guarantee before renewal.",
};

// Backwards-compat — kept in case other modules import it.
export const aiResponses: Record<string, string> = {};
