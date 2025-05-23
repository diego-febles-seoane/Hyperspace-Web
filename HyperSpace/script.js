// Detecta scroll y cambia tema
window.addEventListener("scroll", () => {
  const scrollMidpoint = document.body.scrollHeight / 2;
  if (window.scrollY > scrollMidpoint) {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
});
