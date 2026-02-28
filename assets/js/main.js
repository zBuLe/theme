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
// AUTO-GENERATE TABLE OF CONTENTS & SCROLLSPY
// =========================================
function generateTOC() {
  const tocNav = document.getElementById('tocNav');
  const article = document.querySelector('.doc-content');
  
  if (!tocNav || !article) return;

  const headings = Array.from(article.querySelectorAll('h2, h3, h4'));
  if (headings.length === 0) return;

  // 1. Build the Links
  headings.forEach(heading => {
    if (!heading.id) {
      heading.id = heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    link.className = `toc-${heading.tagName.toLowerCase()}`;
    
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) toggleTocNav();
    });

    tocNav.appendChild(link);
  });

  // 2. Setup ScrollSpy (Tracks your position)
  const tocLinks = tocNav.querySelectorAll('a');
  
  function onScroll() {
    let currentHeading = headings[0];

    // Find the heading closest to the top of the viewport
    for (let heading of headings) {
      const rect = heading.getBoundingClientRect();
      // 120px offset accounts for the sticky header + some breathing room
      if (rect.top <= 120) {
        currentHeading = heading;
      } else {
        break; 
      }
    }

    // Apply the active class to the matching TOC link
    tocLinks.forEach(link => {
      if (link.getAttribute('href') === `#${currentHeading.id}`) {
        link.classList.add('active-toc');
        // Automatically scroll the TOC sidebar if the list gets too long
        link.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        link.classList.remove('active-toc');
      }
    });
  }

  // Fire once on load to set the initial state, then attach to the window scroll
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// =========================================
// INITIALIZE ON LOAD
// =========================================
document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Sync the theme button icon
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    const iconLight = themeBtn.getAttribute("data-icon-light") || "☀️";
    const iconDark = themeBtn.getAttribute("data-icon-dark") || "🌙";
    const isDark = document.body.classList.contains("dark-mode");
    themeBtn.innerText = isDark ? iconLight : iconDark;
  }

  // 2. Setup Accordion Clicks & State Memory
  // A. Auto-open the accordions if the user is currently on a nested page
  const activeLink = document.querySelector('.site-nav a.active-link');
  if (activeLink) {
    let parentPanel = activeLink.closest('.accordion-content');
    while (parentPanel) {
      const btn = parentPanel.previousElementSibling;
      if (btn && btn.classList.contains('accordion-btn')) {
        btn.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
      parentPanel.style.maxHeight = "none";
      parentPanel = parentPanel.parentElement.closest('.accordion-content');
    }
    
    // Convert "none" to actual pixel heights for closing animations
    document.querySelectorAll('.accordion-content').forEach(panel => {
      if (panel.previousElementSibling && panel.previousElementSibling.classList.contains('active')) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  // B. The click listener (with nested height recalculation)
  document.querySelectorAll(".accordion-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      const expanded = this.classList.contains("active");
      this.setAttribute("aria-expanded", expanded ? "true" : "false");

      if (expanded) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = null;
      }

      // If this accordion is INSIDE another accordion, adjust the parent's height
      let parentPanel = this.parentElement.closest('.accordion-content');
      while (parentPanel) {
        if (expanded) {
          parentPanel.style.maxHeight = parseInt(parentPanel.style.maxHeight) + panel.scrollHeight + "px";
        } else {
          parentPanel.style.maxHeight = parseInt(parentPanel.style.maxHeight) - panel.scrollHeight + "px";
        }
        parentPanel = parentPanel.parentElement.closest('.accordion-content');
      }
    });
  });

  // 3. Run the TOC Generator
  generateTOC();
  
  // 4. Update Accessibility
  setAriaExpandedForToggles();

  // 5. Code Blocks: Title Bar & Copy Button
  // USING 'div' SO IT IGNORES INLINE CODE
  document.querySelectorAll('div.highlighter-rouge').forEach(codeBlock => {
    
    // Extract the language from the class name
    let lang = "Code";
    codeBlock.classList.forEach(cls => {
      if (cls.startsWith('language-')) {
        lang = cls.replace('language-', '');
      }
    });

    // Make the shortcodes look pretty
    const langMap = {
      'js': 'JavaScript',
      'javascript': 'JavaScript',
      'gml': 'GML',
      'python': 'Python',
      'java': 'Java',
      'go': 'Go',
      'html': 'HTML',
      'css': 'CSS',
      'ruby': 'Ruby',
      'json': 'JSON',
      'yaml': 'YAML',
      'yml': 'YAML',
      'bash': 'Bash',
      'sh': 'Shell'
    };
    const displayLang = langMap[lang.toLowerCase()] || lang;

    // Create the Title Bar (Header)
    const header = document.createElement('div');
    header.className = 'code-header';

    const langSpan = document.createElement('span');
    langSpan.className = 'code-lang';
    langSpan.textContent = displayLang;

    // Create the Copy Button
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.setAttribute('aria-label', 'Copy code to clipboard');
    btn.textContent = 'Copy';

    // Assemble and Inject the Title Bar
    header.appendChild(langSpan);
    header.appendChild(btn);
    codeBlock.insertBefore(header, codeBlock.firstChild);

    // Add Copy Functionality
    btn.addEventListener('click', () => {
      const codeText = codeBlock.querySelector('code').innerText;
      
      navigator.clipboard.writeText(codeText).then(() => {
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      }).catch(err => console.error('Failed to copy code: ', err));
    });
  });

  // 6. Remove the preload class to allow smooth animations again
  setTimeout(() => {
    document.body.classList.remove("preload");
  }, 50);
});

// Handle Window Resizing 
window.addEventListener("resize", () => {
  reflowAccordions();
  setAriaExpandedForToggles();
});
