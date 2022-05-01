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

const projectModals = document.querySelectorAll("#projects .content .modal");

for (const projectModal of projectModals) {
    const buttonLeft = projectModal.querySelector(".btn-left");
    const buttonRight = projectModal.querySelector(".btn-right");
    const images = projectModal.querySelectorAll(".screenshots img");
    const navText = projectModal.querySelector("p");

    let currentValue = navText != null ? navText.innerHTML.toString().split('/')[0] : 0;

    if (buttonLeft != null) {
        buttonLeft.addEventListener('click', function(event) {
            currentValue--;
            if (currentValue < 1) currentValue = images.length;
            navText.innerHTML = currentValue + "/" + images.length;

            removeActiveImage(images);
            activateImage(images, currentValue - 1);
        });
    }

    if (buttonRight != null) {
        buttonRight.addEventListener('click', function(event) {
            currentValue++;
            if (currentValue > images.length) currentValue = 1;
            navText.innerHTML = currentValue + "/" + images.length;

            removeActiveImage(images);
            activateImage(images, currentValue - 1);
        });
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

window.addEventListener('resize', function(event) {
    if (window.innerWidth > 780) {
        mainNavCheckBox.checked = false;
    }
}, true);

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