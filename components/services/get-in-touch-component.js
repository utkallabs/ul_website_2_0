const GetInTouchTemplate = document.createElement("template");

GetInTouchTemplate.innerHTML = `
<link rel="stylesheet" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/common.css">
<link rel="stylesheet" href="assets/css/style.css">

<div class="get-in-touch" >
                    <form>
                        <h4>GET IN TOUCH</h4>
                        <p>For More Information Feel Free Please Contact With Us.</p>
                        <label for="fname"></label>

                        <input type="text" class="service-form-group" id="fname" name="firstname" placeholder="Name">

                        <label for="Email"></label>
                        <input type="text" class="service-form-group" id="email" name="firstname" placeholder="Email">
                        <label for="number"></label>
                        <input type="text" class="service-form-group" id="text" name="firstname" placeholder="Phone">
                        <button class="Request-a-quotes">Request a quotes</button>
                    </form>
                </div>
`;

class GetInTouch extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(GetInTouchTemplate.content);
  }
}

customElements.define("get-in-touch-component", GetInTouch);
