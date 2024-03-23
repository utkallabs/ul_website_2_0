const data = [
    {
        title: "Experts Marketplace",
        domain: "#Marketplace #Freelance",
        descprition:
            "A dynamic platform designed to bridge the gap between professional expertise and project needs.",
        detailLink: "",
        techStack: "Angular, NodeJS, MySQL"
    },
    {
        title: "Employee Management System",
        domain: "#HR #HRMS",
        descprition:
            "Employee Management System (EMS) is designed to streamline your HR processes and empower your workforce management.",
        detailLink: "",
        techStack: "DotNetCore, SQL Server"
    },
    {
        title: "Project Management",
        domain: "#PM #Project",
        descprition:
            "Effective project management via Planning, Execution, Monitoring & Collaboration and options for ROI Optimization & Risk Mitigation.",
        detailLink: "",
        techStack: "NodeJS, React, MySQL, Mongo"
    },
    {
        title: "eLearning",
        domain: "#Education",
        descprition:
            "An interactive and personalized learning experiences, with a vast library of courses across diverse subjects for learners of all ages.",
        detailLink: "",
        techStack: "NodeJS, React, BlueButton"
    },
    {
        title: "Recommendation Engine",
        domain: "#AI #MachineLearning",
        descprition:
            "A vital tool for enhancing user engagement and satisfaction across digital platforms. Leveraging OpenAI’s powerful language models, such as GPT-3 and its successors",
        detailLink: "",
        techStack: "OpenAI, ChatGPT, NodeJS, React"
    },
    {
        title: "Virtual Interior Designing",
        domain: "#InteriorDesign #Architecture",
        descprition:
            "Loaded with 1000s of customizations and personalizations, create futuristic interior designs at your finger-tips",
        detailLink: "",
        techStack: "PHP, Wordpress, VueJS"
    },
];

document.getElementById("solutions-list").innerHTML = data
    .map(
        (eachCard) =>
            `<div class="eachCard">
<div class="cardContent">
<div class="cardInfo">
    <h3 class="cardTitle">${eachCard.title}</h3>
<span class="cardSubTitle">${eachCard.domain}</span>
<p class="cardText">${eachCard.descprition}</p>
<span class="cardFooter">${eachCard.techStack}</span>
</div>
</div>
<div class="userActions">
<button class="btn-primary">
    <a href="${eachCard.detailLink}" target="_blank" rel="noopener noreferrer">DETAILS</a>
    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right"
        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
    </svg>
</button>
</div>
</div>`
    )
    .join("");