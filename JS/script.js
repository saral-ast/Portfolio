// active navLinks using window.scroll and offsetTOp

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 80) {
            currentSection =  section.getAttribute("id");
        }
        // console.log(currentSection);
    });

    navLinks.forEach((link) => {
        // console.log(link.classList);
        link.classList.remove("active");
        if (link.classList.contains(currentSection)) {
            // console.log(link.classList);
            link.classList.add("active");
        }
    });
};

