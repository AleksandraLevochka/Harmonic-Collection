document.addEventListener("DOMContentLoaded", function () {
    const clickableImage = document.querySelector(".clickable-image");
    const audio = document.getElementById("audio");
  
    clickableImage.addEventListener("click", function () {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const clickableImage = document.querySelector(".clickable-image");
  
    let rotationAngle = 0;
    const rotationInterval = 10; // interval 
  
    setInterval(function () {
      rotationAngle += 1; // rotation speed
      clickableImage.style.transform = `rotate(${rotationAngle}deg)`;
    }, rotationInterval);
  });


  // image tilting

  document.addEventListener("DOMContentLoaded", function () {
    const poster1 = document.querySelector(".poster");
    const poster2 = document.querySelector(".poster2");
  
    let tiltDirection1 = 1; 
    let tiltDirection2 = -1; 
  
    setInterval(function () {
      // first image
      poster1.style.transform = `rotate(${tiltDirection1 * -5}deg)`;
  
      // tilt direction first image 
      tiltDirection1 *= -1;
  
      // second image
      poster2.style.transform = `rotate(${tiltDirection2 * 5}deg)`;
  
      //tilt direction for second image
      tiltDirection2 *= -1;
    }, 1000); // interval 
  });