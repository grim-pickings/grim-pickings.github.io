var firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);
const auth =  firebase.auth();
database = firebase.database();

function signUp(){
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    const user = firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(result) {
      console.log("Account created successfully");
      firebase.database().ref("Users/"+ user).set({
        Name: name,
        Email: email
      })
    })
    .catch(function(error) {
      console.log("Error creating account");
    })
  }

  