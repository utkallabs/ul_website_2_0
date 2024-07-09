import { data } from "./case-studies-data.js"

document.getElementById("case-studies").innerHTML = data
    .map(
        (eachCard) =>
            `<div class="card-wrapper col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30"
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