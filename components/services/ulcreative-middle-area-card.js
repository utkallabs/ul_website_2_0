// ulCreativeMiddleAreaCard-components.js
document.addEventListener("DOMContentLoaded", function () {
  const dynamicContentData = [
    { value: "1+", description: "Years Of Existence" },
    { value: "30+", description: "Software Experts" },
    { value: "50+", description: "Satisfied Clients" },
    { value: "50+", description: "Successfully Delivered" },
  ];

  function ulCreativeMiddleAreaCard(element) {
    return `<div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-80">
    <div class="middle-item">
      <div class="middle-content">
        <div class="ulcreative-mid-area">
          <h3 class="title">${element.value}</h3>
        </div>
        <p>${element.description}</p>
      </div>
    </div>
  </div>`;
  }

  document.getElementById("ulcreative-middle-area-id").innerHTML =
    dynamicContentData.map(ulCreativeMiddleAreaCard).join("");
});
