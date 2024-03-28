const subscribeTemplate = document.createElement("template");

subscribeTemplate.innerHTML = `
<link rel="stylesheet" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/common.css">
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/
landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
<section class="subscribe-section ptb-120">
      <div class="container">
        <div class="subscribe-area">
          <div class="subscribe-element-two">
            <img src="assets/images/Home/GetNewsletter.png" alt="element" />
          </div>
          <div class="row justify-content-center">
            <div class="col-xl-7 offset-xl-5">
              <div class="subscribe-content">
                <h2 class="title">Get Newsletter From Utkal Labs</h2>
                <p>
                  Want to look at the most coveted serial publication of Utkal
                  Labs that not only keeps track of our entire eventful journey
                  of us but also enumerates our day-in and day out every month,
                  giving us a chance to introspect and rejoice in our past.
                </p>

                <form class="subscribe-form">
                  <label class="subscribe-icon">
                    <img src="assets/images/icon/icon-7.png" alt="icon" />
                  </label>
                  <input
                    type="text"
                    class="form--control"
                    placeholder="Email Address"
                  />
                  <button type="submit" class="btn--base">
                    <a href="mailto:hr@utkallabs.com"
                      >SUBSCRIBE
                      <i class="lab la-telegram"></i>
                    </a>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
`;

class Subscribe extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(subscribeTemplate.content);
  }
}

customElements.define("subscribe-component", Subscribe);
