const main = document.querySelector("main");
const about = document.querySelector("#about");

if (document.documentElement.classList.contains("first-visit")) {
  const introName = document.querySelector(".hero h1");
  const name = introName.textContent;
  introName.setAttribute("aria-label", name);
  introName.innerHTML = [...name].map((character, index) =>
    character === " "
      ? '<span class="intro-space" aria-hidden="true"> </span>'
      : `<span class="intro-char" aria-hidden="true" style="--char-index:${index}">${character}</span>`
  ).join("");
}

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
