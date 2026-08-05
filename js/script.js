(function () {
"use strict";


window.addEventListener(
    "error",
    function(event){

        console.error(
            "Application Error:",
            event.message
        );

    }
);
  // Elements
  const text = document.querySelector("main p");
  const input = document.querySelector("#locationInput");
  const header = document.querySelector("header");
  const logo = document.querySelector(".logo img");

  // Rate limiting (anti-spam)
  const RATE_LIMIT_MS = 3000;
 let lastActionTime = performance.now();

 function sanitizeInput(value) {

    if(typeof value !== "string"){
        return "";
    }

    return value
        .replace(/[<>]/g,"")
        .replace(/\s+/g," ")
        .trim();

}

  // Regex validation for location input
  const LOCATION_REGEX = /^[\w\s.,'-]+$/u;

  // Safe class helpers
  function addClassSafe(el, cls) {
    if (!el) return;
    if (!el.classList.contains(cls)) el.classList.add(cls);
  }

  // Page Load Animation
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (text) text.classList.add("fadeUp");
    }, 300);

    setTimeout(() => {
      if (input) input.classList.add("fadeUp");
    }, 700);
  });

  // Placeholder Animation
  const placeholders = [
    "Search for restaurant...",
    "Enter your delivery location...",
    "Search 'Pizza'...",
    "Search 'Burger'...",
    "Search 'Biryani'...",
    "Search 'Ice Cream'..."
  ];
  let idx = 0;

  if (input) {
    setInterval(() => {
      input.placeholder = placeholders[idx];
      idx = (idx + 1) % placeholders.length;
    }, 2500);
  }

  // Enter Key with validation
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const value = sanitizeInput(input.value);

        if (!value) {
          console.warn("Location required");
          return;
        }

        if (!LOCATION_REGEX.test(value)) {
         console.warn("Location required");
          return;
        }

        const now = performance.now();
        if (now - lastActionTime < RATE_LIMIT_MS) {
          console.warn("Action rate-limited. Please wait a moment.");
          return;
        }
        lastActionTime = now;

        console.log(
    "Searching restaurants near:",
    value
);
      }
    });
  }

  // Navbar background on scroll
  window.addEventListener("scroll", () => {
    if (!header) return;
    if (window.scrollY > 20) {
      header.style.background = "rgba(203,32,45,.95)";
      header.style.backdropFilter = "blur(8px)";
      header.style.transition = ".4s";
    } else {
      header.style.background = "transparent";
      header.style.backdropFilter = "";
      header.style.transition = "";
    }
  });

  // Logo click animation
  if (logo) {
    logo.addEventListener("click", () => {
      logo.animate(
        [
          { transform: "rotate(0deg) scale(1)" },
          { transform: "rotate(10deg) scale(1.1)" },
          { transform: "rotate(-10deg) scale(1.1)" },
          { transform: "rotate(0deg) scale(1)" }
        ],
        { duration: 700 }
      );
    });
  }

  // Hover effect for links
  document.querySelectorAll("a").forEach((link) => {
    if (!link) return;
    link.addEventListener("mouseenter", () => {
      link.style.transform = "translateY(-3px)";
    });
    link.addEventListener("mouseleave", () => {
      link.style.transform = "translateY(0px)";
    });
  });

  // Input glow effect
  if (input) {
    input.addEventListener("focus", () => {
      input.style.boxShadow = "0 0 30px rgba(255,255,255,.55)";
    });
    input.addEventListener("blur", () => {
      input.style.boxShadow = "0 15px 35px rgba(0,0,0,.18)";
    });
  }

  // Scroll Reveal Animation
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".collections,.about,.reviews").forEach((section) => {
    observer.observe(section);
  });

  // 3D card tilt effect
  document.querySelectorAll(".card").forEach((card) => {
    if (!card) return;
    card.addEventListener("mousemove", (e) => {
      const x = e.offsetX;
      const y = e.offsetY;
      const rect = card.getBoundingClientRect();
      const rotateX = (y - rect.height / 2) / 10;
      const rotateY = (rect.width / 2 - x) / 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  });

  // Profile panel
  window.addEventListener("DOMContentLoaded", () => {
    const profileBtn = document.getElementById("profileBtn");
    const profilePanel = document.getElementById("profilePanel");
    const closeBtn = document.getElementById("closeBtn");

    if (profileBtn && profilePanel && closeBtn) {
      profileBtn.addEventListener(
"keydown",
(e)=>{

    if(e.key==="Enter"){

        profilePanel.classList.add("active");

    }

});
      closeBtn.addEventListener("click", () => {
        profilePanel.classList.remove("active");
      });
    }
  });
})();