import { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Search, Filter, Download, Eye, Calendar, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const demoTransactions = [
    {
      id: "TXN-2024-001",
      clientCode: "CLI-001",
      bank: "Bank of Ethiopia",
      platform: "Ministry of Finance",
      amount: 2450.00,
      date: "2024-03-15T14:30:00",
      status: "pending",
      lookupData: "TAX-2024-Q1-001",
      description: "Quarterly tax payment",
    },
    {
      id: "TXN-2024-002",
      clientCode: "CLI-002",
      bank: "Commercial Bank",
      platform: "Education Portal",
      amount: 1200.00,
      date: "2024-03-15T12:15:00",
      status: "completed",
      lookupData: "EDU-FEE-2024-001",
      description: "University tuition fee",
    },
    {
      id: "TXN-2024-003",
      clientCode: "CLI-003",
      bank: "Dashen Bank",
      platform: "Health Department",
      amount: 3200.00,
      date: "2024-03-15T10:45:00",
      status: "completed",
      lookupData: "MED-SRV-2024-001",
      description: "Medical service payment",
    },
    {
      id: "TXN-2024-004",
      clientCode: "CLI-004",
      bank: "Awash Bank",
      platform: "Tax Authority",
      amount: 850.00,
      date: "2024-03-15T09:20:00",
      status: "failed",
      lookupData: "TAX-2024-BIZ-001",
      description: "Business license fee",
    },
    {
      id: "TXN-2024-005",
      clientCode: "CLI-005",
      bank: "United Bank",
      platform: "Municipal Services",
      amount: 450.00,
      date: "2024-03-14T16:00:00",
      status: "completed",
      lookupData: "MUN-UTIL-2024-001",
      description: "Utility bill payment",
    },
    {
      id: "TXN-2024-006",
      clientCode: "CLI-006",
      bank: "Bank of Ethiopia",
      platform: "Education Portal",
      amount: 2100.00,
      date: "2024-03-14T14:15:00",
      status: "pending",
      lookupData: "EDU-FEE-2024-002",
      description: "Graduate program fee",
    },
    {
      id: "TXN-2024-007",
      clientCode: "CLI-007",
      bank: "Dashen Bank",
      platform: "Ministry of Finance",
      amount: 5200.00,
      date: "2024-03-14T11:30:00",
      status: "processing",
      lookupData: "TAX-2024-CORP-001",
      description: "Corporate tax payment",
    },
    {
      id: "TXN-2024-008",
      clientCode: "CLI-008",
      bank: "Commercial Bank",
      platform: "Health Department",
      amount: 780.00,
      date: "2024-03-14T08:45:00",
      status: "completed",
      lookupData: "MED-SRV-2024-002",
      description: "Medical examination fee",
    },
  ];

  const filteredTransactions = demoTransactions.filter(transaction => {
    const matchesSearch = 
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.bank.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.platform.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.clientCode.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || transaction.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="badge-success">Completed</Badge>;
      case "pending":
        return <Badge className="badge-warning">Pending</Badge>;
      case "processing":
        return <Badge className="bg-blue-100 text-blue-700 border border-blue-200">Processing</Badge>;
      case "failed":
        return <Badge className="badge-danger">Failed</Badge>;
      default:
        return <Badge className="badge-neutral">Unknown</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  };

  const totalAmount = demoTransactions.reduce((sum, t) => sum + t.amount, 0);
  const completedAmount = demoTransactions
    .filter(t => t.status === 'completed')
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center">
            <CreditCard className="w-8 h-8 mr-3" />
            Transaction History
          </h1>
          <p className="text-muted-foreground">
            Monitor and manage all payment transactions across platforms
          </p>
        </div>
        <Button className="btn-gradient">
          <Download className="w-4 h-4 mr-2" />
          Export Data
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="card-stats">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Transactions</p>
                <p className="text-2xl font-bold text-foreground">{demoTransactions.length}</p>
              </div>
              <CreditCard className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-stats">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Amount</p>
                <p className="text-2xl font-bold text-foreground">${totalAmount.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 text-secondary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-stats">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-secondary">
                  {demoTransactions.filter(t => t.status === 'completed').length}
                </p>
              </div>
              <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-secondary rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-stats">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-warning">
                  {demoTransactions.filter(t => t.status === 'pending').length}
                </p>
              </div>
              <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-warning rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="card-stats">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Transactions Table */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle>Transaction Records</CardTitle>
          <CardDescription>
            Detailed view of all payment transactions with status and amount information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="table-modern">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Bank & Platform</TableHead>
                  <TableHead>Client Details</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((transaction) => {
                  const { date, time } = formatDate(transaction.date);
                  return (
                    <TableRow key={transaction.id} className="hover:bg-surface-muted/50">
                      <TableCell>
                        <div className="space-y-1">
                          <p className="font-medium text-foreground">{transaction.id}</p>
                          <p className="text-xs text-muted-foreground">{transaction.lookupData}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-foreground">{transaction.bank}</p>
                          <p className="text-xs text-muted-foreground">→ {transaction.platform}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-foreground">{transaction.clientCode}</p>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {transaction.description}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <p className="text-sm font-semibold text-foreground">
                          ${transaction.amount.toFixed(2)}
                        </p>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-foreground">{date}</p>
                          <p className="text-xs text-muted-foreground">{time}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(transaction.status)}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button asChild variant="ghost" size="sm">
                          <Link to={`/transactions/${transaction.id}`}>
                            <Eye className="w-4 h-4" />
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          
          {filteredTransactions.length === 0 && (
            <div className="text-center py-8">
              <CreditCard className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No transactions found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;