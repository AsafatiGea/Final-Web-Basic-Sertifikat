// Mobile menu toggle
(function () {
  "use strict";

  // Create hamburger button
  const hamburger = document.createElement("button");
  hamburger.className = "hamburger";
  hamburger.innerHTML = "☰";
  hamburger.setAttribute("aria-label", "Toggle menu");

  // Insert after desktop nav (first nav)
  const firstNav = document.querySelector("nav");
  if (firstNav) {
    firstNav.parentNode.insertBefore(hamburger, firstNav.nextSibling);
  }

  const deviceNav = document.querySelector(".device");

  hamburger.addEventListener("click", function () {
    if (deviceNav) {
      deviceNav.classList.toggle("active");
      hamburger.classList.toggle("active");
    }
  });

  // Close menu on resize to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      deviceNav.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  // Close menu on link click (mobile)
  document.addEventListener("click", function (e) {
    if (e.target.matches(".device a")) {
      deviceNav.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
})();
