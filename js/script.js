const slider = (active, inActive) => {
  const onboardings = document.querySelectorAll(inActive);

  const button = document.querySelectorAll(`${inActive} .next`);
  button.forEach((current) => {
    current.addEventListener("click", () => {
      const index = current.getAttribute("data-next-index");
      onboardings.forEach((current) => current.classList.remove(active));
      document
        .querySelector(`${inActive}[data-index="${index}"]`)
        .classList.add(active);
    });
  });
};

slider("transition--visible", ".transition");
slider("transition-mobile--visible", ".transition-mobile");

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

$(document).ready(function () {
  $("#fullpage").fullpage();
});
