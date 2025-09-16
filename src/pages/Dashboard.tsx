import { useState } from "react";
import { Link } from "react-router-dom";
import { Building2, Globe, CreditCard, Clock, TrendingUp, Users, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Dashboard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const stats = [
    {
      title: "Total Banks",
      value: "24",
      change: "+2 this month",
      icon: Building2,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Active Platforms",
      value: "8",
      change: "+1 this week",
      icon: Globe,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      title: "Active Transactions",
      value: "1,234",
      change: "+15% from yesterday",
      icon: CreditCard,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Pending Transactions",
      value: "56",
      change: "-8% from yesterday",
      icon: Clock,
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
  ];

  const recentTransactions = [
    {
      id: "TXN-001",
      bank: "Bank of the Republic of Burundi",
      platform: "Ministry of Finance",
      amount: 2450.00,
      status: "pending",
      date: "2 hours ago",
    },
    {
      id: "TXN-002",
      bank: "Banque Commerciale du Burundi",
      platform: "Education Portal",
      amount: 1200.00,
      status: "completed",
      date: "4 hours ago",
    },
    {
      id: "TXN-003",
      bank: "Ecobank Burundi",
      platform: "Ministry of Health",
      amount: 3200.00,
      status: "completed",
      date: "6 hours ago",
    },
    {
      id: "TXN-004",
      bank: "CRDB Bank Burundi",
      platform: "Tax Authority",
      amount: 850.00,
      status: "failed",
      date: "8 hours ago",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="badge-success">Completed</Badge>;
      case "pending":
        return <Badge className="badge-warning">Pending</Badge>;
      case "failed":
        return <Badge className="badge-danger">Failed</Badge>;
      default:
        return <Badge className="badge-neutral">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your payments today.
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="btn-gradient">
              <DollarSign className="w-4 h-4 mr-2" />
              New Transaction
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Transaction</DialogTitle>
              <DialogDescription>
                Initiate a new payment transaction. Fill in all required information.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="clientCode">Client Code</Label>
                <Input id="clientCode" placeholder="Enter client code (e.g., CLI-001)" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bankSelect">Bank</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a bank" />
                  </SelectTrigger>
                  <SelectContent className="bg-surface">
                    <SelectItem value="brb">Bank of the Republic of Burundi</SelectItem>
                    <SelectItem value="bcb">Banque Commerciale du Burundi</SelectItem>
                    <SelectItem value="ecobank">Ecobank Burundi</SelectItem>
                    <SelectItem value="crdb">CRDB Bank Burundi</SelectItem>
                    <SelectItem value="interbank">Interbank Burundi</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="platformSelect">Platform</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a platform" />
                  </SelectTrigger>
                  <SelectContent className="bg-surface">
                    <SelectItem value="finance">Ministry of Finance</SelectItem>
                    <SelectItem value="education">Education Portal</SelectItem>
                    <SelectItem value="health">Ministry of Health</SelectItem>
                    <SelectItem value="tax">Tax Authority</SelectItem>
                    <SelectItem value="municipal">Bujumbura Municipal Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (USD)</Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  placeholder="Enter amount in USD"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lookupData">Lookup Data</Label>
                <Input id="lookupData" placeholder="Enter lookup reference (e.g., TAX-2024-001)" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter transaction description"
                  rows={3}
                />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button
                  className="btn-gradient"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Create Transaction
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="card-stats">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground flex items-center mt-1">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Recent Transactions
            </CardTitle>
            <CardDescription>
              Latest payment activities across all platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-surface-muted border border-border-muted hover:bg-surface transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium text-foreground">
                        {transaction.id}
                      </p>
                      {getStatusBadge(transaction.status)}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {transaction.bank} → {transaction.platform}
                    </p>
                    <p className="text-xs text-text-subtle">{transaction.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">
                      ${transaction.amount.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild variant="outline" className="w-full mt-4">
              <Link to="/dashboard/transactions">
                View All Transactions
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              System Status
            </CardTitle>
            <CardDescription>
              Current status of connected services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-muted border border-border-muted">
                <div>
                  <p className="text-sm font-medium text-foreground">Payment Gateway</p>
                  <p className="text-xs text-muted-foreground">All systems operational</p>
                </div>
                <Badge className="badge-success">Online</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-muted border border-border-muted">
                <div>
                  <p className="text-sm font-medium text-foreground">Bank Connections</p>
                  <p className="text-xs text-muted-foreground">23/24 banks connected</p>
                </div>
                <Badge className="badge-warning">Partial</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-muted border border-border-muted">
                <div>
                  <p className="text-sm font-medium text-foreground">API Services</p>
                  <p className="text-xs text-muted-foreground">Response time: 120ms</p>
                </div>
                <Badge className="badge-success">Healthy</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-muted border border-border-muted">
                <div>
                  <p className="text-sm font-medium text-foreground">Database</p>
                  <p className="text-xs text-muted-foreground">99.9% uptime</p>
                </div>
                <Badge className="badge-success">Online</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;