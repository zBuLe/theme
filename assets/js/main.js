/* =========================================
   1. PRELOADER & INITIALIZATION
   ========================================= */
window.addEventListener('load', () => {
  // Removes the preload class so CSS transitions can safely begin
  document.body.classList.remove('preload');
  
  // Initialize UI components
  initThemeToggle();
  initAccordions();
  buildTOC();
  initCodeCopy();
  initLightbox();
  initAlbums();
});

/* =========================================
   2. PANEL TOGGLING (State Management)
   ========================================= */
function toggleSiteNav() {
  const body = document.body;
  const isOpen = body.classList.toggle('site-open');
  localStorage.setItem('sitePanel', isOpen ? 'open' : 'closed');
  
  // Auto-close the TOC panel on mobile devices to prevent overlapping
  if (isOpen && window.innerWidth <= 768) {
    body.classList.remove('toc-open');
  }
}

function toggleTocNav() {
  const body = document.body;
  const isOpen = body.classList.toggle('toc-open');
  localStorage.setItem('tocPanel', isOpen ? 'open' : 'closed');
  
  // Auto-close the Site panel on mobile devices to prevent overlapping
  if (isOpen && window.innerWidth <= 768) {
    body.classList.remove('site-open');
  }
}

/* =========================================
   3. THEME TOGGLING (Dark/Light Mode)
   ========================================= */
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  updateThemeIcon(isDark);
}

function initThemeToggle() {
  const isDark = document.body.classList.contains('dark-mode');
  updateThemeIcon(isDark);
}

function updateThemeIcon(isDark) {
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    // Swaps the emoji/icon based on the data attributes we set in toc-panel.html
    btn.textContent = isDark ? btn.getAttribute('data-icon-dark') : btn.getAttribute('data-icon-light');
  }
}

/* =========================================
   4. ACCORDION MENU LOGIC
   ========================================= */
function initAccordions() {
  const accBtns = document.querySelectorAll('.accordion-btn');
  
  accBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      
      if (this.classList.contains('active')) {
        // Expand the accordion dynamically based on its inner scrollHeight
        content.style.maxHeight = content.scrollHeight + "px";
        this.setAttribute('aria-expanded', 'true');
      } else {
        // Collapse the accordion
        content.style.maxHeight = null;
        this.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* =========================================
   5. DYNAMIC TABLE OF CONTENTS & SCROLLSPY
   ========================================= */
function buildTOC() {
  const tocNav = document.getElementById('tocNav');
  if (!tocNav) return;

  // Grab all H2 and H3 tags inside the main markdown content area
  const headers = document.querySelectorAll('.doc-content h2, .doc-content h3');
  
  if (headers.length === 0) {
    tocNav.innerHTML = '<p style="padding: 0 20px; color: var(--text-muted); font-style: italic; font-size: 0.9em;">No headings on this page.</p>';
    return;
  }

  const fragment = document.createDocumentFragment();
  
  headers.forEach(header => {
    // Ensure every header has an ID so we can link to it
    if (!header.id) {
      header.id = header.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    const link = document.createElement('a');
    link.href = '#' + header.id;
    link.textContent = header.textContent;
    
    // Apply the CSS classes we built in style.css to indent H3s
    link.className = header.tagName.toLowerCase() === 'h2' ? 'toc-h2' : 'toc-h3';
    
    fragment.appendChild(link);
  });

  tocNav.appendChild(fragment);

  // Initialize ScrollSpy to highlight the active heading as you scroll
  setupScrollSpy(headers, tocNav);
}

function setupScrollSpy(headers, tocNav) {
  const tocLinks = tocNav.querySelectorAll('a');
  
  // Creates an intersection observer that triggers when a heading hits the top 15% of the screen
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tocLinks.forEach(link => {
          link.classList.remove('active-toc');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active-toc');
          }
        });
      }
    });
  }, { rootMargin: "0px 0px -85% 0px", threshold: 0.1 }); 

  headers.forEach(header => observer.observe(header));
}

/* =========================================
   6. AUTO-INJECT COPY CODE BUTTONS
   ========================================= */
function initCodeCopy() {
  // Target the wrapper that Jekyll's Rouge highlighter generates
  const codeBlocks = document.querySelectorAll('div.highlighter-rouge');
  
  codeBlocks.forEach(block => {
    // 1. Check if a header exists. If not, build one!
    let header = block.querySelector('.code-header');
    
    if (!header) {
      header = document.createElement('div');
      header.className = 'code-header';
      
      // Try to extract the language name from the <pre> class (e.g., language-css)
      const pre = block.querySelector('pre.highlight') || block.querySelector('pre');
      const langClass = pre ? Array.from(pre.classList).find(c => c.startsWith('language-')) : null;
      const langName = langClass ? langClass.replace('language-', '') : 'Code';
      
      const langSpan = document.createElement('span');
      langSpan.className = 'code-lang';
      langSpan.textContent = langName;
      
      header.appendChild(langSpan);
      block.insertBefore(header, block.firstChild);
    }
    
    // 2. Inject the Copy Button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = 'Copy';
    copyBtn.setAttribute('aria-label', 'Copy code to clipboard');
    
    copyBtn.addEventListener('click', () => {
      // Grab the raw text inside the <code> element
      const code = block.querySelector('code').innerText;
      
      // Write to clipboard and trigger the success animation we styled in CSS
      navigator.clipboard.writeText(code).then(() => {
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      });
    });
    
    header.appendChild(copyBtn);
  });
}

/* =========================================
   7. NATIVE IMAGE LIGHTBOX & GALLERY
   ========================================= */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const captionDiv = document.getElementById('lightbox-caption');
  
  if (!modal) return;

  // Gather ALL images in the document to create a master gallery
  const images = Array.from(document.querySelectorAll('.doc-content img'));
  let currentIndex = 0;

function showLightboxImage(index) {
    currentIndex = (index + images.length) % images.length;
    const targetImg = images[currentIndex];
    
    modalImg.src = targetImg.src;
    modalImg.alt = targetImg.alt || 'Full screen image';
    
    const infoBox = document.getElementById('lightbox-info');
    const captionDiv = document.getElementById('lightbox-caption');
    const descDiv = document.getElementById('lightbox-desc');
    const contentBox = document.querySelector('.lightbox-content');
    
    // THE NEW LOGIC: Aspect Ratio Detection
    // If width is greater than height, it's landscape. Otherwise, portrait/square.
    if (targetImg.naturalWidth > targetImg.naturalHeight) {
      contentBox.classList.remove('portrait');
      contentBox.classList.add('landscape');
    } else {
      contentBox.classList.remove('landscape');
      contentBox.classList.add('portrait');
    }
    
    let captionText = targetImg.alt || '';
    let descText = '';

    const parent = targetImg.parentElement;
    
    if (parent && parent.tagName.toLowerCase() === 'p') {
      const em = parent.querySelector('em');
      
      if (em && em.previousElementSibling === targetImg) {
        captionText = em.innerHTML;
        
        const clone = parent.cloneNode(true);
        const cloneImg = clone.querySelector('img');
        const cloneEm = clone.querySelector('em');
        
        if (cloneImg) cloneImg.remove();
        if (cloneEm) cloneEm.remove();
        
        descText = clone.innerHTML
          .replace(/^[\s\n]*<br\s*\/?>/i, '')
          .trim();
      }
    }

    captionDiv.innerHTML = captionText;
    descDiv.innerHTML = descText;

    if (!captionText && !descText) {
      infoBox.classList.add('hidden');
    } else {
      infoBox.classList.remove('hidden');
    }
  }

  // Click an image to open the lightbox at that specific image's index
  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      showLightboxImage(index);
      modal.showModal();
      document.body.style.overflow = 'hidden';
    });
  });

  // UI Button Navigation
  prevBtn.addEventListener('click', () => showLightboxImage(currentIndex - 1));
  nextBtn.addEventListener('click', () => showLightboxImage(currentIndex + 1));

  // Close behavior
  closeBtn.addEventListener('click', () => modal.close());
  modal.addEventListener('click', (e) => {
    // Close if clicking the dark background (not the image or buttons)
    if (e.target === modal || e.target.classList.contains('lightbox-content')) {
      modal.close();
    }
  });

  // Lightbox Keyboard Controls
  modal.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      showLightboxImage(currentIndex - 1);
    } else if (e.key === 'ArrowRight' || e.key === ' ') {
      e.preventDefault(); // Prevents spacebar from scrolling the background
      showLightboxImage(currentIndex + 1);
    }
  });

  // Wipe data on close to prevent flashing
  // Wipe data on close to prevent flashing and restore scrolling
  modal.addEventListener('close', () => {
    modalImg.src = '';
    document.getElementById('lightbox-caption').innerHTML = '';
    document.getElementById('lightbox-desc').innerHTML = ''; // Clears the lore box
    
    // THE FIX: Unlock the background scroll
    document.body.style.overflow = ''; 
  });
}

/* =========================================
   8. MARKDOWN IMAGE ALBUM (CAROUSEL)
   ========================================= */
function initAlbums() {
  const albums = document.querySelectorAll('.doc-content ul.album');
  
  albums.forEach(album => {
    const slides = album.querySelectorAll('li');
    if (slides.length <= 1) return; 
    
    // Make the album focusable so keyboard events can target it
    album.setAttribute('tabindex', '0'); 
    
    let currentIndex = 0;
    slides[currentIndex].classList.add('active');
    
    const controls = document.createElement('div');
    controls.className = 'album-controls';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'album-btn';
    prevBtn.innerHTML = '&#10094;'; 
    prevBtn.setAttribute('aria-label', 'Previous image');
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'album-btn';
    nextBtn.innerHTML = '&#10095;'; 
    nextBtn.setAttribute('aria-label', 'Next image');
    
    controls.appendChild(prevBtn);
    controls.appendChild(nextBtn);
    
    const counter = document.createElement('div');
    counter.className = 'album-counter';
    counter.textContent = `1 / ${slides.length}`;
    
    album.appendChild(controls);
    album.appendChild(counter);
    
    function showSlide(index) {
      slides[currentIndex].classList.remove('active');
      currentIndex = (index + slides.length) % slides.length; 
      slides[currentIndex].classList.add('active');
      counter.textContent = `${currentIndex + 1} / ${slides.length}`;
    }
    
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(currentIndex - 1);
    });
    
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showSlide(currentIndex + 1);
    });
    
    // Album Keyboard Controls
    album.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault(); // Prevents page scrolling
        showSlide(currentIndex - 1);
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        showSlide(currentIndex + 1);
      }
    });
  });
}