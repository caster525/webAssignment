var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var audio = document.getElementById("bgMusic");
// lowers the music volume to 0.5
audio.volume = 0.5;
// loops through all images
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function() {
    modal.style.display = "block";  // display modal display on image click
    modalImg.src = this.src;
    captionText.innerHTML = this.alt + "<br>(Click anywhere to close)";
  }
}

var span = document.getElementsByClassName("close")[0];
// closes the modal display on click of x or anywhere
span.onclick = function() {
  modal.style.display = "none";
}

modal.onclick = function() {
  modal.style.display = "none";
}