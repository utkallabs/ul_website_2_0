const topbarTemplate = document.createElement("template");

topbarTemplate.innerHTML = `
<style>
.container2{
  width: 95%;
}
#topbar {
  background:  #003939;
  color: #fff;
  height: 45px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.5s;
  justify-content: center;
}

#topbar.topbar-scrolled {
  top: -40px;
}

.upper-section{
  height: 47px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.letside-topnavbar{
  width: auto;
  display: flex;
  
}

.letside-topnavbar span{
  font-weight: 500;
}


.topnavbar-call2 img{
  width: 30px;
  height: 30px;
  line-height: 24px;
  display: inline-block;
  text-align: center;
  border: 2.4px solid #ffffff;
  border-radius: 50%;
  color: #ffffff;
  margin-left: 20px;
 
}

.topnavbar-call span{
  font-weight: 500;
}

.schedule-meeting{
  background-color: #ffffff;
  border-radius: 5px;
  margin-left: 20px;
  justify-content:space-around;
  display: flex;
  /* width: 160px;
  height: 30px; */
  align-items: center;
  padding: 0 10px;
  border: 0.5px solid #FFFFFF;
}

.schedule-meeting i{
  color: #003939;

}
.schedule-meeting img{
 padding-right: 5px;
}
.schedule-meeting h1{
  margin-top: 9px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #003939;

}

.right-side{
  display: flex;
  justify-content: end ;
  font-weight: 400;
  align-items: center;
}

.search-bar {
  visibility: visible;
  transition: all 0.5s;
}

.header-search-form {
  position: relative;
}

.header-search-form::before {
  position: absolute;
  content: "";
  top: 6px;
  left: -10px;
  width: 2px;
  height: 15px;
  background-color: rgba(255, 255, 255, 0.5);
}

.header-search-form input {
  position: relative;
  background-color: transparent;
  padding: 0;
  padding-right: 30px;
  border: none;
  color: #fff;
  font-size: 14px;
  outline: none;
  border-bottom: 0.1px solid #ffffff0f;
}

.header-search-form input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.header-search-form .header-search-btn {
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  color: #fff;
  font-size: 19px;
  border: 0px solid;

}
.header-search-form .header-search-btn i {
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
}

.d-flex{
  display: flex;
  justify-content: space-between;
}
div {
  display: block;
  unicode-bidi: isolate;
}
      
</style>
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
