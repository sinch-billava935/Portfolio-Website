document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fname").value.trim();
    const email = document.getElementById("lname").value.trim();
    const message = document.getElementById("subject").value.trim();

    // Simple email format regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks
    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    if (email === "") {
      alert("Please enter your email.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (message === "") {
      alert("Please enter your message.");
      return;
    }

    // If all validations pass, send the data
    fetch(
      "https://script.google.com/macros/s/AKfycbzUSisfKH6w1Z_N-XXtHxppGU-MAuyRbKjI6nSkEidPlUdPyiHYcSNBadoUPFWcK09uxQ/exec",
      {
        method: "POST",
        body: new URLSearchParams({
          firstname: name,
          lastname: email,
          subject: message,
        }),
      }
    )
      .then((res) => res.text())
      .then((data) => {
        alert("Thank you! Your message was submitted successfully.");
        form.reset();
      })
      .catch((err) => {
        alert("Oops! Something went wrong.");
        console.error(err);
      });
  });
});
