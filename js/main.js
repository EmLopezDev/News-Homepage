const hamburger = document.getElementById("hamburger");
const closeButton = document.getElementById("close");
const sidebar = document.getElementById("sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar__link");

const showSidebar = () => {
    sidebar.style.display = "block";
};

const hideSidebar = () => {
    sidebar.style.display = "none";
};

const offsetNav = (evt) => {
    evt.preventDefault();
    const targetId = evt.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        const headerHeight = document.getElementById("header").offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
            top: targetPosition,
        });
    }

    hideSidebar();
};

hamburger.addEventListener("click", showSidebar);

closeButton.addEventListener("click", hideSidebar);

sidebarLinks.forEach((link) => {
    link.addEventListener("click", offsetNav);
});

window.addEventListener("resize", () => {
    if (this.innerWidth >= 1100) {
        hideSidebar();
    }
});
