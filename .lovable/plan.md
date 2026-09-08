## Goal
Rebrand and rebuild the existing Salesforce Lightning-style demo for **Forged Fiber 37**, replacing every Sysco Foods reference and reshaping the agents, mock data, and business flows around wholesale fiber-network operations.

## What gets changed
- Company identity: Sysco Foods → **Forged Fiber 37**.
- Industry context: foodservice distribution → wholesale fiber infrastructure, network builds, broadband transport, partner enablement.
- Visual identity: replace Sysco navy/green with a Forged Fiber 37 palette (proposed: forged-steel dark `#1A1F2E`, fiber blue `#0077B6`, forged orange `#FF6B35`, light page bg `#F8F9FA`).
- Logo: replace Sysco logo with a generated/placeholder Forged Fiber 37 wordmark/logo asset.
- Mock data: accounts become property developers, municipalities, ISPs, data centers, enterprise customers; opportunities become fiber-build projects and wholesale transport deals; cases become network incidents, provisioning requests, and permit issues.
- Agents: replace the six Sysco agents with four Forged Fiber 37 agents plus a cross-domain command agent.
- Edge-function prompts: rewrite `supabase/functions/agent-chat` agent definitions and system prompts for fiber-network context.
- Page copy and record layouts: update highlights, related lists, path stages, kanban columns, and dashboard widgets for fiber operations.

## New Forged Fiber 37 agents
1. **Network Operations Agent** (`networkOps`) — monitors network health, alarms, outages, performance degradation, and dispatches field techs.
2. **Sales Coach Agent** (`salesCoach`) — coaches account managers on wholesale fiber deals, competitive positioning, pricing, and proposals.
3. **Wholesale Partner Support Agent** (`partnerSupport`) — supports ISP/wholesale partners with onboarding, capacity questions, SLAs, and escalations.
4. **Fiber Enablement Agent** (`fiberEnablement`) — guides property owners, developers, and municipalities through fiber-build eligibility and requests.
5. **Command Agent** (`command`) — cross-domain Einstein assistant that can answer across Sales, Service, Network Ops, and Agentforce.

## Data model remapping
Reuse the existing `src/data/mockData.ts` shape (accounts, opportunities, cases, contacts, agents) but re-skin the values:
- **Accounts**: `name`, `type` (Municipality / Property Developer / ISP / Enterprise / Data Center), `industry` (Telecommunications / Real Estate / Government / Enterprise), `tier`, `owner`, `phone`, `fiber_status`, `market`.
- **Opportunities**: `name` (e.g., "Downtown Austin Fiber Build"), `stage` (Qualification → Site Survey → Permitting → Construction → Live → Closed Won), `amount`, `close_date`, `account`, `owner`, `probability`.
- **Cases**: `subject` (e.g., "Latency spike in Region 3"), `status` (New → In Progress → Awaiting Field → Resolved), `priority`, `origin` (Alarm / Partner / Customer / Permit), `account`, `owner`.
- **Contacts**: roles like Network Engineer, Partner Manager, Property Manager, City Planner.

## Pages to update
1. **`/` → Sales Home** — Forged Fiber 37 Sales Console home: "Network Build Pipeline" line chart, "Today's Tasks", "Recent Accounts", "Assistant" panel.
2. **`/accounts`** — list view of fiber customers/partners (municipalities, developers, ISPs, enterprises).
3. **`/accounts/:id`** — Account record: Highlights Panel (name, type, market, owner, fiber status, tier), Activity / Details / Related tabs, Path for account tier, related lists (Opportunities, Cases, Contacts, Network Assets).
4. **`/opportunities`** — Kanban by Stage for fiber-build/wholesale deals.
5. **`/opportunities/:id`** — record page with Sales Path, highlights, related lists.
6. **`/cases`** — Service Console split view: left case list, right workspace tabs.
7. **`/cases/:id`** — case record: Feed / Details / Related; right rail "Einstein Reply Recommendations" + "Agent Assist" + Knowledge articles.
8. **`/agentforce`** — Agentforce Studio: list of the 5 Forged Fiber 37 agents. Click → agent builder with Topics, Actions, Instructions tabs and live Conversation Preview using `streamChat`.
9. **`/reports`** — Forged Fiber 37 reports list.
10. **`/dashboards/sales`** — Lightning Dashboard with fiber KPI widgets (network availability, build pipeline, partner churn risk, case backlog).
11. Keep `/login`, `/login-report` (admin), `/account/:id` redirect to `/accounts/:id`.

## Conversational AI
- Keep `supabase/functions/agent-chat` and `streamChat` as-is structurally.
- Rewrite agent definitions and system prompts to reflect Forged Fiber 37 terminology (fiber builds, wholesale transport, open access network, SLAs, OTDR, splice closures, ROW/permitting, etc.).
- Surface chat in: (a) docked Einstein Copilot utility bar on every page, (b) Agentforce Studio Conversation Preview.

## Auth
Unchanged. `@techmahindra.com` gate, admin `vijay.purbhe@techmahindra.com` sees `/login-report`.

## Technical steps
1. **Identity & theme**
   - Update `src/index.css` and `tailwind.config.ts` with Forged Fiber 37 tokens.
   - Generate/replace `src/assets/sysco-logo.png` with a Forged Fiber 37 logo.
   - Update `index.html` title/meta and `Login.tsx` branding.
2. **Mock data**
   - Rewrite `src/data/mockData.ts` with fiber-network accounts, opportunities, cases, contacts.
3. **Agents**
   - Update agent list in `src/data/mockData.ts` and any agent UI components.
   - Rewrite `supabase/functions/agent-chat/index.ts` agent configs and prompts.
4. **Pages & components**
   - Update copy in `src/pages/*` from Sysco/foodservice to Forged Fiber 37/fiber.
   - Update list views, record pages, kanban, dashboards to use new data fields.
5. **Edge function**
   - Redeploy `agent-chat` after prompt changes.

## Out of scope
Real network telemetry APIs, real Salesforce API, real telephony, multi-tenant data, write-back to backend.
