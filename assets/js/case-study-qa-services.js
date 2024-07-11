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
    document.getElementById("solutions-lists").innerHTML = `<div class="card-wrapper col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-30" data-technology="None">
                    <div class="card h-100 py-3 shadow border rounded  d-flex">
                        <img src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1720310400&semt=ais_user" class="card-img-top px-3" alt="...">
                        <div class="card-body d-flex flex-column bd-highlight">
                        </div>
                    </div>
                </div>`;
}