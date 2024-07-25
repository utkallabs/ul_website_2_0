const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
<link rel="stylesheet" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/common.css">
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/
landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
  <footer class="footer-section pt-120">
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-lg-6 col-md-6 order-xl-1 order-lg-1 order-md-1 order-sm-1 order-xs-1 pe-5 ">
          <div class="footer-widget pr-5">
            <div class="footer-logo">
              <a href="index.html">
                <img src="assets/images/logo-two-white.png" alt="site-logo">

              </a>
            </div>
            <p>We are constantly evolving and committed to serve the best to our customers.
              Delivering
              quality solutions has been a top priority
              for us.</p>

            <ul class="footer-social">
              <li class="linkedin"><a href="https://www.linkedin.com/company/utkal-labs" target=”_blank”
                  class="d-flex justify-content-center align-items-center"><i class="lab la-linkedin-in"></i></a>

              </li>
              <li class="facebook"><a href="https://www.facebook.com/utkallabsindia/" target=”_blank”
                  class="d-flex justify-content-center align-items-center">
                  <i class='lab la-facebook-f'></i></a>
              </li>

              <li class="twitter">
                <a href="https://twitter.com/UtkalLabs" target=”_blank”
                  class="d-flex justify-content-center align-items-center">
                  <i class="fa-brands fa-x-twitter"></i></a>
              </li>
              <li class="instagram">
                <a href="https://www.instagram.com/utkallabs/" target=”_blank”
                  class="d-flex justify-content-center align-items-center">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 order-xl-3 order-lg-2 order-md-2 order-sm-2 order-xs-2">
          <div class="row ps-xl-5 mt-md-0 mt-sm-5 mt-5">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 pl-20">
              <div class="footer-widget">
                <h4 class="title">Company</h4>
                <ul class="footer-list">
                  <li><a href="gallery.html">Gallery</a></li>
                  <li><a href="portfolio.html">Portfolio</a></li>
                  <li><a href="newsletter.html">Newsletter</a></li>
                  <li><a href="case-studies.html">Case Studies</a></li>
                </ul>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-30">
              <div class="footer-widget">
                <h4 class="title">Quick Links </h4>
                <ul class="footer-list">
                  <li><a href="http://blog.utkallabs.com" target="_blank">Blogs</a></li>
                  <li><a href="service.html">Services</a></li>
                  <li><a href="career.html">Career</a></li>
                  <li><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5 col-lg-6 col-md-12  order-xl-2 order-lg-3 order-md-3 order-sm-3 order-xs-3 mx-auto">
          <div class="img_container">
            <img class=" mt-md-5 mt-sm-5 mt-20" src="assets/images/footer/footer_img.png">
            <img src="assets/images/footer/pointer.png" id="pointer_left" alt="">
            <img src="assets/images/footer/pointer.png" id="pointer_right" alt="">
            <div id="usa_address" class="address">
              <h2>USA</h2>
              <p>PO Box 56903 <br> Sherman Oaks CA - 91413 </p>
            </div>
            <div id="ind_address" class="address">
              <h2>INDIA</h2>
              <p>D110, Raghunathpur <br> Bhubaneswar, Odisha - 751024 </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright-wrapper">
      <div class="container">
        <div class="copyright-area d-flex align-items-center justify-content-md-between justify-content-center">
          <p>© 2024 Utkal Labs Pvt. Ltd. All Rights Reserved.</p>
          <div>
            <p><a href="privacypolicy.html" class="text-decoration-none">Privacy Policy</a> |
              <a href="termsandconditions.html" class="text-decoration-none"> Terms &
                Conditions</a>
            </p>
          </div>
        </div>
      </div>
    </div>

  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define("footer-component", Footer);
