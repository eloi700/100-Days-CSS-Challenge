var q = document.querySelectorAll(".quest");
var i;

for (i = 0; i < q.length; i++) {
  q[i].addEventListener("click", function() {
      const qIsActive = this.classList.contains('active');
      document.querySelectorAll(".ans").forEach(ans => {
        ans.style.maxHeight = null;
      });
      q.forEach(theQ => {
        theQ.classList.remove('active');
      });

      if (!qIsActive){
       var ans = this.nextElementSibling;
       ans.style.maxHeight = ans.scrollHeight + "px";
       this.classList.add("active");
      }
  });
}