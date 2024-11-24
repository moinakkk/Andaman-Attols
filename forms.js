// Function for the "Send Message" button form
function submitFormOne() {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const travelDate = document.querySelector('input[name="travelDate"]').value;
    const pax = document.querySelector('input[name="pax"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    const subject = `Enquiry for Exotic Andaman - ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0ATravel Date: ${travelDate}%0D%0ANo. of People: ${pax}%0D%0AMessage: ${message}`;

    window.location.href = `mailto:andamanattols@gmail.com?subject=${subject}&body=${body}`;
    return false; // Prevent actual form submission
}

// Function for the "Submit" button form (Leave a Reply)
function submitFormTwo() {
    const name = document.querySelector('.leave-reply input[placeholder="  Your Name"]').value;
    const email = document.querySelector('.leave-reply input[placeholder="  Email Address"]').value;
    const message = document.querySelector('.leave-reply textarea').value;

    const subject = `Reply to Exotic Andaman - ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    window.location.href = `mailto:andamanattols@gmail.com?subject=${subject}&body=${body}`;
    return false; // Prevent actual form submission
}

// Event listeners for form submissions
document.querySelector('.card .btn-submit').addEventListener('click', submitFormOne);
document.querySelector('.leave-reply .btn-submit').addEventListener('click', submitFormTwo);

// Optional: Toggle dark mode functionality
const toggleSwitch = document.getElementById('dark-mode-switch');
const body = document.body;

toggleSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
});
