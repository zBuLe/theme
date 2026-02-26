function setAriaExpandedForToggles() {
  const siteOpen = document.body.classList.contains("site-open");
  const tocOpen = document.body.classList.contains("toc-open");

  document.querySelectorAll('[onclick="toggleSiteNav()"]').forEach(btn => {
    if (btn && btn.setAttribute) btn.setAttribute("aria-expanded", siteOpen ? "true" : "false");
  });
  document.querySelectorAll('[onclick="toggleTocNav()"]').forEach(btn => {
    if (btn && btn.setAttribute) btn.setAttribute("aria-expanded", tocOpen ? "true" : "false");
  });
}

function reflowAccordions() {
  document.querySelectorAll(".accordion-btn.active").forEach(btn => {
    const panel = btn.nextElementSibling;
    if (!panel) return;
    panel.style.maxHeight = panel.scrollHeight + "px";
  });
}

function initSettings() {
  const savedTheme = localStorage.getItem("theme");
  const themeBtn = document.getElementById("theme-toggle");

  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.body.classList.add("dark-mode");
    themeBtn.innerText = "☀️";
  } else {
    themeBtn.innerText = "🌙";
  }

  // Restore panel open state only on desktop-ish widths
  if (window.innerWidth > 768) {
    if (localStorage.getItem("sitePanel") === "open") document.body.classList.add("site-open");
    if (localStorage.getItem("tocPanel") === "open") document.body.classList.add("toc-open");
  }

  setAriaExpandedForToggles();
}
initSettings();

function toggleSiteNav() {
  document.body.classList.toggle("site-open");
  localStorage.setItem("sitePanel", document.body.classList.contains("site-open") ? "open" : "closed");
  setAriaExpandedForToggles();
}

function toggleTocNav() {
  document.body.classList.toggle("toc-open");
  localStorage.setItem("tocPanel", document.body.classList.contains("toc-open") ? "open" : "closed");
  setAriaExpandedForToggles();
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  const themeBtn = document.getElementById("theme-toggle");

  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeBtn.innerText = isDark ? "☀️" : "🌙";

  requestAnimationFrame(reflowAccordions);
}

document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    const expanded = this.classList.contains("active");
    this.setAttribute("aria-expanded", expanded ? "true" : "false");

    if (!panel) return;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});

window.addEventListener("resize", () => {
  reflowAccordions();
  // Keep aria-expanded in sync if layout conditions change.
  setAriaExpandedForToggles();
});