window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

let backgroundImage = document.getElementById('section-1');
let imageArray = ['./images/n4.jpg', './images/n5.jpg', './images/about.jpg']; // Replace with your image paths
let currentIndex = 0;

function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % imageArray.length; // Cycle through images
    backgroundImage.src = imageArray[currentIndex];
}

setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds
  