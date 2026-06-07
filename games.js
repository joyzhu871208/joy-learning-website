const track = document.querySelector(".games-track");
const carousel = document.querySelector(".games-carousel");
const prevButton = document.querySelector(".games-prev");
const nextButton = document.querySelector(".games-next");
const heroStage = document.querySelector(".games-hero-stage");
const heroPieces = document.querySelectorAll(".games-hero-stage > .stage-card, .games-hero-stage > .stage-spark");
const unlockLab = document.querySelector(".unlock-lab");

if (heroStage && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  heroStage.addEventListener("pointermove", (event) => {
    const bounds = heroStage.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroPieces.forEach((piece, index) => {
      const depth = (index + 1) * 3;
      piece.style.marginLeft = `${x * depth}px`;
      piece.style.marginTop = `${y * depth}px`;
    });
  });

  heroStage.addEventListener("pointerleave", () => {
    heroPieces.forEach((piece) => {
      piece.style.marginLeft = "";
      piece.style.marginTop = "";
    });
  });
}

if (unlockLab) {
  const unlockObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        unlockLab.classList.add("in-view");
        unlockObserver.disconnect();
      }
    },
    { threshold: 0.3 },
  );
  unlockObserver.observe(unlockLab);
}

if (track && carousel) {
  const originalCards = [...track.children];
  originalCards.forEach((card) => track.appendChild(card.cloneNode(true)));

  let position = 0;
  let paused = false;
  let resumeTimer;
  const step = () => originalCards[0].getBoundingClientRect().width + 18;
  const loopWidth = () => step() * originalCards.length;

  const move = (direction = 1) => {
    position += step() * direction;
    if (position >= loopWidth()) position -= loopWidth();
    if (position < 0) position += loopWidth();
    track.style.transition = "transform 450ms ease";
    track.style.transform = `translateX(${-position}px)`;
  };

  const pauseTemporarily = () => {
    paused = true;
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => (paused = false), 5000);
  };

  prevButton?.addEventListener("click", () => { move(-1); pauseTemporarily(); });
  nextButton?.addEventListener("click", () => { move(1); pauseTemporarily(); });
  carousel.addEventListener("mouseenter", () => (paused = true));
  carousel.addEventListener("mouseleave", () => (paused = false));

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setInterval(() => { if (!paused) move(1); }, 3500);
  }
}

lucide.createIcons();
