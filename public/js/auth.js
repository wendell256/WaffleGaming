

//signup

const signupForm = document.querySelector('#register-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // get user info
    const email = signupForm['register_email'].value;
    const password = signupForm['register_psw'].value;

    console.log(email,password)
    
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        console.log(cred);
        $('#RegisterForm').modal('hide');
        signupForm.reset()
    })
    
   
});
