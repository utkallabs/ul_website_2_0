document.addEventListener("DOMContentLoaded", function () {
  // Feature data
  const managementData = [
    {
      name: "Mr. Nirmal Chandra Hota",
      position: "Chief Executive Officer",
      image: "assets/images/management/NirmalHota.png",
      twitter: "https://twitter.com/nirmalhota",
      linkedin: "https://www.linkedin.com/in/nirmalhota/",
      bio: `Our CEO, Mr. Nirmal Hota, A tech acumen and an exemplary leader, his diaspora of
      technical knowledge has earned him many accolades and he has been one of the prominent
      head honchos amongst the tech geeks.

      With an exceptional expertise in budding technologies, his stellar profile not only
      consists of a mountaineering 19+ years of corporate experience working with some big
      names of the silicon valley, but also has many benchmarks added as feathers to his
      crown. The recent one being an honorary speaker at the most infamous BCrypt Conference.`,
    },
    {
      name: "Mr. Suvendu Giri",
      position: "Chief Operating Officer",
      image: "assets/images/management/SuvenduGiri.png",
      twitter: "https://twitter.com/suvendusgiri",
      linkedin: "https://www.linkedin.com/in/suvendugiri/",
      bio: `Our COO, Mr. Suvendu Giri, is our go to case of all the dire, despair and dread. Apart
      from being a renowned figure in the tech and with years of experience in the industry,
      he has held the helm of the operations department at Utkal Labs.

      With an astounding career spanning to more than 10+ years, he has worked in reputed tech
      companies in Bhubaneswar. A Masters of Computer Science, Suvendu started his career as a
      Junior. Software Developer with Anthem Global. With his domain expertise, he moved on
      from Jr. Developer to Technical Team Lead, within a short span of 5 years`,
    },
    // Add more management data as needed
  ];

  function generateTeamBox(element) {
    return `<div class="management-details" id="row-one-management">

    <div class="col-lg-4 col-md-12">
        <div class="mangement-img">
            <img src=${element.image}>
        </div>
    </div>

    <div class="col-lg-8 col-md-12">
        <div class="mangement-content">

            <h3 class="mangement-title">${element.name}</h3>
            <span class="mangement-sub-title">${element.position}</span>

            <div class="mangement-social-area">
                <ul class="mangement-social">
                    <li>
                        <a href=${element.twitter}>
                            <i class="lab la-twitter"></i>
                        </a>
                    </li>

                    <li>
                        <a href=${element.linkedin}>
                            <i class="lab la-linkedin-in"></i>
                        </a>
                    </li>

                </ul>
            </div>

            <p class="mangement-para">
                ${element.bio}
            </p>
        </div>
    </div>

</div>`;
  }

  document.getElementById("row-one-management").innerHTML = managementData
    .slice(0, 1)
    .map(generateTeamBox)
    .join("");

  document.getElementById("row-two-management").innerHTML = managementData
    .slice(1)
    .map(generateTeamBox)
    .join("");
});
