// Contacts, leads, and knowledge base for Forged Fiber 37 demo

export interface FiberContact {
  id: string;
  name: string;
  title: string;
  account: string;
  email: string;
  phone: string;
  lastActivity: string;
}

export const contacts: FiberContact[] = [
  { id: "CON-2001", name: "Maria Costa", title: "Director of Network Engineering", account: "City of Austin — Smart City Fiber", email: "maria.costa@austintexas.gov", phone: "(512) 555-0141", lastActivity: "Today" },
  { id: "CON-2002", name: "James Wu", title: "Chief Technology Officer", account: "Summit Data Centers — Phoenix", email: "j.wu@summitdatacenters.com", phone: "(602) 555-0142", lastActivity: "Yesterday" },
  { id: "CON-2003", name: "Linda Park", title: "VP of Development", account: "Atlas Multi-Family — Denver Portfolio", email: "l.park@atlasmultifamily.com", phone: "(303) 555-0188", lastActivity: "2 days ago" },
  { id: "CON-2004", name: "Andre Tovar", title: "Network Operations Manager", account: "PulseNet ISP — Midwest Backbone", email: "atovar@pulsenet.com", phone: "(312) 555-0241", lastActivity: "Today" },
  { id: "CON-2005", name: "Dr. Susan Reed", title: "CIO", account: "MetroHealth System — Ohio", email: "s.reed@metrohealth.org", phone: "(614) 555-0312", lastActivity: "3 days ago" },
  { id: "CON-2006", name: "Mike Brennan", title: "Managing Partner", account: "Riverwalk Corporate Campus", email: "mike@riverwalkcampus.com", phone: "(617) 555-0192", lastActivity: "11 days ago" },
  { id: "CON-2007", name: "Karen Lopez", title: "IT Director", account: "Hillsborough County Schools", email: "k.lopez@sdhc.k12.fl.us", phone: "(813) 555-0144", lastActivity: "5 days ago" },
  { id: "CON-2008", name: "Patrick O'Connor", title: "Facilities Director", account: "Vertex Industrial Park", email: "po@vertexindustrial.com", phone: "(214) 555-0277", lastActivity: "Today" },
  { id: "CON-2009", name: "Jess Hampton", title: "Head of Wholesale", account: "NorthStar Regional ISP", email: "jess@northstarisp.net", phone: "(404) 555-0181", lastActivity: "14 days ago" },
  { id: "CON-2010", name: "Carlos Rivera", title: "Network Architect", account: "CloudBridge ISP — Southeast", email: "c.rivera@cloudbridge.net", phone: "(305) 555-0123", lastActivity: "Today" },
  { id: "CON-2011", name: "Dawn Murphy", title: "Senior Property Manager", account: "Blue Harbor Apartments — Miami", email: "dawn@blueharborapts.com", phone: "(305) 555-0156", lastActivity: "Yesterday" },
];

// Marketing-qualified leads
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
  { id: "LEAD-9001", name: "Tom Garner", title: "City IT Director", company: "Garner Township", source: "Fiber Enablement Portal", status: "New", einsteinScore: 78, region: "Mountain", estValue: 320000, createdDays: 1 },
  { id: "LEAD-9002", name: "Priya Shah", title: "VP Real Estate", company: "Lakeside Development Group", source: "Trade show — Fiber Connect", status: "Working", einsteinScore: 82, region: "Midwest", estValue: 480000, createdDays: 4 },
  { id: "LEAD-9003", name: "Eric Holm", title: "CIO", company: "Northstar Logistics Park", source: "Referral — D. Chen", status: "Working", einsteinScore: 71, region: "Northeast", estValue: 220000, createdDays: 6 },
  { id: "LEAD-9004", name: "Yolanda Reyes", title: "Network Services Lead", company: "Maricopa County", source: "RFP response", status: "Qualified", einsteinScore: 88, region: "Southwest", estValue: 940000, createdDays: 9 },
  { id: "LEAD-9005", name: "Ben Whitaker", title: "Operations Lead", company: "Pier 7 Business Center", source: "Website demo request", status: "Nurturing", einsteinScore: 54, region: "West", estValue: 180000, createdDays: 14 },
  { id: "LEAD-9006", name: "Nora Patel", title: "IT Procurement", company: "Sunset Office Portfolio (8 buildings)", source: "Marketing Cloud nurture", status: "Working", einsteinScore: 74, region: "Southeast", estValue: 380000, createdDays: 3 },
  { id: "LEAD-9007", name: "Greg Mathis", title: "Facilities Director", company: "Mathis Industrial Park", source: "Outbound — R. Patel", status: "Nurturing", einsteinScore: 46, region: "South Central", estValue: 140000, createdDays: 21 },
  { id: "LEAD-9008", name: "Helena Ito", title: "Chief Digital Officer", company: "PacRim Data Centers", source: "LinkedIn ad", status: "Qualified", einsteinScore: 91, region: "West", estValue: 1_240_000, createdDays: 11 },
  { id: "LEAD-9009", name: "Sam Walters", title: "Property Manager", company: "Walters Plaza", source: "Walk-in branch", status: "Disqualified", einsteinScore: 24, region: "Northeast", estValue: 60000, createdDays: 18 },
  { id: "LEAD-9010", name: "Aisha Owens", title: "Telecom Director", company: "Lockheed Regional Office", source: "Government bid portal", status: "New", einsteinScore: 80, region: "South Central", estValue: 720000, createdDays: 2 },
];

export interface KnowledgeArticle {
  id: string;
  title: string;
  category: "Network Operations" | "Provisioning & Turn-up" | "Permit & ROW" | "Partner Billing" | "SLA & Performance" | "Fiber Enablement" | "Account Management";
  views: number;
  rating: number;
  lastUpdated: string;
  excerpt: string;
}

export const knowledgeArticles: KnowledgeArticle[] = [
  { id: "KB-0142", title: "Outage communication workflow for wholesale partners", category: "Network Operations", views: 2840, rating: 4.7, lastUpdated: "2 days ago", excerpt: "Step-by-step playbook for proactively notifying partners during backbone or metro-ring outages, including ETA templates and service-credit triggers." },
  { id: "KB-0218", title: "Partner billing dispute thresholds & approval matrix", category: "Partner Billing", views: 4120, rating: 4.8, lastUpdated: "1 week ago", excerpt: "Auto-approve billing adjustments ≤$500 with usage evidence. ≤$2,000 requires partner success manager approval. >$2,000 requires Director sign-off." },
  { id: "KB-0307", title: "Service Cloud Voice escalation script — P1 network outage", category: "Network Operations", views: 1640, rating: 4.6, lastUpdated: "3 days ago", excerpt: "Live voice script for escalating Priority 1 network incidents — backbone failure, redundant-path loss, safety or utility coordination." },
  { id: "KB-0412", title: "OTDR trace interpretation and splice-closure dispatch", category: "Provisioning & Turn-up", views: 2210, rating: 4.9, lastUpdated: "Yesterday", excerpt: "Field service dispatch protocol when OTDR readings indicate fiber degradation, including emergency reroute and splice-crew escalation." },
  { id: "KB-0501", title: "Permit & ROW approval timeline by municipality type", category: "Permit & ROW", views: 3680, rating: 4.5, lastUpdated: "5 days ago", excerpt: "Standard timelines for city, county, state, and private ROW approvals, plus escalation contacts and common rejection reasons." },
  { id: "KB-0612", title: "SLA credit policy and automated service-credit calculation", category: "SLA & Performance", views: 980, rating: 4.9, lastUpdated: "2 weeks ago", excerpt: "How SLA breaches are calculated, when credits auto-apply, and when manual review is required for custom SLA partners." },
  { id: "KB-0718", title: "Fiber Enablement portal — eligibility and site-survey flow", category: "Fiber Enablement", views: 2120, rating: 4.4, lastUpdated: "1 week ago", excerpt: "Configuring self-service eligibility checks, GIS integration, and automatic site-survey scheduling for property owners and municipalities." },
  { id: "KB-0823", title: "Capacity upgrade quote generation for wholesale partners", category: "Provisioning & Turn-up", views: 1840, rating: 4.7, lastUpdated: "4 days ago", excerpt: "Building 10G/100G/400G wave upgrade quotes using OSS data, route availability, and partner contract terms." },
  { id: "KB-0904", title: "Partner portal — invoice and MTR self-service", category: "Account Management", views: 5240, rating: 4.6, lastUpdated: "Today", excerpt: "Directing partners to the self-service portal for invoices, MTR/test reports, and circuit status vs. generating manual reports." },
];
