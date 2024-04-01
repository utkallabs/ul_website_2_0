// casestudy_descrb-section
class CaseStudySideBarContent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const client = this.getAttribute("data-client");
    const location = this.getAttribute("data-location");
    const industry = this.getAttribute("data-industry");
    const technology = this.getAttribute("data-technology");

    this.innerHTML = `<div class="csd_project_descrb-sidebar">
    <div class="csd_project_descrb-sidebar-widget">
        <ul class="csd_project_descrb-sidebar-widget-list">
            <li>
                <h5 class="title">Client</h5>
                <span class="sub-title">${client}
                </span>
            </li>
            <li>
                <h5 class="title">Location</h5>
                <span class="sub-title">${location}</span>
            </li>
            <li>
                <h5 class="title">Industry

                </h5>
                <span class="sub-title">${industry}</span>
            </li>
            <li>
                <h5 class="title">Technology </h5>
                <span class="sub-title">
                   ${technology}
                </span>
            </li>
        </ul>
    </div>
</div>`;
  }
}

customElements.define(
  "csd-project-descrb-sidebar-component",
  CaseStudySideBarContent
);
