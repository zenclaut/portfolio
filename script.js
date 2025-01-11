// Global variables
let sidebarTicking = false;
let dotsTicking = false;

// Sidebar visibility control
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const heroSection = document.querySelector('.hero-section');

let lastScrollY = window.scrollY;
let isScrollingDown = true;

function updateSidebarVisibility() {
    const heroHeight = heroSection.offsetHeight;
    const scrollY = window.scrollY;
    
    // Determine scroll direction
    isScrollingDown = scrollY > lastScrollY;
    lastScrollY = scrollY;

    // Check if we've scrolled past the hero section
    if (scrollY > heroHeight * 0.5) {
        if (!sidebar.classList.contains('visible')) {
            sidebar.classList.add('visible');
            mainContent.style.marginLeft = 'var(--sidebar-width)';
        }
    } else {
        if (sidebar.classList.contains('visible')) {
            sidebar.classList.remove('visible');
            mainContent.style.marginLeft = '0';
        }
    }
}

// Add scroll event listener with throttling for sidebar
document.addEventListener('scroll', () => {
    if (!sidebarTicking) {
        window.requestAnimationFrame(() => {
            updateSidebarVisibility();
            sidebarTicking = false;
        });
        sidebarTicking = true;
    }
});

// Initial check
updateSidebarVisibility();

// Navigation dots functionality
const sections = Array.from(document.querySelectorAll('.fullscreen-section'));
const navDots = document.querySelector('.nav-dots ul');

// Create navigation dots
function createNavigationDots() {
    // Clear existing dots
    navDots.innerHTML = '';

    // Create navigation dots for main sections
    [heroSection, ...sections].forEach((section, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.setAttribute('data-index', index);
        
        // Set tooltip text
        let tooltipText = section.classList.contains('hero-section') ? 'HOME' : section.getAttribute('id');
        a.setAttribute('data-tooltip', tooltipText.toUpperCase());
        
        if (index === 0) a.classList.add('active');
        
        li.appendChild(a);
        navDots.appendChild(li);
    });
}

// Call create navigation dots on load
document.addEventListener('DOMContentLoaded', createNavigationDots);

// Update active dot on scroll
function updateActiveDot() {
    const viewportMiddle = window.scrollY + (window.innerHeight / 2);
    const allSections = [heroSection, ...sections];
    
    // Find the current active section
    let activeIndex = 0;
    for (let i = 0; i < allSections.length; i++) {
        const section = allSections[i];
        const rect = section.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const absoluteBottom = absoluteTop + rect.height;
        
        if (viewportMiddle >= absoluteTop && viewportMiddle < absoluteBottom) {
            activeIndex = i;
            break;
        }
    }
    
    // Handle case when viewport is below last section
    if (viewportMiddle >= window.scrollY + allSections[allSections.length - 1].getBoundingClientRect().bottom) {
        activeIndex = allSections.length - 1;
    }
    
    // Update the active dot
    const dots = document.querySelectorAll('.nav-dots a');
    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Separate scroll event listener for nav dots
document.addEventListener('scroll', () => {
    if (!dotsTicking) {
        window.requestAnimationFrame(() => {
            updateActiveDot();
            dotsTicking = false;
        });
        dotsTicking = true;
    }
});

// Initial check for active dot
updateActiveDot();

// Smooth scroll to section when clicking nav dots
navDots.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName === 'A') {
        const index = parseInt(e.target.getAttribute('data-index'));
        const allSections = [heroSection, ...sections];
        const targetSection = allSections[index];
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding tab pane
            const tabId = button.getAttribute('data-tab');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
});

// Navigation highlighting
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    // Update active navigation link based on scroll position
    function updateActiveSection() {
        const fromTop = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (fromTop >= sectionTop && fromTop <= sectionTop + sectionHeight) {
                const sectionId = section.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Smooth scroll to section when clicking navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Update active section on scroll
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection(); // Initial check
});

// Add animation to skill items
const skillItems = document.querySelectorAll('.skill-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.5 });

skillItems.forEach(item => {
    item.style.opacity = 0;
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.3s ease-in-out';
    observer.observe(item);
});

// Video background handling
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('bgVideo');
    
    // Handle video loading errors
    video.addEventListener('error', function(e) {
        console.log('Video loading error:', e);
        // Fallback to gradient background is already in place via CSS
    });

    // Ensure video plays
    video.play().catch(function(error) {
        console.log("Video autoplay failed:", error);
        // Fallback to gradient background is already in place via CSS
    });
});

// Smooth section scrolling
document.addEventListener('DOMContentLoaded', function() {
    const allSections = [heroSection, ...sections];
    let isScrolling = false;
    let lastTime = 0;
    const scrollDelay = 1000; // 1 second delay between scrolls

    function smoothScrollTo(section) {
        if (!isScrolling) {
            isScrolling = true;
            section.scrollIntoView({ behavior: 'smooth' });
            
            setTimeout(() => {
                isScrolling = false;
            }, scrollDelay);
        }
    }

    function getCurrentSectionIndex() {
        const viewportMiddle = window.scrollY + (window.innerHeight / 2);
        
        for (let i = 0; i < allSections.length; i++) {
            const section = allSections[i];
            const rect = section.getBoundingClientRect();
            const absoluteTop = window.scrollY + rect.top;
            const absoluteBottom = absoluteTop + rect.height;
            
            if (viewportMiddle >= absoluteTop && viewportMiddle < absoluteBottom) {
                return i;
            }
        }
        
        if (viewportMiddle >= window.scrollY + allSections[allSections.length - 1].getBoundingClientRect().bottom) {
            return allSections.length - 1;
        }
        
        return 0;
    }

    window.addEventListener('wheel', function(e) {
        e.preventDefault();
        
        const currentTime = Date.now();
        if (currentTime - lastTime < scrollDelay) return;
        lastTime = currentTime;
        
        const currentIndex = getCurrentSectionIndex();
        
        if (e.deltaY > 0 && currentIndex < allSections.length - 1) {
            smoothScrollTo(allSections[currentIndex + 1]);
        } else if (e.deltaY < 0 && currentIndex > 0) {
            smoothScrollTo(allSections[currentIndex - 1]);
        }
    }, { passive: false });

    // Keyboard navigation
    window.addEventListener('keydown', function(e) {
        const currentTime = Date.now();
        if (currentTime - lastTime < scrollDelay) return;
        lastTime = currentTime;
        
        const currentIndex = getCurrentSectionIndex();
        
        if (e.key === 'ArrowDown' && currentIndex < allSections.length - 1) {
            e.preventDefault();
            smoothScrollTo(allSections[currentIndex + 1]);
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            e.preventDefault();
            smoothScrollTo(allSections[currentIndex - 1]);
        }
    });
});

// Timeline accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            timelineItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle active class on clicked item
            this.classList.toggle('active');
        });
    });
});