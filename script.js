<script>

/* =====================================================
   SKY ESPORTS - ADVANCED JAVASCRIPT EFFECTS
===================================================== */


/* =========================
   1. MOBILE MENU
========================= */

const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

if (menu && navLinks) {

    menu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });

    });

}


/* =========================
   2. SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================
   3. SCROLL PROGRESS BAR
========================= */

const progressBar = document.createElement("div");

progressBar.id = "scrollProgress";

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "3px";
progressBar.style.width = "0%";
progressBar.style.background = "#ff1e1e";
progressBar.style.boxShadow = "0 0 12px #ff1e1e";
progressBar.style.zIndex = "99999";
progressBar.style.transition = "width .08s linear";

document.body.appendChild(progressBar);


window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";

});


/* =========================
   4. NAVBAR SCROLL EFFECT
========================= */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background = "rgba(3,3,3,.96)";
        header.style.boxShadow =
            "0 5px 30px rgba(255,0,0,.08)";

    } else {

        header.style.background = "rgba(5,5,5,.88)";
        header.style.boxShadow = "none";

    }

});


/* =========================
   5. SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".game-card, .tournament, .social, .about-box, .about-grid, .contact-box, .section-head"
);

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(45px)";
    element.style.transition =
        "opacity .8s ease, transform .8s ease";

});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================
   6. STAGGER CARD ANIMATION
========================= */

const cardGroups = [
    document.querySelectorAll(".game-card"),
    document.querySelectorAll(".tournament"),
    document.querySelectorAll(".social")
];


cardGroups.forEach(group => {

    group.forEach((card, index) => {

        card.style.transitionDelay =
            (index * 0.12) + "s";

    });

});


/* =========================
   7. NUMBER COUNTER
========================= */

const counters = document.querySelectorAll(".stat h3");

const counterObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const original = counter.innerText;

            /*
               Don't animate special values
               like 24/7 or infinity.
            */

            if (!/^\d+\+?$/.test(original)) {
                counterObserver.unobserve(counter);
                return;
            }

            const target =
                parseInt(original.replace("+", ""));

            let current = 0;

            const duration = 1200;
            const stepTime = 30;
            const increment =
                target / (duration / stepTime);

            const timer = setInterval(() => {

                current += increment;

                if (current >= target) {

                    current = target;

                    clearInterval(timer);

                }

                counter.innerText =
                    Math.floor(current) +
                    (original.includes("+") ? "+" : "");

            }, stepTime);

            counterObserver.unobserve(counter);

        });

    },
    {
        threshold: 0.6
    }
);


counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* =========================
   8. MOUSE GLOW EFFECT
========================= */

const mouseGlow = document.createElement("div");

mouseGlow.style.position = "fixed";
mouseGlow.style.width = "250px";
mouseGlow.style.height = "250px";
mouseGlow.style.borderRadius = "50%";
mouseGlow.style.pointerEvents = "none";
mouseGlow.style.zIndex = "0";
mouseGlow.style.background =
    "radial-gradient(circle, rgba(255,0,0,.10), transparent 70%)";
mouseGlow.style.transform =
    "translate(-50%, -50%)";

document.body.appendChild(mouseGlow);


document.addEventListener("mousemove", e => {

    mouseGlow.style.left = e.clientX + "px";
    mouseGlow.style.top = e.clientY + "px";

});


/* =========================
   9. CURSOR TRAIL
========================= */

let trailTimer = 0;

document.addEventListener("mousemove", e => {

    trailTimer++;

    if (trailTimer % 3 !== 0) return;

    const dot = document.createElement("span");

    dot.style.position = "fixed";
    dot.style.left = e.clientX + "px";
    dot.style.top = e.clientY + "px";
    dot.style.width = "5px";
    dot.style.height = "5px";
    dot.style.borderRadius = "50%";
    dot.style.background = "#ff1e1e";
    dot.style.boxShadow = "0 0 10px #ff1e1e";
    dot.style.pointerEvents = "none";
    dot.style.zIndex = "99998";
    dot.style.transform = "translate(-50%, -50%)";
    dot.style.transition =
        "opacity .5s, transform .5s";

    document.body.appendChild(dot);

    requestAnimationFrame(() => {

        dot.style.opacity = "0";
        dot.style.transform =
            "translate(-50%, -50%) scale(0)";

    });

    setTimeout(() => {
        dot.remove();
    }, 550);

});


/* =========================
   10. CARD 3D TILT EFFECT
========================= */

const tiltCards = document.querySelectorAll(
    ".game-card, .tournament, .social"
);


tiltCards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/* =========================
   11. HERO PARALLAX
========================= */

const heroContent =
    document.querySelector(".hero-content");

window.addEventListener("scroll", () => {

    if (!heroContent) return;

    const scroll = window.scrollY;

    if (scroll < window.innerHeight) {

        heroContent.style.transform =
            `translateY(${scroll * 0.15}px)`;

        heroContent.style.opacity =
            Math.max(
                0,
                1 - scroll / 700
            );

    }

});


/* =========================
   12. FLOATING PARTICLES
========================= */

const hero = document.querySelector(".hero");

if (hero) {

    for (let i = 0; i < 20; i++) {

        const particle =
            document.createElement("span");

        particle.style.position = "absolute";
        particle.style.width =
            Math.random() * 3 + 1 + "px";
        particle.style.height =
            particle.style.width;
        particle.style.background =
            "#ff1e1e";
        particle.style.borderRadius = "50%";
        particle.style.left =
            Math.random() * 100 + "%";
        particle.style.top =
            Math.random() * 100 + "%";
        particle.style.opacity =
            Math.random() * .6;
        particle.style.boxShadow =
            "0 0 8px #ff1e1e";
        particle.style.pointerEvents =
            "none";

        const duration =
            Math.random() * 5 + 5;

        particle.style.animation =
            `skyParticle ${duration}s linear infinite`;

        hero.appendChild(particle);

    }

}


/* Particle animation */

const particleStyle =
document.createElement("style");

particleStyle.innerHTML = `

@keyframes skyParticle {

    0% {
        transform: translateY(0) scale(1);
        opacity: 0;
    }

    20% {
        opacity: .7;
    }

    50% {
        transform:
            translateY(-100px)
            scale(1.5);
    }

    100% {
        transform:
            translateY(-220px)
            scale(0);
        opacity: 0;
    }

}

`;

document.head.appendChild(particleStyle);


/* =========================
   13. BACK TO TOP
========================= */

const topButton =
    document.getElementById("top");


if (topButton) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topButton.classList.add("show");

        } else {

            topButton.classList.remove("show");

        }

    });


    topButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================
   14. BUTTON RIPPLE EFFECT
========================= */

document.querySelectorAll(".btn").forEach(button => {

    button.style.position = "relative";
    button.style.overflow = "hidden";

    button.addEventListener("click", function(e) {

        const ripple =
            document.createElement("span");

        const rect =
            this.getBoundingClientRect();

        const size =
            Math.max(
                rect.width,
                rect.height
            );

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";
        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background =
            "rgba(255,255,255,.18)";
        ripple.style.left =
            (e.clientX - rect.left - size / 2) + "px";
        ripple.style.top =
            (e.clientY - rect.top - size / 2) + "px";
        ripple.style.transform =
            "scale(0)";
        ripple.style.pointerEvents =
            "none";

        ripple.style.animation =
            "skyRipple .6s linear";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


/* Ripple CSS */

const rippleStyle =
document.createElement("style");

rippleStyle.innerHTML = `

@keyframes skyRipple {

    to {
        transform: scale(2);
        opacity: 0;
    }

}

`;

document.head.appendChild(rippleStyle);


/* =========================
   15. TYPING EFFECT
========================= */

const typingElement =
document.querySelector(".small-title");


if (typingElement) {

    const text =
        "WELCOME TO SKY ESPORTS";

    let index = 0;

    typingElement.innerText = "";

    function typeText() {

        if (index < text.length) {

            typingElement.innerText +=
                text.charAt(index);

            index++;

            setTimeout(typeText, 70);

        }

    }

    typeText();

}


/* =========================
   16. ESC KEY CLOSE MENU
========================= */

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

    }

});


/* =========================
   17. PAGE LOADING EFFECT
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});


/* =========================
   18. DISABLE CONTEXT MENU
========================= */

/*
   Agar website ko simple protection
   deni ho to ye uncomment kar sakte ho.

   document.addEventListener("contextmenu", e => {
       e.preventDefault();
   });
*/


console.log(
    "%c SKY ESPORTS ",
    "color:#ff1e1e;font-size:25px;font-weight:bold;"
);

console.log(
    "%c Welcome to the battlefield! ",
    "color:white;font-size:14px;"
);

</script>
