const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (this.scrollY > 0) {
    navbar.classList.remove("py-4");
    navbar.classList.add("shadow", "py-3");
  } else {
    navbar.classList.add("py-4");
    navbar.classList.remove("shadow", "py-3");
  }
});

// AOS
AOS.init({
  duration: 700,
});

document.addEventListener("click", function (event) {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (
    !navbarCollapse.contains(event.target) &&
    !navbarToggler.contains(event.target)
  ) {
    const isExpanded = navbarToggler.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      navbarToggler.click();
    }
  }
});
