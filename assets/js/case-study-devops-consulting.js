import { data } from "./case-studies-data.js"

if (data.filter(d => ((d.techStack.indexOf("MySQL") != -1) || (d.techStack.indexOf("GraphQL") != -1) || (d.techStack.indexOf("React Native") != -1))).length > 1) {
    document.getElementById("case-studies").innerHTML = data.filter(d => ((d.techStack.indexOf("Angular") != -1) || (d.techStack.indexOf("GraphQL") != -1) || (d.techStack.indexOf("React Native") != -1)))
    .map(
        (eachCard) =>
            `<div class="card-wrapper col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-30"
                     data-technology="${eachCard.techStack}">
                    <div class="casestudy-item card h-100">
                        <div class="casestudy_img">
                            <img src="${eachCard.imageLink}" alt="project-image">
                        </div>

                        <div class="card-body d-flex flex-column bd-highlight p-0">
                            <div class="bd-highligh">
                            <h6 class="title mt-4"><a href="#">${eachCard.title}</a></h6>
                            <p class="lh-base">${eachCard.techStack}</p>
                            </div>
                            <div class="casestudy-btn d-flex mt-auto pt-3 bd-highligh">
                                <a href="${eachCard.detailLink}" target=”_blank”
                                    class="custom-btn-casestudy">Read More </a>
                            </div>
                        </div>
                    </div>
                </div>`
    ).join("");
}
else {
    document.getElementById("solutions-lists").innerHTML = ` <div class="shadow py-5">
        <div class=" justify-content-center d-flex"><img src="assets/images/service/no-result.gif"></div>
        <div class=" justify-content-center d-flex">
            <h3>We’re updating!</h3>
        </div>
        <div class=" justify-content-center d-flex">
        <svg height="10" width="200">
            <line x1="0" y1="10" x2="250" y2="10" style="stroke:#e0e7f9;stroke-width:12" />
            <line x1="0" y1="10" x2="130" y2="10" style="stroke:#008283;stroke-width:12" />
            Sorry, your browser does not support inline SVG.
          </svg></div>
    </div>`;
}