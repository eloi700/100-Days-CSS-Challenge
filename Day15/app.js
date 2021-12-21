const $dropbox = document.querySelector(".dropbox");
const $button = document.querySelector(".upload-btn");
const $syncing = document.querySelector(".syncing");
const $done = document.querySelector(".done");
const $progressBar = document.querySelector(".progress");
const $upload = document.querySelector(".upload");
const $filename = document.querySelector(".filename");
const $frame = document.querySelector(".frame");
var timeOut;
var uploading = false;
var droppedFiles = false;
var fileName = "";

function f1(e) {
  e.preventDefault();
  e.stopPropagation();
}

$dropbox.addEventListener("drag", f1);
$dropbox.addEventListener("drop", f1);
$dropbox.addEventListener("dragleave", f1);
$dropbox.addEventListener("dragstart", f1);
$dropbox.addEventListener("dragend", f1);
$dropbox.addEventListener("dragover", f1);
$dropbox.addEventListener("dragenter", f1);

function f2() {
  $dropbox.classList.add("is-dragover");
}

$dropbox.addEventListener("dragover", f2);
$dropbox.addEventListener("dragenter", f2);

function f3() {
  $dropbox.classList.remove("is-dragover");
}

$dropbox.addEventListener("dragleave", f3);
$dropbox.addEventListener("dragend", f3);
$dropbox.addEventListener("drop", f3);

$dropbox.addEventListener("drop", function (e) {
  droppedFiles = e.dataTransfer.files;
  fileName = droppedFiles[0]["name"];
  document.querySelector(".filename").innerHTML = fileName;
  document.querySelector(".upload").style.display = "none";
});

$button.addEventListener("click", function () {
  startUpload();
});

document
  .querySelector('input[type="file"]')
  .addEventListener("change", function () {
    fileName = this.files[0].name;
    document.querySelector(".filename").innerHTML = fileName;
    document.querySelector(".filename").innerHTML = fileName;
    document.querySelector(".upload").style.display = "none";
  });

function startUpload() {
  if (!uploading && fileName != "") {
    uploading = true;
    $button.innerHTML = "Uploading . . .";
    $upload.style.display = "none";
    $filename.style.display = "none";
    $syncing.classList.add("active");
    $done.classList.add("active");
    $progressBar.classList.add("active");
    timeOut = window.setTimeout(showDone, 5000);
  }
}

function showDone() {
  $button.innerHTML = "Done";
}
