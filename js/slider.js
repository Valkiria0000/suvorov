document.addEventListener("load", slider);

function slider() {
  const windowInnerWidth = window.innerWidth;

  if (windowInnerWidth < 830) {
    const staticBlock = document.querySelector(".section-gallary__container");
    const slider = document.querySelector(".swiper");
    slider.classList.remove("is-none");
    staticBlock.classList.add("is-none");
  }
}
slider();
