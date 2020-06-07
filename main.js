
window.addEventListener("load", () => {
    
    fetch("./projects.json").then(res => res.json()).then(projects => populateProjects(projects));

});

function populateProjects(projects) {

    let projectContainer = document.querySelector(".project-container");
    for(let project of projects) {

        let projectDiv = document.createElement("div");
        projectDiv.className = "project";
        
        let textDiv = document.createElement("div");
        projectDiv.appendChild(textDiv);

        let projectTitle = document.createElement("h3");
        projectTitle.appendChild(document.createTextNode(project.title));
        textDiv.appendChild(projectTitle);

        let projectDescription = document.createElement("p");
        projectDescription.appendChild(document.createTextNode(project.description));
        textDiv.appendChild(projectDescription);

        let projectLink = document.createElement("a");
        projectLink.href = project["link-to"];
        projectLink.target = "_blank";
        projectLink.appendChild(document.createTextNode("Click to view"));
        textDiv.appendChild(projectLink);

        let projectImage = document.createElement("img");
        projectImage.src = project.image;
        projectImage.alt = project["image-alt"];
        projectDiv.appendChild(projectImage);

        projectContainer.appendChild(projectDiv);

    }

}

function toggleNav() {

    let nav = document.querySelector(".nav");
    if(nav.classList.contains("open")) {
    
        nav.classList.remove("open");
    
    } else {
        
        nav.classList.add("open");

    }

}