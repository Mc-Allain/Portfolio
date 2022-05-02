const body = document.querySelector("body");

const mainNavCheckBox = document.getElementById("main-nav-check-box");
const mainNavItems = document.querySelectorAll("#main-nav > ul > li");

const sections = document.querySelectorAll("section");

const introDarkMask = document.querySelector("#intro > div");
const introProfileImageLayout = document.querySelector("#intro .profile-image-layout");
const introCaption = document.querySelector("#intro .caption");

const skillCheckButton = document.getElementById("skill-view-more-check-box");
const projectCheckButton = document.getElementById("project-view-more-check-box");

const projectLinks = document.querySelectorAll("#projects .content a");
const projectModalCloseLinks = document.querySelectorAll("#projects .content .close");

const projectLinksValue = ["#basic-e-commerce", "#computerized-voting-system", "#payroll-system", "#iwas-corona"];

const projectModals = document.querySelectorAll("#projects .modal");

for (const projectModal of projectModals) {
    const screenshotLists = projectModal.querySelectorAll("ul");

    for (const screenshotList of screenshotLists) {
        const viewTypeButtons = screenshotList.querySelectorAll("div p");
        
        for (const viewTypeButton of viewTypeButtons) {
            viewTypeButton.addEventListener('click', function(event) {
                if (viewTypeButton.getAttribute("class") !== "selected") {
                    for (const viewTypeButton of viewTypeButtons) {
                        viewTypeButton.classList.remove("selected");
                    }
                    viewTypeButton.classList.add("selected");
        
                    if (viewTypeButton.innerHTML === "LIST") {
                        screenshotList.classList.remove("grid");
                    } else if (viewTypeButton.innerHTML === "GRID") {
                        screenshotList.classList.add("grid");
                    }
                }
            });
        }
    }
}

function removeActiveImage(images) {
    for (const image of images) {
        image.classList.remove("active");
    }
}

function activateImage(images, index) {
    images[index].classList.add("active");
}

window.addEventListener('resize', resize, true);

function resize() {
    if (window.innerWidth > 780) {
        mainNavCheckBox.checked = false;
    } 

    for (const projectModal of projectModals) {
        const screenshotLists = projectModal.querySelectorAll("ul");

        for (const screenshotList of screenshotLists) {
            const viewTypeButtonsPanel = screenshotList.querySelector("div");
            const viewTypeButtons = screenshotList.querySelectorAll("div p");

            if (window.innerWidth > 780) {
                viewTypeButtonsPanel.classList.remove("d-none");
        
                for (const viewTypeButton of viewTypeButtons) {                    
                    if (viewTypeButton.innerHTML === "GRID" && viewTypeButton.getAttribute("class") === "selected") {
                        screenshotList.classList.add("grid");
                    }
                }
            } else {
                viewTypeButtonsPanel.classList.add("d-none");
                screenshotList.classList.remove("grid");
            }
        }
    }
}

resize();

if (window.innerWidth <= 780) {
    for (const mainNavItem of mainNavItems) {
        mainNavItem.addEventListener('click', function(event) {
            mainNavCheckBox.checked = false;
        });
    }
}

skillCheckButton.addEventListener('change', function(event) {
    onScroll();
});

projectCheckButton.addEventListener('change', function(event) {
    onScroll();
});

function onScroll() {
    for (const section of sections) {
        const windowHeight = window.innerHeight;
        const sectionId = section.getAttribute("id");
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionId === "intro") {
            if (sectionBottom < windowHeight - 256) {
                introDarkMask.classList.remove("dark-mask");
                introDarkMask.classList.add("bg-dark");
                introProfileImageLayout.classList.add("opacity-0");
                introCaption.classList.add("opacity-0");
            } else {
                introDarkMask.classList.remove("bg-dark");
                introDarkMask.classList.add("dark-mask");
                introProfileImageLayout.classList.remove("opacity-0");
                introCaption.classList.remove("opacity-0");
            }
        }

        if (sectionId === "bio") {
            if (sectionTop < windowHeight - 256) {
                section.classList.add("show");
            } else {
                section.classList.remove("show");
            }
        }

        if (sectionId === "skills") {
            if (sectionTop < windowHeight - 256) {
                section.classList.add("show");
            } else {
                section.classList.remove("show");
            }
        }

        if (sectionId === "projects") {
            if (sectionTop < windowHeight - 256) {
                section.classList.add("show");
            } else {
                section.classList.remove("show");
            }
        }

        if (sectionId === "education") {
            if (sectionTop < windowHeight - 256) {
                section.classList.add("show");
            } else {
                section.classList.remove("show");
            }
        }

        if (sectionId === "experience") {
            if (sectionTop < windowHeight - 256) {
                section.classList.add("show");
            } else {
                section.classList.remove("show");
            }
        }

        if (sectionId === "awards") {
            if (sectionTop < windowHeight - 256) {
                section.classList.add("show");
            } else {
                section.classList.remove("show");
            }
        }

        if (sectionId === "contact") {
            if (sectionTop < windowHeight - 256) {
                section.classList.add("show");
            } else {
                section.classList.remove("show");
            }
        }
    }
}

window.addEventListener("scroll", onScroll);

if (projectLinksValue.includes("#" + window.location.href.toString().split('#')[1])) {
    body.classList.add("modal-open");
}

for (const projectLink of projectLinks) {
    if (projectLinksValue.includes(projectLink.getAttribute("href"))) {
        projectLink.addEventListener('click', function(event) {
            body.classList.add("modal-open");
        });
    }
}

for (const projectModalCloseLink of projectModalCloseLinks) {
    projectModalCloseLink.addEventListener('click', function(event) {
        body.classList.remove("modal-open");
    });
}