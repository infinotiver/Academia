// JavaScript for handling active links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar a");

    function changeActiveLink() {
        const scrollPosition = window.scrollY;

        navLinks.forEach((link) => {
            const sectionId = link.getAttribute("href").substring(1);
            const section = document.getElementById(sectionId);

            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                navLinks.forEach((otherLink) => otherLink.classList.remove("active"));
                link.classList.add("active");
            }
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.forEach((otherLink) => otherLink.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Update active link on scroll
    window.addEventListener("scroll", changeActiveLink);
});