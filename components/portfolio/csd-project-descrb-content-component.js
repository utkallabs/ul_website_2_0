// casestudy_descrb-section
class CaseStudyContent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const intro1 = this.getAttribute("data-intro1");
    const intro2 = this.getAttribute("data-intro2");

    this.innerHTML = `<div class="csd_project_descrb-content">
    <h3 class="title">Project Overview</h3>
    <p>${intro1}
    </p>
    <h3 class="title">Project feature view</h3></br>
    <p>${intro2}
</p>

</div>`;
  }
}

customElements.define("csd-project-descrb-content-component", CaseStudyContent);
