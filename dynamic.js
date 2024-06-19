// Projects

let projectsContainer = document.querySelector('#projects-container');
projectData.forEach(function(subProject) {
    let project = `
        <a href="${subProject.link}" target="_blank">
            <div class="card">
                <img src="${subProject.image}" alt="">
                <div class="project-desc">
                    <h3>${subProject.title}</h3>
                    <h4>${subProject.techUsed}</h4>
                </div>
            </div>
        </a>
    `;
    projectsContainer.innerHTML += project;
});

// Skills
/*
<div class="card">
    <div class="title">Frontend</div>
    <h3>HTML</h3>
    <h3 class="basic">CSS</h3>
    <h3 class="imp">JavaScript</h3>
    <h3>Bootstrap</h3>
    <h3 class="vimp">React.js</h3>
</div>
*/

let skillsContainer = document.querySelector('#skills-cards-container');
skillsData.forEach(function(skill) {
    let card = `
        <div class="card">
            <div class="title">${skill.title}</div>
            ${skill.skills.map(function(subSkill) {
                return `<h3>${subSkill}</h3>`;
            }).join('')}
        </div>
    `;
    skillsContainer.innerHTML += card;
});
