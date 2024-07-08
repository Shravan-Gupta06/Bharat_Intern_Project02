document.querySelector('form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      event.preventDefault();
    }
  });
  