document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phonenum").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="mygender"]:checked').value;
    const departure = document.getElementById("departuredate").value;
    const returnDate = document.getElementById("returndate").value;

    const destinations = [];
    document.querySelectorAll('input[name="td"]:checked').forEach((checkbox) => {
        destinations.push(checkbox.value);
    });

    const package = document.querySelector('input[name="locations"]:checked').value;

    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAge: ${age}\nGender: ${gender}\nDeparture Date: ${departure}\nReturn Date: ${returnDate}\nDestinations: ${destinations.join(', ')}\nPackage: ${package}`;

    const recipientEmail = "andamanattols@gmail.com"; // Replace with the actual recipient's email
    const mailtoLink = `mailto:${recipientEmail}?subject=Registration Form Submission&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink; // Open the default mail client with the pre-filled information and recipient
});