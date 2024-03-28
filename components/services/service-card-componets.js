document.addEventListener("DOMContentLoaded", function () {
  const serviceItemsData = [
    {
      title: "Web & Mobile Application",
      description: "We have expertise in customized web & mobile",
      iconSrc: "assets/images/service-icon/1.Web&MobileApplication.png",
      link: "service-web-mobile-application.html",
    },
    {
      title: "Robotic Process Automation",
      description: "Robotic Process Automation (RPA) is a technology that",
      iconSrc: "assets/images/service-icon/2.RoboticProcessAutomation.png",
      link: "service-robotic-process-automation.html",
    },
    {
      title: "Blockchain & NFT",
      description: "With an immaculate expertise on Web3, a next generation",
      iconSrc: "assets/images/service-icon/3.Blockchain&NFT.png",
      link: "service-blockchain-nft.html",
    },
    {
      title: "Digital Transformation",
      description: "We help you make the ultimate impact by keeping you",
      iconSrc: "assets/images/service-icon/4.DigitalTransformation.png",
      link: "service-digital-transformation.html",
    },
    {
      title: "DevOps Consulting",
      description: "DevOps helps create a high-performance IT capability",
      iconSrc: "assets/images/service-icon/5.DevOpsConsulting.png",
      link: "service-devops-consulting.html",
    },
    {
      title: "Enterprise Solution",
      description: "We have expertise in developing comprehensive",
      iconSrc: "assets/images/service-icon/6.EnterpriseSolution.png",
      link: "service-enterprise-solution.html",
    },
    {
      title: "Al/ML Solution",
      description: "AI/ML Solution refers to the use of advanced algorithms",
      iconSrc: "assets/images/service-icon/7.AlMLSolution.png",
      link: "service-alml-solution.html",
    },
    {
      title: "QA Services",
      description: "QA services, or Quality Assurance services, involve",
      iconSrc: "assets/images/service-icon/8.QAServices.png",
      link: "service-qa-services.html",
    },
  ];

  function generateServiceCard(element) {
    return `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-30">
    <div class="service-item three">
      <div class="service-icon">
        <img
          src=${element.iconSrc}
          alt="icon"
        />
      </div>
      <div class="service-content">
        <h3 class="title">
          <a href="${element.link}"
            >${element.title}</a
          >
        </h3>
        <p>${element.description}</p>
        <div class="service-btn">
          <a
            href="${element.link}"
            class="custom-btn"
            target="”_blank”"
            >Learn More <i class="las la-long-arrow-alt-right ml-2"></i
          ></a>
        </div>
      </div>
    </div>
  </div>`;
  }

  document.getElementById("service-section-cards").innerHTML = serviceItemsData
    .map(generateServiceCard)
    .join("");
});
