import { data } from "./our-solutions-data.js"

if (data.filter(d => ((d.techStack.indexOf("MySQL") != -1) || (d.techStack.indexOf("GraphQL") != -1) || (d.techStack.indexOf("React Native") != -1))).length > 1) {
    document.getElementById("solutions-lists").innerHTML = data.filter(d => ((d.techStack.indexOf("Angular") != -1) || (d.techStack.indexOf("GraphQL") != -1) || (d.techStack.indexOf("React Native") != -1)))
        .map(
            (eachCard) =>
                `<div class="card-wrapper col-xl-3 col-lg-2 col-md-6 col-sm-6 mb-30" data-technology="${eachCard.title, eachCard.techStack}">
                    <div class="card h-100 py-3 shadow border rounded  d-flex">
                        <img src="${eachCard.imageLink}" class="card-img-top px-3" alt="...">
                        <div class="card-body d-flex flex-column bd-highlight">
                            <div class="bd-highligh">
                                <p class="domain m-0 bold-font">${eachCard.domain}</p>
                                <h4 class="card-title text-green d-flex justify-content-start">${eachCard.title}</h4>
                                <p class="card-text">${eachCard.techStack}</p>
                            </div>
                            <div class="d-flex mt-auto bd-highlight pt-2 "><a href="${eachCard.detailLink}"><button type="submit" name="submit" class="btn btn-primary rounded border px-3 py-2 know-more-btn d-flex align-items-center">Know
                                        More <i class="fa fa-arrow-right"></i></button></a></div>
                        </div>
                    </div>
                </div>`
        ).join("");
}
else {
    document.getElementById("solutions-lists").innerHTML = `<div class="shadow py-5">
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
