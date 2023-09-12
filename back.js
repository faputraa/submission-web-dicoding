function drop() {
    document.getElementById("idrop").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dbutton')) {
      var drops = document.getElementsByClassName("dcontent");
      var i;
      for (i = 0; i < drops.length; i++) {
        var odrop = drops[i];
        if (odrop.classList.contains('show')) {
            odrop.classList.remove('show');
        }
      }
    }
  }