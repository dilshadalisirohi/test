const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", navToggle);
function navToggle() {
  const nav = document.querySelector(".nav-list");
  nav.classList.toggle("responsive");
}

window.addEventListener("scroll", (e) => {
  console.log(e);
});
