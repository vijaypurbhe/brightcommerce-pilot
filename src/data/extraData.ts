// Sales contacts (foodservice decision-makers)
export interface SyscoContact {
  id: string;
  name: string;
  title: string;
  account: string;
  email: string;
  phone: string;
  lastActivity: string;
}

export const contacts: SyscoContact[] = [
  { id: "CON-2001", name: "Maria Costa", title: "Executive Chef", account: "Cheesecake Factory — Northeast", email: "maria.costa@cheesecakene.com", phone: "(212) 555-0141", lastActivity: "Today" },
  { id: "CON-2002", name: "James Wu", title: "Director of Procurement", account: "Cheesecake Factory — Northeast", email: "j.wu@cheesecakene.com", phone: "(212) 555-0142", lastActivity: "Yesterday" },
  { id: "CON-2003", name: "Linda Park", title: "F&B Operations Manager", account: "Hyatt Regency — TX Cluster", email: "l.park@hyatt.com", phone: "(214) 555-0188", lastActivity: "2 days ago" },
  { id: "CON-2004", name: "Andre Tovar", title: "Corporate Chef", account: "Cosmo Casinos — Las Vegas", email: "atovar@cosmolv.com", phone: "(702) 555-0241", lastActivity: "Today" },
  { id: "CON-2005", name: "Dr. Susan Reed", title: "Nutrition Services Director", account: "Mercy Health Network", email: "s.reed@mercyhealth.org", phone: "(314) 555-0312", lastActivity: "3 days ago" },
  { id: "CON-2006", name: "Mike Brennan", title: "Owner / Operator", account: "Bluebird Diner Group (12 locations)", email: "mike@bluebirddiner.com", phone: "(617) 555-0192", lastActivity: "11 days ago" },
  { id: "CON-2007", name: "Karen Lopez", title: "Food Service Director", account: "Sunrise Senior Living", email: "k.lopez@sunrise.com", phone: "(303) 555-0144", lastActivity: "5 days ago" },
  { id: "CON-2008", name: "Patrick O'Connor", title: "District Supervisor", account: "Brookline Public Schools", email: "po@brooklineschools.org", phone: "(617) 555-0277", lastActivity: "Today" },
  { id: "CON-2009", name: "Jess Hampton", title: "GM / Beverage Buyer", account: "Tap House Brewing Co.", email: "jess@taphouse.beer", phone: "(512) 555-0181", lastActivity: "14 days ago" },
  { id: "CON-2010", name: "Carlos Rivera", title: "VP Culinary", account: "Marriott Resorts — FL", email: "c.rivera@marriott.com", phone: "(305) 555-0123", lastActivity: "Today" },
  { id: "CON-2011", name: "Dawn Murphy", title: "Franchise Operations Lead", account: "Burger Hub Franchise (28 stores)", email: "dawn@burgerhub.co", phone: "(602) 555-0156", lastActivity: "Yesterday" },
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
  { id: "LEAD-9001", name: "Tom Garner", title: "Owner", company: "Garner's Steakhouse", source: "Sysco Shop AI signup", status: "New", einsteinScore: 78, region: "Mountain", estValue: 320000, createdDays: 1 },
  { id: "LEAD-9002", name: "Priya Shah", title: "Director of Dining", company: "Lakeside Country Club", source: "Trade show — NRA", status: "Working", einsteinScore: 82, region: "Midwest", estValue: 480000, createdDays: 4 },
  { id: "LEAD-9003", name: "Eric Holm", title: "Chef / Owner", company: "Northstar Tavern", source: "Referral — D. Chen", status: "Working", einsteinScore: 71, region: "Northeast", estValue: 220000, createdDays: 6 },
  { id: "LEAD-9004", name: "Yolanda Reyes", title: "Food Service Director", company: "Maricopa USD", source: "RFP response", status: "Qualified", einsteinScore: 88, region: "Southwest", estValue: 940000, createdDays: 9 },
  { id: "LEAD-9005", name: "Ben Whitaker", title: "Operations Lead", company: "Pier 7 Seafood Co.", source: "Website demo request", status: "Nurturing", einsteinScore: 54, region: "West", estValue: 180000, createdDays: 14 },
  { id: "LEAD-9006", name: "Nora Patel", title: "Corporate Buyer", company: "Sunset Cafés (8 stores)", source: "Marketing Cloud nurture", status: "Working", einsteinScore: 74, region: "Southeast", estValue: 380000, createdDays: 3 },
  { id: "LEAD-9007", name: "Greg Mathis", title: "Owner", company: "Mathis BBQ", source: "Outbound — R. Patel", status: "Nurturing", einsteinScore: 46, region: "South Central", estValue: 140000, createdDays: 21 },
  { id: "LEAD-9008", name: "Helena Ito", title: "Chief Procurement Officer", company: "PacRim Hospitality", source: "LinkedIn ad", status: "Qualified", einsteinScore: 91, region: "West", estValue: 1_240_000, createdDays: 11 },
  { id: "LEAD-9009", name: "Sam Walters", title: "GM", company: "Walters Diner", source: "Walk-in branch", status: "Disqualified", einsteinScore: 24, region: "Northeast", estValue: 60000, createdDays: 18 },
  { id: "LEAD-9010", name: "Aisha Owens", title: "Catering Director", company: "Lockheed Cafeteria", source: "Government bid portal", status: "New", einsteinScore: 80, region: "South Central", estValue: 720000, createdDays: 2 },
];

export interface KnowledgeArticle {
  id: string;
  title: string;
  category: "Order Management" | "Delivery & Logistics" | "Credit & Returns" | "Equipment Service" | "Food Safety" | "Account Management";
  views: number;
  rating: number;
  lastUpdated: string;
  excerpt: string;
}

export const knowledgeArticles: KnowledgeArticle[] = [
  { id: "KB-0142", title: "Late delivery — proactive customer workflow", category: "Delivery & Logistics", views: 2840, rating: 4.7, lastUpdated: "2 days ago", excerpt: "Step-by-step playbook for proactively communicating delivery delays to a customer and triggering credit if needed." },
  { id: "KB-0218", title: "Credit policy thresholds & approval matrix", category: "Credit & Returns", views: 4120, rating: 4.8, lastUpdated: "1 week ago", excerpt: "Auto-approve credits ≤$500 with photo evidence. ≤$2,000 requires CSM approval. >$2,000 requires Director of Sales sign-off." },
  { id: "KB-0307", title: "Service Cloud Voice escalation script", category: "Account Management", views: 1640, rating: 4.6, lastUpdated: "3 days ago", excerpt: "Live voice script for escalating P1 incidents — walk-in cooler failure, food-safety, banquet shortfall." },
  { id: "KB-0412", title: "Walk-in cooler temperature alarm response", category: "Equipment Service", views: 2210, rating: 4.9, lastUpdated: "Yesterday", excerpt: "Field service dispatch protocol when a customer reports walk-in cooler outside 35-40°F range, including emergency dry-ice options." },
  { id: "KB-0501", title: "Substitution policy for out-of-stock SKUs", category: "Order Management", views: 3680, rating: 4.5, lastUpdated: "5 days ago", excerpt: "When and how to propose substitutions, with margin-equivalent matching and customer-approval flow before delivery." },
  { id: "KB-0612", title: "Food safety incident — recall handling", category: "Food Safety", views: 980, rating: 4.9, lastUpdated: "2 weeks ago", excerpt: "Multi-step protocol for handling supplier recalls including customer notification, traceability, and credit issuance." },
  { id: "KB-0718", title: "Standing PO modification request flow", category: "Order Management", views: 2120, rating: 4.4, lastUpdated: "1 week ago", excerpt: "How to pause, modify, or resume a customer's standing purchase order and reconcile with future invoices." },
  { id: "KB-0823", title: "Reorder reminders + Sysco Shop AI integration", category: "Order Management", views: 1840, rating: 4.7, lastUpdated: "4 days ago", excerpt: "Configuring weekly reorder reminders via Sysco Shop AI and the Reorder Agent for independent restaurant accounts." },
  { id: "KB-0904", title: "Invoice copy request — self-service portal", category: "Account Management", views: 5240, rating: 4.6, lastUpdated: "Today", excerpt: "Directing customers to the self-service invoice portal vs. generating bundled PDFs via Service Agent." },
];
