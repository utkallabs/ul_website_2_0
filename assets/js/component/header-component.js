const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `

<link rel="stylesheet" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/common.css">
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/
landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
<header id="header" class="fixed-top">
        <div class="container2 d-flex ">
            <!--  logo -->
            <a href="index.html" class="logo mr-auto">
                <img src="assets/images/logo.png" alt=""></a>
            <!--  nav start-->
            <nav class="nav-menu d-none d-lg-block">
                <ul class="nav-list">
                    <!-- added a class for active -->
                    <li class="active"><a href="index.html">Home</a></li>
                    <li class="#0"><a href="aboutus.html">About Us</a></li>
                    <li class="drop-down"><a href="service.html">Services<i class="las la-angle-down"></i></a>
                        <ul>
                            <li><a href="service-web-mobile-application.html">Web & Mobile Application</a></li>
                            <li><a href="service-robotic-process-automation.html">Robotic Process Automation</a>
                            </li>
                            <li><a href="service-blockchain-nft.html">Blockchain & NFT</a></li>
                            <li><a href="service-digital-transformation.html">Digital Transformation</a></li>
                            <li><a href="service-devops-consulting.html">Devops Consulting</a></li>
                            <li><a href="service-enterprise-solution.html">Enterprise Solution</a></li>
                            <li><a href="service-alml-solution.html">Al/ML Solution</a></li>
                            <li><a href="service-qa-services.html">QA Services</a></li>
                        </ul>
                    </li>

                    <li class="drop-down">
                        <a href="portfolio.html">Portfolio<i class="las la-angle-down"></i></a>
                        <ul>
                            <li><a href="product.html">Products</a></li>
                            <li><a href="case-studies.html">Case Studies</a></li>
                            <li><a href="our-solutions.html">Our Solutions</a></li>
                        </ul>
                    </li>
                    <li class="drop-down"><a href="#">Activities<i class="las la-angle-down"></i></a>
                        <ul>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="newsletter.html">Newsletter</a></li>

                        </ul>
                    </li>

                    <li><a href="career.html">Career</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <!-- .nav-menu end-->
        </div>
    </header>
    <script src="./assets/js/bootstrap.min.js" defer></script>
    <script src="./assets/js/main.js" defer></script>
    `;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define("header-component", Header);
