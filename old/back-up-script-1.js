const mainNavLinksParent = document.querySelector("#main-nav > ul");

const mainNavLink5HTML = "<li><a href='#experiences'>Experiences</a></li>"
const mainNavLink6HTML = "<li><a href='#awards'>Awards</a></li>"
const mainNavLink7HTML = "<li><a href='#profiles'>Profiles</a></li>"
const mainNavLink8HTML = "<li><a href='#testimonials'>Testimonials</a></li>"

const mainNavMoreLinkHTML =
"<li class='more-nav-link'>" +
"<a>More" +
    "<i class='material-icons' style='margin-left: 4px;'>" +
        "expand_more" +
    "</i>" +
"</a>" +
"<ul>" +
"</ul>" +
"</li>"

var currentWindowInnerWidth = window.innerWidth;

function initNav(state) {
    var newWindowInnerWidth = window.innerWidth;

    var mainNavMoreLink = document.querySelector(".more-nav-link");

    if ((currentWindowInnerWidth > 780 || state === true) && newWindowInnerWidth < 780) {
        if (mainNavMoreLink != null) mainNavMoreLink.remove();

        removeMainNavLink("#experiences");
        removeMainNavLink("#awards");
        removeMainNavLink("#profiles");
        removeMainNavLink("#testimonials");

        mainNavLinksParent.innerHTML += mainNavLink5HTML + mainNavLink6HTML 
        + mainNavLink7HTML + mainNavLink8HTML;
    } else if ((currentWindowInnerWidth > 1030 || state === true) && newWindowInnerWidth < 1030) {
        if (mainNavMoreLink != null) mainNavMoreLink.remove();
        mainNavLinksParent.innerHTML += mainNavMoreLinkHTML;

        removeMainNavLink("#experiences");
        removeMainNavLink("#awards");
        removeMainNavLink("#profiles");
        removeMainNavLink("#testimonials");

        mainNavMoreLink = document.querySelector(".more-nav-link");
        mainNavMoreLink.children[1].innerHTML += mainNavLink5HTML + mainNavLink6HTML 
        + mainNavLink7HTML + mainNavLink8HTML;
    } else if ((currentWindowInnerWidth > 1180 || state === true) && newWindowInnerWidth < 1180) {
       mainNavLinksParent.innerHTML += mainNavMoreLinkHTML;

       removeMainNavLink("#profiles");
       removeMainNavLink("#testimonials");

       mainNavMoreLink = document.querySelector(".more-nav-link");
       mainNavMoreLink.children[1].innerHTML += mainNavLink7HTML + mainNavLink8HTML;
    }

    if (currentWindowInnerWidth < 1180 && newWindowInnerWidth > 1180) {
        if (mainNavMoreLink != null) mainNavMoreLink.remove();

        removeMainNavLink("#experiences");
        removeMainNavLink("#awards");
        removeMainNavLink("#profiles");
        removeMainNavLink("#testimonials");

        mainNavLinksParent.innerHTML += mainNavLink5HTML + mainNavLink6HTML 
        + mainNavLink7HTML + mainNavLink8HTML;
    } else if (currentWindowInnerWidth < 1030 && newWindowInnerWidth > 1030) {
        if (mainNavMoreLink != null) mainNavMoreLink.remove();

        mainNavLinksParent.innerHTML += mainNavLink5HTML + mainNavLink6HTML + mainNavMoreLinkHTML;
        
        mainNavMoreLink = document.querySelector(".more-nav-link");
        mainNavMoreLink.children[1].innerHTML += mainNavLink7HTML + mainNavLink8HTML;
    } else if (currentWindowInnerWidth < 780 && newWindowInnerWidth > 780) {
        mainNavLinksParent.innerHTML += mainNavMoreLinkHTML;

        removeMainNavLink("#experiences");
        removeMainNavLink("#awards");
        removeMainNavLink("#profiles");
        removeMainNavLink("#testimonials");

        mainNavMoreLink = document.querySelector(".more-nav-link");
        mainNavMoreLink.children[1].innerHTML += mainNavLink5HTML + mainNavLink6HTML 
        + mainNavLink7HTML + mainNavLink8HTML;
    }

    currentWindowInnerWidth = window.innerWidth;
}

function removeMainNavLink(link) {
    for (var i = 0; i < mainNavLinksParent.childElementCount; i++) {
        if (mainNavLinksParent.children[i].children[0].getAttribute("href") === link) {
            mainNavLinksParent.children[i].remove();
        }
    }
}

function removeMainNavMoreLink(link) {
    for (var i = 0; i < mainNavMoreLink.children[1].childElementCount; i++) {
        if (mainNavMoreLink.children[1].children[i].children[0].getAttribute("href") === link) {
            mainNavMoreLink.children[1].children[i].remove();
        }
    }
}

initNav(true);

window.addEventListener('resize', function() {
    initNav(false)
} , true);