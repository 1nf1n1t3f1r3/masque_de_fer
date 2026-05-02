// 1. Load the header into the page
fetch("partials/header.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("header").innerHTML = data;

    // 2. AFTER header exists → attach JS behavior

    const toggle = document.querySelector(".menu_toggle");
    const menu = document.querySelector(".nav_menu");

    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
      });
    }

    // Optional: dropdown click behavior (better for mobile)
    document.querySelectorAll(".dropdown > a").forEach((link) => {
      link.addEventListener("click", (e) => {
        const submenu = link.nextElementSibling;

        if (submenu) {
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
