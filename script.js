document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("fname").value;
    const email = document.getElementById("lname").value;
    const message = document.getElementById("subject").value;

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

const successDiv = document.createElement("div");
successDiv.textContent = "Message sent successfully!";
successDiv.classList.add("success-msg");
form.appendChild(successDiv);
