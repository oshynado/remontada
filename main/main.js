window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
      if (hasClass(reveals[i], "clip")) {
        reveals[i].play();
      }
    } else {
      if (hasClass(reveals[i], "clip")) {
        reveals[i].pause();
        reveals[i].currentTime = 0;
      }
      reveals[i].classList.remove("active");
    }
  }
}

function hasClass(element, className) {
  return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
}
