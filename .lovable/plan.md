## Goal
Throw away the current "executive dashboard" layout entirely and rebuild the demo to look and feel like a real **Salesforce Lightning Experience** org for Sysco Foods — Sales Cloud, Service Cloud, and Agentforce — with no demo banners, no architecture diagrams, no data-lineage panels.

## What gets removed
- All "what this demo shows" hero banners / intro copy on every page.
- `DataLineage.tsx`, `StateToggle.tsx` (Current vs Agentic Future), `BudgetOptimization.tsx` (capacity simulator), `ScenarioPanel.tsx`, `CustomerProfile.tsx`, `KpiTile.tsx` glass dashboard tiles, `ChannelTable.tsx`, `RevenueChart.tsx`, `ForecastingPanel.tsx`, `StreamingAlerts.tsx`, `GovernancePanel.tsx`, `AiCommandInput.tsx` in their current form.
- The current `Index.tsx` role-switcher home, `ContactCenter.tsx` ops board, glass-card styling, navy/green dashboard theme.
- Footer tagline naming the platform stack.

## What gets built — Salesforce Lightning shell
New global chrome that mimics Lightning Experience:
- **Top utility bar**: Salesforce-style dark blue bar with App Launcher (waffle), app name ("Sysco Sales Console" / "Service Console"), global search, setup gear, notifications bell, user avatar.
- **Lightning navigation tabs** under the utility bar: Home, Accounts, Contacts, Opportunities, Leads, Cases, Reports, Dashboards, Agentforce (changes per app).
- **App switcher**: Sales Console ↔ Service Console ↔ Agentforce Studio (no "demo role tiles").
- **Utility bar (bottom)**: Lightning-style docked utilities — Phone (Service Cloud Voice), Notes, History, Einstein, Agentforce chat (the docked Einstein Copilot panel).
- Lightning color tokens: SLDS-like — `#0176D3` brand blue, `#181818` text, `#F3F3F3` page bg, white cards with 1px `#E5E5E5` border, no glassmorphism, no gradients. System font stack matching SLDS (Salesforce Sans → Inter fallback).

## New pages (replace existing)
1. **`/` → Sales Home** — Lightning Home: "Quarterly Performance" line chart, "Today's Events", "Today's Tasks", "Recent Records", "Assistant" panel (Einstein). No banner.
2. **`/accounts`** — list view with Salesforce-style data table (pinned columns, row actions, "List Views" picker, New button, filter pill bar).
3. **`/accounts/:id`** — Account record page: Highlights Panel (account name, type, industry, owner, phone, rating), Activity / Details / Related tabs, Path component for account tier, related lists (Opportunities, Cases, Contacts, Orders), right rail with Einstein Account Insights + Agentforce chat.
4. **`/opportunities`** — Kanban by Stage (Prospecting → Closed Won), drag look, amount totals per column.
5. **`/opportunities/:id`** — record page with Sales Path (stage chevrons), highlights, related lists.
6. **`/cases`** — Service Console split view: left case list, right case workspace tabs.
7. **`/cases/:id`** — Service Console record: Feed / Details / Related; right rail "Einstein Reply Recommendations" + "Agent Assist" + Knowledge articles; bottom utility bar with active call.
8. **`/agentforce`** — Agentforce Studio: list of 6 agents as Salesforce Setup-style rows (name, type, status, topics, last modified). Click → agent builder mock with Topics, Actions, Instructions tabs and a live "Conversation Preview" panel that uses the existing `streamChat` Gemini edge function.
9. **`/reports`** — Salesforce Reports list view (folder, name, type, last run).
10. **`/dashboards/sales`** — Lightning Dashboard with widget grid (gauge, donut, bar, table) — this replaces the old "executive dashboard" need.
11. Keep `/login`, `/login-report` (admin), `/account/:id` redirects to `/accounts/:id`.

## Conversational AI
- Keep `supabase/functions/agent-chat` and `streamChat` as-is (prompts already Sysco-flavored).
- Surface it in two places only: (a) docked **Einstein Copilot** utility bar panel available on every page, (b) Agentforce Studio "Conversation Preview".
- No more "Command Center" hero box.

## Mock data
Reuse `src/data/mockData.ts` content (accounts, opportunities, cases, agents) but expose it through new list-view / record-page shaped selectors. No schema rewrite needed.

## Auth
Unchanged. `@techmahindra.com` gate, admin sees `/login-report` link in the Setup gear menu.

## Technical notes
- New folder `src/components/lightning/` for SLDS-style primitives: `Highlights`, `RecordPage`, `RelatedList`, `ListView`, `Path`, `UtilityBar`, `AppHeader`, `NavTabs`, `RecordTabs`, `EinsteinPanel`, `CopilotDock`.
- New `src/layouts/ConsoleLayout.tsx` replaces `AppLayout.tsx` content; keeps the auth gate logic.
- Theme overhaul in `src/index.css` + `tailwind.config.ts`: SLDS tokens (`--brand`, `--brand-dark`, `--neutral-95`, etc.); drop glassmorphism utilities.
- Delete the obsolete components listed above to keep the codebase clean.
- Routes registered in `src/App.tsx` with React Router.
- All existing background logic (edge function, streaming, login gate, login report) preserved.

## Out of scope
Real Salesforce API, real telephony, multi-tenant data, write-back to backend.