function scrollLink() {
  const menuLinks = document.querySelectorAll(
    ".section-right__link[data-goto]"
  );

  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onNavClick);
  });

  function onNavClick(e) {
    const navLink = e.target;

    if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
      const goToPage = document.querySelector(navLink.dataset.goto);
      const goToPageValue = goToPage.getBoundingClientRect().top + scrollY;

      window.scrollTo({
        top: goToPageValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}
scrollLink();
