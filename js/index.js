const accordions = document.querySelectorAll(".answers_flex");
const ranges = document.querySelectorAll(".range");
const thumbs = document.querySelectorAll(".range span");

AOS.init({
  once: true,
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 5,
  speed: 500,
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

const SLIDES_LENGTH = swiper.loopedSlides;

swiper.on("slideChange", (swiper) => {
  const index = swiper.realIndex;
  ranges.forEach((range, i) => {
    const RANGE_WIDTH = range.clientWidth;
    const step = RANGE_WIDTH / 3;

    thumbs[i].style.width = `${step}px`;
    thumbs[i].style.left = `${index * step}px`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  accordions.forEach((accordion) => {
    const expandedHeight = accordion.offsetHeight;
    const closedHeight = accordion.querySelector("p").offsetHeight;
    console.log({ expandedHeight, closedHeight });
    accordion.setAttribute("data-expanded-height", expandedHeight);
    accordion.setAttribute("data-height", closedHeight);
    accordion.style.height = `${closedHeight}px`;

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
});
