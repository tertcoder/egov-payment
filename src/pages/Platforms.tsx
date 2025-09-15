import { useState } from "react";
import { Globe, Plus, Search, Edit, Trash2, Mail, Building, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Platforms = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const demoPlatforms = [
    {
      id: 1,
      name: "Ministry of Finance",
      type: "Government",
      contactEmail: "admin@mof.gov.bi",
      description: "Central government financial services and tax collection platform",
      status: "active",
      createdDate: "2024-01-10",
      totalTransactions: 2340,
      lastActivity: "2 hours ago",
    },
    {
      id: 2,
      name: "Education Portal",
      type: "Government",
      contactEmail: "support@education.gov.bi",
      description: "Educational services payment platform for schools and universities",
      status: "active",
      createdDate: "2024-01-25",
      totalTransactions: 892,
      lastActivity: "5 hours ago",
    },
    {
      id: 3,
      name: "Ministry of Health",
      type: "Government",
      contactEmail: "payments@health.gov.bi",
      description: "Healthcare services and medical fee payment system",
      status: "active",
      createdDate: "2024-02-15",
      totalTransactions: 567,
      lastActivity: "1 hour ago",
    },
    {
      id: 4,
      name: "SOCABU Insurance",
      type: "Private",
      contactEmail: "billing@socabu.bi",
      description: "Private insurance premium collection and claims processing",
      status: "inactive",
      createdDate: "2024-03-01",
      totalTransactions: 234,
      lastActivity: "2 days ago",
    },
    {
      id: 5,
      name: "Bujumbura Municipal Services",
      type: "Government",
      contactEmail: "payments@bujumbura.gov.bi",
      description: "Local government services and utility bill payments",
      status: "active",
      createdDate: "2024-02-28",
      totalTransactions: 456,
      lastActivity: "30 minutes ago",
    },
  ];

  const filteredPlatforms = demoPlatforms.filter(platform =>
    platform.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    platform.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    return status === "active"
      ? <Badge className="badge-success">Active</Badge>
      : <Badge className="badge-neutral">Inactive</Badge>;
  };

  const getTypeBadge = (type: string) => {
    return type === "Government"
      ? <Badge className="bg-primary/10 text-primary border border-primary/20">Government</Badge>
      : <Badge className="bg-purple-100 text-purple-700 border border-purple-200">Private</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center">
            <Globe className="w-8 h-8 mr-3" />
            Platforms Management
          </h1>
          <p className="text-muted-foreground">
            Manage payment platforms and service integrations
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="btn-gradient">
              <Plus className="w-4 h-4 mr-2" />
              Register New Platform
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Register New Platform</DialogTitle>
              <DialogDescription>
                Add a new platform to the eGov-Payment system. Fill in all required information.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="platformName">Platform Name</Label>
                <Input id="platformName" placeholder="Enter platform name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="platformType">Platform Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select platform type" />
                  </SelectTrigger>
                  <SelectContent className="bg-surface">
                    <SelectItem value="government">Government</SelectItem>
                    <SelectItem value="private">Private</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input id="contactEmail" type="email" placeholder="Enter contact email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter platform description"
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
                  Register Platform
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
                  placeholder="Search platforms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="text-center">
                  <p className="text-2xl font-bold text-foreground">{demoPlatforms.length}</p>
                  <p className="text-muted-foreground">Total Platforms</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{demoPlatforms.filter(p => p.type === 'Government').length}</p>
                  <p className="text-muted-foreground">Government</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-purple-600">{demoPlatforms.filter(p => p.type === 'Private').length}</p>
                  <p className="text-muted-foreground">Private</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary">{demoPlatforms.filter(p => p.status === 'active').length}</p>
                  <p className="text-muted-foreground">Active</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Platforms Table */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle>Registered Platforms</CardTitle>
          <CardDescription>
            Overview of all platforms integrated with the eGov-Payment system
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="table-modern">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Platform Details</TableHead>
                  <TableHead>Type & Contact</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Activity</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPlatforms.map((platform) => (
                  <TableRow key={platform.id} className="hover:bg-surface-muted/50">
                    <TableCell>
                      <div className="space-y-1">
                        <p className="font-medium text-foreground">{platform.name}</p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {platform.description}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        {getTypeBadge(platform.type)}
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Mail className="w-3 h-3 mr-2" />
                          {platform.contactEmail}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(platform.status)}
                          <Switch
                            checked={platform.status === "active"}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Since {new Date(platform.createdDate).toLocaleDateString()}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">
                          {platform.totalTransactions} transactions
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Last active: {platform.lastActivity}
                        </p>
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

          {filteredPlatforms.length === 0 && (
            <div className="text-center py-8">
              <Globe className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No platforms found matching your search.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Platforms;