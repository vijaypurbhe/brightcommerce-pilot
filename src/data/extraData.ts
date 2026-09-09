// Contacts, leads, and knowledge base for the Honeywell Industrial Automation demo

export interface HoneywellContact {
  id: string;
  name: string;
  title: string;
  account: string;
  email: string;
  phone: string;
  lastActivity: string;
}

// Backwards-compatible alias for older imports
export type FiberContact = HoneywellContact;

export const contacts: HoneywellContact[] = [
  { id: "CON-2001", name: "Maria Costa", title: "Plant Automation Manager", account: "Gulf Coast Refining", email: "maria.costa@gulfcoastrefining.com", phone: "(713) 555-0141", lastActivity: "Today" },
  { id: "CON-2002", name: "James Wu", title: "Director of Distribution Operations", account: "Meridian Logistics", email: "j.wu@meridianlogistics.com", phone: "(614) 555-0142", lastActivity: "Yesterday" },
  { id: "CON-2003", name: "Linda Park", title: "EHS & Safety Systems Lead", account: "Northbridge Chemicals", email: "l.park@northbridgechem.com", phone: "(225) 555-0188", lastActivity: "2 days ago" },
  { id: "CON-2004", name: "Andre Tovar", title: "Maintenance Superintendent", account: "Ironline Steel", email: "atovar@ironlinesteel.com", phone: "(219) 555-0241", lastActivity: "Today" },
  { id: "CON-2005", name: "Dr. Susan Reed", title: "VP Manufacturing Technology", account: "Summit Pharma", email: "s.reed@summitpharma.com", phone: "(919) 555-0312", lastActivity: "3 days ago" },
  { id: "CON-2006", name: "Mike Brennan", title: "Owner / Principal", account: "Delta Packaging", email: "mike@deltapackaging.com", phone: "(305) 555-0192", lastActivity: "12 days ago" },
  { id: "CON-2007", name: "Karen Lopez", title: "Warehouse Systems Manager", account: "Beacon Foods", email: "k.lopez@beaconfoods.com", phone: "(813) 555-0144", lastActivity: "5 days ago" },
  { id: "CON-2008", name: "Patrick O'Connor", title: "Field Service Coordinator", account: "Vantage Parcel", email: "po@vantageparcel.com", phone: "(303) 555-0277", lastActivity: "Today" },
  { id: "CON-2009", name: "Jess Hampton", title: "Purchasing Director", account: "Cascade Distribution", email: "jess@cascadedistribution.com", phone: "(503) 555-0181", lastActivity: "14 days ago" },
  { id: "CON-2010", name: "Carlos Rivera", title: "Controls Engineer", account: "Harborview Terminals", email: "c.rivera@harborviewterminals.com", phone: "(912) 555-0123", lastActivity: "Today" },
  { id: "CON-2011", name: "Dawn Murphy", title: "Reliability Engineer", account: "Lakeside Utilities", email: "dawn@lakesideutilities.com", phone: "(608) 555-0156", lastActivity: "Yesterday" },
];

// Marketing- and service-qualified leads
export type LeadStatus = "New" | "Working" | "Nurturing" | "Qualified" | "Disqualified";

export interface Lead {
  id: string;
  name: string;
  title: string;
  company: string;
  source: string;
  status: LeadStatus;
  einsteinScore: number;
  region: string;
  estValue: number;
  createdDays: number;
}

export const leads: Lead[] = [
  { id: "LEAD-9001", name: "Tom Garner", title: "Maintenance Manager", company: "Garner Grain Processing", source: "Support case → service contract offer", status: "New", einsteinScore: 78, region: "Midwest", estValue: 320000, createdDays: 1 },
  { id: "LEAD-9002", name: "Priya Shah", title: "VP Supply Chain", company: "Lakeside Fulfillment Group", source: "Trade show — MODEX", status: "Working", einsteinScore: 82, region: "Southeast", estValue: 480000, createdDays: 4 },
  { id: "LEAD-9003", name: "Eric Holm", title: "Plant Manager", company: "Northstar Specialty Chemicals", source: "Referral — D. Chen", status: "Working", einsteinScore: 71, region: "Northeast", estValue: 220000, createdDays: 6 },
  { id: "LEAD-9004", name: "Yolanda Reyes", title: "Reliability Director", company: "Maricopa Water Authority", source: "RFP response", status: "Qualified", einsteinScore: 88, region: "Southwest", estValue: 940000, createdDays: 9 },
  { id: "LEAD-9005", name: "Ben Whitaker", title: "Operations Lead", company: "Pier 7 Cold Storage", source: "Website demo request", status: "Nurturing", einsteinScore: 54, region: "West", estValue: 180000, createdDays: 14 },
  { id: "LEAD-9006", name: "Nora Patel", title: "Procurement Manager", company: "Sunset Industrial Supply (distributor)", source: "Distributor portal upgrade prompt", status: "Working", einsteinScore: 74, region: "Southeast", estValue: 380000, createdDays: 3 },
  { id: "LEAD-9007", name: "Greg Mathis", title: "Facilities Director", company: "Mathis Manufacturing", source: "Outbound — R. Patel", status: "Nurturing", einsteinScore: 46, region: "South Central", estValue: 140000, createdDays: 21 },
  { id: "LEAD-9008", name: "Helena Ito", title: "Chief Operations Officer", company: "PacRim Distribution Centers", source: "Warranty renewal campaign", status: "Qualified", einsteinScore: 91, region: "West", estValue: 1_240_000, createdDays: 11 },
  { id: "LEAD-9009", name: "Sam Walters", title: "Shift Supervisor", company: "Walters Bottling", source: "Inbound technical support call", status: "Disqualified", einsteinScore: 24, region: "Northeast", estValue: 60000, createdDays: 18 },
  { id: "LEAD-9010", name: "Aisha Owens", title: "Automation Engineering Lead", company: "Redwood Defense Systems", source: "Government bid portal", status: "New", einsteinScore: 80, region: "South Central", estValue: 720000, createdDays: 2 },
];

export interface KnowledgeArticle {
  id: string;
  title: string;
  category: "Technical Support" | "Field Service" | "Order & Delivery" | "Warranty / RMA" | "Safety & Compliance" | "Software & Licensing" | "Account Management";
  views: number;
  rating: number;
  lastUpdated: string;
  excerpt: string;
}

export const knowledgeArticles: KnowledgeArticle[] = [
  { id: "KB-0142", title: "Fault code E-118 on induct motor drives — triage and dispatch", category: "Technical Support", views: 4280, rating: 4.8, lastUpdated: "2 days ago", excerpt: "Decision tree for sortation drive faults, including the parts most often required and when to escalate to a certified technician instead of a remote reset." },
  { id: "KB-0218", title: "Warranty and RMA eligibility rules by product family", category: "Warranty / RMA", views: 5120, rating: 4.7, lastUpdated: "1 week ago", excerpt: "Standard warranty windows for scanners, mobile computers, sensors, and detectors, plus advance-exchange rules and what evidence the advisor must capture." },
  { id: "KB-0307", title: "Service Cloud Voice escalation script — P1 equipment down", category: "Technical Support", views: 2640, rating: 4.6, lastUpdated: "3 days ago", excerpt: "Live voice script for P1 line-down and safety-critical faults, including hold language, L3 handover, and the customer downtime cost prompt." },
  { id: "KB-0412", title: "Analyzer calibration drift — field procedure and parts list", category: "Field Service", views: 3210, rating: 4.9, lastUpdated: "Yesterday", excerpt: "Step-by-step on-site calibration procedure, gas-cell part numbers, torque specs, and the acceptance readings to log before closing the work order." },
  { id: "KB-0501", title: "Backorder substitution matrix — approved alternates", category: "Order & Delivery", views: 3680, rating: 4.5, lastUpdated: "5 days ago", excerpt: "Which approved alternates may be offered without engineering review, lead-time thresholds that trigger an offer, and how to record the customer's acceptance." },
  { id: "KB-0612", title: "Service contract entitlement and response-time matrix", category: "Account Management", views: 1980, rating: 4.9, lastUpdated: "2 weeks ago", excerpt: "How premium, standard, and time-and-materials entitlements map to response windows, uptime credits, and when manual review is required." },
  { id: "KB-0718", title: "Gas and flame detector nuisance alarms after wash-down", category: "Safety & Compliance", views: 2120, rating: 4.6, lastUpdated: "1 week ago", excerpt: "Safety-critical triage: confirming detector integrity, mandatory notification steps, and the certification a technician must hold to work the asset." },
  { id: "KB-0823", title: "Rugged mobility fleet — Wi-Fi roaming and drop-off diagnostics", category: "Technical Support", views: 4460, rating: 4.7, lastUpdated: "4 days ago", excerpt: "Diagnosing repeat scanner disconnects across plant Wi-Fi: roaming thresholds, firmware baselines, and when the issue belongs to the customer network team." },
  { id: "KB-0904", title: "Customer and distributor portal — self-service order and RMA flow", category: "Order & Delivery", views: 6240, rating: 4.6, lastUpdated: "Today", excerpt: "Directing customers and distributors to self-service for order status, invoices, and return labels instead of generating manual reports." },
  { id: "KB-1012", title: "Software license activation and seat true-up", category: "Software & Licensing", views: 1740, rating: 4.4, lastUpdated: "6 days ago", excerpt: "Validating entitlements, issuing activation keys, and explaining mid-term seat true-ups with the entitlement report attached." },
];
