const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  emailjs.send('service_id', 'template_id', {
    name,
    email,
    subject,
    message
  })
 .then((response) => {
    console.log('Email sent successfully!');
  })
 .catch((error) => {
    console.log('Error sending email:', error);
  });
});