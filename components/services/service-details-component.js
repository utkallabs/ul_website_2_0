// breadcrumbs-components.js
class ServiceDetailsCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const serviceImage = this.getAttribute("data-serviceImage");
    const serviceHeading = this.getAttribute("data-serviceHeading");
    const serviceShortDescription = this.getAttribute(
      "data-serviceShortDescription"
    );
    const firstServiceLongDescription = this.getAttribute(
      "data-firstServiceLongDescription"
    );
    const secondServiceLongDescription = this.getAttribute(
      "data-secondServiceLongDescription"
    );

    this.innerHTML = `
    <img src=${serviceImage}>
    <h2>${serviceHeading}</h2>
    <p>${serviceShortDescription}</p>
    <h2>Service Description</h2>
    <p>${firstServiceLongDescription}</p>
    <p>${secondServiceLongDescription}</p>
        `;
  }
}

customElements.define("service-details-card-component", ServiceDetailsCard);
