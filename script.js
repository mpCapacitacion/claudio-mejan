document.addEventListener("DOMContentLoaded", () => {

    /* ============================= ELEMENTOS ============================= */

    const bio = document.querySelector("#profile-bio");
    const readMoreButton = document.querySelector("#read-more");

    if (!bio || !readMoreButton) return;

    const buttonText = readMoreButton.querySelector("span:first-child");
    const buttonArrow = readMoreButton.querySelector(
        ".profile__read-more-arrow"
    );

    const mobileBreakpoint = 700;


    /* ============================= EXPANDIR DESCRIPCIÓN ============================= */

    const expandBio = () => {

        bio.classList.add("profile__bio--expanded");

        readMoreButton.setAttribute(
            "aria-expanded",
            "true"
        );

        if (buttonText) {
            buttonText.textContent = "Read less";
        }

        if (buttonArrow) {
            buttonArrow.textContent = "↑";
        }
    };


    /* ============================= COLAPSO DE LA DESCRIPCIÓN ============================= */

    const collapseBio = () => {

        bio.classList.remove("profile__bio--expanded");

        readMoreButton.setAttribute(
            "aria-expanded",
            "false"
        );

        if (buttonText) {
            buttonText.textContent = "Read more";
        }

        if (buttonArrow) {
            buttonArrow.textContent = "↓";
        }
    };


    /* ============================= TOGGLE DESCRIPCIÓN ============================= */

    readMoreButton.addEventListener("click", () => {

        const isExpanded =
            bio.classList.contains(
                "profile__bio--expanded"
            );

        if (isExpanded) {
            collapseBio();
        } else {
            expandBio();
        }

    });


    /* ============================= CONTROL RESPONSIVE ============================= */

    const handleResponsiveBio = () => {

        if (window.innerWidth > mobileBreakpoint) {

            bio.classList.remove(
                "profile__bio--expanded"
            );

            readMoreButton.setAttribute(
                "aria-expanded",
                "false"
            );

            if (buttonText) {
                buttonText.textContent = "Read more";
            }

            if (buttonArrow) {
                buttonArrow.textContent = "↓";
            }
        }

    };


    /* ============================= WINDOW RESIZE ============================= */

    let resizeTimer;

    window.addEventListener("resize", () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(
            handleResponsiveBio,
            150
        );

    });


    /* ============================= CHECK INICIAL ============================= */

    handleResponsiveBio();

});