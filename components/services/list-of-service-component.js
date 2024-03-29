document.addEventListener("DOMContentLoaded", function () {
  const serviceData = [
    {
      href: "service-web-mobile-application.html",
      title: "Web & Mobile Application",
    },
    {
      href: "service-robotic-process-automation.html",
      title: "Robotic Process Automation",
    },
    {
      href: "service-blockchain-nft.html",
      title: "Blockchain & NFT",
    },
    {
      href: "service-digital-transformation.html",
      title: "Digital Transformation",
    },
    {
      href: "service-devops-consulting.html",
      title: "DevOps Consulting",
    },
    {
      href: "service-enterprise-solution.html",
      title: "Enterprise Solution",
    },
    {
      href: "service-alml-solution.html",
      title: "Al/ML Solution",
    },
    {
      href: "service-qa-services.html",
      title: "QA Services",
    },
  ];
  function generateServiceListCard(element) {
    return `<li class="open"> <a href="${element.href}">${element.title}</a></li>`;
  }

  document.getElementById("list-of-service-id").innerHTML = serviceData
    .map(generateServiceListCard)
    .join("");
});
