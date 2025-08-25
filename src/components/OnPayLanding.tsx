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
    { icon: CreditCard, label: "Online payments", badge: "New", active: true },
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
    <div className="min-vh-100 bg-light d-flex flex-column">
      {/* Top Header */}
      <div className="bg-white border-bottom px-4 py-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-4">
              <div className="d-flex align-items-center me-2">
                <div className="simply-purple d-flex align-items-center justify-content-center" style={{width: '24px', height: '24px', borderRadius: '4px'}}>
                  <span className="text-white fw-bold" style={{fontSize: '12px'}}>⚡</span>
                </div>
                <span className="fw-bold text-dark ms-2">Simply.com</span>
              </div>
            </div>
            
            <div className="d-flex align-items-center bg-light rounded px-3 py-2">
              <span className="small text-secondary">cheerfulbambino.dk</span>
              <ChevronDown size={16} className="ms-2 text-muted" />
            </div>
          </div>
          
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-center me-3">
              <div className="flag-dk-blue flag-icon"></div>
              <div className="flag-dk-white flag-icon mx-1"></div>
              <div className="flag-dk-red flag-icon"></div>
            </div>
            <button className="btn simply-purple px-3 py-2 d-flex align-items-center">
              <span className="me-2">👤</span>
              <span className="small">Joanna</span>
              <ChevronDown size={16} className="ms-1" />
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex flex-grow-1">
        {/* Sidebar */}
        <div className="sidebar" style={{width: '240px'}}>
          <div className="p-4">
            <nav className="mb-4">
              {sidebarItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`sidebar-item d-flex align-items-center px-3 py-2 rounded small mb-1 ${
                    item.isRefer ? 'refer-friend' : ''
                  }`}
                >
                  <item.icon size={16} className="me-3" />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="mb-3">
              <div className="small fw-medium text-secondary px-3 py-2 border-bottom">
                cheerfulbambino.dk
              </div>
            </div>

            <nav className="mb-4">
              {domainItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`sidebar-item d-flex align-items-center justify-content-between px-3 py-2 rounded small mb-1 ${
                    item.active ? 'active' : ''
                  }`}
                >
                  <div className="d-flex align-items-center">
                    <item.icon size={16} className="me-3" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className={`badge small ${
                      item.badge === 'New' ? 'badge-new' : 'badge-beta'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            <div className="mb-3">
              <div className="small fw-medium text-secondary px-3 py-2 border-bottom">
                Simply.com Services
              </div>
            </div>

            <nav>
              {serviceItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="sidebar-item d-flex align-items-center px-3 py-2 rounded small mb-1"
                >
                  <item.icon size={16} className="me-3" />
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow-1 bg-white">
          <div className="container-fluid" style={{maxWidth: '1200px'}}>
            <div className="p-5">
              <h1 className="h2 fw-normal text-dark mb-5">
                Payment gateway <span className="text-muted fw-normal">cheerfulbambino.dk</span>
              </h1>

              {/* Main Card */}
              <div className="card mb-5" style={{border: '1px solid #e5e5e5'}}>
                <div className="card-body p-4 pb-4">
                  <h2 className="h4 fw-semibold text-dark mb-3">
                    Start accepting online payments today — only pay when you sell.
                  </h2>
                  <p className="text-muted mb-4">
                    Turn your <span className="text-dark">online visitors</span> into paying customers. Activate OnPay and start accepting all the key payment methods to grow your business in Denmark and abroad.
                  </p>
                  <div className="text-center">
                    <button className="btn simply-purple px-4 py-2 fw-medium mb-2" style={{fontSize: '16px', borderRadius: '6px'}}>
                      Activate OnPay Payments
                    </button>
                    <div className="small text-success fw-medium">
                      Go live in minutes
                    </div>
                  </div>
                </div>
              </div>

              {/* OnPay Package Section */}
              <div className="mb-4">
                <h2 className="h4 fw-semibold text-dark">OnPay Package</h2>
              </div>

              <div className="mb-5">
                {/* Standard Package */}
                <div className="card border-simply-purple position-relative" style={{maxWidth: '28rem', borderWidth: '2px'}}>
                  <div className="position-absolute top-0 start-0 ms-4" style={{transform: 'translateY(-50%)'}}>
                    <span className="badge simply-purple small px-3 py-2" style={{borderRadius: '12px', fontWeight: '600'}}>
                      FREE
                    </span>
                  </div>
                  <div className="card-body p-4">
                    <h3 className="h5 fw-semibold text-dark mb-1">Standard</h3>
                    <div className="h2 fw-bold text-dark mb-1">0 DKK / mo</div>
                    <p className="small text-secondary mb-4">Only pay your card processing rate (from 1.25%)</p>
                    
                    <div className="mb-4">
                      <h4 className="fw-bold text-dark mb-3 h6">Get paid online</h4>
                      <div className="mb-3">
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">Accept cards</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">Apple Pay® & Google Pay™</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">Klarna (Buy now, pay later)</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">PayPal</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="fw-bold text-dark mb-3 h6">Built on trust</h4>
                      <div className="mb-3">
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">Payments processed by Clearhaus</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">PCI DSS compliant</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">3D Secure included</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="fw-bold text-dark mb-3 h6">Stay in control</h4>
                      <div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">Real-time dashboard</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">WooCommerce, PrestaShop & more integrations</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">API & SDK for custom builds</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Included Section */}
              <div className="mb-5">
                <h2 className="h4 fw-semibold text-dark mb-4">What's included:</h2>
                <div className="row g-4">
                  <div className="col-md-6 d-flex">
                    <div className="bg-light p-4 rounded-3 border w-100 d-flex flex-column" style={{border: '1px solid #e5e5e5 !important', minHeight: '120px'}}>
                      <h3 className="fw-bold text-dark mb-2" style={{fontSize: '15px'}}>Essential payment methods</h3>
                      <p className="text-muted mb-0 flex-grow-1" style={{fontSize: '14px'}}>Get paid seamlessly with the methods your customers already trust</p>
                    </div>
                  </div>
                  
                  <div className="col-md-6 d-flex">
                    <div className="bg-light p-4 rounded-3 border w-100 d-flex flex-column" style={{border: '1px solid #e5e5e5 !important', minHeight: '120px'}}>
                      <h3 className="fw-bold text-dark mb-2" style={{fontSize: '15px'}}>Transparent pricing</h3>
                      <p className="text-muted mb-0 flex-grow-1" style={{fontSize: '14px'}}>No setup costs, no gateway charges — you only pay your card processing rate</p>
                    </div>
                  </div>
                  
                  <div className="col-md-6 d-flex">
                    <div className="bg-light p-4 rounded-3 border w-100 d-flex flex-column" style={{border: '1px solid #e5e5e5 !important', minHeight: '120px'}}>
                      <h3 className="fw-bold text-dark mb-2" style={{fontSize: '15px'}}>Fast setup</h3>
                      <p className="text-muted mb-0 flex-grow-1" style={{fontSize: '14px'}}>Configure in minutes, start accepting payments today</p>
                    </div>
                  </div>
                  
                  <div className="col-md-6 d-flex">
                    <div className="bg-light p-4 rounded-3 border w-100 d-flex flex-column" style={{border: '1px solid #e5e5e5 !important', minHeight: '120px'}}>
                      <h3 className="fw-bold text-dark mb-2" style={{fontSize: '15px'}}>Your own dashboard</h3>
                      <p className="text-muted mb-0 flex-grow-1" style={{fontSize: '14px'}}>Full visibility and control over all transactions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Get Started Section */}
              <div className="mb-5">
                <h2 className="h4 fw-semibold text-dark mb-2">How to get started:</h2>
                <p className="text-muted mb-4">Most merchants go live and start selling within hours, not days.</p>
                
                <div className="bg-light rounded-3 p-5 border" style={{border: '1px solid #e5e5e5 !important', marginTop: '1rem', marginBottom: '1rem'}}>
                  <div className="d-flex justify-content-center align-items-start flex-wrap gap-3">
                    <div className="text-center">
                      <div className="d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '52px', height: '52px', borderRadius: '50%', border: '2px solid #b722c1', backgroundColor: 'transparent'}}>
                        <span className="fw-bold" style={{fontSize: '16px', color: '#b722c1'}}>1</span>
                      </div>
                      <div style={{width: '140px'}}>
                        <h3 className="fw-bold text-dark mb-2" style={{fontSize: '14px'}}>Activate</h3>
                        <p className="text-muted mb-0" style={{fontSize: '13px'}}>One click to enable OnPay</p>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-center d-none d-md-block" style={{paddingTop: '26px'}}>
                      <div style={{width: '40px', height: '2px', backgroundColor: '#ddd'}}></div>
                    </div>
                    
                    <div className="text-center">
                      <div className="d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '52px', height: '52px', borderRadius: '50%', border: '2px solid #b722c1', backgroundColor: 'transparent'}}>
                        <span className="fw-bold" style={{fontSize: '16px', color: '#b722c1'}}>2</span>
                      </div>
                      <div style={{width: '140px'}}>
                        <h3 className="fw-bold text-dark mb-2" style={{fontSize: '14px'}}>Set up payment processing</h3>
                        <p className="text-muted mb-0" style={{fontSize: '13px'}}>Instant Clearhaus contract activation</p>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-center d-none d-md-block" style={{paddingTop: '26px'}}>
                      <div style={{width: '40px', height: '2px', backgroundColor: '#ddd'}}></div>
                    </div>
                    
                    <div className="text-center">
                      <div className="d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '52px', height: '52px', borderRadius: '50%', border: '2px solid #b722c1', backgroundColor: 'transparent'}}>
                        <span className="fw-bold" style={{fontSize: '16px', color: '#b722c1'}}>3</span>
                      </div>
                      <div style={{width: '140px'}}>
                        <h3 className="fw-bold text-dark mb-2" style={{fontSize: '14px'}}>Connect your store</h3>
                        <p className="text-muted mb-0" style={{fontSize: '13px'}}>Plugin or custom integration</p>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-center d-none d-md-block" style={{paddingTop: '26px'}}>
                      <div style={{width: '40px', height: '2px', backgroundColor: '#ddd'}}></div>
                    </div>
                    
                    <div className="text-center">
                      <div className="d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '52px', height: '52px', borderRadius: '50%', border: '2px solid #b722c1', backgroundColor: 'transparent'}}>
                        <span className="fw-bold" style={{fontSize: '16px', color: '#b722c1'}}>4</span>
                      </div>
                      <div style={{width: '140px'}}>
                        <h3 className="fw-bold text-dark mb-2" style={{fontSize: '14px'}}>Start selling</h3>
                        <p className="text-muted mb-0" style={{fontSize: '13px'}}>Accept payments from customers worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="text-center pt-4">
                <button className="btn simply-purple px-4 py-2 fw-medium mb-2" style={{fontSize: '16px', borderRadius: '6px'}}>
                  Get Started with OnPay
                </button>
                <div className="small text-success fw-medium">
                  Go live in minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnPayLanding;