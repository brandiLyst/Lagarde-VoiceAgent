// ==================== Mobile Navigation ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== Navbar Scroll Effect ====================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ==================== Counter Animation ====================
const counters = document.querySelectorAll('.stat-number');
const speed = 200; // Animation speed

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animateCounter(counter), 1);
    } else {
        counter.innerText = target;
    }
};

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            counter.innerText = '0';
            animateCounter(counter);
            observer.unobserve(counter);
        }
    });
}, observerOptions);

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// ==================== Scroll Animations ====================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .stat-card, .assistant-card, .info-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(element);
    });
};

// ==================== Form Handling ====================
const contactForm = document.querySelector('.contact-form form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    
    // Simulate form submission
    const button = contactForm.querySelector('.btn-primary');
    const originalText = button.textContent;
    
    button.textContent = 'Wird gesendet...';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        button.textContent = 'Nachricht gesendet! ✓';
        button.style.background = '#28a745';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
        }, 3000);
    }, 2000);
});

// ==================== Parallax Effect ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== Active Nav Link on Scroll ====================
const sections = document.querySelectorAll('section[id]');

const updateActiveNavLink = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
};

window.addEventListener('scroll', updateActiveNavLink);

// ==================== Cursor Effect (Optional) ====================
const createCursorFollower = () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-follower');
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    const animateCursor = () => {
        const distX = mouseX - cursorX;
        const distY = mouseY - cursorY;

        cursorX += distX * 0.1;
        cursorY += distY * 0.1;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        requestAnimationFrame(animateCursor);
    };

    animateCursor();
};

// ==================== Floating Animation for Service Icons ====================
const createFloatingAnimation = () => {
    const icons = document.querySelectorAll('.service-icon');
    
    icons.forEach((icon, index) => {
        icon.style.animation = `float 3s ease-in-out ${index * 0.2}s infinite`;
    });
};

// Add floating keyframe animation via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    .cursor-follower {
        width: 20px;
        height: 20px;
        border: 2px solid var(--primary-red);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        mix-blend-mode: difference;
    }
    
    .nav-link.active {
        color: var(--primary-red);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ==================== Initialize Everything ====================
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    createFloatingAnimation();
    // Uncomment the line below if you want the cursor follower effect
    // createCursorFollower();
});

// ==================== Embed Instructions Alert ====================
window.addEventListener('load', () => {
    // Check if embed containers still have placeholders
    const chatbotEmbed = document.getElementById('chatbot-embed');
    const voicebotEmbed = document.getElementById('voicebot-embed');
    
    const hasPlaceholder = 
        chatbotEmbed.querySelector('.embed-placeholder') !== null ||
        voicebotEmbed.querySelector('.embed-placeholder') !== null;
    
    if (hasPlaceholder) {
        console.log('%c🤖 Embedding Instructions:', 'color: #dc143c; font-size: 16px; font-weight: bold;');
        console.log('%cTo embed your chatbot and voice bot:', 'color: #fff; font-size: 14px;');
        console.log('%c1. Open index.html', 'color: #808080; font-size: 12px;');
        console.log('%c2. Find the sections with id="chatbot-embed" and id="voicebot-embed"', 'color: #808080; font-size: 12px;');
        console.log('%c3. Replace the .embed-placeholder div with your embedding code', 'color: #808080; font-size: 12px;');
        console.log('%c4. Save and refresh!', 'color: #808080; font-size: 12px;');
    }
});


