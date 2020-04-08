// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD0GyAfH-u5LykV4W1570jRiGjceSJQSI0",
  authDomain: "trainschedule-2df57.firebaseapp.com",
  databaseURL: "https://trainschedule-2df57.firebaseio.com",
  projectId: "trainschedule-2df57",
  storageBucket: "trainschedule-2df57.appspot.com",
  messagingSenderId: "917403516441",
  appId: "1:917403516441:web:e8c3b2808d1b554aebb488"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var trainName = "";
var destination = "";
var firstTrain = "";
var frequency = 0;

function currentTime() {
  var current = moment().format('LT');
  $("#currentTime").html(current);
  setTimeout(currentTime, 1000);
}

$("#submit").on("click", function (event) {
  event.preventDefault();

  trainName = $("#tname").val();
  destination = $("#destination").val();
  firstTrain = $("#ftime").val();
  frequency = $("#frequency").val();

  console.log(trainName);
  console.log(destination);
  console.log(firstTrain);
  console.log(frequency);

  database.ref().push({
    trainName: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  });

  var newRow = $("<tr>");
  var newTrain = $("<td>").html(trainName);
  var newDest = $("<td>").html(destination);
  var newFreq = $("<td>").html(frequency);

  newRow.append(newTrain, newDest, newFreq);
  $("#tbody").prepend(newRow);

})

currentTime()