const hours = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("second");
const amPM = document.getElementById("ampm");

function UpdateClock() {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();
  let ampm = "AM";

  if (hour > 12) {
    hour -= 12;
    ampm = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  hours.innerText = hour;
  minutes.innerText = minute;
  seconds.innerText = second;
  amPM.innerText = ampm;

  setTimeout(() => {
    UpdateClock();
  }, 1000);
}

UpdateClock();
