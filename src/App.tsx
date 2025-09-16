import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Banks from "./pages/Banks";
import Platforms from "./pages/Platforms";
import Transactions from "./pages/Transactions";
import TransactionDetails from "./pages/TransactionDetails";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="system" storageKey="egov-payment-ui-theme">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Default route - Login Page */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />

            {/* Dashboard Routes - With Sidebar */}
            <Route path="/dashboard/*" element={
              <SidebarProvider>
                <Routes>
                  <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="banks" element={<Banks />} />
                    <Route path="platforms" element={<Platforms />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="transactions/:id" element={<TransactionDetails />} />
                    <Route path="settings" element={<Settings />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </SidebarProvider>
            } />

            {/* Catch-all for undefined routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
