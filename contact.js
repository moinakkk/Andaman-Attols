document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const body = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    const recipientEmail = "andamanattols@gmail.com"; // Replace with actual recipient's email
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink; // Open the default mail client with the pre-filled information
});