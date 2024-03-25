const topbarTemplate = document.createElement("template");

topbarTemplate.innerHTML = `
<link rel="stylesheet" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/common.css">
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
<link rel="stylesheet" href="https://maxst.icons8.com/vue-static/
landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
<div id="topbar" class="d-none d-lg-flex align-items-center fixed-top">
<div class="container2 d-flex align-items-center justify-content-between">
    <div class="upper-section">

        <div class="letside-topnavbar">
            <div class="topnavbar-call2">
                <a href="mailto:sales@utkallabs.com">
                    <img src="assets/images/gmail.png" alt="Email" width="18" height="18">

                    <span>sales@utkallabs.com</span></a>
            </div>

            <div class="topnavbar-call2">
                <a href="tel:+91 93383 08255">
                    <img src="assets/images/india.png" alt="INDIA Flag" width="18" height="18">
                    <span>+91 93383 08255</span></a>
            </div>

            <div class="topnavbar-call2">
                <a href="tel:+1 32390 05072">
                    <img src="assets/images/usa.png" alt="USA Flag" width="18" height="18">
                    <span>+1 32390 05072</span></a>
            </div>


        </div>

        <div class="right-side">
            <div class="search-bar">
                <form class="header-search-form">
                    <input type="search" name="keyword" placeholder="Search" autocomplete="off">
                    <button class="header-search-btn"><i class="las la-search"></i></button>
                </form>
            </div>

            <div class="schedule-meeting">
                <img src="assets/images/icon/calendar.png">
                <!-- <i class="fa-regular fa-calendar"></i> -->
                <h1><a href="https://calendly.com/" target=”_blank”>Schedule a meeting</a></h1>
            </div>

        </div>
    </div>
</div>
</div>
`;

class Topbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(topbarTemplate.content);
  }
}

customElements.define("topbar-component", Topbar);
