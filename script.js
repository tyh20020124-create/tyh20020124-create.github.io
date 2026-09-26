const main = document.querySelector("main");
const about = document.querySelector("#about");
["capacitive", "breatho", "cartx", "hydroren", "beacon"].forEach((id) => {
  main.insertBefore(document.querySelector(`#${id}`), about);
});

const sections = [...document.querySelectorAll("[data-section]")];
const dots = [...document.querySelectorAll(".section-dots a")];
const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  const index = Number(visible.target.dataset.section);
  dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
}, { threshold: [0.35, 0.6] });
sections.forEach((section) => observer.observe(section));
