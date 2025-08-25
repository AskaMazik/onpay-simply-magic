import { Check, Home, User, UserPlus, Globe, Settings, Palette, FileText, Mouse, Mail, Network, Database, Zap, Shield, CreditCard, HardDrive, LifeBuoy, Building2, ChevronDown } from "lucide-react";

const OnPayLandingDK = () => {
  const sidebarItems = [
    { icon: Home, label: "Hjem" },
    { icon: User, label: "Konto S588588" },
    { icon: UserPlus, label: "Henvis en ven", isRefer: true },
  ];

  const domainItems = [
    { icon: Settings, label: "Administration" },
    { icon: Globe, label: "Hjemmeside" }, 
    { icon: Settings, label: "WordPress" },
    { icon: Palette, label: "Hjemmeside designer" },
    { icon: FileText, label: "Fil Manager" },
    { icon: Mouse, label: "1-Klik" },
    { icon: Mail, label: "E-mail" },
    { icon: Network, label: "DNS" },
    { icon: Database, label: "MySQL" },
    { icon: Database, label: "MS SQL" },
    { icon: Zap, label: "Redis", badge: "Ny" },
    { icon: Database, label: "PostgreSQL", badge: "BETA" },
    { icon: CreditCard, label: "Online betalinger", badge: "Ny", active: true },
    { icon: Shield, label: "iubenda" },
    { icon: Building2, label: "Booking system", badge: "Ny" },
  ];

  const serviceItems = [
    { icon: HardDrive, label: "Server status" },
    { icon: Shield, label: "SSL certifikater" },
    { icon: FileText, label: "Backorder" },
  ];

  const packageFeatures = [
    "Acceptér kort (Visa & Mastercard)",
    "Apple Pay® & Google Pay™", 
    "Klarna (Køb nu, betal senere)",
    "Korttransaktioner håndteres af Clearhaus",
    "3D Secure inkluderet",
    "Dashboard i realtid",
    "API & SDK til tilpassede løsninger",
    "WooCommerce, PrestaShop og flere integrationer"
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
                      item.badge === 'Ny' ? 'badge-new' : 'badge-beta'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            <div className="mb-3">
              <div className="small fw-medium text-secondary px-3 py-2 border-bottom">
                Simply.com Tjenester
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
                Betalingsgateway <span className="text-muted fw-normal">cheerfulbambino.dk</span>
              </h1>

              {/* Main Card */}
              <div className="card mb-5" style={{border: '1px solid #e5e5e5'}}>
                <div className="card-body p-4 pb-4">
                  <h2 className="h4 fw-semibold text-dark mb-3">
                    Begynd at modtage online betalinger i dag - betal kun, når du sælger.
                  </h2>
                  <p className="text-muted mb-4">
                    <span className="text-dark">Konvertér dine</span> online besøgende til betalende kunder. Aktivér OnPay og begynd at modtage de mest populære betalingsmetoder, så din forretning kan vokse i både Danmark og udlandet. OnPay er et troværdigt og moderne danskudviklet betalingsystem.
                  </p>
                  <div className="text-center">
                    <button className="btn simply-purple px-4 py-2 fw-medium mb-2" style={{fontSize: '16px', borderRadius: '6px'}}>
                      Aktivér OnPay
                    </button>
                    <div className="small text-success fw-medium">
                      Gå live på få minutter
                    </div>
                  </div>
                </div>
              </div>

              {/* OnPay Package Section */}
              <div className="mb-4">
                <h2 className="h4 fw-semibold text-dark">OnPay Pakke</h2>
              </div>

              <div className="mb-5">
                {/* Standard Package */}
                <div className="card border-simply-purple position-relative" style={{maxWidth: '28rem', borderWidth: '2px'}}>
                  <div className="position-absolute top-0 start-0 ms-4" style={{transform: 'translateY(-50%)'}}>
                    <span className="badge simply-purple small px-3 py-2" style={{borderRadius: '12px', fontWeight: '600'}}>
                      GRATIS
                    </span>
                  </div>
                  <div className="card-body p-4">
                    <h3 className="h5 fw-semibold text-dark mb-1">Standard</h3>
                    <div className="h2 fw-bold text-dark mb-1">0 DKK / måned</div>
                    <p className="small text-secondary mb-4">Betal kun kortgebyr (fra 1,25%)</p>
                    
                    <div className="mb-4">
                      <h4 className="fw-bold text-dark mb-3 h6">Modtag online betalinger</h4>
                      <div className="mb-3">
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">Acceptér kort (Visa & Mastercard)</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">Apple Pay® & Google Pay™</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">Klarna (Køb nu, betal senere)</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">PayPal</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="fw-bold text-dark mb-3 h6">Betalingsløsning du kan stole på</h4>
                      <div className="mb-3">
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">Korttransaktioner håndteres af Clearhaus</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">PCI DSS-certificeret</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">Sikre betalinger med 3D Secure teknologi</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="fw-bold text-dark mb-3 h6">Fuld kontrol over dine betalinger</h4>
                      <div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">Dashboard i realtid</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">WooCommerce, PrestaShop og flere integrationer</span>
                        </div>
                        <div className="d-flex align-items-start mb-2">
                          <Check size={16} className="text-success me-2 mt-1" />
                          <span className="small text-secondary">Moderne API og SDK til tilpassede løsninger</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Included Section */}
              <div className="mb-5">
                <h2 className="h4 fw-semibold text-dark mb-4">Hvad er inkluderet:</h2>
                <div className="row g-4">
                  <div className="col-md-6 d-flex">
                    <div className="bg-light p-4 rounded-3 border w-100 d-flex flex-column" style={{border: '1px solid #e5e5e5 !important', minHeight: '120px'}}>
                      <h3 className="fw-bold text-dark mb-2" style={{fontSize: '15px'}}>De vigtigste betalingsmetoder</h3>
                      <p className="text-muted mb-0 flex-grow-1" style={{fontSize: '14px'}}>Modtag online betalinger problemfrit med de betalingsmetoder dine kunder allerede kender og bruger.</p>
                    </div>
                  </div>
                  
                  <div className="col-md-6 d-flex">
                    <div className="bg-light p-4 rounded-3 border w-100 d-flex flex-column" style={{border: '1px solid #e5e5e5 !important', minHeight: '120px'}}>
                      <h3 className="fw-bold text-dark mb-2" style={{fontSize: '15px'}}>Gennemsigtige priser</h3>
                      <p className="text-muted mb-0 flex-grow-1" style={{fontSize: '14px'}}>Ingen opsætningsomkostninger og ingen skjulte OnPay-gebyrer – du betaler kun kortgebyrene hos Clearhaus.</p>
                    </div>
                  </div>
                  
                  <div className="col-md-6 d-flex">
                    <div className="bg-light p-4 rounded-3 border w-100 d-flex flex-column" style={{border: '1px solid #e5e5e5 !important', minHeight: '120px'}}>
                      <h3 className="fw-bold text-dark mb-2" style={{fontSize: '15px'}}>Hurtig opsætning</h3>
                      <p className="text-muted mb-0 flex-grow-1" style={{fontSize: '14px'}}>Kom i gang på få minutter og begynd at modtage betalinger i dag.</p>
                    </div>
                  </div>
                  
                  <div className="col-md-6 d-flex">
                    <div className="bg-light p-4 rounded-3 border w-100 d-flex flex-column" style={{border: '1px solid #e5e5e5 !important', minHeight: '120px'}}>
                      <h3 className="fw-bold text-dark mb-2" style={{fontSize: '15px'}}>Dit eget dashboard</h3>
                      <p className="text-muted mb-0 flex-grow-1" style={{fontSize: '14px'}}>Få fuldt overblik og kontrol over alle transaktioner ét sted.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* How to Get Started Section */}
              <div className="mb-5">
                <h2 className="h4 fw-semibold text-dark mb-2">Sådan kommer du i gang:</h2>
                <p className="text-muted mb-4">De fleste går live og modtager betalinger inden for få timer – ikke dage.</p>
                
                <div className="bg-light rounded-3 p-5 border" style={{border: '1px solid #e5e5e5 !important', marginTop: '1rem', marginBottom: '1rem'}}>
                  <div className="d-flex justify-content-center align-items-start flex-wrap gap-3">
                    <div className="text-center">
                      <div className="d-flex align-items-center justify-content-center mx-auto mb-3" style={{width: '52px', height: '52px', borderRadius: '50%', border: '2px solid #b722c1', backgroundColor: 'transparent'}}>
                        <span className="fw-bold" style={{fontSize: '16px', color: '#b722c1'}}>1</span>
                      </div>
                      <div style={{width: '140px'}}>
                        <h3 className="fw-bold text-dark mb-2" style={{fontSize: '14px'}}>Aktivér</h3>
                        <p className="text-muted mb-0" style={{fontSize: '13px'}}>Ét klik for at aktivere OnPay</p>
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
                        <h3 className="fw-bold text-dark mb-2" style={{fontSize: '14px'}}>Opsæt indløsningsaftale</h3>
                        <p className="text-muted mb-0" style={{fontSize: '13px'}}>Øjeblikkelig adgang til aktiv Clearhaus indløsningsaftale</p>
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
                        <h3 className="fw-bold text-dark mb-2" style={{fontSize: '14px'}}>Forbind til shop</h3>
                        <p className="text-muted mb-0" style={{fontSize: '13px'}}>Brug plugin eller custom integration</p>
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
                        <h3 className="fw-bold text-dark mb-2" style={{fontSize: '14px'}}>Begynd at sælge</h3>
                        <p className="text-muted mb-0" style={{fontSize: '13px'}}>Tag imod betalinger fra kunder over hele verden</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Final CTA */}
              <div className="text-center pt-4">
                <button className="btn simply-purple px-4 py-2 fw-medium mb-2" style={{fontSize: '16px', borderRadius: '6px'}}>
                  Kom i gang med OnPay
                </button>
                <div className="small text-success fw-medium">
                  Gå live på få minutter
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .simply-purple {
          background-color: #b722c1 !important;
          color: white !important;
        }

        .simply-purple:hover {
          background-color: #9a1ca7 !important;
          opacity: 0.9;
        }

        .border-simply-purple {
          border-color: #b722c1 !important;
        }

        .sidebar {
          background-color: #f8f9fa;
          border-right: 1px solid #e5e5e5;
        }

        .sidebar-item {
          color: #6c757d;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .sidebar-item:hover {
          background-color: #e9ecef;
          color: #495057;
          text-decoration: none;
        }

        .sidebar-item.active {
          background-color: #b722c1;
          color: white;
        }

        .sidebar-item.refer-friend {
          color: #28a745;
        }

        .badge-new {
          background-color: #28a745;
          color: white;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 10px;
        }

        .badge-beta {
          background-color: #17a2b8;
          color: white;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 10px;
        }

        .flag-icon {
          width: 16px;
          height: 12px;
        }

        .flag-dk-blue {
          background-color: #c60c30;
        }

        .flag-dk-white {
          background-color: white;
        }

        .flag-dk-red {
          background-color: #c60c30;
        }

        .card:hover {
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.2s ease;
        }
      `}</style>
    </div>
  );
};

export default OnPayLandingDK;