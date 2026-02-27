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

// --- DYNAMIC TABLE OF CONTENTS GENERATOR ---
function generateTOC() {
  const tocNav = document.getElementById('tocNav');
  const article = document.querySelector('.doc-content');
  
  if (!tocNav || !article) return; // Exit if not on a document page

  // Find all H2, H3, and H4 tags inside the main content
  const headings = article.querySelectorAll('h2, h3, h4');

  headings.forEach(heading => {
    // Jekyll auto-generates IDs, but just in case it's missing:
    if (!heading.id) {
      heading.id = heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    // Create the link
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    
    // Apply the correct CSS class based on heading level
    link.className = `toc-${heading.tagName.toLowerCase()}`;
    
    // Add click event to close mobile menu when a link is clicked
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        toggleTocNav(); // Close panel on mobile after clicking
      }
    });

    tocNav.appendChild(link);
  });
}

// Run the generator when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', generateTOC);