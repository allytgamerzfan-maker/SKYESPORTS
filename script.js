/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 700);

    }, 900);

});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".game-card, .tournament-card, .social-card, .about-content, .about-visual"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   CARD STAGGER EFFECT
========================================= */

document.querySelectorAll(".game-card").forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${index * 0.12}s`;

    }
);


document.querySelectorAll(".tournament-card").forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${index * 0.12}s`;

    }
);


document.querySelectorAll(".social-card").forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${index * 0.1}s`;

    }
);


/* =========================================
   TOURNAMENT BUTTON
========================================= */

document.querySelectorAll(".tournament-btn").forEach(
    button => {

        button.addEventListener("click", () => {

            alert(
                "Tournament registration will be available soon!"
            );

        });

    }
);


/* =========================================
   MOUSE GLOW EFFECT
========================================= */

document.addEventListener("mousemove", (event) => {

    const x = event.clientX;
    const y = event.clientY;

    document.body.style.setProperty(
        "--mouse-x",
        `${x}px`
    );

    document.body.style.setProperty(
        "--mouse-y",
        `${y}px`
    );

});


/* =========================================
   CONSOLE
========================================= */

console.log(
    "%c SKY ESPORTS ",
    "background:#ff003c;color:#fff;font-size:20px;font-weight:bold;padding:8px;"
);

console.log(
    "Welcome to the next level."
);
