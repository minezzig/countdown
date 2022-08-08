const displayDays = document.getElementById("days");
const displayHours = document.getElementById("hours");
const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");
const title = document.getElementById("title");
document.getElementById("countdown").addEventListener("click", setDate)

let userDate;

function setDate() {
  userDate = document.getElementById("userDateInput").value;
  title.innerHTML = "Almost there...";
  console.log(userDate)
  countdown();
}

function countdown() {
  const goal = new Date(userDate + "T00:00");
  const now = new Date();

  const timeLeft = goal - now;

  if (timeLeft < 0) {
    title.innerHTML = "Choose a date in the future, please";
    displayDays.innerHTML = "0";
    displayHours.innerHTML = "0";
    displayMinutes.innerHTML = "0";
    displaySeconds.innerHTML = "0";
    return;
  }

  //calculate milliseconds for each time period
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  //calculate how many of each are left
  const daysLeft = Math.floor(timeLeft / days);
  const hoursLeft = Math.floor((timeLeft % days) / hours);
  const minutesLeft = Math.floor((timeLeft % hours) / minutes);
  const secondsLeft = Math.floor((timeLeft % minutes) / seconds);

  //add numerals to DOM
  displayDays.innerHTML = daysLeft;
  displayHours.innerHTML = hoursLeft;
  displayMinutes.innerHTML = minutesLeft;
  displaySeconds.innerHTML = secondsLeft;

  setInterval(countdown, 1000);
}
