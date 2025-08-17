const toggleButton = document.getElementById("themeToggle");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
  toggleButton.textContent = savedTheme === "dark" ? "☀️" : "🌙";
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const systemTheme = prefersDark ? "dark" : "light";
  html.setAttribute("data-theme", systemTheme);
  toggleButton.textContent = systemTheme === "dark" ? "☀️" : "🌙";
}

toggleButton.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);

  toggleButton.textContent = next === "dark" ? "☀️" : "🌙";
});
