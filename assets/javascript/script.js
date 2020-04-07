
  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBTMDOPn3ku44SC5YWvyD7QbxQ-xz-l9ZE",
    authDomain: "train-schedule-9point75.firebaseapp.com",
    databaseURL: "https://train-schedule-9point75.firebaseio.com",
    projectId: "train-schedule-9point75",
    storageBucket: "train-schedule-9point75.appspot.com",
    messagingSenderId: "891863033066",
    appId: "1:891863033066:web:7c93c9124580183be72393"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //var database = firebase.database();

  var trainName = "";
  var destination = "";
  var firstTrain = "";
  var frequency = 0;

  $("#submit").on("click", function(event) {
    event.preventDefault();

    trainName = $("#tname").val();
    destination = $("#destination").val();
    firstTrain = $("#ftime").val();
    frequency = $("#frequency").val();
    
    console.log(trainName);
    console.log(destination);
    console.log(firstTrain);
    console.log(frequency);
  })