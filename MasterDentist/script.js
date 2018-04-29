/*
This is a JavaScript (JS) file.
JavaScript is the programming language that powers the web.

To use this file, place the following <script> tag just before the closing </body> tag in your HTML file, making sure that the filename after "src" matches the name of your file...

    <script src="script.js"></script>

Learn more about JavaScript at https://developer.mozilla.org/en-US/Learn/JavaScript

When you're done, you can delete all of this grey text, it's just a comment.
*/

//function greetMe(name) {
//  var today = new Date().toDateString();
//  console.log("Hello " + name + ", today is " + today);
//}
//
//greetMe("World");
function sidebar_open() {
  document.getElementById("sidebar").style.right = 0;
  document.getElementById("sidebarbutton").style.display = "none";
  document.getElementById("page-container").style.left = -100 + "px";
}
function sidebar_close() {
  document.getElementById("sidebar").style.right = -150 + "px";
  document.getElementById("sidebarbutton").style.display = "block";
  document.getElementById("page-container").style.left = 0;
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}