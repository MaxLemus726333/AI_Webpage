// Select/Deselect All functionality for Email Preferences
const selectAllBtn = document.getElementById('selectAllBtn');
const deselectAllBtn = document.getElementById('deselectAllBtn');
const emailCheckboxes = [
    document.getElementById('criticalAlerts'),
    document.getElementById('specialOffers'),
    document.getElementById('irsNotifications'),
    document.getElementById('monthlyNewsletter')
];

if (selectAllBtn) {
    selectAllBtn.addEventListener('click', function() {
        emailCheckboxes.forEach(cb => { if (cb) cb.checked = true; });
    });
}
if (deselectAllBtn) {
    deselectAllBtn.addEventListener('click', function() {
        emailCheckboxes.forEach(cb => { if (cb) cb.checked = false; });
    });
}
// Contact form handler
const contactForm = document.getElementById('contactForm');
const formAlert = document.getElementById('formAlert');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        formAlert.innerHTML = '<div class="alert alert-success">Thank you for contacting us!</div>';
        this.reset();
    });
}

// Email Preferences form handler
const emailPreferencesForm = document.getElementById('emailPreferencesForm');
const preferencesAlert = document.getElementById('preferencesAlert');
if (emailPreferencesForm) {
    emailPreferencesForm.addEventListener('submit', function(e) {
        preferencesAlert.classList.remove('d-none');
        setTimeout(() => {
            preferencesAlert.classList.add('d-none');
        }, 2000);
        // Allow default form submission to action_page.php
    });
}
