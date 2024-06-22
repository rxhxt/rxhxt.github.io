// // scripts.js

// // Smooth scroll for navigation links
// $(document).ready(function () {
//     $("nav a").click(function (event) {
//         event.preventDefault();
//         $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 1000);
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav-link');
    var sections = document.querySelectorAll('.section');
    console.log(links)
    console.log(sections)
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
        });
    });

    // Show the home section by default
    showSection('home');
});
