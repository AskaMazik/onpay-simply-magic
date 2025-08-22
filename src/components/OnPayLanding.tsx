import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Home, User, UserPlus, Globe, Settings, Palette, FileText, Mouse, Mail, Network, Database, Zap, Shield, CreditCard, HardDrive, LifeBuoy, Building2, ChevronDown } from "lucide-react";

const OnPayLanding = () => {
  const sidebarItems = [
    { icon: Home, label: "Home" },
    { icon: User, label: "Account S588588" },
    { icon: UserPlus, label: "Refer a friend", isRefer: true },
  ];

  const domainItems = [
    { icon: Settings, label: "Administration" },
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
  ];

  const packageFeatures = [
    "Accept payment cards",
    "Apple Pay® & Google Pay™", 
    "Buy now, pay later with Klarna",
    "Payments processed by Clearhaus",
    "3D Secure included",
    "Real-time transaction dashboard",
    "API & SDK for custom builds",
    "WooCommerce, PrestaShop & more integrations"
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">⚡</span>
              </div>
              <span className="font-bold text-gray-900">Simply.com</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-gray-100 rounded px-3 py-1.5">
              <span className="text-sm text-gray-700">cheerfulbambino.dk</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <div className="w-5 h-3 bg-blue-600 rounded-sm"></div>
              <div className="w-3 h-3 bg-white border rounded-sm"></div>
              <div className="w-5 h-3 bg-red-600 rounded-sm"></div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm">
              <span className="mr-2">👤</span>
              Joanna
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-60 bg-gray-100 border-r border-gray-200">
          <div className="p-4">
            <nav className="space-y-1">
              {sidebarItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2 rounded text-sm ${
                    item.isRefer 
                      ? 'text-green-600 hover:bg-green-50' 
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="mt-6 mb-3">
              <div className="text-xs font-medium text-gray-600 px-3 py-2 border-b border-gray-300">
                cheerfulbambino.dk
              </div>
            </div>

            <nav className="space-y-1">
              {domainItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center justify-between px-3 py-2 rounded text-sm group ${
                    item.active 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-xs px-1.5 py-0.5 rounded ${
                      item.badge === 'New' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-blue-500 text-white'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            <div className="mt-6 mb-3">
              <div className="text-xs font-medium text-gray-600 px-3 py-2 border-b border-gray-300">
                Simply.com Services
              </div>
            </div>

            <nav className="space-y-1">
              {serviceItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-200 rounded text-sm"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white">
          <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-2xl font-normal text-gray-900 mb-8">
              Payment gateway <span className="text-gray-500 font-normal">cheerfulbambino.dk</span>
            </h1>

            {/* Main Card */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Start accepting online payments today — only pay when you sell.
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Turn your <strong className="text-gray-900">online visitors into paying customers</strong>. Activate OnPay and start accepting <strong className="text-gray-900">all the key payment methods</strong> to grow your business in Denmark and abroad.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  There are <strong className="text-gray-900">no setup costs and no gateway charges</strong> — you only pay your card processing rate. Most merchants <strong className="text-gray-900">go live and start selling within hours, not days</strong>.
                </p>
                <div className="text-center">
                  <Button 
                    style={{ backgroundColor: '#b722c1' }} 
                    className="hover:opacity-90 text-white px-8 py-3 text-lg font-medium mb-2"
                  >
                    Activate OnPay Payments
                  </Button>
                  <div className="text-sm text-green-600 font-medium">
                    It's free to use OnPay
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What You Get Section */}
            <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">What you get:</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Essential payment methods</h4>
                      <p className="text-sm text-gray-600">Cards, Apple Pay, Google Pay, Klarna</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Transparent pricing</h4>
                      <p className="text-sm text-gray-600">You only pay when you sell, no monthly fees</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Fast setup</h4>
                      <p className="text-sm text-gray-600">Configure in minutes, start accepting payments today</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Your own dashboard</h4>
                      <p className="text-sm text-gray-600">Full visibility and control over all transactions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Here's how it works:</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                      <span className="text-sm text-gray-700">Activate</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                      <span className="text-sm text-gray-700">Set up payment processing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                      <span className="text-sm text-gray-700">Connect your store</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                      <span className="text-sm text-gray-700">Start earning</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* OnPay Package Section */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">OnPay Package</h2>
            </div>

            <div className="max-w-md">
              {/* Free Package */}
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Free</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">0 DKK / mo</div>
                  <p className="text-sm text-gray-600 mb-6">Only pay your card processing rate (from 1.25%)</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Get paid online</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Accept cards</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Apple Pay® & Google Pay™</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Klarna (Buy now, pay later)</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">PayPal</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Built on trust</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Payments processed by Clearhaus</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">PCI DSS compliant</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">3D Secure included</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Stay in control</h4>
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Real-time dashboard</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">WooCommerce, PrestaShop & more integrations</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">API & SDK for custom builds</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnPayLanding;