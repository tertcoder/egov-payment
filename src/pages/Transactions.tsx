import { useState } from "react";
import { Link } from "react-router-dom";
import { CreditCard, Search, Filter, Download, Eye, Calendar, DollarSign, ChevronLeft, ChevronRight, CheckCircle, Clock } from "lucide-react";
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
import { usePagination } from "@/hooks/use-pagination";

const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const demoTransactions = [
    {
      id: "TXN-2024-001",
      clientCode: "CLI-001",
      bank: "Bank of the Republic of Burundi",
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
      bank: "Banque Commerciale du Burundi",
      platform: "Education Portal",
      amount: 1200.00,
      date: "2024-03-15T12:15:00",
      status: "completed",
      lookupData: "EDU-FEE-2024-001",
      description: "University of Burundi tuition fee",
    },
    {
      id: "TXN-2024-003",
      clientCode: "CLI-003",
      bank: "Ecobank Burundi",
      platform: "Ministry of Health",
      amount: 3200.00,
      date: "2024-03-15T10:45:00",
      status: "completed",
      lookupData: "MED-SRV-2024-001",
      description: "Medical service payment",
    },
    {
      id: "TXN-2024-004",
      clientCode: "CLI-004",
      bank: "CRDB Bank Burundi",
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
      bank: "Interbank Burundi",
      platform: "Municipal Services Bujumbura",
      amount: 450.00,
      date: "2024-03-14T16:00:00",
      status: "completed",
      lookupData: "MUN-UTIL-2024-001",
      description: "Utility bill payment",
    },
    {
      id: "TXN-2024-006",
      clientCode: "CLI-006",
      bank: "Bank of the Republic of Burundi",
      platform: "Education Portal",
      amount: 2100.00,
      date: "2024-03-14T14:15:00",
      status: "pending",
      lookupData: "EDU-FEE-2024-002",
      description: "Technical institute fee",
    },
    {
      id: "TXN-2024-007",
      clientCode: "CLI-007",
      bank: "Banque de Gestion et de Financement",
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
      bank: "Banque Commerciale du Burundi",
      platform: "Ministry of Health",
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

  const {
    currentItems: paginatedTransactions,
    currentPage,
    totalPages,
    totalItems,
    pageSize,
    hasNextPage,
    hasPreviousPage,
    goToPage,
    goToNextPage,
    goToPreviousPage,
    setPageSize,
  } = usePagination(filteredTransactions, 10);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 border border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800">Completed</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-300 dark:border-yellow-800">Pending</Badge>;
      case "processing":
        return <Badge className="bg-blue-100 text-blue-800 border border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800">Processing</Badge>;
      case "failed":
        return <Badge className="bg-red-100 text-red-800 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800">Failed</Badge>;
      case "cancelled":
        return <Badge className="bg-orange-100 text-orange-800 border border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800">Cancelled</Badge>;
      case "refunded":
        return <Badge className="bg-purple-100 text-purple-800 border border-purple-200 dark:bg-purple-900/20 dark:text-purple-300 dark:border-purple-800">Refunded</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800 border border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800">Unknown</Badge>;
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
              <CheckCircle className="w-8 h-8 text-green-600" />
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
              <Clock className="w-8 h-8 text-yellow-600" />
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
              <SelectContent className="bg-surface">
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
                {paginatedTransactions.map((transaction) => {
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
                          <Link to={`/dashboard/transactions/${transaction.id}`}>
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

          {/* Pagination */}
          {totalItems > 0 && (
            <div className="flex items-center justify-between px-2 py-4">
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <p>Rows per page:</p>
                  <Select
                    value={`${pageSize}`}
                    onValueChange={(value) => setPageSize(Number(value))}
                  >
                    <SelectTrigger className="h-8 w-[70px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent side="top" className="bg-surface">
                      {[5, 10, 20, 30, 40, 50].map((size) => (
                        <SelectItem key={size} value={`${size}`}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  {totalItems === 0 ? "0" : (currentPage - 1) * pageSize + 1}-{Math.min(currentPage * pageSize, totalItems)} of {totalItems}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToPreviousPage}
                  disabled={!hasPreviousPage}
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Go to previous page</span>
                </Button>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNumber;
                    if (totalPages <= 5) {
                      pageNumber = i + 1;
                    } else {
                      const start = Math.max(1, currentPage - 2);
                      const end = Math.min(totalPages, start + 4);
                      const adjustedStart = Math.max(1, end - 4);
                      pageNumber = adjustedStart + i;
                    }

                    if (pageNumber > totalPages) return null;

                    return (
                      <Button
                        key={pageNumber}
                        variant={currentPage === pageNumber ? "default" : "outline"}
                        size="sm"
                        onClick={() => goToPage(pageNumber)}
                        className="h-8 w-8 p-0"
                      >
                        {pageNumber}
                      </Button>
                    );
                  })}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNextPage}
                  disabled={!hasNextPage}
                >
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Go to next page</span>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;