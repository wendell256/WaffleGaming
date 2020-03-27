
function dynamicRequest(id){

    db.collection("Dynamic").doc("request").set({
        name: id,
    })
    .then(function(){window.location.href = "wafflegaming-8f97b.firebaseapp.com/product";})
    
}


// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
      console.log('user logged in: ', user);
    } else {
      console.log('user logged out');
    }
  })

//signup

const signupForm = document.querySelector('#register-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // get user info
    const email = signupForm['register_email'].value;
    const password = signupForm['register_psw'].value;

    
    
    auth.createUserWithEmailAndPassword(email,password).then(cred => {
        
        $('#modal-register').fadeOut('fast');
        signupForm.reset()
    })
    
   
});

//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
  })
});

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
   
    // close the signup modal & reset form
    $('#modal-login').fadeOut('fast');
    loginForm.reset();
  });

});