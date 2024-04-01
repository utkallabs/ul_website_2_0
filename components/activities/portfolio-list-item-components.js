document.addEventListener("DOMContentLoaded", function () {
  // caseStudies data

  const portfolioImage = [
    {
      imagetype: "devjam",
      imgsrc: "assets/images/gallary/gallery-devjam-1.png",
      itemprop: "thumbnail",
      alt: "gallery-image-1",
      href: "assets/images/gallary/gallery-devjam-1.png",
      "data-size": "1200x600",
    },
    {
      imagetype: "devjam",
      imgsrc: "assets/images/gallary/gallery-devjam-2.png",
      itemprop: "thumbnail",
      alt: "gallery-image-1",
      href: "assets/images/gallary/gallery-devjam-2.png",
      "data-size": "1200x600",
    },
    {
      imagetype: "usbm",
      imgsrc: "assets/images/gallary/gallery-usbm-1.png",
      itemprop: "thumbnail",
      alt: "gallery-image-1",
      href: "assets/images/gallary/gallery-usbm-1.png",
      "data-size": "1200x600",
    },
    {
      imagetype: "usbm",
      imgsrc: "assets/images/gallary/gallery-usbm-2.png",
      itemprop: "thumbnail",
      alt: "gallery-image-1",
      href: "assets/images/gallary/gallery-usbm-2.png",
      "data-size": "1200x600",
    },
    {
      imagetype: "usbm",
      imgsrc: "assets/images/gallary/gallery-usbm-3.png",
      itemprop: "thumbnail",
      alt: "gallery-image-1",
      href: "assets/images/gallary/gallery-usbm-3.png",
      "data-size": "1200x600",
    },
    {
      imagetype: "usbm",
      imgsrc: "assets/images/gallary/gallery-usbm-4.png",
      itemprop: "thumbnail",
      alt: "gallery-image-1",
      href: "assets/images/gallary/gallery-usbm-4.png",
      "data-size": "1200x600",
    },
    {
      imagetype: "annual",
      imgsrc: "assets/images/gallary/gallery-annual-2.png",
      itemprop: "thumbnail",
      alt: "gallery-image-1",
      href: "assets/images/gallary/gallery-annual-2.png",
      "data-size": "1200x600",
    },
    {
      imagetype: "annual",
      imgsrc: "assets/images/gallary/gallery-annual-4.png",
      itemprop: "thumbnail",
      alt: "gallery-image-1",
      href: "assets/images/gallary/gallery-annual-4.png",
      "data-size": "1200x600",
    },
    {
      imagetype: "annual",
      imgsrc: "assets/images/gallary/gallery-annual-5.png",
      itemprop: "thumbnail",
      alt: "gallery-image-1",
      href: "assets/images/gallary/gallery-annual-5.png",
      "data-size": "1200x600",
    },
    {
      imagetype: "annual",
      imgsrc: "assets/images/gallary/gallery-annual-6.png",
      itemprop: "thumbnail",
      alt: "gallery-image-1",
      href: "assets/images/gallary/gallery-annual-6.png",
      "data-size": "1200x600",
    },
    {
      imagetype: "annual",
      imgsrc: "assets/images/gallary/gallery-annual-1.png",
      itemprop: "thumbnail",
      alt: "gallery-image-1",
      href: "assets/images/gallary/gallery-annual-1.png",
      "data-size": "1200x600",
    },
    {
      imagetype: "annual",
      imgsrc: "assets/images/gallary/gallery-annual-3.png",
      itemprop: "thumbnail",
      alt: "gallery-image-1",
      href: "assets/images/gallary/gallery-annual-3.png",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-1.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image-1",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-1.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-2.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image-1",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-2.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-3.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-3.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-4.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-4.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-5.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-5.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-6.JPG",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-6.JPG",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-7.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-7.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-8.JPG",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-8.JPG",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-9.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-9.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-10.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-10.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-11.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-11.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-12.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-12.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-13.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-13.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-14.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-14.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-15.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-15.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-16..JPG",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-16..JPG",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-16.JPG",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-16.JPG",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-17.JPG",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-17.JPG",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-18.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-18.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-19.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-19.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-21.JPG",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-21.JPG",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-22.jpg",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-22.jpg",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-24.JPG",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-24.JPG",
      "data-size": "1200x600",
    },
    {
      imagetype: "thirdannual",
      imgsrc: "assets/images/gallary/3rdannual/gallery-3rdannual-25.png",
      itemprop: "thumbnail",
      alt: "gallery-image",
      href: "assets/images/gallary/3rdannual/gallery-3rdannual-25.png",
      dataSize: "1200x600",
    },
  ];
  function generatePortfolioImageCard(element) {
    return ` <li class="mix ${element.imagetype} col-xl-3 col-md-4 col-12 col-sm-6 pd">
    <img src="${element.imgsrc}" />

    <div class="portfolio-overlay">
      <div class="overlay-content">

        <a data-fancybox="item" title="click to zoom-in" href="${element.imgsrc}"
          data-size="1200x600">

          <div class="magnify-icon">
            <p><span><i class="fa fa-search" aria-hidden="true"></i></span></p>
          </div>
        </a>
      </div>
    </div>

  </li>`;
  }

  document.getElementById("portfolio-list-item-id").innerHTML = portfolioImage
    .map(generatePortfolioImageCard)
    .join("");

  var containerEl = document.querySelector(".portfolio-item");

  var mixer = mixitup(containerEl, {
    animation: {
      effects: "fade translateZ(-100px)",
      effectsIn: "fade translateY(-100%)",
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    },
  });
  console.log("containerEl", mixer);
  $("[data-fancybox]").fancybox({
    loop: true,
    hash: true,
    transitionEffect: "slide",
    clickContent: function (current, event) {
      return current.type === "image" ? "next" : false;
    },
  });
});
