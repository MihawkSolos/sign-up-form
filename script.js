
const password = document.querySelector('#password');
const confirmedPass = document.querySelector('#confirm-password');

const error = document.querySelector('.error');

const submitBtn = document.querySelector('.create-acc');

const inputs = document.querySelectorAll('input');

//listen for when user click in a input and change their background
// use focus so border only changes when user is clicked on the input
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.border = '1px rgb(21, 79, 187) solid';
    });

    input.addEventListener('blur', () => {
        input.style.border = ''; // Reset border when input loses focus
    });
});

//listen for submit btn
submitBtn.addEventListener('click', () => {
    validatePassword();
})

// validate that the two passwords inputted properly match
function validatePassword(){
    const pass1 = password.value;
    const pass2 = confirmedPass.value;

  if(pass1 === '' || pass2 === ''){
    error.textContent = '*Please enter a password!*';
    error.style.color = 'red';
    return false;
  }
  else if(pass1 === pass2){
    error.textContent = 'Passwords Match!';
    error.style.color = 'green';
    return true;
  }
  else {
    error.textContent = '*Error! Passwords need to match.*';
    error.style.color = 'red';
    return false;
  }
}