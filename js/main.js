const hamburger = document.getElementById("hamburger");
const closeButton = document.getElementById("close");
const sidebarContainer = document.getElementById("sidebar-container");
const sidebar = document.getElementById("sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar__link");

const showSidebar = () => {
    sidebarContainer.style.display = "block";
    setTimeout(() => {
        sidebar.classList.add("is-open");
    }, 0);
};

const hideSidebar = () => {
    sidebar.classList.remove("is-open");
    setTimeout(() => {
        sidebarContainer.style.display = "none";
    }, 200);
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

sidebarContainer.addEventListener("click", (e) => {
    if (e.target.id === "sidebar-container") {
        hideSidebar();
    }
});

window.addEventListener("resize", () => {
    if (this.innerWidth >= 1100) {
        hideSidebar();
    }
});
