// copy fra sarah js codepen ------------------------------

const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputPhone = document.querySelector('#telefon');
const inputTime = document.querySelector('#tid'); 
const errorMsg = document.querySelector('#errorMsg');
const buttonSubmit = document.querySelector('#submit');
const form = document.querySelector("#form")

buttonSubmit.addEventListener('click',function(event){
  
  event.preventDefault();
  
  if(inputName.value == ''){
    errorMsg.innerHTML = 'Dit navn mangler';
  }
  else if(inputEmail.value == '' ){
    errorMsg.innerHTML = 'Din e-mail mangler';
  }
  else if(inputPhone.value == '' ){
    errorMsg.innerHTML = 'Telefon nr. mangler';
  }
  else if(inputTime.value == '' ){
    errorMsg.innerHTML = 'Tidspunkt mangler';
  }

  /* form.submit() */
  
});

