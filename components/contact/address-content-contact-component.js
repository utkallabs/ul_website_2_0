document.addEventListener("DOMContentLoaded", function () {
  // contact data data
  let contactData = [
    {
      country: "India",
      address: "D110, Raghunathpur, Bhubaneswar, Odisha, India - 751024",
      phone: "+91 674 3157623",
    },
    {
      country: "USA",
      address: "PO Box 56903, Sherman Oaks, CA - 91413, USA",
      phone: "+1 32390 05072",
    },
    {
      country: "UAE",
      address: "Flat-805, Al Burda Building, Al Qasimiya, Sharjah, UAE",
      phone: "+97 165377965, +97 1559917573",
    },
    {
      country: "United Kingdom",
      address:
        "13 Lastingham court, 213 laleham road, Staines, TW18 2Nw, United Kingdom",
      phone: "+44 20 3239 5039",
    },
  ];

  function generateAddressContact(element) {
    return `<div class="col-xl-3 col-lg-3 col-md-6 ">
    <div class="contact-widget">
        <h5 class="title">${element.country}</h5>
        <ul class="contact-list">

            <li> <a href="#0">
                    <ul>
                        <li><i class="fa fa-home contact-social"></i></li>
                        <li>${element.address}</li>
                </a>
        </ul>

        </a></li>
        <li><a href="#0"><i class="fa fa-phone contact-social"></i>${element.phone}</a></li>


        </ul>
    </div>
</div>`;
  }

  document.getElementById("add-cont-contact-id").innerHTML = contactData
    .map(generateAddressContact)
    .join("");
});
