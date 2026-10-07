// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const closeMenu = () => {
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open navigation menu');
};

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isExpanded));
    hamburger.setAttribute('aria-label', isExpanded ? 'Open navigation menu' : 'Close navigation menu');
    navMenu.classList.toggle('active', !isExpanded);
});

// Close mobile menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        hamburger.focus();
    }
});

const childServiceDetails = {
    'early-interventions': {
        description: 'Early intervention supports young children as they develop communication, play, movement, and everyday learning skills. Activities are chosen around each child’s age, interests, and needs.',
        examples: ['Play-based learning activities', 'Support for communication and everyday routines'],
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=80'
    },
    'speech-therapy': {
        description: 'Speech and language sessions can support a child’s understanding, expression, speech sounds, and social communication. A therapist works with the child and family to set practical goals.',
        examples: ['Building vocabulary and sentence skills', 'Practising speech sounds and communication'],
        image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80'
    },
    'occupational-therapy': {
        description: 'Occupational therapy helps children practise skills for everyday participation at home, school, and during play. Activities are selected to suit the child’s abilities and priorities.',
        examples: ['Fine-motor and hand-skill activities', 'Practising self-care and daily routines'],
        image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=900&q=80'
    },
    'behavioral-therapy': {
        description: 'Behavioral support helps families understand a child’s needs and practise helpful skills and routines. Goals and strategies are planned with the family and reviewed over time.',
        examples: ['Supporting communication and positive routines', 'Practising age-appropriate social and daily-living skills'],
        image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80'
    },
    'learning-support': {
        description: 'Learning support uses structured, individualised practice to help children build confidence with school-related skills. The approach is adapted to a child’s learning profile.',
        examples: ['Reading, writing, or number-skill practice', 'Strategies for focus and organising schoolwork'],
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80'
    },
    'sensory-integration': {
        description: 'Sensory-focused activities are selected to help a child participate more comfortably in play and everyday routines. A trained therapist chooses activities based on an individual assessment.',
        examples: ['Guided movement and play activities', 'Practical ideas for home and school routines'],
        image: 'https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=900&q=80'
    },
    'pediatric-physiotherapy': {
        description: 'Pediatric physiotherapy focuses on movement and physical skills through activities suited to a child’s development and goals.',
        examples: ['Practising balance, coordination, and mobility', 'Activities to build strength and movement confidence'],
        image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=900&q=80'
    },
    'developmental-assessments': {
        description: 'A developmental assessment looks at a child’s current skills and identifies areas where additional support may be useful. Findings are discussed with the family and interpreted in context.',
        examples: ['Reviewing developmental skills across areas', 'Discussing observations and possible next steps'],
        image: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=80'
    },
    'iq-assessments': {
        description: 'An IQ assessment uses standardised activities to understand aspects of a child’s thinking and learning. Results are interpreted by a qualified professional and explained to the family.',
        examples: ['Age-appropriate reasoning and problem-solving tasks', 'A discussion of results and learning considerations'],
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=900&q=80'
    },
    'cbt-aba-therapy': {
        description: 'Cognitive behavioural therapy (CBT) and applied behaviour analysis (ABA) are different approaches. The professional will discuss which approach, if any, is appropriate for the child and family.',
        examples: ['CBT may practise coping and problem-solving skills', 'ABA may focus on agreed, observable learning goals'],
        image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    },
    'screening-assessments': {
        description: 'Screening uses structured questions or tools to check whether a child may benefit from further evaluation. A screening result is not a diagnosis.',
        examples: ['Discussing developmental or behavioural concerns', 'Guidance on whether a fuller assessment may help'],
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80'
    },
    'emotional-behavioral-assessments': {
        description: 'An emotional and behavioural assessment helps build a broader picture of a child’s experiences, strengths, and support needs across settings.',
        examples: ['Understanding concerns shared by the child and family', 'Discussing practical support and possible next steps'],
        image: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=900&q=80'
    },
    'nios-school': {
        description: 'To facilitate educational opportunities through NIOS or other appropriately recognised educational pathways for learners who require flexible or alternative schooling arrangements.',
        examples: ['Exploring flexible or alternative schooling pathways', 'Discussing educational options suited to the learner'],
        image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80'
    },
    'inclusive-sports-recreation': {
        description: 'To promote adaptive and inclusive sports, physical education, yoga, meditation, music and recreational activities.',
        examples: ['Adaptive sports and inclusive physical education', 'Yoga, meditation, music and recreational activities'],
        image: 'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=900&q=80'
    }
};

const adultServiceDetails = {
    'neuropsychological-assessments': {
        description: 'Neuropsychological assessment may include one or more of the following batteries, selected by the clinician according to the referral question and the individual’s needs:',
        examplesTitle: 'Assessment batteries',
        examples: [
            'NIMHANS Neuropsychological Battery',
            'AIIMS Neuropsychological Battery',
            'PGI Battery of Brain Dysfunction (PGI-BBD)',
            'Geriatric neuropsychological battery',
            'Epilepsy batteries'
        ]
    }
};

const serviceDialog = document.querySelector('.service-dialog');
const serviceDialogTitle = document.getElementById('service-dialog-title');
const serviceDialogBody = serviceDialog.querySelector('.service-dialog-body');

const showServiceDetails = (button, service) => {
    const cardTitle = button.closest('.service-card').querySelector('h4').textContent;
    const content = [];
    if (service.image) {
        const figure = document.createElement('figure');
        const image = document.createElement('img');
        const caption = document.createElement('figcaption');
        image.src = service.image;
        image.alt = `Illustrative image for ${cardTitle}`;
        image.loading = 'lazy';
        image.referrerPolicy = 'no-referrer';
        caption.textContent = 'Illustrative image';
        figure.append(image, caption);
        content.push(figure);
    }

    const description = document.createElement('p');
    const examplesTitle = document.createElement('h3');
    const examples = document.createElement('ul');
    const note = document.createElement('p');
    description.textContent = service.description;
    examplesTitle.textContent = service.examplesTitle || 'What this may include';
    service.examples.forEach(example => {
        const item = document.createElement('li');
        item.textContent = example;
        examples.appendChild(item);
    });
    note.className = 'service-dialog-note';
    note.textContent = service.note || 'A qualified professional can discuss suitable support after learning about the individual’s needs.';

    content.push(description, examplesTitle, examples, note);
    serviceDialogTitle.textContent = cardTitle;
    serviceDialogBody.replaceChildren(...content);
    serviceDialog.showModal();
};

document.querySelectorAll('[data-child-service]').forEach(button => {
    button.addEventListener('click', () => {
        const service = childServiceDetails[button.dataset.childService];
        if (service) {
            showServiceDetails(button, service);
        }
    });
});

document.querySelectorAll('[data-adult-service]').forEach(button => {
    button.addEventListener('click', () => {
        const service = adultServiceDetails[button.dataset.adultService];
        if (service) {
            showServiceDetails(button, service);
        }
    });
});

serviceDialog.querySelector('.service-dialog-close').addEventListener('click', () => {
    serviceDialog.close();
});

serviceDialog.querySelector('.service-dialog-contact').addEventListener('click', () => {
    serviceDialog.close();
});

// Active link highlighting on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const { name, email, phone, service, message } = contactForm.elements;

        // Validate form
        if (![name, email, phone, service, message].every(field => field.value.trim())) {
            alert('Please fill in all fields');
            return;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards and team members
document.querySelectorAll('.service-card, .team-member, .highlight-item').forEach(el => {
    observer.observe(el);
});

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.type = 'button';
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #285b69;
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
    cursor: pointer;
    display: none;
    z-index: 99;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top functionality
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
});

// Hover effect for scroll top button
scrollTopBtn.addEventListener('mouseover', () => {
    scrollTopBtn.style.transform = 'scale(1.1)';
});

scrollTopBtn.addEventListener('mouseout', () => {
    scrollTopBtn.style.transform = 'scale(1)';
});

// Log page load
console.log('Dechen Rehabilitation Centre Website Loaded');