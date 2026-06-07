const fullscreenButton = document.querySelector(".fullscreen-button");
const gameFrame = document.querySelector(".game-frame");
const guideOpen = document.querySelector(".guide-open");
const pdfModal = document.querySelector(".pdf-modal");
const pdfClose = document.querySelector(".pdf-close");

fullscreenButton?.addEventListener("click", () => {
  document.querySelector(".game-frame-shell")?.requestFullscreen?.();
});

const setPdfOpen = (open) => {
  pdfModal?.classList.toggle("open", open);
  pdfModal?.setAttribute("aria-hidden", String(!open));
  document.body.style.overflow = open ? "hidden" : "";
};

guideOpen?.addEventListener("click", () => setPdfOpen(true));
pdfClose?.addEventListener("click", () => setPdfOpen(false));
pdfModal?.addEventListener("click", (event) => {
  if (event.target === pdfModal) setPdfOpen(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setPdfOpen(false);
});

lucide.createIcons();
