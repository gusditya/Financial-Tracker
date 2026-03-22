/**
 * Premium Animations for ArthaNavigate
 * Inspired by flat-white.framer.website
 */

export function initAnimations() {
    initScrollLine();
    initSmoothReveal();
    initCountUp();
    initStaggeredEffects();
}

/**
 * Vertical line that grows as the user scrolls
 */
function initScrollLine() {
    const line = document.createElement('div');
    line.className = 'fixed left-8 top-0 w-[1px] bg-charcoal/10 z-[40] transition-transform duration-300 origin-top hidden lg:block';
    line.style.height = '100vh';
    line.id = 'scroll-line';
    
    const progress = document.createElement('div');
    progress.className = 'absolute top-0 left-0 w-full bg-bullion transition-all duration-300 origin-top';
    progress.style.height = '0%';
    line.appendChild(progress);
    
    document.body.appendChild(line);

    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progress.style.height = `${scrollPercent}%`;
    });
}

/**
 * Smooth character/word reveal for headings
 */
function initSmoothReveal() {
    const revealTargets = document.querySelectorAll('.reveal-text, .font-serif');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, { threshold: 0.1 });

    revealTargets.forEach(target => {
        // Only apply if not already animated
        if (!target.classList.contains('reveal-active')) {
            observer.observe(target);
        }
    });
}

/**
 * Enhanced Count Up animation for stats
 */
function initCountUp() {
    const statNumbers = document.querySelectorAll('[data-count-up]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.getAttribute('data-count-up'));
                const duration = 2000;
                let start = 0;
                const startTime = performance.now();

                const animate = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Out-cubic easing
                    const easedProgress = 1 - Math.pow(1 - progress, 3);
                    
                    const current = Math.floor(easedProgress * target);
                    el.textContent = current + (el.getAttribute('data-suffix') || '');

                    if (progress < 1) {
                        requestAnimationFrame(animate);
                    } else {
                        el.textContent = target + (el.getAttribute('data-suffix') || '');
                    }
                };

                requestAnimationFrame(animate);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(num => observer.observe(num));
}

/**
 * Staggered cards reveal
 */
function initStaggeredEffects() {
    const containers = document.querySelectorAll('.stagger-container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.querySelectorAll('.staggered-item');
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('stagger-active');
                    }, index * 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    containers.forEach(container => {
        // If already in view (for hero area)
        if (container.getBoundingClientRect().top < window.innerHeight) {
            const items = container.querySelectorAll('.staggered-item');
            items.forEach((item, index) => {
                setTimeout(() => item.classList.add('stagger-active'), index * 100);
            });
        } else {
            observer.observe(container);
        }
    });
}
