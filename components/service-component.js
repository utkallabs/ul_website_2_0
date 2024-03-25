const serviceTemplate = document.createElement("template");

serviceTemplate.innerHTML = `
<link rel="stylesheet" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/common.css">
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/
landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
<section class="service-section ptb-120">

        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section-header-wrapper">
                        <div class="section-header white">
                            <h2 class="section-title">Our Awesome Services</h2>
                            <p>Customization, maintenance, and support to help businesses and individuals solve their
                                technological needs and challenges.</p>
                        </div>
                        <div class="section-header-btn">
                            <a href="service.html" class="custom-btn two">View All Services <i
                                    class="las la-long-arrow-alt-right ml-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center mb-30-none">
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-30">
                    <div class="service-item">
                        <div class="service-icon">
                            <img src="assets/images/service-icon/1.Web & Mobile Application.png" alt="icon">
                        </div>
                        <div class="service-content">
                            <h6 class="title"><a href="service-web-mobile-application.html">Web & Mobile Application</a>
                            </h6>
                            <p>We have expertise in customized web & mobile </p>
                            <div class="service-btn">
                                <a href="service-web-mobile-application.html" class="custom-btn">Learn More <i
                                        class="las la-long-arrow-alt-right ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-30">
                    <div class="service-item">
                        <div class="service-icon">
                            <img src="assets/images/service-icon/6.Enterprise Solution.png" alt="icon">
                        </div>
                        <div class="service-content">
                            <h6 class="title"><a href="service-enterprise-solution.html">Enterprise Solution</a></h6>
                            <p>We have expertise in developing comprehensive</p>
                            <div class="service-btn">
                                <a href="service-enterprise-solution.html" class="custom-btn">Learn More <i
                                        class="las la-long-arrow-alt-right ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-30">
                    <div class="service-item">
                        <div class="service-icon">
                            <img src="assets/images/service-icon/5.DevOps Consulting.png" alt="icon">
                        </div>
                        <div class="service-content">
                            <h6 class="title"><a href="service-devops-consulting.html">DevOps Consulting</a></h6>
                            <p>DevOps helps create a high-performance IT capability</p>
                            <div class="service-btn">
                                <a href="service-devops-consulting.html" class="custom-btn">Learn More <i
                                        class="las la-long-arrow-alt-right ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-30">
                    <div class="service-item">
                        <div class="service-icon">
                            <img src="assets/images/service-icon/4.Digital Transformation.png" alt="icon">
                        </div>
                        <div class="service-content">
                            <h6 class="title"><a href="service-digital-transformation.html">Digital Transformation</a>
                            </h6>
                            <p>We help you make the ultimate impact by keeping you </p>
                            <div class="service-btn">
                                <a href="service-digital-transformation.html" class="custom-btn">Learn More <i
                                        class="las la-long-arrow-alt-right ml-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

class Service extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(serviceTemplate.content);
  }
}

customElements.define("service-component", Service);
