import { useState } from "react";
import { Settings as SettingsIcon, User, Shield, Bell, Database, Key, Globe, Save } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [systemAlerts, setSystemAlerts] = useState(true);
  const [autoBackup, setAutoBackup] = useState(true);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground flex items-center">
          <SettingsIcon className="w-8 h-8 mr-3" />
          Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your eGov-Payment system configuration and preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Profile Information
                </CardTitle>
                <CardDescription>
                  Update your personal information and account details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="admin@egov-payment.gov" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+251-11-123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Input id="department" defaultValue="IT Administration" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select defaultValue="admin">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">System Administrator</SelectItem>
                      <SelectItem value="manager">Payment Manager</SelectItem>
                      <SelectItem value="operator">System Operator</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button className="btn-gradient">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>System Preferences</CardTitle>
                <CardDescription>
                  Configure your system display and behavior preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="eat">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">Eastern Standard Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="am">Amharic</SelectItem>
                      <SelectItem value="om">Oromo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Default Currency</Label>
                  <Select defaultValue="etb">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="etb">Ethiopian Birr (ETB)</SelectItem>
                      <SelectItem value="usd">US Dollar (USD)</SelectItem>
                      <SelectItem value="eur">Euro (EUR)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="recordsPerPage">Records Per Page</Label>
                  <Select defaultValue="20">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Security Settings
                </CardTitle>
                <CardDescription>
                  Manage your account security and authentication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                  <Button variant="outline">Update Password</Button>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <Switch
                      checked={twoFactorAuth}
                      onCheckedChange={setTwoFactorAuth}
                    />
                  </div>
                  {twoFactorAuth && (
                    <Button variant="outline" size="sm">
                      Configure 2FA
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Key className="w-5 h-5 mr-2" />
                  Session Management
                </CardTitle>
                <CardDescription>
                  Manage your active sessions and login history
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-surface-muted rounded-lg border border-border-muted">
                    <div>
                      <p className="text-sm font-medium text-foreground">Current Session</p>
                      <p className="text-xs text-muted-foreground">Chrome on Windows • Active now</p>
                    </div>
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-surface-muted rounded-lg border border-border-muted">
                    <div>
                      <p className="text-sm font-medium text-foreground">Mobile Session</p>
                      <p className="text-xs text-muted-foreground">Safari on iPhone • 2 hours ago</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-destructive">
                      Revoke
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Select defaultValue="30">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="240">4 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button variant="destructive" className="w-full">
                  Sign Out All Sessions
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="w-5 h-5 mr-2" />
                Notification Preferences
              </CardTitle>
              <CardDescription>
                Configure how you want to receive notifications and alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive transaction and system updates via email
                    </p>
                  </div>
                  <Switch
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Get critical alerts via SMS messages
                    </p>
                  </div>
                  <Switch
                    checked={smsNotifications}
                    onCheckedChange={setSmsNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>System Alerts</Label>
                    <p className="text-sm text-muted-foreground">
                      Browser notifications for urgent system events
                    </p>
                  </div>
                  <Switch
                    checked={systemAlerts}
                    onCheckedChange={setSystemAlerts}
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-foreground">Notification Types</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="transaction-alerts" defaultChecked className="rounded" />
                    <Label htmlFor="transaction-alerts" className="text-sm">Transaction status changes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="security-alerts" defaultChecked className="rounded" />
                    <Label htmlFor="security-alerts" className="text-sm">Security and login alerts</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="system-maintenance" defaultChecked className="rounded" />
                    <Label htmlFor="system-maintenance" className="text-sm">System maintenance notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="payment-failures" defaultChecked className="rounded" />
                    <Label htmlFor="payment-failures" className="text-sm">Payment failures and errors</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="weekly-reports" className="rounded" />
                    <Label htmlFor="weekly-reports" className="text-sm">Weekly summary reports</Label>
                  </div>
                </div>
              </div>

              <Button className="btn-gradient">Save Notification Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System Settings */}
        <TabsContent value="system">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  System Configuration
                </CardTitle>
                <CardDescription>
                  Configure system-wide settings and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="systemName">System Name</Label>
                    <Input id="systemName" defaultValue="eGov-Payment System" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organizationName">Organization</Label>
                    <Input id="organizationName" defaultValue="Government of Ethiopia" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supportEmail">Support Email</Label>
                    <Input id="supportEmail" defaultValue="support@egov-payment.gov" />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Automatic Backups</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable daily automated system backups
                      </p>
                    </div>
                    <Switch
                      checked={autoBackup}
                      onCheckedChange={setAutoBackup}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="backupTime">Backup Time</Label>
                    <Select defaultValue="02:00">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="00:00">12:00 AM</SelectItem>
                        <SelectItem value="02:00">2:00 AM</SelectItem>
                        <SelectItem value="04:00">4:00 AM</SelectItem>
                        <SelectItem value="06:00">6:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>System Information</CardTitle>
                <CardDescription>
                  Current system status and version information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">System Version</span>
                    <span className="font-medium text-foreground">v2.1.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated</span>
                    <span className="font-medium text-foreground">March 10, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Database Size</span>
                    <span className="font-medium text-foreground">2.4 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Users</span>
                    <span className="font-medium text-foreground">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">System Status</span>
                    <span className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                      <span className="font-medium text-secondary">Healthy</span>
                    </span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    Check for Updates
                  </Button>
                  <Button variant="outline" className="w-full">
                    Download System Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* API Settings */}
        <TabsContent value="api">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                API Configuration
              </CardTitle>
              <CardDescription>
                Manage API keys and integration settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="apiEndpoint">API Endpoint</Label>
                  <Input id="apiEndpoint" defaultValue="https://api.egov-payment.gov/v1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="webhookUrl">Webhook URL</Label>
                  <Input id="webhookUrl" defaultValue="https://your-system.com/webhooks" />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-foreground">API Keys</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-surface-muted rounded-lg border border-border-muted">
                    <div>
                      <p className="text-sm font-medium text-foreground">Production Key</p>
                      <p className="text-xs text-muted-foreground font-mono">egov_prod_sk_••••••••••••1234</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Regenerate
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-surface-muted rounded-lg border border-border-muted">
                    <div>
                      <p className="text-sm font-medium text-foreground">Test Key</p>
                      <p className="text-xs text-muted-foreground font-mono">egov_test_sk_••••••••••••5678</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      Regenerate
                    </Button>
                  </div>
                </div>

                <Button className="btn-gradient">
                  <Key className="w-4 h-4 mr-2" />
                  Generate New API Key
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-medium text-foreground">Rate Limiting</h4>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rateLimit">Requests per minute</Label>
                    <Select defaultValue="1000">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="100">100</SelectItem>
                        <SelectItem value="500">500</SelectItem>
                        <SelectItem value="1000">1000</SelectItem>
                        <SelectItem value="5000">5000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeout">Request timeout (seconds)</Label>
                    <Select defaultValue="30">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="30">30</SelectItem>
                        <SelectItem value="60">60</SelectItem>
                        <SelectItem value="120">120</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button className="btn-gradient">Save API Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;