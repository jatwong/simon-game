var gamePattern = [];
var userClickedPattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

var hasStarted = false;
var level = 0;
var index = 0;

// start game
$(document).keydown(function () {
  if (!hasStarted) {
    hasStarted = true;
    nextSequence();
  }
});

// generate random color & sequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  ++level;
  $("h1").text("Level " + level);

  setTimeout(function () {
    // button animation
    userClickedPattern = [];
    playButton(randomChosenColor);
    $("#" + randomChosenColor)
      .fadeOut(150)
      .fadeIn(100);
  }, 300);
}

// on click: add to userClickedPattern, play button sound, check answer
$(".btn").click(function (e) {
  var userChosenColor = e.target.id;
  userClickedPattern.push(userChosenColor);
  playButton(userChosenColor);
  animatePress(userChosenColor);

  var continueGame = true;
  continueGame = checkAnswers();
  if (continueGame && index === gamePattern.length) {
    index = 0;
    setTimeout(nextSequence, 500);
  }
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

// check answers
function checkAnswers() {
  if (userClickedPattern[index] !== gamePattern[index]) {
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    var wrong = new Audio("./sounds/wrong.mp3");
    wrong.play();

    $("h1").text("Game Over, Press any key to restart");

    startOver();

    return false;
  } else {
    index++;
    return true;
  }
}

function startOver() {
  hasStarted = false;
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
  index = 0;
}
