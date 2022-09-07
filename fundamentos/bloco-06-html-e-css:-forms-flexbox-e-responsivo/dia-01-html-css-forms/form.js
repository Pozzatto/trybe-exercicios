const sendButton = document.getElementById('send-button');
let fullName = document.getElementById('full-name');
let email = document.getElementById('get-email')
const concordo = document.getElementById('img-holiday')


sendButton.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(fullName.value)
  console.log(email.value)

});

