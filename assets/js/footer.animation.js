function setContainerWidth() {
  const imgContainer = document.querySelector(".img_container");
  const imgMonuments = document.querySelector("#img_monuments");

  const imgMonumentsWidth = imgMonuments.offsetWidth;
  const imgMonumentsHeight = imgMonuments.offsetHeight;

  imgContainer.style.setProperty("--image-width", `${imgMonumentsWidth}px`);
  imgContainer.style.setProperty("--image-height", `${imgMonumentsHeight}px`);

  const maskImage = document.getElementById("mask-image");
  maskImage.setAttribute("width", imgMonumentsWidth);
  maskImage.setAttribute("height", imgMonumentsHeight);

  console.log(imgMonumentsWidth, "image width");
  console.log(imgMonumentsHeight, "image height");
}

window.addEventListener("load", setContainerWidth);
window.addEventListener("resize", setContainerWidth);