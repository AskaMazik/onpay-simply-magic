const OnPayLanding = () => {
  return (
    <div className="grid-container">
      <div className="grid-content">
        <div className="d-flex h-100">
          {/* Sidebar */}
          <div id="controlpanel-menu" className="offcanvas-lg offcanvas-start bg-bright-blue text-bg-bright-blue px-3" tabIndex={-1}>
            <div className="offcanvas-header">
              <a href="/en/">
                <img src="//static.simply.com/assets/simply-logo-color.svg?31287d2603caac291ec67314b4d9cf1e7d7d4bfc" alt="Simply.com" className="my-2 px-2" />
              </a>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#controlpanel-menu"></button>
            </div>
            <div className="offcanvas-body">
              <div className="flex-column p-2 d-block">
                <a href="/en/">
                  <img src="//static.simply.com/assets/simply-logo-color.svg?31287d2603caac291ec67314b4d9cf1e7d7d4bfc" alt="Simply.com" className="my-2 px-2 d-none d-lg-block" />
                </a>

                <ul className="nav flex-column nav-hover nav-controlpanel">
                  <li className="nav-item">
                    <a href="/en/controlpanel/" className="nav-link">
                      <i className="fas fa-home fa-fw"></i> Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/en/controlpanel/S588588/" className="nav-link">
                      <i className="fal fa-boxes-stacked fa-fw"></i> Account S588588
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/en/controlpanel/cheerfulbambino.dk/coupon/" className="nav-link text-success">
                      <i className="fal fa-fw fa-sack-dollar text-success"></i> Refer a friend
                    </a>
                  </li>
                </ul>

                <div className="position-relative mt-4 text-break">
                  <hr />
                  <h4 className="h6 bg-bright-blue position-absolute text-opacity-75 top-0 start-0 translate-middle-y pe-2">
                    cheerfulbambino.dk
                  </h4>
                  
                  <ul className="nav flex-column nav-hover nav-controlpanel">
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/admin/" className="nav-link">
                        <i className="fal fa-wrench fa-fw"></i> Administration
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/website/" className="nav-link">
                        <i className="fal fa-browser fa-fw"></i> Website
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/wordpress/" className="nav-link">
                        <i className="fab fa-wordpress fa-fw"></i> WordPress
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/sitebuilder/" className="nav-link">
                        <i className="fal fa-browsers fa-fw"></i> Website designer
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/filebrowser/" className="nav-link">
                        <i className="fal fa-folder-open fa-fw"></i> File Manager
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/1click/" className="nav-link">
                        <i className="fal fa-magic fa-fw"></i> 1-Click
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/mail/" className="nav-link">
                        <i className="fal fa-envelope fa-fw"></i> Email
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/dns/" className="nav-link">
                        <i className="fal fa-globe fa-fw"></i> DNS
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/mysql/" className="nav-link">
                        <i className="fal fa-database fa-fw"></i> MySQL
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/mssql/" className="nav-link">
                        <i className="fal fa-database fa-fw"></i> MS SQL
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/redis/" className="nav-link">
                        <i className="fal fa-memory fa-fw"></i> Redis
                        <span className="badge badge-cta">New</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/postgresql/" className="nav-link">
                        <i className="fal fa-database fa-fw"></i> PostgreSQL
                        <span className="badge badge-cta">BETA</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/onpay/" className="nav-link active">
                        <i className="fal fa-credit-card fa-fw"></i> Payment gateway
                        <span className="badge badge-cta">New</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/iubenda/" className="nav-link">
                        <i className="fal fa-cookie fa-fw"></i> iubenda
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/cheerfulbambino.dk/booking/" className="nav-link">
                        <i className="fal fa-calendar fa-fw"></i> Booking system
                        <span className="badge badge-cta">New</span>
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="position-relative mt-4 text-break">
                  <hr />
                  <h4 className="h6 text-black bg-bright-blue position-absolute text-opacity-75 top-0 start-0 translate-middle-y pe-2">
                    Simply.com Services
                  </h4>
                  <ul className="nav nav-hover nav-controlpanel flex-column">
                    <li className="nav-item">
                      <a href="/en/controlpanel/S588588/serverstatus/" className="nav-link">
                        <i className="fal fa-heartbeat fa-fw"></i> Server status
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/S588588/sslcerts/" className="nav-link">
                        <i className="fal fa-lock fa-fw"></i> SSL certificates
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="/en/controlpanel/S588588/backorder/" className="nav-link">
                        <i className="fal fa-eye fa-fw"></i> Backorder
                      </a>
                    </li>
                  </ul>
                </div>
                
                <ul className="nav nav-hover nav-controlpanel flex-column mt-4">
                  <li className="nav-item">
                    <a href="/en/support/" className="nav-link">
                      <i className="fal fa-user-headset fa-fw"></i> Support
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/en/" className="nav-link">
                      <i className="fal fa-link-simple fa-fw"></i> Simply.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow-1 overflow-auto">
            <div className="container-fluid border-bottom border-bright-blue px-3 py-2 d-print-none" id="controlpanel-topbar">
              <div className="d-flex justify-content-between align-items-center">
                <div className="nav nav-hover">
                  <div className="nav-item d-lg-none">
                    <button className="nav-link" data-bs-toggle="offcanvas" data-bs-target="#controlpanel-menu">
                      <i className="far fa-fw fa-bars fa-lg"></i>
                    </button>
                  </div>
                  <div className="nav-item dropdown">
                    <button type="button" className="nav-link dropdown-toggle bg-light rounded-3">
                      cheerfulbambino.dk
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-6">
              <div className="container pt-3 px-3">
                <h1>Payment gateway <small>cheerfulbambino.dk</small></h1>

                {/* Hero Card */}
                <div className="card mb-3">
                  <div className="card-body">
                    <h3>Start accepting online payments today — only pay when you sell.</h3>
                    <p className="lead">
                      Turn your online visitors into paying customers. Activate OnPay and start accepting all the key payment methods to grow your business in Denmark and abroad. There are no setup costs and no gateway charges — you only pay your card processing rate. Most merchants go live and start selling within hours, not days.
                    </p>
                    <div className="text-center">
                      <button className="btn btn-primary btn-lg" type="button">Activate OnPay Payments</button>
                      <div className="form-text text-success">It's free to use OnPay</div>
                    </div>
                  </div>
                </div>

                {/* Value Proposition */}
                <div className="card mb-4">
                  <div className="card-body">
                    <h3>Ready to turn your website visitors into paying customers?</h3>
                    <p>Save hundreds per month on payment fees - no gateway fees, no setup costs, no OnPay monthly charges.</p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="row mb-4">
                  <div className="col-md-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Essential payment methods</h5>
                        <p className="card-text">Cards, Apple Pay, Google Pay, Klarna</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Zero gateway fees</h5>
                        <p className="card-text">Pay only your card processing rate - no OnPay fees ever</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Fast setup</h5>
                        <p className="card-text">Configure in minutes, start accepting payments today</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Your own dashboard</h5>
                        <p className="card-text">Full visibility and control over all transactions</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Package */}
                <h2>OnPay Package</h2>
                <div className="d-flex flex-column flex-lg-row justify-content-between gap-3">
                  <div className="card">
                    <div className="card-body">
                      <h4>Professional</h4>
                      <p>0 DKK/mo - Pay only your card processing rate</p>
                      <ul className="fa-ul" style={{"--fa-li-margin": "1rem"} as React.CSSProperties}>
                        <li><i className="fas fa-check text-success fa-li"></i>Accept payment cards</li>
                        <li><i className="fas fa-check text-success fa-li"></i>Apple Pay® & Google Pay™</li>
                        <li><i className="fas fa-check text-success fa-li"></i>Buy now, pay later (Klarna)</li>
                        <li><i className="fas fa-check text-success fa-li"></i>3D Secure</li>
                        <li><i className="fas fa-check text-success fa-li"></i>Real-time transaction dashboard</li>
                        <li><i className="fas fa-check text-success fa-li"></i>WooCommerce integration</li>
                        <li><i className="fas fa-check text-success fa-li"></i>Zero monthly fees</li>
                        <li><i className="fas fa-check text-success fa-li"></i>Zero setup fees</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="card mt-4">
                  <div className="card-body text-center">
                    <h3>Ready to start earning?</h3>
                    <p>Activation is instant, then you'll get step-by-step setup instructions.</p>
                    <button className="btn btn-primary btn-lg" type="button">Activate OnPay</button>
                  </div>
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