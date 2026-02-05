document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            header.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });

    // Sticky Header Effect
    window.addEventListener('scroll', () => {
        const srcollPos = window.scrollY;
        
        if (srcollPos > 100) {
            header.style.background = 'rgba(46, 2, 73, 0.95)';
            header.style.padding = '10px 0';
        } else {
            header.style.background = 'rgba(46, 2, 73, 0.8)';
            header.style.padding = '15px 0';
        }
    });

    // Smooth Scroll for Safari/Older Browsers (optional fallback)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
