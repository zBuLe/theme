// assets/js/main.js

// ==========================================
// 1. PANEL TOGGLES (Left and Right Sidebars)
// ==========================================

// Function to toggle the Site (Left) Panel
function toggleSitePanel() {
  const isOpen = document.body.classList.toggle('site-open');
  localStorage.setItem('site-panel-state', isOpen ? 'open' : 'closed');
}

// Function to toggle the Page (Right) Panel
function togglePagePanel() {
  const isOpen = document.body.classList.toggle('page-open');
  localStorage.setItem('page-panel-state', isOpen ? 'open' : 'closed');
}

// ==========================================
// 2. THEME TOGGLE (Light/Dark Mode)
// ==========================================

// Function to toggle Dark Mode
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateThemeIcon(isDark);
}

// Helper to swap the icon to reflect the CURRENT state
function updateThemeIcon(isDark) {
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    // If dark mode is active, show the Moon. Otherwise, show the Sun.
    themeBtn.innerText = isDark ? '🌙' : '☀️';
  }
}

// ==========================================
// 3. NAVIGATION FOLDERS (Accordion State)
// ==========================================

// Function to toggle a navigation folder and save its state
function toggleNavMenu(id) {
  const container = document.getElementById(id);
  const icon = document.getElementById(`icon-${id}`);
  
  if (!container) return;

  // Toggle the CSS classes for the slide animation and icon rotation
  const isOpen = container.classList.toggle('is-open');
  if (icon) icon.classList.toggle('is-rotated');

  // Save the state to LocalStorage so it persists across pages
  let openMenus = JSON.parse(localStorage.getItem('open-nav-menus') || '[]');
  
  if (isOpen) {
    if (!openMenus.includes(id)) openMenus.push(id);
  } else {
    openMenus = openMenus.filter(menuId => menuId !== id);
  }
  
  localStorage.setItem('open-nav-menus', JSON.stringify(openMenus));
}

// ==========================================
// 4. TABLE OF CONTENTS GENERATOR & SCROLLSPY
// ==========================================

function buildTOC() {
  const tocList = document.getElementById('toc-list');
  const docPanel = document.querySelector('.doc-content'); // We need the scrolling container
  const headers = Array.from(document.querySelectorAll('.doc-content h2, .doc-content h3'));
  
  if (!tocList || !docPanel) return;

  // If there are no headers, show a subtle message
  if (headers.length === 0) {
    tocList.innerHTML = '<li class="toc-empty">No sections on this page.</li>';
    return;
  }

  // 1. Build the list (Same as before)
  headers.forEach(header => {
    if (!header.id) {
      header.id = header.innerText.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    const li = document.createElement('li');
    li.className = `toc-item toc-${header.tagName.toLowerCase()}`; 

    const a = document.createElement('a');
    a.href = `#${header.id}`;
    a.innerText = header.innerText;
    a.className = 'toc-link';

    li.appendChild(a);
    tocList.appendChild(li);
  });

  // 2. The ScrollSpy Logic (Keep track of where we are)
  const tocLinks = document.querySelectorAll('.toc-link');

  docPanel.addEventListener('scroll', () => {
    let currentId = '';

    // Loop through headers to find which one is currently at the top
    headers.forEach(header => {
      // 100px is the 64px header + some extra buffer so it triggers naturally
      if (header.getBoundingClientRect().top < 100) {
        currentId = header.id;
      }
    });

    // Edge Case Fix: If user scrolls to the absolute bottom, highlight the last item
    // even if it hasn't hit the top of the screen yet.
    if (docPanel.scrollHeight - docPanel.scrollTop <= docPanel.clientHeight + 10) {
      currentId = headers[headers.length - 1].id;
    }

    // Apply the active class to the correct link
    if (currentId) {
      tocLinks.forEach(link => {
        link.classList.remove('active-toc');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active-toc');
        }
      });
    }
  });

  // 3. Trigger it once immediately on load so the first item highlights
  docPanel.dispatchEvent(new Event('scroll'));
}

// ==========================================
// 5. INITIALIZATION ON PAGE LOAD
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Remove the preload class after a tiny delay
  // This allows the smooth sliding transitions to work when clicking buttons
  // without flashing the animations when the page first loads.
  setTimeout(() => {
    document.body.classList.remove('preload');
  }, 50);

  // 2. Initialize the correct theme icon based on the body class
  const isDark = document.body.classList.contains('dark-mode');
  updateThemeIcon(isDark);

  // 3. Restore Navigation Folders
  const openMenus = JSON.parse(localStorage.getItem('open-nav-menus') || '[]');
  openMenus.forEach(id => {
    const container = document.getElementById(id);
    const icon = document.getElementById(`icon-${id}`);
    
    // If the ID was saved in localStorage, add the open classes back
    if (container) container.classList.add('is-open');
    if (icon) icon.classList.add('is-rotated');
  });

  // 4. Generate the Table of Contents dynamically based on page content
  buildTOC();

  // 5. Initialize the Search Bar
  initSearch();
});

// ==========================================
// 6. SITE SEARCH
// ==========================================

let searchIndex = null;

function initSearch() {
  const input = document.getElementById('search-input');
  const clearBtn = document.getElementById('search-clear');
  const resultsContainer = document.getElementById('search-results');
  const sitePanel = document.querySelector('.site-panel');

  if (!input) return;

  // Helper function to clear and reset the UI
  const clearSearch = () => {
    input.value = '';
    clearBtn.style.display = 'none';
    sitePanel.classList.remove('is-searching');
    resultsContainer.innerHTML = '';
  };

  // 1. Load index on focus
  input.addEventListener('focus', async () => {
    if (!searchIndex) {
      try {
        const response = await fetch(window.SITE_BASEURL + '/search.json');
        searchIndex = await response.json();
      } catch (e) {
        console.error("Search index failed to load");
      }
    }
  });

  // 2. Filter as the user types
  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();

    // Toggle the clear button visibility
    clearBtn.style.display = query.length > 0 ? 'block' : 'none';

    // If query is too short, close results
    if (query.length < 2) {
      sitePanel.classList.remove('is-searching');
      resultsContainer.innerHTML = '';
      return;
    }

    sitePanel.classList.add('is-searching');
    if (!searchIndex) return; 

    const results = searchIndex.filter(page => {
      return page.title.toLowerCase().includes(query) || 
             page.content.toLowerCase().includes(query);
    });

    if (results.length === 0) {
      resultsContainer.innerHTML = '<li style="padding: 1rem 0; color: var(--text-muted); font-size: 0.9rem; text-align: center;">No results found.</li>';
      return;
    }

    resultsContainer.innerHTML = results.slice(0, 10).map(result => {
      let snippet = '';
      const contentIndex = result.content.toLowerCase().indexOf(query);
      if (contentIndex !== -1) {
        const start = Math.max(0, contentIndex - 25);
        const end = Math.min(result.content.length, contentIndex + query.length + 25);
        snippet = `...${result.content.substring(start, end)}...`;
      }
      
      return `
        <li>
          <a href="${result.url}">
            <span class="search-title">${result.title}</span>
            ${snippet ? `<span class="search-snippet">${snippet}</span>` : ''}
          </a>
        </li>
      `;
    }).join('');
  });

  // 3. Listen for the clear button click
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      clearSearch();
      input.focus(); // Keep the user in the input box if they click the X
    });
  }

  // 4. Listen for the Escape key
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      clearSearch();
      input.blur(); // Remove focus from the input so they can go back to reading
    }
  });
}

// ==========================================
// 7. SCROLL TO TOP
// ==========================================
function scrollToTop() {
  // Change this line:
  const docPanel = document.querySelector('.doc-content'); // Was .doc-panel
  if (docPanel) {
    docPanel.scrollTo({ top: 0, behavior: 'smooth' });
  }
}