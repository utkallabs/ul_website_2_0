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
    <div class="row mb-30-none">
        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="footer-widget">
                <div class="footer-logo">
                    <a href="index.html">
                        <img src="assets/images/logo-two-white.png" alt="site-logo">

                    </a>
                </div>
                <p>We are constantly evolving and committed to serve the best to our customers.
                    Delivering
                    quality solutions has been a top priority
                    for us.</p>
                <!-- <ul class="footer-social">
                <img src="assets/images/iso2015.png" alt="ISO-logo">
        </ul> -->
                <ul class="footer-social">Follow us:
                    <li class="linkedin"><a href="https://www.linkedin.com/company/utkal-labs"
                            target=”_blank”><i class="lab la-linkedin-in"></i></a>

                    </li>
                    <li class="facebook"><a href="https://www.facebook.com/utkallabsindia/" target=”_blank”>
                            <i class='lab la-facebook-f'></i></a>
                    </li>

                    <li class="twitter">
                        <a href="https://twitter.com/UtkalLabs" target=”_blank”>
                            <i class="fa-brands fa-x-twitter"></i></a>
                    </li>
                    <li class="instagram">
                        <a href="https://www.instagram.com/utkallabs/" target=”_blank”>
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div class="footer-widget">
                <h5 class="title">About Us </h5>
                <ul class="footer-list">
                    <li><a href="aboutus.html">About Us</a></li>
                    <li><a href="aboutus.html#history">History</a></li>
                    <li><a href="aboutus.html#value">Our Core value</a></li>
                    <li><a href="aboutus.html#management">Meet Our Management</a></li>
                </ul>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div class="footer-widget">
                <h4 class="title">Explore Utkal Labs</h4>
                <ul class="footer-list">
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="newsletter.html">Newsletter</a></li>
                    <li><a href="case-studies.html">Case Studies</a></li>
                </ul>
            </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-6 mb-30">
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

<div class="copyright-wrapper">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-12 text-center">
                <div class="copyright-area">
                    <p>Copyright © 2024 Utkal Labs Pvt. Ltd. All Rights Reserved<br>
                        <a href="privacypolicy.html">Privacy Policy</a> and
                        <a href="termsandconditions.html"> Terms and Conditions</a>
                    </p>
                </div>
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
