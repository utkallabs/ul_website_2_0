// casestudy_descrb-section
class CaseStudyDescribe extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const heading = this.getAttribute("data-heading");
    const imageUrl = this.getAttribute("data-imageUrl");
    this.innerHTML = `
    <section class="casestudy_descrb-section ptb-120">
    <div class="container">

        <div class="section-header">
            <h2 class="section-title">${heading}</h2>
        </div>
        <div class="row justify-content-center align-items-center mb-30-none">
            <div class="col-xl-12 mb-30">

                <!-- Carousel wrapper -->
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner ">
                        <div class="carousel-item active">
                            <img class="d-block" src="${imageUrl}"
                                alt="First slide">
                        </div>

                    </div>


                </div>


            </div>
        </div>

    </div>
</section>
        `;
  }
}

customElements.define("casestudy-describe-component", CaseStudyDescribe);
