// Mobile Navigation
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

      
// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
            burger.classList.remove('toggle');
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Data
const projects = [
    {
        title: "E-commerce Website",
        description: "A fully responsive e-commerce platform with cart functionality and payment integration.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
        image: "project1.jpg",
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Task Management App",
        description: "A productivity app to help users organize their tasks and increase efficiency.",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "project2.jpg",
        liveLink: "#",
        codeLink: "#"
    },
    {
        title: "Weather Application",
        description: "Real-time weather information with 5-day forecast using weather API.",
        technologies: ["JavaScript", "API Integration"],
        image: "project3.jpg",
        liveLink: "#",
        codeLink: "#"
    }
];

// Display Projects
const projectsContainer = document.querySelector('.projects-container');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    
    projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-img">
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
            <div class="project-links">
                <a href="${project.liveLink}" target="_blank">Live Demo</a>
                <a href="${project.codeLink}" target="_blank">View Code</a>
            </div>
        </div>
    `;
    
    projectsContainer.appendChild(projectCard);
});

// Form Submission
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = contactForm.elements[0].value;
    const email = contactForm.elements[1].value;
    const message = contactForm.elements[2].value;
    
    // Here you would typically send the form data to a server
    console.log({ name, email, message });
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Scroll Reveal Animation
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.skill, .project-card, .about-content, .hero-content, .hero-image');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Initialize scroll reveal on page load
reveal();