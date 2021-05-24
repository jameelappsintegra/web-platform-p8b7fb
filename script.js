const sidenav = {
  open: function(selector) {
    document.getElementById(selector).style.left = '0';
    var x = document.getElementById('sidenav-overlay');
    x.style.display = 'block';
    x.style.opacity = 0;
    setTimeout(function() {
      x.style.opacity = 1;
    }, 10);
    x.onclick = function() {
      sidenav.close(selector);
    };
  },
  close: function(selector) {
    document.getElementById(selector).style.left = '-300px';
    var x = document.getElementById('sidenav-overlay');
    x.style.opacity = 0;
    setTimeout(function() {
      x.style.display = 'none';
    }, 200);
  }
};
var sidenav_overlay = document.createElement('div');
sidenav_overlay.className = 'sidenav-overlay';
sidenav_overlay.id = 'sidenav-overlay';
document.body.appendChild(sidenav_overlay);
