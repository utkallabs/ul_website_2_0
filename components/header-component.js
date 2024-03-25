const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
<style>
#header {
    background: #fff;
    transition: all 0.5s;
    z-index: 997;
    padding:12px 0;
    top: 45px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    justify-content: center;
    display: flex;
  
  }
  
  @media (max-width: 992px) {
    #header {
        padding: 15px 0;
    }
  }
  
  #header.header-scrolled {
    top: 0;
  }
  
  #header .logo {
    font-size: 28px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
  
  #header .logo a {
    color: #555555;
  }
  
  #header .logo img {
    max-height: 60px;
  }
  
  @media (max-width: 992px) {
    #header {
        top: 0;
  
    }
    #header .logo {
        font-size: 24px;
    }
    .nav-menu > ul{
        display: none !important;
    }
  }
  .container2{
    width: 95%;
  }
  .nav-menu{
    display: none;
  }
  .nav-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  
  }
  
  .nav-menu{
    display:flex !important;
    align-content: center;
    flex-wrap: wrap;
  }
  
  .nav-menu > ul {
    display: flex;
    float: left;
  
  }
  
  .nav-menu > ul > li {
    position: relative;
    white-space: nowrap;
    padding: 10px 0 10px 28px;
    text-decoration: none;
    font-family: 'jost';
    font-weight: 500;
    font-style: normal;
  
  }
  
  .nav-menu a {
    display: flex;
    position: relative;
    color: #555555;
    transition: 0.3s;
    font-size: 18px;
    align-content: center;
    text-decoration: none;
    flex-wrap: wrap;
  }
  
  .nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {
    color: #007174;
    text-decoration: underline;
  
    /* background: linear-gradient(30deg, #009495, #7DE9F8); */
    padding-bottom: 3px;
    position: relative;
    text-decoration: none;
  
    background-repeat: no-repeat;
    background-size: 35px 3px;
    background-position: left bottom;
  
  
  }
  
  
  
  .nav-menu .drop-down ul {
    display: block;
    position: absolute;
    left: 15px;
    top: calc(100% + 30px);
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    padding: 10px 0;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
  }
  
  .nav-menu .drop-down:hover > ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }
  
  .nav-menu .drop-down li {
    min-width: 180px;
    position: relative;
  }
  .nav-menu .drop-down i {
    line-height: inherit;
  }
  
  .nav-menu .drop-down ul a {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    text-transform: none;
    color: #194b4d;
  }
  
  .nav-menu .drop-down ul a:hover, .nav-menu .drop-down ul .active > a, .nav-menu .drop-down ul li:hover > a {
    color: #3fbbc0;
  }
  
  .nav-menu .drop-down .drop-down ul {
    top: 0;
    left: calc(100% - 30px);
  }
  
  .nav-menu .drop-down .drop-down:hover > ul {
    opacity: 1;
    top: 0;
    left: 100%;
  }
  
  .nav-menu .drop-down .drop-down > a {
    padding-right: 35px;
  }
  
  
  @media (max-width: 1366px) {
    .nav-menu .drop-down .drop-down ul {
        left: -90%;
    }
    .nav-menu .drop-down .drop-down:hover > ul {
        left: -100%;
    }
  
  }
  
  /* Mobile Navigation */
  .mobile-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 9999;
    overflow-y: auto;
    left: -290px;
    width: 290px;
    padding-top: 17px;
    background: rgba(43, 56, 54, 0.7);
    transition: 0.4s;
  }
  
  .mobile-nav * {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  
  .mobile-nav a {
    display: block;
    position: relative;
    color: #fff;
    padding: 12px 15px;
    font-weight: 500;
    transition: ease-in-out 0.3s;
    font-size: 18px;
  }
  
  .mobile-nav a:hover, .mobile-nav .active > a, .mobile-nav li:hover > a {
    color: #56e7d0;
    text-decoration: none;
  }
  .nav-menu .drop-down li{
    padding-left: 10px;
    right: 15px;
  
  }
  
  
  .mobile-nav .drop-down > a {
    padding-right: 35px;
  }
  
  .mobile-nav .drop-down ul {
    display: none;
    overflow: hidden;
  
  }
  
  .mobile-nav .drop-down li {
    padding-left: 20px;
  }
  
  .mobile-nav-toggle {
    position: fixed;
    top: 25px;
    right: 10px;
    z-index: 9998;
    border: 0;
    background: none;
    font-size: 33px;
    transition: all 0.4s;
    outline: none !important;
    /* line-height: 1; */
    cursor: pointer;
    text-align: right;
  }
  
  .mobile-nav-toggle i {
    color: #008283;
  }
  
  .mobile-nav-overly {
    width: 100%;
    height: 100%;
    z-index: 9997;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(21, 27, 26, 0.8);
    overflow: hidden;
    display: none;
  }
  
  .mobile-nav-active {
    overflow: hidden;
  }
  
  .mobile-nav-active .mobile-nav {
    left: 0;
  }
  
  .mobile-nav-active .mobile-nav-toggle i {
    color: #fff;
  }
  </style>
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
    <script src="./assets/js/bootstrap.min.js"></script>
    <script src="./assets/js/main.js"></script>
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
