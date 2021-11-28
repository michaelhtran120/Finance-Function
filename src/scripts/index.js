import "../styles/index.css";

const navLinks = Array.from(document.getElementsByClassName("nav-link"));

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        link.classList.add("active");
        const oLinks = navLinks.filter((oLink) => oLink !== link);
        oLinks.forEach((oLink) => oLink.classList.remove("active"));
    });
});

const introSection = document.getElementById("introduction");
const definitionSection = document.getElementById("definition");

console.log(introSection);

window.addEventListener("scroll", () => {
    // console.log(window.scrollY);
    if (window.scrollY > 0 && window.scrollY < 300) {
        navLinks.forEach((link) => link.classList.remove("active"));
    } else if (window.scrollY > introSection.offsetTop - 100 && window.scrollY < introSection.scrollHeight) {
        navLinks[0].classList.add("active");
        const oLinks = navLinks.filter((oLink) => oLink !== navLinks[0]);
        oLinks.forEach((oLink) => oLink.classList.remove("active"));
    } else if (window.scrollY > definitionSection.offsetTop - 100 && window.scrollY < definitionSection.offsetTop + definitionSection.scrollHeight) {
        navLinks[1].classList.add("active");
        const oLinks = navLinks.filter((oLink) => oLink !== navLinks[1]);
        oLinks.forEach((oLink) => oLink.classList.remove("active"));
    }
});
