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
const frameworkSection = document.getElementById("framework");
const processSection = document.getElementById("process");
const applicationSection = document.getElementById("application");
const takeawaysSection = document.getElementById("takeaways");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0 && window.scrollY < 300) {
        navLinks.forEach((link) => link.classList.remove("active"));
    } else if (window.scrollY > introSection.offsetTop - 100 && window.scrollY < introSection.scrollHeight) {
        navLinks[0].classList.add("active");
        const oLinks = navLinks.filter((oLink) => oLink !== navLinks[0]);
        oLinks.forEach((oLink) => oLink.classList.remove("active"));
    } else if (
        window.scrollY > definitionSection.offsetTop - 100 &&
        window.scrollY < definitionSection.offsetTop + definitionSection.scrollHeight - 200
    ) {
        navLinks[1].classList.add("active");
        const oLinks = navLinks.filter((oLink) => oLink !== navLinks[1]);
        oLinks.forEach((oLink) => oLink.classList.remove("active"));
    } else if (
        window.scrollY > frameworkSection.offsetTop - 150 &&
        window.scrollY < frameworkSection.offsetTop + frameworkSection.scrollHeight - 100
    ) {
        navLinks[2].classList.add("active");
        const oLinks = navLinks.filter((oLink) => oLink !== navLinks[2]);
        oLinks.forEach((oLink) => oLink.classList.remove("active"));
    } else if (window.scrollY > processSection.offsetTop - 250 && window.scrollY < processSection.offsetTop + processSection.scrollHeight - 250) {
        navLinks[3].classList.add("active");
        const oLinks = navLinks.filter((oLink) => oLink !== navLinks[3]);
        oLinks.forEach((oLink) => oLink.classList.remove("active"));
    } else if (
        window.scrollY > applicationSection.offsetTop - 300 &&
        window.scrollY < applicationSection.offsetTop + applicationSection.scrollHeight - 100
    ) {
        navLinks[4].classList.add("active");
        const oLinks = navLinks.filter((oLink) => oLink !== navLinks[4]);
        oLinks.forEach((oLink) => oLink.classList.remove("active"));
    } else if (window.scrollY > takeawaysSection.offsetTop - 400 && window.scrollY < takeawaysSection.offsetTop + takeawaysSection.scrollHeight) {
        navLinks[5].classList.add("active");
        const oLinks = navLinks.filter((oLink) => oLink !== navLinks[5]);
        oLinks.forEach((oLink) => oLink.classList.remove("active"));
    }
});
