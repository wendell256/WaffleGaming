const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');



function hideContent(user){
  if (user) {

    
    
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
    if(user.email == 'wendell2556@gmail.com'){
      document.getElementsByClassName('admin_edit')[0].style.display = 'block';
    }else{
      document.getElementsByClassName('admin_edit')[0].style.display = 'none';
    }
    //account details
    
    
    const html = `
    <div>Logged in as ${user.email}</div>
`;
 
  
  document.getElementsByClassName('account-details')[0].innerHTML = html;
  } else {
    // toggle user elements
    document.getElementsByClassName('admin_edit')[0].style.display = 'none';
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}



function dynamicRequest(id) {
  db.collection("Dynamic").doc("request").delete().then(function () {
    console.log("Document successfully deleted!");
    db.collection("Dynamic").doc("request").set({
    name: id,
  })
    .then(function () { window.location.href = "/product.html"; })

  }).catch(function (error) {
    console.error("Error removing document: ", error);
    db.collection("Dynamic").doc("request").set({
      name: id,
    })
      .then(function () { window.location.href = "/product.html"; })
  });
  

}
function dynamicRequestN(id) {
  db.collection("Dynamic").doc("requestn").delete().then(function () {
    console.log("Document successfully deleted!");
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });

  db.collection("Dynamic").doc("request").delete().then(function () {
    console.log("Document successfully deleted!");
    db.collection("Dynamic").doc("requestn").set({
    name: id,
  })
    .then(function () { window.location.href = "/product.html"; })

  }).catch(function (error) {
    console.error("Error removing document: ", error);
    db.collection("Dynamic").doc("requestn").set({
      name: id,
    })
      .then(function () { window.location.href = "/product.html"; })
  });
  

}


// listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log(user.email)
    hideContent(user);
    
  } else {
    hideContent(user);
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



  auth.createUserWithEmailAndPassword(email, password).then(cred => {

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