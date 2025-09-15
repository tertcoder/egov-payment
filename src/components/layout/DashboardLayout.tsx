import { Outlet } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { TopNavbar } from "@/components/layout/TopNavbar";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar />
      
      <div className="flex-1 flex flex-col">
        <TopNavbar />
        
        <main className="flex-1 p-6 bg-surface-muted">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;