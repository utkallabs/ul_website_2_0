const aboutTemplate = document.createElement("template");
aboutTemplate.innerHTML = `
<link rel="stylesheet" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/common.css">
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/
landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
<section class="about-section">
<div class="container">

    <div class="about-area">
        <div class="row justify-content-center align-items-center mb-30-none">
            <div class="col-xl-6 col-lg-6 ">
                <div class="about-thumb">
                    <img src="assets/images/element/element-38.png" alt="element">
                </div>
            </div>


            <div class="col-xl-6 col-lg-6 mb-30">
                <div class="about-content">
                    <h2 class="title">Have a project in mind? <span class="text--base">Let's connect</span></h2>
                    <p>Welcome to Utkal Labs, a software development organization, that will help to digitize
                        your business
                        by offering all the prime services such as Web & Mobile Applications, Enterprise
                        Solutions, DevOps Consulting, Digital Transformation, and AI/ML Solutions.
                    </p>
                    <div class="about-btn">
                        <a href="#" class="btn--base" data-toggle="modal" data-target="#myModal">Send
                            Message</a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
`;

class About extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(aboutTemplate.content);
  }
}

customElements.define("about-component", About);
