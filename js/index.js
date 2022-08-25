const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.2,
  spaceBetween: 10,
  navigation: {
    nextEl: ".arrow_right",
    prevEl: ".arrow_left",
  },

  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2.2,
      spaceBetween: 32,
    },
  },
});

const range = document.querySelector(".range");
const thumb = range.querySelector("span");

const SLIDES_LENGTH = swiper.loopedSlides;
const RANGE_WIDTH = range.clientWidth;
const step = RANGE_WIDTH / SLIDES_LENGTH;

swiper.on("slideChange", (swiper) => {
  const index = swiper.realIndex;
  thumb.style.width = `${step}px`;
  thumb.style.left = `${index * step}px`;
  console.log(swiper);
});

const accordions = document.querySelectorAll(".answers_flex");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", (e) => {
    if (accordion.classList.contains("open")) {
      accordion.classList.remove("open");
      accordion.style.height = `${accordion.getAttribute("data-height")}px`;
    } else {
      accordion.classList.add("open");
      accordion.style.height = `${accordion.getAttribute(
        "data-expanded-height"
      )}px`;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  accordions.forEach((accordion) => {
    const expandedHeight = accordion.clientHeight;
    accordion.setAttribute("data-expanded-height", expandedHeight);
    const height = accordion.getAttribute("data-height");
    accordion.style.height = `${height}px`;
  });
});
