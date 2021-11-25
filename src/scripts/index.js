import "../styles/index.css";

const navLinks = Array.from(document.getElementsByClassName("nav-link"));

console.log(navLinks);

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        link.classList.add("active");
        const oLinks = navLinks.filter((oLink) => oLink !== link);
        oLinks.forEach((oLink) => oLink.classList.remove("active"));
    });
});
