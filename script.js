/* ═══════════════════════════════════════════════════════════════════════════
   HERO SECTIONS COLLECTION - INTERACTIVE SCRIPTS
   ═══════════════════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initScrollAnimations();
    initCardInteractions();
    initSmoothScroll();
});

/* ─────────────────────────────────────────────────────────────────────────────
   SCROLL-TRIGGERED ANIMATIONS
   ───────────────────────────────────────────────────────────────────────────── */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe collection items
    document.querySelectorAll('.preview-card, .empty-state').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(el);
    });

    // Add visible state styles
    const style = document.createElement('style');
    style.textContent = `
        .preview-card.visible, .empty-state.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Stagger animation for preview cards
    document.querySelectorAll('.preview-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
}

/* ─────────────────────────────────────────────────────────────────────────────
   CARD INTERACTIONS
   ───────────────────────────────────────────────────────────────────────────── */
function initCardInteractions() {
    const cards = document.querySelectorAll('.floating-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Pause animation on hover
            card.style.animationPlayState = 'paused';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.animationPlayState = 'running';
        });
    });

    // Preview card hover effect
    const previewCards = document.querySelectorAll('.preview-card');
    
    previewCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

/* ─────────────────────────────────────────────────────────────────────────────
   SMOOTH SCROLL
   ───────────────────────────────────────────────────────────────────────────── */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ─────────────────────────────────────────────────────────────────────────────
   FUTURE: HERO LOADER
   This function will be used to dynamically load hero sections
   ───────────────────────────────────────────────────────────────────────────── */
const HeroLoader = {
    heroes: [],
    
    async loadHeroes() {
        // Placeholder for future hero loading functionality
        // Will fetch hero data from a JSON file or API
        console.log('Hero loader ready. No heroes loaded yet.');
    },
    
    renderHero(heroData) {
        // Placeholder for rendering individual hero previews
        console.log('Render hero:', heroData);
    },
    
    filterByCategory(category) {
        // Placeholder for category filtering
        console.log('Filter by:', category);
    }
};

// Export for future use
window.HeroLoader = HeroLoader;
