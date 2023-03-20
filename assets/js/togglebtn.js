
togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  if (togglePassword.src.match("assets/img/fa-eye-slash.png")) {
    togglePassword.src = "assets/img/fa-eye.png";
  } else {
    togglePassword.src = "assets/img/fa-eye-slash.png";
  }
});