import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Building2, Globe, CreditCard, Clock, CheckCircle, XCircle, User, FileText, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const TransactionDetails = () => {
  const { id } = useParams();

  // Mock transaction data - in real app this would come from API
  const transaction = {
    id: id || "TXN-2024-001",
    clientCode: "CLI-001",
    bank: "Bank of Ethiopia",
    platform: "Ministry of Finance",
    amount: 2450.00,
    date: "2024-03-15T14:30:00",
    status: "pending",
    lookupData: "TAX-2024-Q1-001",
    description: "Quarterly tax payment for business license renewal",
    bankReference: "BET-2024-003456",
    platformReference: "MOF-TAX-789012",
    processingFee: 24.50,
    netAmount: 2425.50,
    initiatedBy: "John Doe",
    clientDetails: {
      name: "ABC Trading Company",
      email: "finance@abctrading.com",
      phone: "+251-11-123-4567",
      address: "Addis Ababa, Ethiopia",
    },
    timeline: [
      {
        status: "initiated",
        timestamp: "2024-03-15T14:30:00",
        description: "Transaction initiated by client",
        completed: true,
      },
      {
        status: "validated",
        timestamp: "2024-03-15T14:32:00",
        description: "Payment details validated",
        completed: true,
      },
      {
        status: "processing",
        timestamp: "2024-03-15T14:35:00",
        description: "Processing payment through bank gateway",
        completed: true,
      },
      {
        status: "pending",
        timestamp: "2024-03-15T14:40:00",
        description: "Awaiting bank confirmation",
        completed: false,
      },
      {
        status: "completed",
        timestamp: null,
        description: "Payment completed successfully",
        completed: false,
      },
    ],
  };

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
    return date.toLocaleString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button asChild variant="ghost" size="sm">
          <Link to="/transactions">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Transactions
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-foreground flex items-center">
            <CreditCard className="w-8 h-8 mr-3" />
            Transaction Details
          </h1>
          <p className="text-muted-foreground">
            Complete information for transaction {transaction.id}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transaction Overview */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="card-elevated">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Transaction Overview
                  </CardTitle>
                  <CardDescription>Basic transaction information and status</CardDescription>
                </div>
                {getStatusBadge(transaction.status)}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Transaction Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Transaction ID</p>
                    <p className="text-lg font-semibold text-foreground">{transaction.id}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Client Code</p>
                    <p className="text-foreground">{transaction.clientCode}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Lookup Data</p>
                    <p className="text-foreground">{transaction.lookupData}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Initiated By</p>
                    <p className="text-foreground">{transaction.initiatedBy}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Date & Time</p>
                    <p className="text-foreground">{formatDate(transaction.date)}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Bank Reference</p>
                    <p className="text-foreground">{transaction.bankReference}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Platform Reference</p>
                    <p className="text-foreground">{transaction.platformReference}</p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Bank and Platform Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3 p-4 bg-surface-muted rounded-lg border border-border-muted">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Bank</p>
                    <p className="text-sm text-muted-foreground">{transaction.bank}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-surface-muted rounded-lg border border-border-muted">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Globe className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Platform</p>
                    <p className="text-sm text-muted-foreground">{transaction.platform}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-2">Description</p>
                <p className="text-foreground p-3 bg-surface-muted rounded-lg border border-border-muted">
                  {transaction.description}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Client Information */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                Client Information
              </CardTitle>
              <CardDescription>Details about the client making this payment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Client Name</p>
                    <p className="text-foreground">{transaction.clientDetails.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Email Address</p>
                    <p className="text-foreground">{transaction.clientDetails.email}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Phone Number</p>
                    <p className="text-foreground">{transaction.clientDetails.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Address</p>
                    <p className="text-foreground">{transaction.clientDetails.address}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Amount Details */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Amount Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transaction Amount</span>
                <span className="font-semibold text-foreground">${transaction.amount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Processing Fee</span>
                <span className="text-foreground">${transaction.processingFee.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span className="font-medium text-foreground">Net Amount</span>
                <span className="font-bold text-lg text-foreground">${transaction.netAmount.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Actions</CardTitle>
              <CardDescription>Manage this transaction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {transaction.status === "pending" && (
                <>
                  <Button className="w-full btn-gradient">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Confirm Transaction
                  </Button>
                  <Button variant="outline" className="w-full text-destructive hover:text-destructive">
                    <XCircle className="w-4 h-4 mr-2" />
                    Reject Transaction
                  </Button>
                </>
              )}
              <Button variant="outline" className="w-full">
                <FileText className="w-4 h-4 mr-2" />
                Download Receipt
              </Button>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Transaction Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transaction.timeline.map((event, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      event.completed ? 'bg-secondary' : 'bg-border-muted'
                    }`} />
                    <div className="flex-1 space-y-1">
                      <p className={`text-sm font-medium ${
                        event.completed ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {event.description}
                      </p>
                      {event.timestamp && (
                        <p className="text-xs text-muted-foreground">
                          {formatDate(event.timestamp)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;