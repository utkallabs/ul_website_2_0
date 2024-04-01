document.addEventListener("DOMContentLoaded", function () {
  // newsletter data
  let newsletterData = [
    {
      imagesrc: "assets/images/Newsletter/January-2024.png",
      pdfsrc: "assets/images/Newsletter/January-2024-Newsletter-UL.pdf",
      monthYear: "January 2024",
      downloadtitle: "January2024_newsletter",
    },
    {
      imagesrc: "assets/images/Newsletter/February-2024.png",
      pdfsrc: "assets/images/Newsletter/February-2024-Newsletter-UL.pdf",
      monthYear: "February 2024",
      downloadtitle: "February-2024_newsletter",
    },
    {
      imagesrc: "assets/images/Newsletter/October2023.png",
      pdfsrc: "assets/images/Newsletter/October2023-UL-Newsletter.pdf",
      monthYear: "October 2023",
      downloadtitle: "October2023_newsletter",
    },
    {
      imagesrc: "assets/images/Newsletter/November2023.png",
      pdfsrc: "assets/images/Newsletter/November2023-UL-Newsletter.pdf",
      monthYear: "November 2023",
      downloadtitle: "November2023_newsletter",
    },
  ];

  function generatePortfolioImageCard(element) {
    return ` <div class="col-xl-3 col-lg-3 col-md-6 mb-30">
    <div class="newsletter">
        <img src="${element.imagesrc}">
        <div class="month-box">
            <p>${element.monthYear}</p>
            <div class="Download-box">

                <a href="${element.pdfsrc}"
                    download="${element.downloadtitle}">

                    <button class="download_news"> Download
                        <i class="fa fa-download download_news_icon"></i>
                    </button>
                </a>
            </div>
        </div>
    </div>
</div>`;
  }

  document.getElementById("activity-newsletter-id").innerHTML = newsletterData
    .map(generatePortfolioImageCard)
    .join("");
});
