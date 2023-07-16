// Script for the index.html page where the animated text is displayed

document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelectorAll(".animated-text");
  text.forEach((element, i) => {
    setTimeout(() => {
      element.classList.add("visible");
    }, 500 + i * 100);
  });
});
