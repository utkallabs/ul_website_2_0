const chooseTemplate = document.createElement("template");

chooseTemplate.innerHTML = `
<link rel="stylesheet" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/common.css">
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/
landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
<section class="choose-section ptb-120">
<div class="container">
    <div class="row justify-content-center">
        <div class="col-xl-7 col-lg-8 text-center">
            <div class="section-header">
                <h2 class="section-title">Why Choose Utkal Labs?</h2>
                <p>Utkal Labs is not only your one-stop solution to all technical needs but also a team of
                    energetic, enthusiastic professionals who believe in commitment, quality, and
                    accountability.

                </p>
            </div>
        </div>
    </div>
    <div class="choose-area">
        <div class="choose-tab">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link" id="software-tab" data-toggle="tab" data-target="#software"
                        type="button" role="tab" aria-controls="software" aria-selected="false">
                        Technical Solutions </button>
                    <button class="nav-link active" id="company-tab" data-toggle="tab" data-target="#company"
                        type="button" role="tab" aria-controls="company" aria-selected="true">
                        Quality and Commitment</button>

                    <button class="nav-link" id="client-tab" data-toggle="tab" data-target="#client"
                        type="button" role="tab" aria-controls="client" aria-selected="false">
                        Technical Partner</button>

                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade" id="software" role="tabpanel" aria-labelledby="software-tab">
                    <div class="choose-item">
                        <div class="choose-thumb">
                            <img src="assets/images/Home/technicalsolutions_homepage.png" alt="element">
                        </div>
                        <div class="choose-content">
                            <h4 class="title"><span class="text--base">Utkal Labs: </span> Technical Solutions
                            </h4>
                            <p> 🔧 Customized Software Solutions: Tailored to Fit Your Needs </p>
                            <p> 🌐 Cutting-edge Technology: Stay Ahead of the Curve </p>
                            <p> 🚀 Innovation-driven: Empowering Your Digital Growth</p>
                            <p>💼 Industry Expertise: Addressing Unique Challenges</p>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade show active" id="company" role="tabpanel"
                    aria-labelledby="company-tab">
                    <div class="choose-item">
                        <div class="choose-thumb">
                            <img src="assets/images/Home/FastestGrowingCompany.png" alt="element">
                        </div>
                        <div class="choose-content">
                            <h4 class="title"><span class="text--base">Utkal Labs: </span> Quality and
                                Commitment</h4>
                            <p> ⭐ Excellence as Standard: Quality Assurance at Every Step
                            <p> 🧪 Rigorous Testing: Ensuring Robust and Reliable Solutions </p>
                            <p>🤝 Transparent Collaboration: Your Success is Our Priority </p>
                            <p>🏆 Exceeding Expectations: Going the Extra Mile

                            </p>

                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="client" role="tabpanel" aria-labelledby="client-tab">
                    <div class="choose-item">
                        <div class="choose-thumb">
                            <img src="assets/images/Home/technicalpartner_homepage.png" alt="element">
                        </div>
                        <div class="choose-content">
                            <h4 class="title"><span class="text--base">Meet Utkal Labs: </span> Your Technical
                                Partner</h4>
                            <p>🤝 Your Goals, Our Mission: Investing in Your Success</p>
                            <p> 🛠️ Technical Expertise: Navigating the Digital Landscape</p>
                            <p>🌟 Strategic Advisory: Beyond Solutions, Providing Insights</p>
                            <p> 🌐 Building Together: Transforming Challenges into Opportunities</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
`;

class Choose extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(chooseTemplate.content);
  }
}

customElements.define("choose-component", Choose);
