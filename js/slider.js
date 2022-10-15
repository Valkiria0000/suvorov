document.addEventListener("DOMContentLoaded", slider);

function slider() {
  const windowInnerWidth = window.innerWidth;
  console.log(windowInnerWidth);
  if (windowInnerWidth < 830) {
    const staticBlock = document.querySelector(".section-gallary__container");
    const slider = document.querySelector(".swiper");
    slider.classList.remove("is-none");
    staticBlock.classList.add("is-none");
  }
}
slider();
