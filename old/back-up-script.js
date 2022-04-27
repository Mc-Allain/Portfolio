const mainNav = document.getElementById("main-nav");
const navCheckBox = document.getElementById("nav-check-box");
const navLinkItems = document.querySelectorAll(".nav-link-item");

const sections = document.querySelectorAll("section");

// const introSectionDarkMask = document.querySelector("#intro-section .dark-mask");
// const bioSection = document.getElementById("bio-section");
// const skillsSection = document.getElementById("skills-section");

// var isIntroSectionFadedInBlack = false;

window.addEventListener('resize', function(event) {
    if (window.innerWidth > 1010) {
        navCheckBox.checked = false;
        changeMainNavColor();
    }
}, true);

function onScroll() {
    const mainNavActiveLink = document.querySelector(".nav-link-item.active");

    for (const item of navLinkItems) item.classList.remove("active");

    for (const section of sections) {
        const windowHeight = window.innerHeight;
        const sectionId = section.getAttribute("id");
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
    
        if ("#" + sectionId === navLinkItems[0].getAttribute("href")) {
            if (sectionBottom > windowHeight - windowHeight / 3) {
                navLinkItems[0].classList.add("active");

                section.children[0].classList.remove("faded-black");

                sections[1].classList.remove("opacity-1");
                sections[1].classList.add("from-bottom");

                if (!navCheckBox.checked) {
                    mainNav.classList.add("bg-dark-header");
                    mainNav.classList.remove("bg-light");
                }
            }
        }
        if ("#" + sectionId === navLinkItems[1].getAttribute("href")) {
            if (sectionTop < windowHeight - windowHeight / 3 && sectionBottom > windowHeight / 2) {
                navLinkItems[1].classList.add("active");

                section.classList.add("bg-dark");
                section.classList.remove("bg-white");
                section.classList.add("opacity-1");
                section.classList.remove("from-bottom");

                sections[0].children[0].classList.add("faded-black");

                if (!navCheckBox.checked) {
                    mainNav.classList.add("bg-light");
                    mainNav.classList.remove("bg-dark-header");
                }
            }
        }
        if ("#" + sectionId === navLinkItems[2].getAttribute("href")) {
            if (sectionTop < windowHeight / 2 && sectionBottom > windowHeight / 2) {
                navLinkItems[2].classList.add("active");

                section.classList.add("bg-white");
                section.classList.remove("bg-dark");

                sections[1].classList.add("bg-light");
                sections[1].classList.remove("bg-dark");

                if (!navCheckBox.checked) {
                    mainNav.classList.add("bg-dark-header");
                    mainNav.classList.remove("bg-light");
                }
            }
        }
        if ("#" + sectionId === navLinkItems[3].getAttribute("href")) {
            if (sectionTop < windowHeight / 2 && sectionBottom > windowHeight / 2) {
                navLinkItems[3].classList.add("active");

                sections[2].classList.add("bg-dark");
                sections[2].classList.remove("bg-white");

                if (!navCheckBox.checked) {
                    mainNav.classList.add("bg-light");
                    mainNav.classList.remove("bg-dark-header");
                }
            }
        }
    }
}

window.addEventListener("scroll", onScroll);

onScroll();

function changeMainNavColor() {
    if (navCheckBox.checked) {
        mainNav.classList.add("bg-light");
        mainNav.classList.remove("bg-dark-header");
    } else {
        mainNav.classList.remove("bg-light");
        mainNav.classList.add("bg-dark-header");
        onScroll();
    }
}

for (const selectedItem of navLinkItems)
    selectedItem.addEventListener('click', function(event) {
        for (const item of navLinkItems) item.classList.remove("active");
        selectedItem.classList.add("active");
    });

navCheckBox.addEventListener("change", changeMainNavColor);