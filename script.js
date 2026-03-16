document.addEventListener('DOMContentLoaded', () => {
    // -------------------------------------------------------------
    // Courses Tabs Logic
    // -------------------------------------------------------------
    const courseTabs = document.querySelectorAll('.course-tab');
    const coursePanels = document.querySelectorAll('.course-panel');

    courseTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active state from all tabs and panels
            courseTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            coursePanels.forEach(p => p.classList.remove('active'));

            // Add active state to clicked tab
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            // Show corresponding panel
            const panelId = tab.getAttribute('aria-controls');
            const targetPanel = document.getElementById(panelId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // -------------------------------------------------------------
    // Scroll to Top Button Logic
    // -------------------------------------------------------------
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // -------------------------------------------------------------
    // Admission Modal Logic
    // -------------------------------------------------------------
    const modal = document.getElementById('admissionModal');
    const modalTriggers = document.querySelectorAll('.js-open-modal');
    const closeModalBtn = document.getElementById('closeModal');

    if (modal && modalTriggers && closeModalBtn) {
        const openModal = (e) => {
            e.preventDefault();
            const program = e.currentTarget.getAttribute('data-program');
            const programSelect = document.getElementById('modal-program');
            
            if (program && programSelect) {
                programSelect.value = program;
            } else if (programSelect) {
                programSelect.value = ""; // Default to "Select a program" for generic buttons
            }
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        };

        const closeModal = () => {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        };

        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', openModal);
        });

        closeModalBtn.addEventListener('click', closeModal);

        // Close on clicking overlay
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // -------------------------------------------------------------
    // EmailJS Initialisation
    // -------------------------------------------------------------
    emailjs.init("KCLDqvxFc09RZMMLk");

    // -------------------------------------------------------------
    // Contact Form — EmailJS Submission
    // -------------------------------------------------------------
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const submitBtn = document.getElementById('contact-submit-btn');
            const originalHTML = submitBtn.innerHTML;

            // Disable button and show sending state
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';

            // Collect field values
            const name    = document.getElementById('name').value;
            const email   = document.getElementById('email').value;
            const phone   = document.getElementById('phone').value;
            const program = document.getElementById('program').value;
            const message = document.getElementById('message').value;

            // Send via EmailJS
            emailjs.send("service_rcztqrn", "template_ingxxq9", {
                name:    name,
                email:   email,
                phone:   phone,
                program: program,
                message: message
            })
            .then(function () {
                alert('Admission enquiry sent successfully');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalHTML;
            })
            .catch(function (error) {
                alert('Failed to send enquiry');
                console.error('EmailJS error:', error);
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalHTML;
            });
        });
    }

    // -------------------------------------------------------------
    // Modal Form Submission (keeps existing UX, no EmailJS)
    // -------------------------------------------------------------
    const modalForm = document.getElementById('modalForm');
    if (modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = modalForm.querySelector('button[type="submit"]');
            const originalHTML = submitBtn.innerHTML;

            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';

            setTimeout(() => {
                alert('Thank you! Your enquiry has been received. Our team will contact you soon.');
                modalForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalHTML;

                if (modal && modal.classList.contains('active')) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }, 1000);
        });
    }
});
