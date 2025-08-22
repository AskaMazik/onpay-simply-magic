import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Home, User, UserPlus, Globe, Settings, Palette, FileText, Mouse, Mail, Network, Database, Zap, Shield, CreditCard, HardDrive, LifeBuoy, Building2 } from "lucide-react";

const OnPayLanding = () => {
  const sidebarItems = [
    { icon: Home, label: "Home" },
    { icon: User, label: "Account S588588" },
    { icon: UserPlus, label: "Refer a friend" },
  ];

  const domainItems = [
    { icon: Globe, label: "Administration" },
    { icon: Globe, label: "Website" }, 
    { icon: Settings, label: "WordPress" },
    { icon: Palette, label: "Website designer" },
    { icon: FileText, label: "File Manager" },
    { icon: Mouse, label: "1-Click" },
    { icon: Mail, label: "Email" },
    { icon: Network, label: "DNS" },
    { icon: Database, label: "MySQL" },
    { icon: Database, label: "MS SQL" },
    { icon: Zap, label: "Redis", badge: "New" },
    { icon: Database, label: "PostgreSQL", badge: "BETA" },
    { icon: CreditCard, label: "Payment gateway", badge: "New", active: true },
    { icon: Shield, label: "iubenda" },
    { icon: Building2, label: "Booking system", badge: "New" },
  ];

  const serviceItems = [
    { icon: HardDrive, label: "Server status" },
    { icon: Shield, label: "SSL certificates" },
    { icon: FileText, label: "Backorder" },
    { icon: LifeBuoy, label: "Support" },
    { icon: Globe, label: "Simply.com" },
  ];

  const packageFeatures = [
    "Accept payment cards",
    "Apple Pay® & Google Pay™", 
    "Buy now, pay later (Klarna)",
    "3D Secure",
    "Real-time transaction dashboard",
    "WooCommerce integration",
    "Zero monthly fees",
    "Zero setup fees"
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <div className="w-64 bg-sidebar border-r border-sidebar-border">
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-lg">Simply.com</span>
          </div>

          <nav className="space-y-1">
            {sidebarItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center space-x-3 px-3 py-2 text-sidebar-foreground hover:bg-sidebar-accent rounded-md text-sm"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="mt-6 mb-4">
            <div className="text-xs font-medium text-sidebar-foreground px-3 py-2">
              cheerfulbambino.dk
            </div>
          </div>

          <nav className="space-y-1">
            {domainItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center justify-between px-3 py-2 text-sidebar-foreground hover:bg-sidebar-accent rounded-md text-sm group ${
                  item.active ? 'bg-primary text-primary-foreground hover:bg-primary' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <Badge variant="secondary" className="text-xs bg-green-500 text-white">
                    {item.badge}
                  </Badge>
                )}
              </a>
            ))}
          </nav>

          <div className="mt-6 mb-4">
            <div className="text-xs font-medium text-sidebar-foreground px-3 py-2">
              Simply.com Services
            </div>
          </div>

          <nav className="space-y-1">
            {serviceItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center space-x-3 px-3 py-2 text-sidebar-foreground hover:bg-sidebar-accent rounded-md text-sm"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-2xl font-normal text-foreground mb-8">
            Payment gateway <span className="text-muted-foreground">cheerfulbambino.dk</span>
          </h1>

          <div className="space-y-8">
            {/* OnPay Section */}
            <div>
              <h2 className="text-xl font-medium text-foreground mb-4">OnPay</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">
                Card fees typically account for between 0,5-2,5 % of your total turnover. But it doesn't have to be that way. With OnPay we offer you the market's best prices and a state-of-the-art, PCI-certified payment solution.
              </p>
              <Button className="mb-2">
                Open OnPay Control Panel
              </Button>
              <div>
                <a href="#" className="text-sm text-red-500 hover:text-red-600">
                  Cancel and delete OnPay
                </a>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-foreground mb-4">
                Ready to turn your website visitors into paying customers?
              </h3>
              <p className="text-muted-foreground mb-6">
                Save hundreds per month on payment fees - no gateway fees, no setup costs, no OnPay monthly charges.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-medium mb-2">Essential payment methods</h4>
                  <p className="text-sm text-muted-foreground">Cards, Apple Pay, Google Pay, Klarna</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-medium mb-2">Zero gateway fees</h4>
                  <p className="text-sm text-muted-foreground">Pay only your card processing rate - no OnPay fees ever</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-medium mb-2">Fast setup</h4>
                  <p className="text-sm text-muted-foreground">Configure in minutes, start accepting payments today</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-medium mb-2">Your own dashboard</h4>
                  <p className="text-sm text-muted-foreground">Full visibility and control over all transactions</p>
                </CardContent>
              </Card>
            </div>

            {/* Package */}
            <div>
              <h3 className="text-lg font-medium text-foreground mb-6">OnPay package</h3>
              <Card className="max-w-md">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge className="mb-2">Professional</Badge>
                    <div className="text-2xl font-bold">0 DKK/mo</div>
                    <p className="text-sm text-muted-foreground">Pay only your card processing rate</p>
                  </div>
                  
                  <div className="space-y-2">
                    {packageFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA */}
            <div className="bg-muted/30 p-6 rounded-lg text-center">
              <h3 className="text-lg font-medium text-foreground mb-2">Ready to start earning?</h3>
              <p className="text-muted-foreground mb-4">
                Activation is instant, then you'll get step-by-step setup instructions.
              </p>
              <Button size="lg">
                Activate OnPay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnPayLanding;