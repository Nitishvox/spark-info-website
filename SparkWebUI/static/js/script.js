// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 0
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-particles');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Interactive hover effects for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.component-card, .use-case-card, .feature-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Floating animation for hero cards
document.addEventListener('DOMContentLoaded', function() {
    const floatingCards = document.querySelectorAll('.floating-card');
    
    floatingCards.forEach((card, index) => {
        // Add random floating animation with different delays
        const delay = index * 0.5;
        const duration = 3 + (index * 0.5);
        
        card.style.animationDelay = `${delay}s`;
        card.style.animationDuration = `${duration}s`;
    });
});

// Intersection Observer for advanced animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Add stagger effect for multiple elements
            const children = entry.target.querySelectorAll('.stagger-item');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('animate-in');
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe sections for advanced animations
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.stat-item h3');
    
    counters.forEach(counter => {
        const target = counter.innerText;
        const isNumber = !isNaN(target.replace(/[x+∞]/g, ''));
        
        if (isNumber && target !== '∞') {
            const finalNumber = parseInt(target.replace(/[x+]/g, ''));
            let currentNumber = 0;
            const increment = finalNumber / 50;
            
            const timer = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= finalNumber) {
                    counter.innerText = target;
                    clearInterval(timer);
                } else {
                    counter.innerText = Math.floor(currentNumber) + (target.includes('x') ? 'x' : '');
                }
            }, 30);
        }
    });
}

// Trigger counter animation when conclusion section is visible
const conclusionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            conclusionObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const conclusionSection = document.getElementById('conclusion');
    if (conclusionSection) {
        conclusionObserver.observe(conclusionSection);
    }
});

// Mobile menu enhancement
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});

// Performance optimization - lazy load animations
const lazyElements = document.querySelectorAll('.lazy-load');
const lazyObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
            lazyObserver.unobserve(entry.target);
        }
    });
});

lazyElements.forEach(element => {
    lazyObserver.observe(element);
});

// Add dynamic gradient backgrounds
document.addEventListener('DOMContentLoaded', function() {
    const gradientSections = document.querySelectorAll('.bg-gradient');
    
    gradientSections.forEach(section => {
        section.addEventListener('mousemove', function(e) {
            const rect = section.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;
            
            section.style.background = `
                linear-gradient(135deg, 
                    hsl(${15 + xPercent * 0.5}, 85%, ${55 + yPercent * 0.2}%) 0%, 
                    hsl(${5 + yPercent * 0.3}, 80%, ${50 + xPercent * 0.1}%) 100%)
            `;
        });
        
        section.addEventListener('mouseleave', function() {
            section.style.background = 'var(--gradient-primary)';
        });
    });
});

// Scroll progress indicator
document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--gradient-primary);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
});

// Hero title fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroTitle.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        
        // Fade in after a short delay
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Animated Progress Bars for Performance Metrics
function animateMetricBars() {
    const metricBars = document.querySelectorAll('.metric-bar');
    
    metricBars.forEach(bar => {
        const fill = bar.querySelector('.metric-fill');
        const percentage = bar.dataset.percentage || 100;
        
        // Set CSS custom property for animation
        fill.style.setProperty('--percentage', percentage + '%');
        
        // Start animation
        setTimeout(() => {
            fill.style.width = percentage + '%';
        }, 500);
    });
}

// Trigger metric bar animation when performance section is visible
const performanceObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateMetricBars();
            performanceObserver.disconnect();
        }
    });
}, { threshold: 0.3 });

document.addEventListener('DOMContentLoaded', function() {
    const performanceSection = document.getElementById('performance');
    if (performanceSection) {
        performanceObserver.observe(performanceSection);
    }
});

// Interactive Operation Tooltips
document.addEventListener('DOMContentLoaded', function() {
    const operations = document.querySelectorAll('.interactive-op');
    
    operations.forEach(op => {
        op.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'operation-tooltip';
            tooltip.textContent = getOperationDescription(this.textContent);
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 8px 12px;
                border-radius: 8px;
                font-size: 0.8rem;
                white-space: nowrap;
                z-index: 1000;
                pointer-events: none;
                top: -40px;
                left: 50%;
                transform: translateX(-50%);
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            this.style.position = 'relative';
            this.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.style.opacity = '1';
            }, 100);
        });
        
        op.addEventListener('mouseleave', function() {
            const tooltip = this.querySelector('.operation-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});

function getOperationDescription(operation) {
    const descriptions = {
        'map': 'Transform each element',
        'filter': 'Select elements matching condition',
        'reduceByKey': 'Combine values by key',
        'collect': 'Return all elements to driver',
        'count': 'Count number of elements',
        'save': 'Save RDD to storage',
        'groupBy': 'Group elements by key',
        'join': 'Join two RDDs',
        'distinct': 'Remove duplicate elements',
        'take': 'Return first N elements',
        'reduce': 'Aggregate all elements',
        'foreach': 'Apply function to each element'
    };
    
    return descriptions[operation] || 'Spark operation';
}

// Enhanced Code Example Interactions
document.addEventListener('DOMContentLoaded', function() {
    const codeCards = document.querySelectorAll('.code-example-card');
    
    codeCards.forEach(card => {
        const codeContent = card.querySelector('.code-content pre');
        
        // Add copy functionality
        const copyButton = document.createElement('button');
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        copyButton.className = 'copy-btn';
        copyButton.style.cssText = `
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255, 107, 53, 0.8);
            color: white;
            border: none;
            border-radius: 6px;
            padding: 8px 12px;
            cursor: pointer;
            opacity: 0;
            transition: all 0.3s ease;
            z-index: 10;
        `;
        
        const codeHeader = card.querySelector('.code-header');
        codeHeader.style.position = 'relative';
        codeHeader.appendChild(copyButton);
        
        card.addEventListener('mouseenter', function() {
            copyButton.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            copyButton.style.opacity = '0';
        });
        
        copyButton.addEventListener('click', function() {
            const codeText = codeContent.textContent;
            navigator.clipboard.writeText(codeText).then(() => {
                copyButton.innerHTML = '<i class="fas fa-check"></i>';
                copyButton.style.background = '#28a745';
                
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                    copyButton.style.background = 'rgba(255, 107, 53, 0.8)';
                }, 2000);
            });
        });
        
        // Add line numbers
        const lines = codeContent.textContent.split('\n');
        const lineNumbers = document.createElement('div');
        lineNumbers.className = 'line-numbers';
        lineNumbers.style.cssText = `
            position: absolute;
            left: 0;
            top: 0;
            padding: 25px 15px;
            background: #2d2d2d;
            color: #666;
            font-family: 'JetBrains Mono', monospace;
            font-size: 0.85rem;
            line-height: 1.6;
            user-select: none;
            border-right: 1px solid #404040;
        `;
        
        lineNumbers.innerHTML = lines.map((_, i) => `<div>${i + 1}</div>`).join('');
        
        const codeContentDiv = card.querySelector('.code-content');
        codeContentDiv.style.position = 'relative';
        codeContentDiv.appendChild(lineNumbers);
        
        // Adjust code padding to account for line numbers
        codeContent.style.paddingLeft = '60px';
    });
});

// Architecture Component Interactions
document.addEventListener('DOMContentLoaded', function() {
    const archComponents = document.querySelectorAll('.arch-component');
    
    archComponents.forEach(component => {
        component.addEventListener('click', function() {
            // Add pulse effect
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'componentPulse 0.5s ease-in-out';
            }, 10);
            
            // Show additional info
            const info = getComponentInfo(this.querySelector('h5').textContent);
            showComponentModal(info);
        });
    });
});

function getComponentInfo(componentName) {
    const info = {
        'Driver Program': {
            title: 'Driver Program',
            description: 'The main application that contains the SparkContext and coordinates the execution of Spark applications.',
            details: [
                'Contains the main() function',
                'Creates SparkContext',
                'Defines transformations and actions',
                'Sends tasks to executors'
            ]
        },
        'Cluster Manager': {
            title: 'Cluster Manager',
            description: 'Responsible for allocating resources across applications and managing the cluster.',
            details: [
                'Resource allocation',
                'Node management',
                'Application scheduling',
                'Supports YARN, Mesos, Kubernetes'
            ]
        },
        'Worker Nodes': {
            title: 'Worker Nodes',
            description: 'Nodes in the cluster that run executor processes and store data.',
            details: [
                'Run executor processes',
                'Store RDD partitions',
                'Execute tasks',
                'Report status to driver'
            ]
        }
    };
    
    return info[componentName] || { title: componentName, description: 'Spark component', details: [] };
}

function showComponentModal(info) {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    // Create modal content
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        border-radius: 20px;
        padding: 40px;
        max-width: 500px;
        margin: 20px;
        color: white;
        border: 2px solid var(--spark-orange);
        transform: scale(0.8);
        transition: transform 0.3s ease;
    `;
    
    modal.innerHTML = `
        <h3 style="color: var(--spark-orange); margin-bottom: 20px;">${info.title}</h3>
        <p style="margin-bottom: 25px; line-height: 1.6;">${info.description}</p>
        <ul style="list-style: none; padding: 0;">
            ${info.details.map(detail => `
                <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
                    <i class="fas fa-check" style="position: absolute; left: 0; color: var(--spark-orange);"></i>
                    ${detail}
                </li>
            `).join('')}
        </ul>
        <button onclick="this.closest('.modal-overlay').remove()" style="
            background: var(--gradient-primary);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 25px;
            margin-top: 25px;
            cursor: pointer;
            font-weight: 600;
        ">Close</button>
    `;
    
    overlay.className = 'modal-overlay';
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Animate in
    setTimeout(() => {
        overlay.style.opacity = '1';
        modal.style.transform = 'scale(1)';
    }, 10);
    
    // Close on background click
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.remove();
        }
    });
}

// Enhanced particle system for hero section
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-system';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
    `;
    
    heroSection.appendChild(particleContainer);
    
    // Create floating particles with different types
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const type = Math.random();
        let particleStyle = '';
        
        if (type < 0.6) {
            // Regular particles
            particleStyle = `
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(255, 107, 53, ${Math.random() * 0.5 + 0.2});
                border-radius: 50%;
            `;
        } else if (type < 0.8) {
            // Star particles
            particleStyle = `
                width: 6px;
                height: 6px;
                background: rgba(255, 107, 53, 0.8);
                clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
            `;
        } else {
            // Plus particles
            particleStyle = `
                width: 8px;
                height: 8px;
                background: rgba(233, 75, 60, 0.6);
                clip-path: polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%);
            `;
        }
        
        particle.style.cssText = `
            position: absolute;
            ${particleStyle}
            animation: particleFloat${Math.floor(Math.random() * 3)} ${Math.random() * 15 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        particleContainer.appendChild(particle);
    }
    
    // Add enhanced CSS animations for particles
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes particleFloat0 {
            0% { transform: translateY(0px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes particleFloat1 {
            0% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            50% { transform: translateY(-50vh) translateX(20px) rotate(180deg); }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(-20px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes particleFloat2 {
            0% { transform: translateY(0px) scale(1) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            25% { transform: translateY(-25vh) scale(1.2) rotate(90deg); }
            50% { transform: translateY(-50vh) scale(0.8) rotate(180deg); }
            75% { transform: translateY(-75vh) scale(1.1) rotate(270deg); }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) scale(1) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(particleStyle);
});

// Interactive 3D Scroll Animations for Code Examples
document.addEventListener('DOMContentLoaded', function() {
    const codeExamplesSection = document.getElementById('code-examples');
    const codeCards = document.querySelectorAll('.code-example-card');
    const floating3DElements = document.querySelectorAll('.code-3d-element');
    const bgLayers = document.querySelectorAll('.code-examples-bg-layer');
    
    let sectionTop = 0;
    let sectionHeight = 0;
    
    function updateSectionBounds() {
        if (codeExamplesSection) {
            const rect = codeExamplesSection.getBoundingClientRect();
            sectionTop = window.scrollY + rect.top;
            sectionHeight = rect.height;
        }
    }
    
    function apply3DScrollEffects() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress through the section
        const sectionProgress = Math.max(0, Math.min(1, 
            (scrollY - sectionTop + windowHeight) / (sectionHeight + windowHeight)
        ));
        
        const centerProgress = Math.max(0, Math.min(1,
            (scrollY - sectionTop + windowHeight * 0.5) / sectionHeight
        ));
        
        // Apply 3D transforms to code cards based on scroll position
        codeCards.forEach((card, index) => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.top + cardRect.height / 2;
            const distanceFromCenter = (cardCenter - windowHeight / 2) / (windowHeight / 2);
            
            // Calculate 3D transforms based on scroll position
            const rotateX = distanceFromCenter * 15; // Tilt based on distance from center
            const rotateY = (centerProgress - 0.5) * 20; // Rotate based on scroll progress
            const translateZ = Math.max(0, (1 - Math.abs(distanceFromCenter)) * 50);
            const scale = 1 + (1 - Math.abs(distanceFromCenter)) * 0.1;
            
            // Apply smooth 3D transformation
            if (cardRect.top < windowHeight && cardRect.bottom > 0) {
                card.style.transform = `
                    translateZ(${translateZ}px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg) 
                    scale(${scale})
                `;
                card.style.opacity = Math.max(0.3, 1 - Math.abs(distanceFromCenter) * 0.5);
            }
        });
        
        // Animate floating 3D elements
        floating3DElements.forEach((element, index) => {
            const baseRotation = (sectionProgress * 360) + (index * 72); // 72 degrees apart
            const wobble = Math.sin(scrollY * 0.01 + index) * 10;
            const depth = Math.sin(scrollY * 0.005 + index) * 30;
            
            element.style.transform = `
                translateZ(${depth}px)
                rotateX(${baseRotation + wobble}deg)
                rotateY(${baseRotation * 1.5}deg)
                rotateZ(${baseRotation * 0.5}deg)
            `;
        });
        
        // Animate background layers
        bgLayers.forEach((layer, index) => {
            const moveX = Math.sin(scrollY * 0.002 + index) * 20;
            const moveY = Math.cos(scrollY * 0.003 + index) * 15;
            const rotation = scrollY * 0.05 + (index * 45);
            
            layer.style.transform = `
                translateX(${moveX}px)
                translateY(${moveY}px)
                translateZ(${-100 - index * 100}px)
                rotate(${rotation}deg)
            `;
        });
    }
    
    // Mouse movement 3D effect
    function handleMouseMove(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        codeCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const cardCenterX = rect.left + rect.width / 2;
                const cardCenterY = rect.top + rect.height / 2;
                
                const deltaX = (e.clientX - cardCenterX) / rect.width;
                const deltaY = (e.clientY - cardCenterY) / rect.height;
                
                const rotateY = deltaX * 10;
                const rotateX = -deltaY * 10;
                
                card.style.setProperty('--mouse-rotate-x', `${rotateX}deg`);
                card.style.setProperty('--mouse-rotate-y', `${rotateY}deg`);
            }
        });
    }
    
    // Enhanced code line interactions
    function enhanceCodeLines() {
        codeCards.forEach(card => {
            const codeContent = card.querySelector('pre code');
            if (codeContent) {
                const lines = codeContent.innerHTML.split('\n');
                
                codeContent.innerHTML = lines.map((line, index) => {
                    return `<div class="code-line-3d" data-line="${index + 1}">${line}</div>`;
                }).join('');
                
                // Add hover effects to individual lines
                const codeLines = card.querySelectorAll('.code-line-3d');
                codeLines.forEach((line, index) => {
                    line.addEventListener('mouseenter', function() {
                        this.style.transform = `translateZ(8px) translateX(5px)`;
                        this.style.boxShadow = '0 2px 15px rgba(255, 107, 53, 0.4)';
                        this.style.background = 'rgba(255, 107, 53, 0.1)';
                        this.style.borderRadius = '4px';
                        this.style.padding = '2px 8px';
                        this.style.margin = '1px 0';
                    });
                    
                    line.addEventListener('mouseleave', function() {
                        this.style.transform = '';
                        this.style.boxShadow = '';
                        this.style.background = '';
                        this.style.borderRadius = '';
                        this.style.padding = '';
                        this.style.margin = '';
                    });
                });
            }
        });
    }
    
    // Initialize
    updateSectionBounds();
    enhanceCodeLines();
    
    // Event listeners
    window.addEventListener('scroll', apply3DScrollEffects);
    window.addEventListener('resize', updateSectionBounds);
    codeExamplesSection.addEventListener('mousemove', handleMouseMove);
    
    // Initial call
    apply3DScrollEffects();
});

// Advanced particle system specifically for code examples
document.addEventListener('DOMContentLoaded', function() {
    const codeSection = document.getElementById('code-examples');
    
    // Create advanced 3D particles
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'code-3d-particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 3}px;
            height: ${Math.random() * 6 + 3}px;
            background: rgba(255, 107, 53, ${Math.random() * 0.7 + 0.3});
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particle3DFloat ${Math.random() * 20 + 15}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            transform-style: preserve-3d;
        `;
        
        codeSection.appendChild(particle);
    }
    
    // Add particle animation styles
    const particleStyles = document.createElement('style');
    particleStyles.textContent = `
        @keyframes particle3DFloat {
            0% {
                transform: translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            25% {
                transform: translateY(-25vh) translateZ(20px) rotateX(90deg) rotateY(90deg);
            }
            50% {
                transform: translateY(-50vh) translateZ(40px) rotateX(180deg) rotateY(180deg);
            }
            75% {
                transform: translateY(-75vh) translateZ(20px) rotateX(270deg) rotateY(270deg);
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateZ(0px) rotateX(360deg) rotateY(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyles);
});

// Advanced scroll effects with stagger animations
document.addEventListener('DOMContentLoaded', function() {
    const staggerElements = document.querySelectorAll('.feature-card, .component-card, .use-case-card');
    
    const staggerObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const container = entry.target.closest('.row');
                const cards = container.querySelectorAll('.feature-card, .component-card, .use-case-card');
                
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.transform = 'translateY(0) scale(1)';
                        card.style.opacity = '1';
                    }, index * 150);
                });
                
                staggerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    // Initially hide elements for stagger effect
    staggerElements.forEach(element => {
        element.style.transform = 'translateY(30px) scale(0.95)';
        element.style.opacity = '0';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        if (element.closest('.row')) {
            staggerObserver.observe(element.closest('.row'));
        }
    });
});
