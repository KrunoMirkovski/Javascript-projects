// Set the countdown date and time (target date)
const countDownDate = new Date("Nov 15, 2024 00:00:00").getTime();
// Update the countdown every second
const x = setInterval(function () {
  // Get the current date and time
  let now = new Date().getTime();
  // Calculate the time difference between now and the countdown date
  let distance = countDownDate - now;
  // Calculate the time remaining
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the HTML elements with corresponding IDs
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is finished (distance is less than 0), stop the timer
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000); // Execute every 1000 milliseconds (1 second)
