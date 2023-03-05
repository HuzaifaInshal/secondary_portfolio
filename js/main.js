let mynav = document.getElementById("nav");

// When the user scrolls down 150px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mynav.style.backgroundColor = "black";
  } else {
    mynav.style.backgroundColor = "transparent";
  }
}
