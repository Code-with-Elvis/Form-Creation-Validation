document.addEventListener("DOMContentLoaded", function () {
  // Select elements
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  // Form submission handler
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get current input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    // Username validation
    if (username.length < 3 || username.length > 15) {
      messages.push("Username must be between 3 and 15 characters.");
      isValid = false;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
      messages.push("Please enter a valid email address.");
      isValid = false;
    }

    // Password validation
    if (password.length < 8) {
      messages.push("Password must be at least 8 characters long.");
      isValid = false;
    }

    // Show feedback
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
      feedbackDiv.style.backgroundColor = "#d4edda";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.style.backgroundColor = "#ffbaba";
    }
  });
});
