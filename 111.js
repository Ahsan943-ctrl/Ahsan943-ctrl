// script.js

document.addEventListener('DOMContentLoaded', function() {
    fetchProjects();

    // Show or hide the back-to-top button
    window.addEventListener('scroll', function() {
        const backToTopButton = document.getElementById('back-to-top');
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Scroll to the top when the button is clicked
    document.getElementById('back-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

function fetchProjects() {
    fetch('projects.json')  // Fetch the projects data from a JSON file
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            data.projects.forEach(project => {
                const projectElement = createProjectElement(project);
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error fetching projects:', error));
}

function createProjectElement(project) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    const projectTitle = document.createElement('h3');
    projectTitle.className = 'project__title';
    projectTitle.textContent = project.title;
    projectDiv.appendChild(projectTitle);

    const projectDescription = document.createElement('p');
    projectDescription.className = 'project__description';
    projectDescription.textContent = project.description;
    projectDiv.appendChild(projectDescription);

    return projectDiv;
}
[
    {
        "title": "Project 1",
        "description": "Description for Project 1"
    },
    {
        "title": "Project 2",
        "description": "Description for Project 2"
    },
    {
        "title": "Project 3",
        "description": "Description for Project 3"
    }
]

