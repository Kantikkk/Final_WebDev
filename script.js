function calculate() {
  const height = Number(document.querySelector('.heightInput').value);
  const weight = Number(document.querySelector('.weightInput').value);
  const BMI = (weight / (height * height)) * 10000;
  var finalBMI = BMI.toFixed(2);
  var outputMessage = '';

  if (isNaN(BMI)) {
    outputMessage ="Invalid input. Please enter numerical values for weight and height.";
  } else if (BMI < 18.5) {
    outputMessage = "Your BMI is " + finalBMI + ", which means you are underweight.";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    outputMessage = "Your BMI is " + finalBMI + ", which means you have a normal weight.";
  } else {
    outputMessage = "Your BMI is " + finalBMI + ", which means you might be overweight.";
  }

  document.querySelector('.output').innerHTML = outputMessage;
}

var musicToggle = document.getElementById('music-toggle');
var audio = new Audio('music/Pharrell Williams - Happy - From Despicable Me 2.mp3');

musicToggle.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
    musicToggle.classList.add('active');
  } else {
    audio.pause();
    musicToggle.classList.remove('active');
  }
});
