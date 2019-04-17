// 1. Initialize Firebase
var config = {
  apiKey: "AIzaSyBrLrhNc3KRGaADpRojBsm0vwKuJdjPyAg",
  authDomain: "portfoliocontact-65245.firebaseapp.com",
  databaseURL: "https://portfoliocontact-65245.firebaseio.com",
  projectId: "portfoliocontact-65245",
  storageBucket: "portfoliocontact-65245.appspot.com",
  messagingSenderId: "180793803264"
};


firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding trains
$("#add-comment-btn").on("click", function(event) {
event.preventDefault();

// Grabs user input
var empName = $("#name-input").val().trim();
var emailInput = $("#email-input").val().trim();
var comInput = $("#comments-input").val().trim();

// console.log(empfrequency);
// Creates local "temporary" object 
var newEmp = {
  name: empName,
  email: emailInput,
  comments: comInput,
};

// Uploads data to the database
database.ref().push(newEmp);
console.log(newEmp.name);
console.log(newEmp.email);
console.log(newEmp.comments)

// Clears all of the text-boxes
$("#name-input").val("");
$("#email-input").val("");
$("#comments-input").val("");

});

