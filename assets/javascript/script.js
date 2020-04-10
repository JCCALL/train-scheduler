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

})

database.ref().on("child_added", function(childSnapshot) {
  var startTimeConverted = moment(childSnapshot.val().firstTrain, "hh:mm").subtract(1, "years");
  console.log(startTimeConverted);
  var diffTime = moment().diff(moment(startTimeConverted), "minutes");
  console.log(diffTime);
  var timeRemaining = diffTime % childSnapshot.val().frequency;
  console.log(timeRemaining);
  var minutesArrival = childSnapshot.val().frequency - timeRemaining;
  console.log(minutesArrival);
  var nextTrain = moment().add(minutesArrival, "minutes");
  console.log(nextTrain);
  var key = childSnapshot.key;
  console.log(key);

  var newRow = $("<tr>");
  var newTrain = $("<td>" + childSnapshot.val().trainName + "</td>");
  var newDest = $("<td>" + childSnapshot.val().destination + "</td>");
  var newFreq = $("<td class='text-center'>"+ childSnapshot.val().frequency + "</td>");
  var newNext = $("<td class='text-center'>"+ moment(nextTrain).format("LT") + "</td>");
  var minutes = $("<td class='text-center' id='waiting'>" + minutesArrival + "</td>");

  newRow.append(newTrain, newDest, newFreq, newNext, minutes);
  $("#tbody").prepend(newRow);

  if (minutesArrival <= 5) {
      $("#waiting").css({"color": "red", "font-weight": "strong"});
      $("td").css("font-weight", "strong");
  }
})

currentTime()