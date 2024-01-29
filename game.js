var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

var hasStarted = false;
var level = 0;

// start game
$(document).keydown(function () {
  if (!hasStarted) {
    hasStarted = true;
    nextSequence();
    ++level;
    $("h1").text("Level " + level);
  } else {
    ++level;
    $("h1").text("Level " + level);
  }
});

// generate random color & sequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  // button animation
  playButton(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeOut(150)
    .fadeIn(100);
}

// add user pattern to userClickedPattern array
$(".btn").click(function (e) {
  var userChosenColor = e.target.id;
  userClickedPattern.push(userChosenColor);
  console.log(userClickedPattern);
});

// button play sound
$(".btn").click(function (e) {
  var colorId = e.target.id;
  playButton(colorId);
  animatePress(colorId);
});

function playButton(color) {
  switch (color) {
    case "red":
      var redBtn = new Audio("./sounds/red.mp3");
      redBtn.play();
      break;

    case "blue":
      var blueBtn = new Audio("./sounds/blue.mp3");
      blueBtn.play();
      break;

    case "green":
      var greenBtn = new Audio("./sounds/green.mp3");
      greenBtn.play();
      break;

    case "yellow":
      var yellowBtn = new Audio("./sounds/yellow.mp3");
      yellowBtn.play();
      break;

    default:
      break;
  }
}

function animatePress(currentColor) {
  var clickedBtn = $("#" + currentColor);
  clickedBtn.addClass("pressed");
  setTimeout(function () {
    clickedBtn.removeClass("pressed");
  }, 100);
}
