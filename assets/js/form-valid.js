
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;
  return !email ? alert("Invalid email") : !password ? alert("Invalid password") : alert("Valid login");
});