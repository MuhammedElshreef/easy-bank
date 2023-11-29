const burgerCheckBox = document.getElementById("burger-menu-btn");
const burgerMenu = document.getElementById("burger-menu");
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");
burgerCheckBox.addEventListener("change", () => {
  if (burgerCheckBox.checked) {
    burgerMenu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    burgerMenu.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
});
burgerMenu.addEventListener("click", () => {
  burgerCheckBox.checked = false;
  burgerMenu.classList.add("hidden");
  document.body.style.overflow = "auto";
});
window.onscroll = function () {
  if (window.scrollY > 500) {
    scrollToTopBtn.classList.remove("hidden");
    scrollToTopBtn.classList.remove("animate__fadeOutRight");
    scrollToTopBtn.classList.add("animate__fadeInRight");
  } else {
    scrollToTopBtn.classList.remove("animate__fadeInRight");
    scrollToTopBtn.classList.add("animate__fadeOutRight");
  }
};
scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
