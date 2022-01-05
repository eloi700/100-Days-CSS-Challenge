function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  list = document.querySelector(".suggested-list");
  if (filter.length > 0) {
    list.style.display = "block";
  }
  a = list.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "block";
    } else {
      a[i].style.display = "none";
    }
  }
}
