const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const targetDate = new Date('2026-06-25T21:00:00Z');

function updateTimer() {
  const now = new Date();
  const gap = targetDate - now;

  const days = Math.max(0, Math.floor(gap / 1000 / 60 / 60 / 24));
  const hours = Math.max(0, Math.floor((gap / 1000 / 60 / 60) % 24));
  const minutes = Math.max(0, Math.floor((gap / 1000 / 60) % 60));
  const seconds = Math.max(0, Math.floor((gap / 1000) % 60));

  dayEl.innerHTML = days < 10 ? '0' + days : days;
  hourEl.innerHTML = hours < 10 ? '0' + hours : hours;
  minuteEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
  secondEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

updateTimer();
setInterval(updateTimer, 1000);