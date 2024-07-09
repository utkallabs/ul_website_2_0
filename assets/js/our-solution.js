import {data} from "./our-solutions-data.js"

document.getElementById("solutions-list").innerHTML = data
    .map(
        (eachCard) =>
            `<div class="card-wrapper col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30" data-technology="${eachCard.title, eachCard.techStack}">
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