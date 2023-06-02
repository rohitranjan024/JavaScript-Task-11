function validateForm() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var rpassword = document.getElementById("rpassword");
    var age = document.getElementById("age");
    var phone = document.getElementById("phone");
    var address = document.getElementById("address");
    var state = document.getElementById("state");

    var isValid = true;

    // Validate first name
    if (firstName.value === "") {
      displayError("firstName", "POOR");
      isValid = false;
    } else {
      removeError("firstName");
    }

    // Validate last name
    if (lastName.value === "") {
      displayError("lastName", "POOR");
      isValid = false;
    } else {
      removeError("lastName");
    }

    // Validate email
    if (email.value === "" || !validateEmail(email.value)) {
      displayError("email", "POOR");
      isValid = false;
    } else {
      removeError("email");
    }

    // Validate password
    if (password.value === "") {
      displayError("password", "POOR");
      isValid = false;
    } else {
      removeError("password");
    }

    // Validate re-entered password
    if (rpassword.value === "" || rpassword.value !== password.value) {
      displayError("rpassword", "POOR OR MISMATCH");
      isValid = false;
    } else {
      removeError("rpassword");
    }

    // Validate age
    if (age.value === "" || age.value <= 0) {
      displayError("age", "POOR");
      isValid = false;
    } else {
      removeError("age");
    }

    // Validate phone number
    if (phone.value === "") {
      displayError("phone", "POOR");
      isValid = false;
    } else {
      removeError("phone");
    }

    // Validate address
    if (address.value === "") {
      displayError("address", "POOR");
      isValid = false;
    } else {
      removeError("address");
    }

    // Validate state
    if (state.value === "") {
      displayError("state", "POOR");
      isValid = false;
    } else {
      removeError("state");
    }

    return isValid;
  }

  // Function to display error message
  function displayError(elementId, message) {
    var statusElement = document.getElementById(elementId + "Status");
    statusElement.textContent = message;
    statusElement.style.color = "red";
  }

  // Function to remove error message
  function removeError(elementId) {
    var statusElement = document.getElementById(elementId + "Status");
    statusElement.textContent = "";
  }

  // Function to validate email format
  function validateEmail(email) {
    // Regular expression to validate email format
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }

  // Add event listener to Register button
  document.getElementById("registerButton").addEventListener("click", function(event) {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
