import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  Building2,
  Globe,
  CreditCard,
  Settings,
  ChevronRight,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigation = [
  { name: "Dashboard", href: "/", icon: BarChart3 },
  { name: "Banks", href: "/banks", icon: Building2 },
  { name: "Platforms", href: "/platforms", icon: Globe },
  { name: "Transactions", href: "/transactions", icon: CreditCard },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={`${isCollapsed ? "w-16" : "w-64"} transition-all duration-300`}>
      <SidebarContent className="bg-sidebar text-sidebar-foreground">
        {/* Logo */}
        <div className="flex items-center px-6 py-6 border-b border-sidebar-border">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-lg font-semibold text-sidebar-foreground">eGov-Payment</h1>
            </div>
          )}
          {isCollapsed && (
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto">
              <CreditCard className="w-5 h-5 text-primary-foreground" />
            </div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-3 py-4">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.href}
                        className={`flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group relative ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-glow"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        }`}
                      >
                        <item.icon className={`w-5 h-5 ${isCollapsed ? "" : "mr-3"} transition-colors`} />
                        {!isCollapsed && (
                          <>
                            <span className="flex-1">{item.name}</span>
                            {isActive && (
                              <ChevronRight className="w-4 h-4 opacity-60" />
                            )}
                          </>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}