var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

// generate random color & sequence
function nextSequence() {
  var randomNumber = Math.random() * 4;
  return Math.floor(randomNumber);
}

var randomColor = buttonColors[nextSequence()];

gamePattern.push(randomColor);

// button animation
$("#" + randomColor)
  .fadeOut(150)
  .fadeIn(100);

// button play sound
$(".btn").click(function (e) {
  playButton(e.target.id);
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
