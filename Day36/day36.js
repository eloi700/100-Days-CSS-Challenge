const dashboardTab = document.querySelector(".dashboard");
const commentsTab = document.querySelector(".comments");
const notificationsTab = document.querySelector(".notifications");
const settingsTab = document.querySelector(".settings");
const searchTab = document.querySelector(".search");

function clearActiveContent() {
  document.getElementById("dashboard").classList.remove("active");
  document.getElementById("comments").classList.remove("active");
  document.getElementById("notifications").classList.remove("active");
  document.getElementById("settings").classList.remove("active");
  document.getElementById("search").classList.remove("active");
}

function tabContent1() {
  clearActiveContent();
  document.getElementById("dashboard").classList.add("active");
}

function tabContent2() {
  clearActiveContent();
  document.getElementById("comments").classList.add("active");
}

function tabContent3() {
  clearActiveContent();
  document.getElementById("notifications").classList.add("active");
}

function tabContent4() {
  clearActiveContent();
  document.getElementById("settings").classList.add("active");
}

function tabContent5() {
  clearActiveContent();
  document.getElementById("search").classList.add("active");
}

dashboardTab.addEventListener("click", tabContent1);
commentsTab.addEventListener("click", tabContent2);
notificationsTab.addEventListener("click", tabContent3);
settingsTab.addEventListener("click", tabContent4);
searchTab.addEventListener("click", tabContent5);
