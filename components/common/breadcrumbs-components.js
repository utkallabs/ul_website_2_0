// breadcrumbs-components.js
class Breadcrumbs extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const heading = this.getAttribute("data-heading");
    const title = this.getAttribute("data-title");
    const address = this.getAttribute("data-address");
    const file = this.getAttribute("data-file");
    this.innerHTML = `<section id="breadcrumbs" class="breadcrumbs">
        <div class="breadcrumb-hero">
            <div class="container">
                    <h2>${heading}</h2>
                <div class="breadcrumb-area">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="${file}">${title}</a></li>
                            <li class="breadcrumb-item active" aria-current="page">${address}</li>

                        </ol>
                    </nav>
                </div>

            </div>
    </div>
    </section>
      `;
  }
}

customElements.define("breadcrumbs-component", Breadcrumbs);
