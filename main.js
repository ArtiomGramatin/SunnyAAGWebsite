const toggleButton = document.getElementById("themeToggle");

toggleButton.addEventListener("click", () => {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  html.setAttribute("data-theme", next);

  toggleButton.textContent = next === "dark" ? "☀️" : "🌙";
});
