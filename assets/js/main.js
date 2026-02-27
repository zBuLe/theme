// =========================================
// 1. UI STATE & ACCESSIBILITY
// =========================================
function setAriaExpandedForToggles() {
  const siteOpen = document.body.classList.contains("site-open");
  const tocOpen = document.body.classList.contains("toc-open");

  // Keep all header toggle buttons in sync for screen readers
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
// 2. INITIALIZATION
// =========================================
function initSettings() {
  const savedTheme = localStorage.getItem("theme");
  const themeBtn = document.getElementById("theme-toggle");
  
  // Pull custom icons from the HTML data attributes (with fallbacks just in case)
  const iconLight = themeBtn ? themeBtn.getAttribute("data-icon-light") : "☀️";
  const iconDark = themeBtn ? themeBtn.getAttribute("data-icon-dark") : "🌙";

  // Check Local Storage or System Preferences for Dark Mode
  if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.body.classList.add("dark-mode");
    if (themeBtn) themeBtn.innerText = iconLight;
  } else {
    if (themeBtn) themeBtn.innerText = iconDark;
  }

  // Restore panel open state only on desktop-ish widths
  if (window.innerWidth > 768) {
    if (localStorage.getItem("sitePanel") === "open") document.body.classList.add("site-open");
    if (localStorage.getItem("tocPanel") === "open") document.body.classList.add("toc-open");
  }

  setAriaExpandedForToggles();
}

// Run immediately to prevent a flash of unstyled content
initSettings();


// =========================================
// 3. TOGGLE FUNCTIONS
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
    const iconLight = themeBtn.getAttribute("data-icon-light");
    const iconDark = themeBtn.getAttribute("data-icon-dark");
    // Swap the icon based on the variables read from the HTML
    themeBtn.innerText = isDark ? iconLight : iconDark;
  }

  localStorage.setItem("theme", isDark ? "dark" : "light");
  
  // Ensure accordions don't clip text if fonts slightly change width during theme swap
  requestAnimationFrame(reflowAccordions);
}


// =========================================
// 4. AUTO-GENERATE TABLE OF CONTENTS
// =========================================
function generateTOC() {
  const tocNav = document.getElementById('tocNav');
  const article = document.querySelector('.doc-content');
  
  if (!tocNav || !article) return; // Exit if not on a document page

  // Find all H2, H3, and H4 tags inside the main markdown content
  const headings = article.querySelectorAll('h2, h3, h4');

  headings.forEach(heading => {
    // Jekyll usually auto-generates IDs, but we do it manually just in case it is missing
    if (!heading.id) {
      heading.id = heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    link.className = `toc-${heading.tagName.toLowerCase()}`;
    
    // Auto-close right panel on mobile after clicking a link to jump to content
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        toggleTocNav();
      }
    });

    tocNav.appendChild(link);
  });
}


// =========================================
// 5. EVENT LISTENERS
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  
  // Setup Accordion Clicks
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

  // Run the TOC Generator
  generateTOC();
});

// Handle Window Resizing 
window.addEventListener("resize", () => {
  reflowAccordions();
  setAriaExpandedForToggles();
});