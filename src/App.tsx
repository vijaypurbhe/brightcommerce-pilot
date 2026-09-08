import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import AgenticDesktop from "./pages/AgenticDesktop";
import Index from "./pages/Index";
import Accounts from "./pages/Accounts";
import AccountRecord from "./pages/AccountRecord";
import Contacts from "./pages/Contacts";
import Leads from "./pages/Leads";
import Opportunities from "./pages/Opportunities";
import OpportunityRecord from "./pages/OpportunityRecord";
import Cases from "./pages/Cases";
import CaseRecord from "./pages/CaseRecord";
import Knowledge from "./pages/Knowledge";
import ServiceHome from "./pages/ServiceHome";
import Reports from "./pages/Reports";
import SalesDashboard from "./pages/SalesDashboard";
import ServiceDashboard from "./pages/ServiceDashboard";
import LoginReport from "./pages/LoginReport";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AgenticDesktop />} />
          <Route path="/agentic" element={<AgenticDesktop />} />
          <Route element={<AppLayout />}>
            <Route path="/home" element={<Index />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/accounts/:id" element={<AccountRecord />} />
            <Route path="/account/:id" element={<Navigate to="/accounts/:id" replace />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route path="/opportunities/:id" element={<OpportunityRecord />} />
            <Route path="/service" element={<Navigate to="/dashboards/service" replace />} />
            <Route path="/service/home" element={<ServiceHome />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/cases/:id" element={<CaseRecord />} />
            <Route path="/case/:id" element={<CaseRecord />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/dashboards" element={<Navigate to="/dashboards/sales" replace />} />
            <Route path="/dashboards/sales" element={<SalesDashboard />} />
            <Route path="/dashboards/service" element={<ServiceDashboard />} />
            <Route path="/agentforce" element={<Navigate to="/" replace />} />
            <Route path="/agentforce/:tab" element={<Navigate to="/" replace />} />
            <Route path="/login-report" element={<LoginReport />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
