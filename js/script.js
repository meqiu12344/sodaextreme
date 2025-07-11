document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-list');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active'); // Optional: add active state to hamburger
        });

        // Close menu when a link is clicked (for single-page navigation)
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Dynamic year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animations
    const animateElements = document.querySelectorAll('.animate-in, .animate-fade-in, .animate-fade-up');

    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // BUTLE CO2 ANIMACJA
    const btnHomeLeft = document.getElementById('btn-home-left');
    const btnHomeRight = document.getElementById('btn-home-right');
    const cylinderLeft = document.getElementById('cylinder-left');
    const cylinderRight = document.getElementById('cylinder-right');

    if (btnHomeLeft && btnHomeRight && cylinderLeft && cylinderRight) {
        // Funkcja do aktywowania butli

        const activateLeftCylinder = () => {
            cylinderLeft.classList.add('active');
        };

        const activateRightCylinder = () => {
            cylinderRight.classList.add('active');
        }

        // Funkcja do dezaktywowania butli
        const deactivateCylinders = () => {
            cylinderLeft.classList.remove('active');
            cylinderRight.classList.remove('active');
        };

        // Nasłuchiwanie na przycisk lewy
        btnHomeLeft.addEventListener('mouseover', activateLeftCylinder);
        btnHomeLeft.addEventListener('mouseout', deactivateCylinders);

        // Nasłuchiwanie na przycisk prawy
        btnHomeRight.addEventListener('mouseover', activateRightCylinder);
        btnHomeRight.addEventListener('mouseout', deactivateCylinders);

        // Opcjonalnie: aktywuj butle domyślnie po załadowaniu, a dezaktywuj po przewinięciu
        // Możesz dodać logikę, aby butle animowały się np. po 1 sekundzie od załadowania strony.
        // setTimeout(activateCylinders, 1000); // Wysuń butle po 1 sekundzie od załadowania strony
        // Możesz też dodać obserwatora IntersectionObserver do sekcji hero,
        // aby butle pojawiały się tylko gdy hero jest widoczne.
    }
});