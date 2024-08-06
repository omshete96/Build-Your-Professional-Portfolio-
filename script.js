document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
      alert('Thank you for your message!');
      // Here you can add functionality to send the form data to your email or a database
  } else {
      alert('Please fill in all fields.');
  }
});
