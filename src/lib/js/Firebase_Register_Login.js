var config = {
    apiKey: "AIzaSyD8CYXSlPCQilr7vMHgETTwX9-uen8DegQ",
  authDomain: "grim-pickings.firebaseapp.com",
  databaseURL: "https://grim-pickings-default-rtdb.firebaseio.com",
  projectId: "grim-pickings",
  storageBucket: "grim-pickings.appspot.com",
  messagingSenderId: "321184072556",
  appId: "1:321184072556:web:62eb9bf2b157fc275f2949",
  measurementId: "G-L2BCWQ6WY9"
};

// Initialize Firebase
// TODO: Missing Firebase Config
firebase.initializeApp(config);
this.firebaseToken = document.querySelector("#firebase-token");
this.firebaseToken.innerHTML = "Welcome !";


// User SignUp
function authRegister(event) {
  event.preventDefault();
  var registerForm = $("form[name='registerForm']");
  var reg_email = registerForm.find('#register_email').val();
  var reg_password = registerForm.find('#register_password').val();
  var email = document.getElementById("register_email").value;
  var password = document.getElementById("register_password").value;
  var name = document.getElementById("register_name").value;

  const user = firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(result) {
      this.firebaseToken.innerHTML = "Registered successfully !";
    firebase.database().ref("Users/"+ result.user).set({
        Name: name,
        Email: email,
        Password: password
      })
    })
    .catch(function(err) {
      alert(err.message);
    })
}


// User SignIn
function authLogin(event) {
  event.preventDefault();
  var loginForm = $("form[name='loginForm']");
  var log_email = loginForm.find('#login_email').val();
  var log_password = loginForm.find('#login_password').val();

  firebase
    .auth()
    .signInWithEmailAndPassword(log_email, log_password)
    .then(function () {
      this.firebaseToken.innerHTML = "Sign-in Successful !";
      console.log('sign in successful !');
      // outputFirebaseData();
    })
    .catch(function(err) {
      alert(err.message);
    });
}

function outputFirebaseData() {
  this.firebaseToken.innerHTML = "Hello world";
}