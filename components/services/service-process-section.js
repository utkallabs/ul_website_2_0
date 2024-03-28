// service-process-section.js
document.addEventListener("DOMContentLoaded", function () {
  const dynamicContentData = [
    {
      iconSrc: "assets/images/icon/1_Discover.png",
      title: "Discover",
    },
    {
      iconSrc: "assets/images/icon/2_Design.png",
      title: "Design",
    },
    {
      iconSrc: "assets/images/icon/3_Build.png",
      title: "Build",
    },
    {
      iconSrc: "assets/images/icon/4_Deliver.png",
      title: "Deliver",
    },
  ];

  function ServiceProcessSection(element) {
    return ` <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
    <div class="process-item text-center">
      <div class="process-icon">
        <img src="${element.iconSrc}" />
      </div>

      <div class="process-content">
        <h3 class="title">${element.title}</h3>
      </div>
    </div>
  </div>`;
  }

  document.getElementById("process-section-id").innerHTML = dynamicContentData
    .map(ServiceProcessSection)
    .join("");
});
