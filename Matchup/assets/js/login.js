document.addEventListener('DOMContentLoaded', () => {
  const container1 = document.getElementById('container1');
  const registerBtn = document.getElementById('register');
  const loginBtn = document.getElementById('login');

  const signUpBtn = document.querySelector('.sign-up button');
  const signInBtn = document.querySelector('.sign-in button');

  // Handle clicking the "Sign Up" button in the toggle panel
  registerBtn.addEventListener('click', () => {
      container1.classList.add("active");
  });

  // Handle clicking the "Sign In" button in the toggle panel
  loginBtn.addEventListener('click', () => {
      container1.classList.remove("active");
  });

  // Handle clicking the "Sign Up" button in the form
  signUpBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Prevents the form from submitting
      container1.classList.add("active");
  });

  // Handle clicking the "Sign In" button in the form
  signInBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Prevents the form from submitting
      container1.classList.remove("active");
  });
});
