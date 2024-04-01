// casestudy_descrb-section
class CaseStudyWidgetContent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const pdfSrc = this.getAttribute("data-pdfSrc");

    this.innerHTML = ` <div class="widget-box mb-30">
      <h4 class="widget-title">Download</h4>
      <div class="download-widget-btn">
          <a target="_blank" href="${pdfSrc}"
              class="btn--base">
              <span>Download Our Case Study</span> <i class="las la-download"></i>
          </a>
      </div>
  </div>`;
  }
}

customElements.define(
  "csd-project-descrb-widget-component",
  CaseStudyWidgetContent
);
