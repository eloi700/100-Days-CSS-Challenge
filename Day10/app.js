const deg = 6;
const date = document.querySelector(".date");
const hour = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

setInterval(() => {
  let day = new Date();
  let yr = day.getYear() + 1900;
  let mt = months[day.getMonth()];
  let dName = days[day.getDay()];
  let dNumber = day.getDate();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;

  let dateString = `${dName + " -"} ${dNumber} ${mt} ${yr}`;

  date.textContent = dateString.toUpperCase();
});
