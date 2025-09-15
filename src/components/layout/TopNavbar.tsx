import { Search, Bell, User, Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "@/hooks/use-theme";

export function TopNavbar() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="h-16 border-b border-border bg-surface flex items-center justify-between px-6">
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <SidebarTrigger />

        {/* Search Bar */}
        <div className="relative max-w-md w-64 hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search transactions, banks..."
            className="pl-10 bg-surface-muted border-border-muted focus:bg-surface"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Mobile Search Button */}
        <Button variant="ghost" size="sm" className="md:hidden">
          <Search className="w-4 h-4" />
        </Button>

        {/* Theme Toggle */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-surface">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              <span className="mr-2 h-4 w-4">🖥️</span>
              <span>System</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-destructive border-2 border-surface" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 bg-surface">
            <div className="p-4 border-b border-border-muted">
              <h3 className="font-medium">Notifications</h3>
              <p className="text-sm text-muted-foreground">You have 3 new notifications</p>
            </div>
            <DropdownMenuItem className="p-4">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">New transaction pending</p>
                <p className="text-xs text-muted-foreground">Bank of Ethiopia - $2,450.00</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-4">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">Platform registration approved</p>
                <p className="text-xs text-muted-foreground">Ministry of Finance platform</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="p-4">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">System maintenance scheduled</p>
                <p className="text-xs text-muted-foreground">Tomorrow at 2:00 AM</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
              <Avatar className="h-10 w-10">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  <User className="w-4 h-4" />
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-surface">
            <div className="flex items-center justify-start gap-2 p-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                  <User className="w-3 h-3" />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col space-y-1 leading-none">
                <p className="font-medium text-sm">John Doe</p>
                <p className="w-[200px] truncate text-xs text-muted-foreground">
                  admin@egov-payment.gov
                </p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>Security</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">Sign Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}