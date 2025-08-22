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
                  Turn your <strong className="text-gray-900">online visitors into paying customers</strong>. Activate OnPay and start accepting all the key payment methods to grow your business in Denmark and abroad.
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

            {/* OnPay Package Section */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">OnPay Package</h2>
            </div>

            <div className="mb-8">
              {/* Standard Package */}
              <Card className="border-2 relative max-w-md" style={{ borderColor: '#b722c1' }}>
                <div className="absolute -top-3 left-6">
                  <Badge className="text-white text-xs px-3 py-1" style={{ backgroundColor: '#b722c1' }}>
                    FREE
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Standard</h3>
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

            {/* What's Included Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">What's included:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Essential payment methods</h3>
                    <p className="text-xs text-gray-600">Cards, Apple Pay, Google Pay, Klarna</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Transparent pricing</h3>
                    <p className="text-xs text-gray-600">No setup costs, no gateway charges — you only pay your card processing rate</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Fast setup</h3>
                    <p className="text-xs text-gray-600">Configure in minutes, start accepting payments today</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Your own dashboard</h3>
                    <p className="text-xs text-gray-600">Full visibility and control over all transactions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Get Started Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">How to get started:</h2>
              <p className="text-gray-600 mb-6">Most merchants go live and start selling within hours, not days.</p>
              
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 rounded-full border-2 bg-white flex items-center justify-center text-sm font-bold mb-4" 
                         style={{ borderColor: '#b722c1', color: '#b722c1' }}>1</div>
                    <div className="min-h-[60px] flex flex-col justify-start">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Activate</h3>
                      <p className="text-xs text-gray-600">One click to enable OnPay</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center px-4" style={{ marginTop: '20px' }}>
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 rounded-full border-2 bg-white flex items-center justify-center text-sm font-bold mb-4" 
                         style={{ borderColor: '#b722c1', color: '#b722c1' }}>2</div>
                    <div className="min-h-[60px] flex flex-col justify-start">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Set up payment processing</h3>
                      <p className="text-xs text-gray-600">Instant Clearhaus contract activation</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center px-4" style={{ marginTop: '20px' }}>
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 rounded-full border-2 bg-white flex items-center justify-center text-sm font-bold mb-4" 
                         style={{ borderColor: '#b722c1', color: '#b722c1' }}>3</div>
                    <div className="min-h-[60px] flex flex-col justify-start">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Connect your store</h3>
                      <p className="text-xs text-gray-600">Plugin or API integration</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center px-4" style={{ marginTop: '20px' }}>
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                  </div>
                  
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-10 h-10 rounded-full border-2 bg-white flex items-center justify-center text-sm font-bold mb-4" 
                         style={{ borderColor: '#b722c1', color: '#b722c1' }}>4</div>
                    <div className="min-h-[60px] flex flex-col justify-start">
                      <h3 className="font-bold text-gray-900 text-sm mb-1">Start earning</h3>
                      <p className="text-xs text-gray-600">Accept payments immediately</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA Button */}
            <div className="text-center mt-12">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnPayLanding;