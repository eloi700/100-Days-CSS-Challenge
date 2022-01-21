
(function() {
    document.querySelector('.onoff').addEventListener('click', e => {
    e.target.classList.toggle('on');
    document.getElementById('path3005').classList.toggle('active');
  });
  })();