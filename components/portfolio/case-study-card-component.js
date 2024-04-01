document.addEventListener("DOMContentLoaded", function () {
  // caseStudies data
  const caseStudies = [
    {
      title: "Super Discount",
      description:
        "The project is about creating a platform for finding and sharing different offers from shops and malls.",
      link: "casestudies-super-discount.html",
      imgSrc: "assets/images/casestudy/super_discount_casestudy_card.png",
    },
    {
      title: "Match Making Application",
      description:
        "Our client envisions the development of a groundbreaking matchmaking app designed to.",
      link: "casestudies-match-making-application.html",
      imgSrc:
        "assets/images/casestudy/match_making_application_casestudy_card.png",
    },
    {
      title: "Collaboration Hub",
      description:
        "The project aims to establish a dynamic platform facilitating a symbiotic relationship between clients.",
      link: "casestudies-collaboration-hub.html",
      imgSrc: "assets/images/casestudy/collaboration_hub_casestudy_card.png",
    },
    {
      title: "Health Hubcare",
      description:
        "The client's goal is to create the first complete continuum care provider.",
      link: "casestudies-health-hubcare.html",
      imgSrc: "assets/images/casestudy/health_hubcare_casestudy_card.png",
    },
    {
      title: "Communi Trade",
      description:
        "The client's vision is to create a website and an app that allow people to post ads.",
      link: "casestudies-communi-trade.html",
      imgSrc: "assets/images/casestudy/communi_trade_casestudy_card.png",
    },
    {
      title: "Sales Management System",
      description:
        "The objective of this application is to create a system where an organization.",
      link: "casestudies-sales-management-system.html",
      imgSrc:
        "assets/images/casestudy/sales_management_system_casestudy_card.png",
    },
    {
      title: "Automation Anywhere Bot Migration",
      description:
        "The client wants to migrate the bots from Automation Anywhere Enterprise.",
      link: "casestudies-automation-anywhere-bot-migration.html",
      imgSrc:
        "assets/images/casestudy/automation_anywhere_bot_migration_casestudy_card.png",
    },
    {
      title: "Real Estate Surveillance Application",
      description:
        "The client wants to build an application, which will serve as a digital guard.",
      link: "casestudies-real-estate-surveillance-application.html",
      imgSrc:
        "assets/images/casestudy/real_estate_surveillance_application_casestudy_card.png",
    },
    {
      title: "Live Streaming and Gaming Application",
      description:
        "The client wants to build a SAAS model-based project where people can interact.",
      link: "casestudies-live-streaming-gaming-aplication.html",
      imgSrc:
        "assets/images/casestudy/live_streaming_and_gaming_application_casestudy_card.png",
    },
    {
      title: "NFT Selling Application",
      description:
        "The client wanted to sell the unique NFTs for high school-level renowned athletes.",
      link: "casestudies-nft-selling-application.html",
      imgSrc:
        "assets/images/casestudy/nft_selling_application_casestudy_card.png",
    },
    {
      title: "ArcGIS Map-Based Travel Application",
      description:
        "This is a locator-based travel app that has been developed for one of our clients.",
      link: "casestudies-arcgis-map-based.html",
      imgSrc:
        "assets/images/casestudy/arcgis-map-based-travel-application_casestudy_card.png",
    },
    {
      title: "Transforming Citizen Engagement",
      description:
        "In the dynamic landscape of public service delivery, the Scheme Broadcasting.",
      link: "casestudies-transforming-citizen-engagement.html",
      imgSrc:
        "assets/images/casestudy/transforming_citizen_engagement_casestudy_card.png",
    },
  ];

  function generatecaseStudiesCard(element) {
    return `<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30">
    <div class="casestudy-item">
      <div class="casestudy_img">
        <img
          src="${element.imgSrc}"
          alt="project-image"
        />
      </div>

      <div class="service-content_casestudy">
        <h6 class="title"><a href="#">${element.title}</a></h6>
        <p>
          ${element.description}
        </p>
        <div class="casestudy-btn">
          <a
            href="${element.link}"
            target="”_blank”"
            class="custom-btn-casestudy"
            >Read More
          </a>
        </div>
      </div>
    </div>
  </div>`;
  }

  document.getElementById("casestudy-section-id").innerHTML = caseStudies
    .map(generatecaseStudiesCard)
    .join("");
});
