document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav-link');
    var sections = document.querySelectorAll('.section');

    function showSection(sectionId) {
        sections.forEach(function(section) {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            links.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
            showSection(this.getAttribute('href').substring(1));
            document.getElementById(this.getAttribute('href').substring(1)).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    var educationButton = document.getElementById('education-btn');
    educationButton.addEventListener('click', function(event) {
        event.preventDefault();
        links.forEach(function(link) {
            link.classList.remove('active');
        });
        document.querySelector('.nav-link[href="#education"]').classList.add('active');
        showSection('education');
    });

    var experienceButton = document.getElementById('experience-btn');
    experienceButton.addEventListener('click', function(event) {
        event.preventDefault();
        links.forEach(function(link) {
            link.classList.remove('active');
        });
        document.querySelector('.nav-link[href="#experience"]').classList.add('active');
        showSection('experience');
    });

    var projectsButton = document.getElementById('projects-btn');
    projectsButton.addEventListener('click', function(event) {
        event.preventDefault();
        links.forEach(function(link) {
            link.classList.remove('active');
        });
        document.querySelector('.nav-link[href="#projects"]').classList.add('active');
        showSection('projects');
    });

    // Show the home section by default
    showSection('home');

    // Timeline items viewport check
    const items = document.querySelectorAll('.timeline-item');

    const isInViewport = (elem) => {
        const bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const checkTimelineItems = () => {
        items.forEach(item => {
            if (isInViewport(item)) {
                item.classList.add('in-view');
                // Add animation class when in view
                item.classList.add('animate__fadeInUp');
            }
        });
    };

    // Using IntersectionObserver for better performance
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                entry.target.classList.add('animate__fadeInUp');
                observer.unobserve(entry.target); // Stop observing once the animation has been applied
            }
        });
    }, { threshold: 0.1 });

    items.forEach(item => {
        observer.observe(item);
    });
});