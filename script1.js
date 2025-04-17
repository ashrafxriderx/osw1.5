document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector("#registerForm");
    if (registerForm) {
      registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = registerForm.querySelector("input[type='text']").value;
        const email = registerForm.querySelector("input[type='email']").value;
        const password = registerForm.querySelectorAll("input[type='password']");
        const password1 = password[0].value;
        const password2 = password[1].value;
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "none";
        errorMessage.textContent = "";
        if (name === "" || email === "" || password1 === "" || password2 === "") {
          alert("Please fill in all fields.");
          return;
        }
        if (password1 !== password2) {
          errorMessage.textContent = "Passwords do not match.";
          errorMessage.style.display = "block";
          return;
        }
        window.location.href = "login.html";
      });
    }
  });