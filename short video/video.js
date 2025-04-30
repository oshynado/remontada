let icon = document.querySelectorAll(".clickable");
for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", () => {
    if (hasClass(icon[i], "clicked")) {
      icon[i].classList.remove("clicked");
    } else {
      icon[i].classList.add("clicked");
    }
  });
}
function hasClass(element, className) {
  return (" " + element.className + " ").indexOf(" " + className + " ") > -1;
}
