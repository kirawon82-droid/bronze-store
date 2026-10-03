const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const filterButtons = document.querySelectorAll(".filter");
const productItems = document.querySelectorAll(".grid-item");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("is-open");
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));

    productItems.forEach((item) => {
      const category = item.dataset.category;
      const shouldShow = filter === "all" || category === filter;
      item.style.display = shouldShow ? "block" : "none";
    });
  });
});

document.querySelector(".newsletter-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  const input = event.currentTarget.querySelector("input");

  if (button && input) {
    button.textContent = "Joined";
    input.value = "";
    button.disabled = true;
    button.style.opacity = "0.8";
  }
});
