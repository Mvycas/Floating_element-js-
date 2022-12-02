// This script is to hide the navBar upon scroll
// Animation script is in the main html file.

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-95px";
  }
  prevScrollpos = currentScrollPos;
}
