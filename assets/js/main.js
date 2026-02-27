// =========================================
// UI STATE & ACCESSIBILITY
// =========================================
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

// =========================================
// TOGGLE FUNCTIONS
// =========================================
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
  
  if (themeBtn) {
    const iconLight = themeBtn.getAttribute("data-icon-light") || "☀️";
    const iconDark = themeBtn.getAttribute("data-icon-dark") || "🌙";
    themeBtn.innerText = isDark ? iconLight : iconDark;
  }

  localStorage.setItem("theme", isDark ? "dark" : "light");
  requestAnimationFrame(reflowAccordions);
}

// =========================================
// AUTO-GENERATE TABLE OF CONTENTS
// =========================================
function generateTOC() {
  const tocNav = document.getElementById('tocNav');
  const article = document.querySelector('.doc-content');
  
  if (!tocNav || !article) return;

  const headings = article.querySelectorAll('h2, h3, h4');

  headings.forEach(heading => {
    if (!heading.id) {
      heading.id = heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    link.className = `toc-${heading.tagName.toLowerCase()}`;
    
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        toggleTocNav();
      }
    });

    tocNav.appendChild(link);
  });
}

// =========================================
// INITIALIZE ON LOAD
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Sync the theme button icon based on the state set by the inline script
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    const iconLight = themeBtn.getAttribute("data-icon-light") || "☀️";
    const iconDark = themeBtn.getAttribute("data-icon-dark") || "🌙";
    const isDark = document.body.classList.contains("dark-mode");
    themeBtn.innerText = isDark ? iconLight : iconDark;
  }

  // 2. Setup Accordion Clicks
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

  // 3. Run the TOC Generator
  generateTOC();
  
  // 4. Update Accessibility
  setAriaExpandedForToggles();

  // 5. Remove the preload class to allow smooth animations again!
  // We use a tiny 50ms timeout to guarantee CSS has finished rendering
  setTimeout(() => {
    document.body.classList.remove("preload");
  }, 50);
});

// Handle Window Resizing 
window.addEventListener("resize", () => {
  reflowAccordions();
  setAriaExpandedForToggles();
});