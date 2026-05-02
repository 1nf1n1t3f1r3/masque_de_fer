// 1. Load the header into the page
fetch("partials/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // NOW the elements exist in the DOM

    const isMobile = () => window.innerWidth <= 768;

    document.querySelectorAll(".dropdown > a").forEach((link) => {
      link.addEventListener("click", (e) => {
        const submenu = link.nextElementSibling;

        if (isMobile() && submenu) {
          e.preventDefault();
          submenu.classList.toggle("open");
        }
      });
    });
  });

// Load footer
fetch("partials/footer.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;

    // footer-related JS (if any later)
  });

//   Hamburger
// Load header
fetch("partials/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // ✅ NOW the elements exist → attach events

    const toggle = document.querySelector(".menu_toggle");
    const menu = document.querySelector(".nav_menu");

    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
      });
    }
  });
