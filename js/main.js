document.addEventListener("click", (evt) => {
  navToggleClick(evt);
  modalOpenClick(evt);
  modalCloseClick(evt);
  modalOutsideCloseClick(evt);
});

function navToggleClick(evt) {
  const el = evt.target.closest("[data-nav-toggler]");

  if (!el) return;

  el.classList.toggle("show");
  const elSelector = el.dataset.navToggler;

  document.querySelector(`[${elSelector}]`).classList.toggle("show");
}

function modalOpenClick(evt) {
  const el = evt.target.closest("[data-modal-open]");

  if (!el) return;

  const elSelector = el.dataset.modalOpen;

  document.querySelector(`${elSelector}`).classList.add("show");
  document.body.classList.add("blocked");
}

function modalCloseClick(evt) {
  const el = evt.target.closest("[data-modal-close]");

  if (!el) return;

  el.parentElement.parentElement.parentElement.classList.remove("show");
  document.body.classList.remove("blocked");
}

function modalOutsideCloseClick(evt) {
  const el = evt.target;

  if (!el.matches("[data-modal]")) return;

  document.body.classList.remove("blocked");
  el.classList.remove("show");
}
