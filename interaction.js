const buttonElement = document.querySelector('.check-button');
buttonElement.addEventListener('click', ()=> {
  checkName();
  checkEmail();
  checkPassword();
});

function checkName(){
  const input = document.querySelector('.input-name')
  const nameInput = input.value;
  input.classList.remove('input-success');
  if (nameInput === '') {
    document.querySelector('.name-error').innerHTML = 
      'Name is required';
    input.classList.add('input-error');
  }else if (nameInput.length < 5) {
    document.querySelector('.name-error').innerHTML = 
      'Name must be at least 5 characters';
    input.classList.add('input-error');
  } else{
    document.querySelector('.name-error').innerHTML = '';
    input.classList.remove('input-error');
    input.classList.add('input-success');
  }
}

function checkEmail(){
  const input = document.querySelector('.input-email')
  const emailInput = input.value;
  input.classList.remove('input-success');
  if (emailInput === '') {
    document.querySelector('.email-error').innerHTML =
      'Email is required';
    input.classList.add('input-error');
  }else if (!(emailInput.includes('@') && emailInput.includes('.'))) {
    document.querySelector('.email-error').innerHTML=
      'Please enter a valid email address';
    input.classList.add('input-error');
  }else{
    document.querySelector('.email-error').innerHTML = '';
    input.classList.remove('input-error');
    input.classList.add('input-success');
  }
}

function checkPassword() {
  const input = document.querySelector('.input-password')
  const passwordInput = input.value;
  input.classList.remove('input-success');
  let numbers = 0;
  let uppercase = 0;
  for (let i=0; i <= passwordInput.length; i++) {
    const character = passwordInput[i];
    if (/[A-Z]/.test(character)) {
      uppercase++;
    }
    if (/[0-9]/.test(character)) {
      numbers++;
    }
  }
  if (passwordInput === '') {
    document.querySelector('.password-error').innerHTML = 
      'Password is required';
    input.classList.add('input-error');
  }else if (passwordInput.length < 8) {
    document.querySelector('.password-error').innerHTML = 
      'Password must be at least 8 characters';
    input.classList.add('input-error');
  }else if (numbers === 0 || uppercase === 0) {
    document.querySelector('.password-error').innerHTML = 
      'Password must consist at leat 1 uppercase letter and 1 number';
    input.classList.add('input-error');
  }else{
    document.querySelector('.password-error').innerHTML = '';
    input.classList.remove('input-error');
    input.classList.add('input-success');
  }
}
