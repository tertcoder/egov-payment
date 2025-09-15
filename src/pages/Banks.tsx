import { useState } from "react";
import { Building2, Plus, Search, Edit, Trash2, Mail, Phone, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Banks = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const demobanks = [
    {
      id: 1,
      name: "Bank of Ethiopia",
      responsiblePerson: "Tekle Wolde",
      email: "tekle.wolde@boe.gov.et",
      phone: "+251-11-551-7430",
      status: "active",
      connectedSince: "2024-01-15",
      totalTransactions: 1240,
    },
    {
      id: 2,
      name: "Commercial Bank of Ethiopia",
      responsiblePerson: "Hanan Ahmed",
      email: "hanan.ahmed@cbe.com.et",
      phone: "+251-11-551-5516",
      status: "active",
      connectedSince: "2024-02-20",
      totalTransactions: 892,
    },
    {
      id: 3,
      name: "Dashen Bank",
      responsiblePerson: "Mehari Tesfaye",
      email: "mehari.tesfaye@dashenbank.com",
      phone: "+251-11-515-1430",
      status: "active",
      connectedSince: "2024-01-28",
      totalTransactions: 567,
    },
    {
      id: 4,
      name: "Awash International Bank",
      responsiblePerson: "Sara Bekele",
      email: "sara.bekele@awashbank.com",
      phone: "+251-11-667-8030",
      status: "inactive",
      connectedSince: "2024-03-10",
      totalTransactions: 234,
    },
    {
      id: 5,
      name: "United Bank S.C.",
      responsiblePerson: "Daniel Haile",
      email: "daniel.haile@unitedbank.com.et",
      phone: "+251-11-554-6565",
      status: "active",
      connectedSince: "2024-02-14",
      totalTransactions: 456,
    },
  ];

  const filteredBanks = demobanks.filter(bank =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bank.responsiblePerson.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    return status === "active" 
      ? <Badge className="badge-success">Active</Badge>
      : <Badge className="badge-neutral">Inactive</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center">
            <Building2 className="w-8 h-8 mr-3" />
            Banks Management
          </h1>
          <p className="text-muted-foreground">
            Manage connected banks and their payment integrations
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="btn-gradient">
              <Plus className="w-4 h-4 mr-2" />
              Register New Bank
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Register New Bank</DialogTitle>
              <DialogDescription>
                Add a new bank to the eGov-Payment system. All fields are required.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="bankName">Bank Name</Label>
                <Input id="bankName" placeholder="Enter bank name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="responsiblePerson">Responsible Person</Label>
                <Input id="responsiblePerson" placeholder="Enter responsible person name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter email address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter phone number" />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button 
                  className="btn-gradient"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Register Bank
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-4 card-stats">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search banks..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{demobanks.length}</p>
                  <p className="text-muted-foreground">Total Banks</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">{demobanks.filter(b => b.status === 'active').length}</p>
                  <p className="text-muted-foreground">Active</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-warning">{demobanks.filter(b => b.status === 'inactive').length}</p>
                  <p className="text-muted-foreground">Inactive</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Banks Table */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle>Registered Banks</CardTitle>
          <CardDescription>
            Overview of all banks connected to the eGov-Payment system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="table-modern">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bank Details</TableHead>
                  <TableHead>Contact Information</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Statistics</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBanks.map((bank) => (
                  <TableRow key={bank.id} className="hover:bg-surface-muted/50">
                    <TableCell>
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">{bank.name}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <User className="w-3 h-3 mr-1" />
                          {bank.responsiblePerson}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-foreground">
                          <Mail className="w-3 h-3 mr-2" />
                          {bank.email}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Phone className="w-3 h-3 mr-2" />
                          {bank.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        {getStatusBadge(bank.status)}
                        <p className="text-xs text-muted-foreground">
                          Since {new Date(bank.connectedSince).toLocaleDateString()}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p className="font-medium text-foreground">{bank.totalTransactions}</p>
                        <p className="text-xs text-muted-foreground">transactions</p>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {filteredBanks.length === 0 && (
            <div className="text-center py-8">
              <Building2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No banks found matching your search.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Banks;