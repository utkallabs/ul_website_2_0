document.addEventListener("DOMContentLoaded", function () {
  // Feature data
  const featuresData = [
    {
      icon: "assets/images/About us/COMMITMENT.png",
      title: "COMMITMENT",
      description:
        "The promise of sheer determination of being devoted to a cause, an activity, or a vision is what we call commitment.",
    },
    {
      icon: "assets/images/About us/Quality.png",
      title: "QUALITY",
      description:
        "Quality sets us apart and assures users their requirements are fulfilled, providing confidence and a great experience.",
    },
    {
      icon: "assets/images/About us/Accountablety.png",
      title: "ACCOUNTABILITY",
      description:
        "Accountability in work ethics means being answerable, responsible, and owning up to mistakes with an expectation to fix them.",
    },
    {
      icon: "assets/images/About us/INGENUITY.png",
      title: "INGENUITY",
      description:
        "Ingenuity is the quality of being inventive, creative, original, and innovative in one's thinking or actions. It takes ingenuity and the willingness to strive.",
    },
    {
      icon: "assets/images/About us/CONTRIVANCE.png",
      title: "COLLABORATIVE",
      description:
        "Why achieve little, when we can achieve bigger together! A thoughtful, committed group of people can achieve things beyond imagination.",
    },
    {
      icon: "assets/images/About us/CONCLUSION.png",
      title: "CONCLUSION",
      description:
        "Utkal Labs values continuous improvement and individual growth, empowering its team and gaining a competitive advantage.",
    },
  ];

  function generateFeatureBox(element) {
    return `<div class="col-lg-4  box">
                <h5> <img src="${element.icon}">${element.title}</h5>
                <p>${element.description}</p>
              </div>`;
  }

  document.getElementById("first-line-row-one").innerHTML = featuresData
    .slice(0, 3)
    .map(generateFeatureBox)
    .join("");

  document.getElementById("first-line-row-two").innerHTML = featuresData
    .slice(3, 6)
    .map(generateFeatureBox)
    .join("");
});
