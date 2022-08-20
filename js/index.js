const accordions = document.querySelectorAll(".compound_list ul li");
const openModalButtons = document.querySelectorAll("[data-toggle]");
const openFormButtons = document.querySelectorAll("[data-open-form]");
const form = document.querySelector(".form");
const closeFormButton = document.querySelector("#close-form");
const scrollToButtons = document.querySelectorAll("[data-scroll-to]");
const closeMobileMenuButtons = document.querySelectorAll(
  "[data-close-mobile-menu]"
);

const nameInput = document.querySelector("input[name=name]");
const phoneInput = document.querySelector("input[name=phone]");

const burger = document.querySelector(".burger");
const menu = document.querySelector(".burger-menu");

const toggleMobileNavigation = () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
};

burger.addEventListener("click", toggleMobileNavigation);

AOS.init({
  once: true,
});

IMask(phoneInput, {
  mask: "+{38} (000) 000 00 00",
});

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

openModalButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const modal = document.querySelector(button.getAttribute("data-toggle"));
    console.log({ modal });
    modal.classList.toggle("open");
  });
});

openFormButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    form.classList.toggle("open");
  });
});

closeFormButton.addEventListener("click", () => {
  form.classList.remove("open");
});

scrollToButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const to = document.querySelector(button.getAttribute("data-scroll-to"));
    to.scrollIntoView({ behavior: "smooth" });
  });
});

closeMobileMenuButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    burger.classList.toggle("active");
    menu.classList.toggle("active");
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = nameInput.value;
  const phone = phoneInput.value;

  console.log({
    name,
    phone,
  });
});
