// Initialize EmailJS
emailjs.init({
    publicKey: "KvZI_ro8A_ato1nbs",
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send(
        "service_udvmzpa",
        "template_pu4fwee",
        templateParams
    )
    .then(function () {
        alert("✅ Message sent successfully!");

        form.reset();
    })
    .catch(function (error) {
        console.error("EmailJS Error:", error);
        alert("❌ Failed to send message. Please try again.");
    });
});