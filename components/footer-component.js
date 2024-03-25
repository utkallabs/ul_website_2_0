const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
<style>
.footer-section {
    background: url(../images/map.png) no-repeat center fixed;
    -webkit-background-size: cover;
    background-color: #343434;
    color: #dbdbdb;
    overflow: hidden;
    position: relative;
  }
  
  .footer-logo {
    margin-bottom: 20px;
  }
  
  @media only screen and (max-width: 991px) {
    .footer-logo {
        margin-bottom: 20px;
    }
  }
  
  .footer-logo a {
    margin-right: 0;
  }
  
  .footer-widget .title {
    font-weight: 600;
    color: #f5f5f5;
    margin-bottom: 45px;
    font-family: "Poppins", sans-serif;
    position: relative;
    margin-top: -5px;
  }
  
  .footer-widget .title::after {
    position: absolute;
    content: "";
    bottom: -22px;
    left: 0;
    width: 60px;
    height: 1px;
    background-color: #00d7d9;
  }
  
  @media only screen and (max-width: 991px) {
    .footer-widget .title {
        margin-bottom: 40px;
    }
    .footer-widget .title::after {
        bottom: -20px;
    }
  }
  
  
  .footer-list {
    margin-bottom: -10px;
    list-style: none;
  }
  
  .footer-list li {
    font-weight: 400;
    font-size: 16px;
    padding-bottom: 10px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  
  @media only screen and (max-width: 991px) {
    .footer-list li {
        font-size: 14px;
    }
  }
  
  .footer-list li a {
    display: inline-block;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  
  .footer-list li a:hover {
    color: #00d7d9;
    padding-left: 5px;
  }
  
  /* 
  .footer-social {
    margin-top: 30px;
  }
  @media only screen and (max-width: 991px) {
    .footer-social {
        margin-top: 20px;
    }
  } */
  
  .footer-social li {
    display: inline-block;
  }
  
  .footer-social li a {
    width: 30px;
    height: 30px;
    line-height: 28px;
    display: inline-block;
    text-align: center;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    color: #dbdbdb;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  
  .facebook a:hover {
    background-color: #3b5998;
    border: 1px solid#3b5998;
    color:  #ffffff;
  }
  .instagram a:hover {
    background-color: #c91349;
    border: 1px solid#c91349;
    color:  #ffffff;
  }
  
  
  .linkedin a:hover {
    background-color: #0A66C2;
    border: 1px solid#0A66C2;
    color:  #ffffff;
  }
  
  .twitter a:hover {
    background-color:  #0f0f0f;
    border: 1px solid #1d1d1d;
    color:  #ffffff;
  }
  /* .twitter a:hover {
    background-color:  #00acee;
    border: 1px solid #00acee;
    color:  #ffffff;
  } */
  
  /* .footer-social li+li {
    margin-left: 5px;
  } */
  
  
  .copyright-footer{
    display: flex;
    justify-content: end ;
  }
  .copyright-wrapper {
    background-color: #040404;
    font-size: 14px;
    padding: 40px 0;
    margin-top: 120px;
  }
  
  @media only screen and (max-width: 991px) {
    .copyright-wrapper {
        margin-top: 80px;
        padding: 40px 0;
    }
  }
  .copyright-wrapper p {
    color: #dbdbdb;
    letter-spacing: 1px;
    margin-bottom: 0;
  }
  
  @media only screen and (max-width: 991px) {
    .copyright-wrapper  {
        margin-top: 20px;
    }
  }
  .copyright-area span{
    font-weight: 600;
    color:#dbdbdb;
  }
  .copyright-area p {
    margin-bottom: 0px;
  }
  .copyright-area a {
    text-decoration: underline;
   
  }
  .copyright-area a:hover {
    text-decoration: underline;
    color: #008283;
  }

  /*-------------------------------------------------
 sssssssssssssssssssssssssssss
*/
html {
    font-size: 100%;
    scroll-behavior: smooth;
}

body {
    background-color: #ffffff;
    font-family: "jost";
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5em;
    color: #4B4B4B;
    overflow-x: hidden;
}

@media only screen and (max-width: 991px) {
    body {
        font-size: 14px;
    }
}

a {
    display: inline-block;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

p {
    margin-bottom: 15px;
    line-height: 1.7em;
}

p:last-child {
    margin-bottom: 0px;
}

@media only screen and (max-width: 1199px) {
    p {
        line-height: 1.7em;
    }
}

img {
    max-width: 100%;
    height: auto;
}


span {
    display: inline-block;
}

a,
a:focus,
a:hover {
    text-decoration: none;
    color: inherit;
}


/*-------------------------------------------------
    [ ## padding for responsive]
----------------*/


/* .pt-10 {
    padding-top: 10px;
}

.pt-20 {
    padding-top: 20px;
}

.pt-30 {
    padding-top: 30px;
}

.pt-40 {
    padding-top: 40px;
}

.pt-50 {
    padding-top: 50px;
}

.pt-60 {
    padding-top: 60px;
}

.pt-80 {
    padding-top: 80px;
}

.pt-100 {
    padding-top: 100px;
} */

@media only screen and (max-width: 991px) {
    .pt-100 {
        padding-top: 80px;
    }
}

.pt-120 {
    padding-top: 120px;
}

@media only screen and (max-width: 991px) {
    .pt-120 {
        padding-top: 80px;
    }
}

.pt-150 {
    padding-top: 150px;
}

@media only screen and (max-width: 991px) {
    .pt-150 {
        padding-top: 100px;
    }
}
 
.pb-10 {
    padding-bottom: 10px;
}

.pb-20 {
    padding-bottom: 20px;
}

.pb-30 {
    padding-bottom: 30px;
}

.pb-40 {
    padding-bottom: 40px;
}

.pb-50 {
    padding-bottom: 50px;
}

.pb-60 {
    padding-bottom: 60px;
}

.pb-80 {
    padding-bottom: 80px;
}

.pb-100 {
    padding-bottom: 100px;
} 
.pb-120 {
    padding-bottom: 120px;
}



@media only screen and (max-width: 991px) {
    .pb-100 {
        padding-bottom: 80px;
    }
}

@media only screen and (max-width: 991px) {
    .pb-120 {
        padding-bottom: 80px;
    }
}

.pb-130 {
    padding-bottom: 130px !important;
}

@media only screen and (max-width: 991px) {
    .pb-130 {
        padding-bottom: 80px !important;
    }
}

.pb-150 {
    padding-bottom: 150px;
}

@media only screen and (max-width: 991px) {
    .pb-150 {
        padding-bottom: 100px;
    }
}

.ptb-10 {
    padding: 10px 0;
}

.ptb-20 {
    padding: 20px 0;
}

.ptb-30 {
    padding: 30px 0;
}

.ptb-40 {
    padding: 40px 0;
}

.ptb-50 {
    padding: 50px 0;
}

.ptb-60 {
    padding: 60px 0;
}

.ptb-80 {
    padding: 80px 0;
}

.ptb-100 {
    padding: 100px 0;
}

@media only screen and (max-width: 991px) {
    .ptb-100 {
        padding: 80px 0;
    }
}

.ptb-120 {
    padding: 120px 0;
}

@media only screen and (max-width: 991px) {
    .ptb-120 {
        padding: 80px 0;
    }
}

.ptb-130 {
    padding: 120px 0 130px 0;
}

@media only screen and (max-width: 991px) {
    .ptb-130 {
        padding: 80px 0 80px 0;
    }
}

.ptb-150 {
    padding: 150px 0;
}

@media only screen and (max-width: 991px) {
    .ptb-150 {
        padding: 100px 0;
    }
}

.mt-10 {
    margin-top: 10px;
}

.mt-20 {
    margin-top: 20px;
}

.mt-30 {
    margin-top: 30px;
}

.mt-40 {
    margin-top: 40px;
}

.mt-50 {
    margin-top: 50px;
}

.mt-60 {
    margin-top: 60px;
}

.mt-80 {
    margin-top: 80px;
}

.mt-100 {
    margin-top: 100px;
}

.mt-120 {
    margin-top: 120px;
}

.mt-150 {
    margin-top: 150px;
}

.mb-10 {
    margin-bottom: 10px;
}

.mb-20 {
    margin-bottom: 20px;
}

.mb-30 {
    margin-bottom: 30px;
}

.mb-40 {
    margin-bottom: 40px;
}

.mb-50 {
    margin-bottom: 50px;
}

.mb-60 {
    margin-bottom: 60px;
}

.mb-80 {
    margin-bottom: 80px;
}

@media only screen and (max-width: 575px) {
    .mb-80 {
        margin-bottom: 40px;
    }
}

.mb-100 {
    margin-bottom: 100px;
}

.mb-120 {
    margin-bottom: 120px;
}

.mb-150 {
    margin-bottom: 150px;
}

.mt-10-none {
    margin-top: -10px;
}

.mt-20-none {
    margin-top: -20px;
}

.mt-30-none {
    margin-top: -30px;
}

.mt-40-none {
    margin-top: -40px;
}

.mt-50-none {
    margin-top: -50px;
}

.mt-60-none {
    margin-top: -60px;
}

.mt-80-none {
    margin-top: -80px;
}

.mt-100-none {
    margin-top: -100px;
}

.mt-120-none {
    margin-top: -120px;
}

.mt-150-none {
    margin-top: -150px;
}

.mb-10-none {
    margin-bottom: -10px;
}

.mb-20-none {
    margin-bottom: -20px;
}

.mb-25-none {
    margin-bottom: -25px;
}

.mb-30-none {
    margin-bottom: -30px;
}

.mb-40-none {
    margin-bottom: -40px;
}

.mb-50-none {
    margin-bottom: -50px;
}

.mb-60-none {
    margin-bottom: -60px;
}

.mb-65-none {
    margin-bottom: -65px;
}

.mb-80-none {
    margin-bottom: -80px;
}

@media only screen and (max-width: 575px) {
    .mb-80-none {
        margin-bottom: -40px;
    }
}

.mb-100-none {
    margin-bottom: -100px;
}

.mb-120-none {
    margin-bottom: -120px;
}

.mb-150-none {
    margin-bottom: -150px;
}

/*-------------------------------------------------
    [ ## color code]
*/
/* 
.bg--primary {
    background-color: #01475c !important;
}

.bg--secondary {
    background-color: #4e9f9f;
}

.bg--base {
    background-color: #009798 !important;
}

.text--primary {
    color: #01475c;
}

.text--secondary {
    color: #4e9f9f;
}


.text--dark {
    color: #10163A;
}


.section--bg {
    background-color: #000000 !important;
}

.bg--gray {
    background-color: #F8F9FF;
}

.border--rounded {
    border-radius: 3px !important;
} */



.box-shadow {
    -webkit-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);
}



/*-------------------------------------------------
    [ ## Side scrollbar ]
*/

*::-webkit-scrollbar-track {
    -webkit-box-shadow: inset -5px -5px 8px -1px rgba(255, 255, 255, 0.7), 5px 5px 8px -1px rgba(0, 0, 0, 0.065);
    box-shadow: inset -5px -5px 8px -1px rgba(255, 255, 255, 0.7), 5px 5px 8px -1px rgba(0, 0, 0, 0.065);
    background-color: #F8F9FF;
}

*::-webkit-scrollbar {
    width: 6px;
    background-color: #F8F9FF;
}

*::-webkit-scrollbar-button {
    background-color: #009798;
}

*::-webkit-scrollbar-thumb {
    background-color: #009798;
}
/*-------------------------------------------------
    [ ## scrollbar  Endddddd]
*/

/*--------------------------------------------------------------
# Preloader @@
------------------------------------*/
#preloader {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    overflow: hidden;
    background: #fff;
  }
  
  #preloader:before {
    content: "";
    position: fixed;
    top: calc(50% - 30px);
    left: calc(50% - 30px);
    border: 6px solid #3fbbc0;
    border-top-color: #ecf8f9;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    -webkit-animation: animate-preloader 1s linear infinite;
    animation: animate-preloader 1s linear infinite;
  }
  
  @-webkit-keyframes animate-preloader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @keyframes animate-preloader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  /*--------------------------------------------------------------
  Preloader //
 ---------------------------*/

/*-------------------------------------------------
    [ ## scrollToTop @@]
*/
.scrollToTop {
    position: fixed;
    bottom: 0;
    right: 30px;
    width: 45px;
    height: 45px;
    line-height: 45px;
    font-weight: 600;
    background-color: #009798 !important;
    color: #fff;
    font-size: 20px;
    text-align: center; 
    border-radius: 5px;
    z-index: 99;
    cursor: pointer;
    -webkit-transition: all 1s;
    transition: all 1s;
    -webkit-transform: translateY(-5000%);
    transform: translateY(-5000%);
}

.scrollToTop.active {
    /* background-color: #003939; */
    bottom: 30px;
    -webkit-transform: translateY(0%);
    transform: translateY(0%);
}

@media only screen and (max-width: 1270px) {
    .scrollToTop.active {
        bottom: 27px;
    }
}

.scrollToTop:hover,
.scrollToTop:focus {
    color: #fff;
}
/*-------------------------------------------------
    [ ## scrollToTop //]
*/


/*-------------------------------------------------
    [ ## Heading ]
*/

h1,
h2,
h3,
h4,
h5,
h6 {
    clear: both;
    color: #1C1C1C;
    font-weight: 600;
}

h1 {
    font-size: 55px;
}

@media only screen and (max-width: 991px) {
    h1 {
        font-size: 40px;
    }
}

@media only screen and (max-width: 575px) {
    h1 {
        font-size: 28px;
    }
}

h2 {
    font-size: 40px;
}

@media only screen and (max-width: 991px) {
    h2 {
        font-size: 32px;
    }
}

@media only screen and (max-width: 575px) {
    h2 {
        font-size: 28px;
    }
}

h3 {
    font-size: 24px;
}

@media only screen and (max-width: 991px) {
    h3 {
        font-size: 20px;
    }
}

h4 {
    font-size: 20px;
}

h5 {
    font-size: 18px;
}

h6 {
    font-size: 16px;
}

h1 a,
h2 a,
h3 a,
h4 a,
h5 a {
    color: inherit;
    text-decoration: none;
}

h1 a:hover,
h2 a:hover,
h3 a:hover,
h4 a:hover {
    color: inherit;
    text-decoration: none;
}

.section-header-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 50px;
}

@media only screen and (max-width: 991px) {
    .section-header-wrapper {
        margin-bottom: 30px;
    }
}

.section-header-wrapper .section-header {
    margin-bottom: 0;
    width: 50%;
}

@media only screen and (max-width: 1199px) {
    .section-header-wrapper .section-header {
        width: 70%;
    }
}

@media only screen and (max-width: 991px) {
    .section-header-wrapper .section-header {
        width: 100%;
        margin-bottom: 20px;
    }
}
.title h1{
  
    color: #ffffff;
   
}

.sub-title {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 600;
    color: #ffb500;
    margin-bottom: 20px;
}


@media only screen and (max-width: 575px) {
    .sub-title {
        font-size: 12px;
    }
}

.section-header {
    margin-bottom: 50px;
    position: relative;
    z-index: 9;
}

@media only screen and (max-width: 991px) {
    .section-header {
        margin-bottom: 30px;
    }
}

.section-header.white .section-title {
    color: #fff;
}

.section-header.white p {
    color: #fff;
}

.section-header.left {
    margin-bottom: 30px;
}

.section-header .section-title {
    margin-bottom: 20px;
    position: relative;
    font-weight: 700;
    margin-top: -8px;
    text-transform: capitalize;
}

@media only screen and (max-width: 991px) {
    .section-header .section-title {
        margin-top: -5px;
    }
}

.section-header .section-title span {
    color: #009798;
}

.section-header .section-title.two {
    text-transform: unset;
}

.section-header p {
    margin-top: 10px;
}

/*-------------------------------------------------
    [ ## Buttons ]
*/

input[type=submit]:hover {
    color: #fff;
}

button,
input[type=button],
input[type=reset],
input[type=submit] {
    cursor: pointer;
    /* -webkit-appearance: button; */
}

button:focus,
input[type=button]:focus,
input[type=reset]:focus,
input[type=submit]:focus {
    outline: none;
}

button::-moz-focus-inner,
input[type=button]::-moz-focus-inner,
input[type=reset]::-moz-focus-inner,
input[type=submit]::-moz-focus-inner,
input::-moz-focus-inner {
    padding: 0;
    border: 0;
}

.btn {
    -webkit-transition: all 0.3s ease 0.02s;
    transition: all 0.3s ease 0.02s;
}

/* .btn:active,
.btn:focus {
    -webkit-box-shadow: 0 0px 0px rgba(0, 0, 0, 0.125) inset;
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.125) inset;
} */

.btn {
    border: 0px solid;
    border-radius: 0px;
    font-weight: 500;
    font-size: 16px;
    -webkit-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}

@media only screen and (max-width: 767px) {
    .btn {
        font-size: 14px;
    }
}

.btn-rounded {
    border-radius: 3px;
}

.btn-capsule {
    border-radius: 100px;
}

/*-------------------------------------------------
    [ ## custom btn all]
*/

.btn--base {
    position: relative;
    background: #009798;
    border: 1px solid #009798;
    color: #fff;
    padding: 14px 30px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    z-index: 2;
    overflow: hidden;
    -webkit-transition: all ease 0.5s;
    transition: all ease 0.5s;
}

.btn--base::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    background: #fff;
    top: 0;
    right: 0;
    z-index: -1;
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
}

.btn--base.active {
    background: transparent;
    border: 1px solid #009798;
    color: #009798;
}

.btn--base.active::before {
    background: #009798;
}

.btn--base.active:hover {
    color: #fff;
}

.btn--base.subscribe {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    width: 100%;
    border-radius: 6px;
}

.btn--base.subscribe::before {
    background: #009798;
}

.btn--base.subscribe:hover {
    color: #fff;
    border: 1px solid #009798;
}

.btn--base:focus,
.btn--base:hover {
    color: #009798;
}

.btn--base:focus::before,
.btn--base:hover::before {
    width: 100%;
    right: auto;
    left: 0;
}

@media only screen and (max-width: 991px) {
    .btn--base {
        padding: 12px 20px;
        font-size: 14px;
    }
}

.custom-btn {
    color: #009798;
    font-weight: 600;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}

.custom-btn.two {
    color: #ffb500;
}

.custom-btn.two:hover {
    color: #ffffff;
}

.custom-btn i {
    font-size: 12px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}

.custom-btn:hover {
    color: #009798;
}

.custom-btn:hover i {
    padding-left: 5px;
}

/*-------------------------------------------------
    [ ## Fields ]
*/
/* 
input[type=text]:focus,
input[type=email]:focus,
input[type=password]:focus {
    outline: none;
}

input,
textarea {
    padding: 12px 20px;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
    color: #1C1C1C;
}

input::-moz-placeholder,
textarea::-moz-placeholder {
    color: #1C1C1C;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
    color: #1C1C1C;
}

input::-ms-input-placeholder,
textarea::-ms-input-placeholder {
    color: #1C1C1C;
}

input::placeholder,
textarea::placeholder {
    color: #1C1C1C;
} */

textarea {
    display: block;
    width: 100%;
    display: block;
    min-height: 120px;
}

/* input,
select,
textarea {
    border: 1px solid #E2E2E2;
    vertical-align: baseline;
    font-size: 100%;
    color: #1C1C1C;
} */

label {
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 10px;
    display: block;
}


/*--------------------------------------------------------------
# Pages for all
--------------------------------------------------------------*/
/* using indexpage */
.custom-container {
    max-width: 1600px;
}


.row>* {
    position: relative;
}


::-moz-selection {
    background-color: #009798;
    color: #fff;
}

::selection {
    background-color: #009798;
    color: #fff;
}

      
</style>
<footer class="footer-section pt-120">
<div class="container">
    <div class="row mb-30-none">
        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="footer-widget">
                <div class="footer-logo">
                    <a href="index.html">
                        <img src="assets/images/logo-two-white.png" alt="site-logo">

                    </a>
                </div>
                <p>We are constantly evolving and committed to serve the best to our customers.
                    Delivering
                    quality solutions has been a top priority
                    for us.</p>
                <!-- <ul class="footer-social">
                <img src="assets/images/iso2015.png" alt="ISO-logo">
        </ul> -->
                <ul class="footer-social">Follow us:
                    <li class="linkedin"><a href="https://www.linkedin.com/company/utkal-labs"
                            target=”_blank”><i class="lab la-linkedin-in"></i></a>

                    </li>
                    <li class="facebook"><a href="https://www.facebook.com/utkallabsindia/" target=”_blank”>
                            <i class='lab la-facebook-f'></i></a>
                    </li>

                    <li class="twitter">
                        <a href="https://twitter.com/UtkalLabs" target=”_blank”>
                            <i class="fa-brands fa-x-twitter"></i></a>
                    </li>
                    <li class="instagram">
                        <a href="https://www.instagram.com/utkallabs/" target=”_blank”>
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>

                </ul>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div class="footer-widget">
                <h5 class="title">About Us </h5>
                <ul class="footer-list">
                    <li><a href="aboutus.html">About Us</a></li>
                    <li><a href="aboutus.html#history">History</a></li>
                    <li><a href="aboutus.html#value">Our Core value</a></li>
                    <li><a href="aboutus.html#management">Meet Our Management</a></li>
                </ul>
            </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div class="footer-widget">
                <h4 class="title">Explore Utkal Labs</h4>
                <ul class="footer-list">
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="newsletter.html">Newsletter</a></li>
                    <li><a href="case-studies.html">Case Studies</a></li>
                </ul>
            </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-6 mb-30">
            <div class="footer-widget">
                <h4 class="title">Quick Links </h4>
                <ul class="footer-list">
                    <li><a href="http://blog.utkallabs.com" target="_blank">Blogs</a></li>
                    <li><a href="service.html">Services</a></li>
                    <li><a href="career.html">Career</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="copyright-wrapper">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-12 text-center">
                <div class="copyright-area">
                    <p>Copyright © 2024 Utkal Labs Pvt. Ltd. All Rights Reserved<br>
                        <a href="privacypolicy.html">Privacy Policy</a> and
                        <a href="termsandconditions.html"> Terms and Conditions</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>

</footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define("footer-component", Footer);
