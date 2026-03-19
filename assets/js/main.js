// Safe accordion height getter (FIX: handles "none" and NaN)
function getAccordionHeight(panel) {
  const current = panel.style.maxHeight;
  if (!current || current === "none") return panel.scrollHeight;
  const parsed = parseInt(current, 10);
  return isNaN(parsed) ? panel.scrollHeight : parsed;
}

function setAriaExpandedForToggles() {
  const siteOpen = document.body.classList.contains("site-open");
  const tocOpen = document.body.classList.contains("toc-open");
  document.querySelectorAll('[data-action="toggle-site"]').forEach(b => b.setAttribute("aria-expanded", String(siteOpen)));
  document.querySelectorAll('[data-action="toggle-toc"]').forEach(b => b.setAttribute("aria-expanded", String(tocOpen)));
}

function reflowAccordions() {
  document.querySelectorAll(".accordion-btn.active").forEach(btn => {
    const panel = btn.nextElementSibling;
    if (panel) panel.style.maxHeight = panel.scrollHeight + "px";
  });
}

// Backdrop
function updateBackdrop() {
  const bd = document.getElementById("panelBackdrop");
  if (!bd) return;
  const anyOpen = document.body.classList.contains("site-open") || document.body.classList.contains("toc-open");
  if (anyOpen && window.innerWidth <= 768) {
    bd.style.display = "block";
    requestAnimationFrame(() => bd.classList.add("visible"));
  } else {
    bd.classList.remove("visible");
    setTimeout(() => { if (!bd.classList.contains("visible")) bd.style.display = "none"; }, 300);
  }
}

// Toggles
function toggleSiteNav() {
  document.body.classList.toggle("site-open");
  localStorage.setItem("sitePanel", document.body.classList.contains("site-open") ? "open" : "closed");
  setAriaExpandedForToggles(); updateBackdrop();
}
function toggleTocNav() {
  document.body.classList.toggle("toc-open");
  localStorage.setItem("tocPanel", document.body.classList.contains("toc-open") ? "open" : "closed");
  setAriaExpandedForToggles(); updateBackdrop();
}
function closePanels() {
  if (document.body.classList.contains("site-open")) toggleSiteNav();
  if (document.body.classList.contains("toc-open")) toggleTocNav();
}
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.innerText = isDark ? (btn.dataset.iconLight || "☀️") : (btn.dataset.iconDark || "🌙");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  requestAnimationFrame(reflowAccordions);
}

// TOC + Throttled ScrollSpy (FIX: rAF guard + visibility check)
function generateTOC() {
  const tocNav = document.getElementById("tocNav");
  const article = document.querySelector(".doc-content");
  if (!tocNav || !article) return;
  const headings = Array.from(article.querySelectorAll("h2, h3, h4"));
  if (headings.length === 0) {
    const p = document.createElement("p");
    p.className = "toc-empty"; p.textContent = "No headings found on this page.";
    tocNav.appendChild(p); return;
  }
  headings.forEach(h => {
    if (!h.id) h.id = h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const a = document.createElement("a");
    a.href = "#" + h.id; a.textContent = h.textContent;
    a.className = "toc-" + h.tagName.toLowerCase();
    a.addEventListener("click", () => { if (window.innerWidth <= 768) toggleTocNav(); });
    tocNav.appendChild(a);
  });

  const tocLinks = tocNav.querySelectorAll("a");
  let scrollTicking = false;
  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      let cur = headings[0];
      for (const h of headings) { if (h.getBoundingClientRect().top <= 120) cur = h; else break; }
      tocLinks.forEach(link => {
        const isActive = link.getAttribute("href") === "#" + cur.id;
        if (isActive && !link.classList.contains("active-toc")) {
          link.classList.add("active-toc");
          const navR = tocNav.getBoundingClientRect(), linkR = link.getBoundingClientRect();
          if (linkR.top < navR.top || linkR.bottom > navR.bottom) {
            link.scrollIntoView({ block: "nearest", behavior: "smooth" });
          }
        } else if (!isActive) { link.classList.remove("active-toc"); }
      });
      scrollTicking = false;
    });
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// Back to Top (FIX: rAF throttled)
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (ticking) return; ticking = true;
    requestAnimationFrame(() => {
      btn.classList.toggle("visible", window.scrollY > 400);
      ticking = false;
    });
  }, { passive: true });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

// Search: Escape to clear
function initSearchEnhancements() {
  const input = document.getElementById("search-input");
  if (!input) return;
  input.addEventListener("keydown", e => {
    if (e.key === "Escape") { input.value = ""; input.blur(); input.dispatchEvent(new Event("input")); }
  });
}

// Keyboard Shortcuts
function initKeyboardShortcuts() {
  document.addEventListener("keydown", e => {
    const tag = e.target.tagName.toLowerCase();
    if (tag === "input" || tag === "textarea" || e.target.isContentEditable) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    switch (e.key) {
      case "[": e.preventDefault(); toggleSiteNav(); break;
      case "]": e.preventDefault(); toggleTocNav(); break;
      case "\\": e.preventDefault(); toggleTheme(); break;
      case "/":
        e.preventDefault();
        const si = document.getElementById("search-input");
        if (si) {
          if (!document.body.classList.contains("site-open")) toggleSiteNav();
          setTimeout(() => si.focus(), 100);
        }
        break;
      case "Escape": closePanels(); break;
    }
  });
}

// Event delegation (FIX: consolidated, no inline onclick)
function initEventDelegation() {
  document.addEventListener("click", e => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    const action = btn.dataset.action;
    if (action === "toggle-site") toggleSiteNav();
    else if (action === "toggle-toc") toggleTocNav();
    else if (action === "toggle-theme") toggleTheme();
  });
  const bd = document.getElementById("panelBackdrop");
  if (bd) bd.addEventListener("click", closePanels);
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  // Theme icon sync
  const tb = document.getElementById("theme-toggle");
  if (tb) tb.innerText = document.body.classList.contains("dark-mode") ? (tb.dataset.iconLight || "☀️") : (tb.dataset.iconDark || "🌙");

  // Accordion setup (FIX: safe height calculation)
  const activeLink = document.querySelector(".site-nav a.active-link");
  if (activeLink) {
    let pp = activeLink.closest(".accordion-content");
    while (pp) {
      const btn = pp.previousElementSibling;
      if (btn && btn.classList.contains("accordion-btn")) { btn.classList.add("active"); btn.setAttribute("aria-expanded", "true"); }
      pp.style.maxHeight = "none";
      pp = pp.parentElement.closest(".accordion-content");
    }
    requestAnimationFrame(() => {
      document.querySelectorAll(".accordion-content").forEach(p => {
        if (p.style.maxHeight === "none") p.style.maxHeight = p.scrollHeight + "px";
      });
    });
  }

  document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      const expanded = this.classList.contains("active");
      this.setAttribute("aria-expanded", String(expanded));
      panel.style.maxHeight = expanded ? panel.scrollHeight + "px" : null;
      let parent = this.parentElement.closest(".accordion-content");
      while (parent) {
        const h = getAccordionHeight(parent);
        parent.style.maxHeight = (expanded ? h + panel.scrollHeight : Math.max(0, h - panel.scrollHeight)) + "px";
        parent = parent.parentElement.closest(".accordion-content");
      }
    });
  });

  generateTOC();
  setAriaExpandedForToggles();

  // Code blocks
  document.querySelectorAll("div.highlighter-rouge").forEach(cb => {
    let lang = "Code";
    cb.classList.forEach(c => { if (c.startsWith("language-")) lang = c.replace("language-", ""); });
    const map = {js:"JavaScript",javascript:"JavaScript",gml:"GML",python:"Python",java:"Java",go:"Go",html:"HTML",css:"CSS",ruby:"Ruby",json:"JSON",yaml:"YAML",yml:"YAML",bash:"Bash",sh:"Shell"};
    const hdr = document.createElement("div"); hdr.className = "code-header";
    const ls = document.createElement("span"); ls.className = "code-lang"; ls.textContent = map[lang.toLowerCase()] || lang;
    const cp = document.createElement("button"); cp.className = "copy-btn"; cp.setAttribute("aria-label","Copy code to clipboard"); cp.textContent = "Copy";
    hdr.appendChild(ls); hdr.appendChild(cp); cb.insertBefore(hdr, cb.firstChild);
    cp.addEventListener("click", () => {
      navigator.clipboard.writeText(cb.querySelector("code").innerText).then(() => {
        cp.textContent = "Copied!"; cp.classList.add("copied");
        setTimeout(() => { cp.textContent = "Copy"; cp.classList.remove("copied"); }, 2000);
      }).catch(err => console.error("Copy failed:", err));
    });
  });

  initEventDelegation();
  initBackToTop();
  initSearchEnhancements();
  initKeyboardShortcuts();
  updateBackdrop();

  setTimeout(() => document.body.classList.remove("preload"), 50);
});

window.addEventListener("resize", () => { reflowAccordions(); setAriaExpandedForToggles(); updateBackdrop(); });
