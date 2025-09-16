import { useState } from "react";
import { Building2, Plus, Search, Edit, Trash2, Mail, Phone, User, Upload, ChevronLeft, ChevronRight } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePagination } from "@/hooks/use-pagination";

const Banks = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const demobanks = [
    {
      id: 1,
      name: "Bank of the Republic of Burundi",
      responsiblePerson: "Jean-Claude Nduwimana",
      email: "jc.nduwimana@brb.gov.bi",
      phone: "+257-22-225-142",
      status: "active",
      connectedSince: "2024-01-15",
      totalTransactions: 1240,
    },
    {
      id: 2,
      name: "Banque Commerciale du Burundi",
      responsiblePerson: "Marie Nzeyimana",
      email: "marie.nzeyimana@bcb.bi",
      phone: "+257-22-226-551",
      status: "active",
      connectedSince: "2024-02-20",
      totalTransactions: 892,
    },
    {
      id: 3,
      name: "Ecobank Burundi",
      responsiblePerson: "Pierre Hakizimana",
      email: "pierre.hakizimana@ecobank.bi",
      phone: "+257-22-254-430",
      status: "active",
      connectedSince: "2024-01-28",
      totalTransactions: 567,
    },
    {
      id: 4,
      name: "CRDB Bank Burundi",
      responsiblePerson: "Vestine Uwimana",
      email: "vestine.uwimana@crdbbank.bi",
      phone: "+257-22-267-830",
      status: "inactive",
      connectedSince: "2024-03-10",
      totalTransactions: 234,
    },
    {
      id: 5,
      name: "Interbank Burundi",
      responsiblePerson: "Emmanuel Bizimana",
      email: "emmanuel.bizimana@interbank.bi",
      phone: "+257-22-254-565",
      status: "active",
      connectedSince: "2024-02-14",
      totalTransactions: 456,
    },
  ];

  const filteredBanks = demobanks.filter(bank =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bank.responsiblePerson.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const {
    currentItems: paginatedBanks,
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
  } = usePagination(filteredBanks, 5);

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
                <Label htmlFor="bankLogo">Bank Logo</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    id="bankLogo"
                    type="file"
                    accept="image/*"
                    className="flex-1"
                  />
                  <Button type="button" variant="outline" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Upload PNG, JPG or SVG. Max size 2MB.
                </p>
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

              <div className="space-y-2">
                <Label htmlFor="serverIp">Server IP Address</Label>
                <Input
                  id="serverIp"
                  placeholder="Enter server IP address (e.g., 192.168.1.100)"
                  pattern="^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="callbackUrl">Callback URL</Label>
                <Input
                  id="callbackUrl"
                  type="url"
                  placeholder="Enter callback URL (e.g., https://bank.example.com/callback)"
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
                {paginatedBanks.map((bank) => (
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

export default Banks;