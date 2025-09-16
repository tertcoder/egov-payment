import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Eye, EyeOff, Lock, User, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import bgImage from "@/assets/bg.jpg";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    // Handle login logic here
    navigate("/dashboard")
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/60 to-primary/30 backdrop-blur-sm"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-6">
        <Card className="shadow-2xl border-0 bg-surface/95 backdrop-blur-md">
          <CardHeader className="text-center pb-6">
            {/* Logo/Brand */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <CardTitle className="text-2xl font-bold text-foreground">
              eGov-Payment
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Republic of Burundi Payment Portal
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10 bg-surface border-border-muted focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10 bg-surface border-border-muted focus:border-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) =>
                      setFormData(prev => ({ ...prev, rememberMe: checked as boolean }))
                    }
                  />
                  <Label
                    htmlFor="rememberMe"
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    Remember me
                  </Label>
                </div>
                <Button variant="link" className="p-0 h-auto text-sm text-primary hover:text-primary-hover">
                  Forgot password?
                </Button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full btn-gradient h-11 text-base font-medium"
                onClick={handleSubmit}
              >
                Sign In
              </Button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center">
              <div className="flex-1 border-t border-border-muted"></div>
              <span className="px-4 text-sm text-muted-foreground bg-surface">
                Or continue with
              </span>
              <div className="flex-1 border-t border-border-muted"></div>
            </div>

            {/* Government Access */}
            <Button
              variant="outline"
              className="w-full border-border-muted hover:bg-surface-muted"
            >
              <Building2 className="w-4 h-4 mr-2" />
              Government Employee Access
            </Button>

            {/* Footer */}
            <div className="mt-6 text-center text-xs text-muted-foreground">
              <p>© 2024 Republic of Burundi</p>
              <p className="mt-1">Ministry of Finance - Payment Services</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;