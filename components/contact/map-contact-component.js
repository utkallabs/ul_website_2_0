document.addEventListener("DOMContentLoaded", function () {
  // contact data data
  let googleMapData = [
    {
      googleUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d555.9790203697055!2d85.82373800668279!3d20.37603938354237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190946c70fd32b%3A0x1b5d2634b43cda89!2sUtkal%20Labs%20Private%20Limited!5e0!3m2!1sen!2sin!4v1679881048280!5m2!1sen!2sin",
    },
    {
      googleUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.2956965550634!2d-118.46021818544114!3d34.164356819262245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c297bc74238a83%3A0x51b5ee1cf7581a68!2sUnited%20States%20Postal%20Service!5e0!3m2!1sen!2sin!4v1679881270078!5m2!1sen!2sin",
    },
    {
      googleUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28846.05037320919!2d55.375672140185266!3d25.345957549652923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bd1eaaaaaab%3A0xa22cfbbb206a448b!2sUtkal%20Labs%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1679881521010!5m2!1sen!2sin",
    },
    {
      googleUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28846.05037320919!2d55.375672140185266!3d25.345957549652923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5bd1eaaaaaab%3A0xa22cfbbb206a448b!2sUtkal%20Labs%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1679881521010!5m2!1sen!2sin",
    },
  ];

  function generateAddressContact(element) {
    return `<div class="col-xl-3 col-lg-3 col-md-6">

    <div class="map ">
        <iframe
            src="${element.googleUrl}"
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

        </iframe>

    </div>
</div>`;
  }

  document.getElementById("map-contact-id").innerHTML = googleMapData
    .map(generateAddressContact)
    .join("");
});
