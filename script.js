// JavaScript to add 'active' class to the navbar link based on the current scroll position
document.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach((section, index) => {
        var top = window.scrollY;
        var offset = section.offsetTop - 150; // Adjust as necessary for your layout
        var height = section.offsetHeight;
        var id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
});
