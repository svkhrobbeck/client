document.addEventListener("click", (evt) => {
  navToggleClick(evt);
});

function navToggleClick(evt) {
  const el = evt.target.closest("[data-nav-toggler]");

  if (!el) return;

  el.classList.toggle("show");
  const elSelector = el.dataset.navToggler;

  document.querySelector(`[${elSelector}]`).classList.toggle("show");
}
