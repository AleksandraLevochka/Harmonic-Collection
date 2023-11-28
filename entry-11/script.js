// Function to generate a random value from an array
function getRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  // Array of possible styles
  var fonts = ['Playfair Display', 'Poppins'];
  var styles = ['normal', 'italic', 'light'];
  var colors = [ '#e84a74', '#f56645', '#999ebe'];
  var words = ['HAVE', 'A', 'SUGGESTION?']; // Add your words here
  var lowercaseProbabilities = [0.5, 0.3, 0.7]; // Adjust probabilities for each word
  
  // Get the paragraph element by its class
  var paragraph = document.querySelector('.dynamicParagraph');
  
  // Function to apply random styles to the paragraph
  function applyRandomStyles() {
    // Remove the original text content
    paragraph.innerHTML = '';
  
    // Keep track of used colors
    var usedColors = {};
  
    // Loop through each word and apply random styles
    words.forEach(function (word, index) {
      var span = document.createElement('span');
      var makeLowercase = Math.random() < lowercaseProbabilities[index];
      
      // Ensure each word has a different color
      var color;
      do {
        color = getRandomValue(colors);
      } while (usedColors[color]);
  
      usedColors[color] = true;
  
      span.textContent = (makeLowercase ? word.toLowerCase() : word.toUpperCase()) + ' ';
      span.style.fontFamily = getRandomValue(fonts);
      span.style.fontStyle = getRandomValue(styles);
      span.style.color = color;
      paragraph.appendChild(span);
      
    });
  }
  
  // Apply random styles initially
  applyRandomStyles();
  
  // Set an interval to continuously apply random styles
  setInterval(applyRandomStyles, 1800); // Adjust the interval (in milliseconds) based on your preference


// wawy line 

document.addEventListener('DOMContentLoaded', function () {

    var changingImage = document.getElementById('changingImage');
  
    // Array of images
    var imageSources = ['images/line.png', 'images/line2.png', 'images/line3.png'];
  

    var currentIndex = 0;
  
    // Function to change the image
    function changeImage() {
      // Increment the index
      currentIndex++;
  
 
      if (currentIndex >= imageSources.length) {
        currentIndex = 0;
      }
      changingImage.style.opacity = 0;
      setTimeout(function () {
        changingImage.src = imageSources[currentIndex];
        changingImage.style.opacity = 1;
      }, 500); 
    }

    setInterval(changeImage, 2000); // Change image every 2 seconds
  });

  // arrow 

  document.addEventListener('DOMContentLoaded', function () {
    var arrowImage = document.getElementById('revealingArrow');
    var textElement = document.getElementById('revealingText');
    var anotherArrowImage = document.getElementById('revealingAnotherArrow');
    var anotherTextElement = document.getElementById('revealingAnotherText');
  
    function revealElements() {
      var arrowRect = arrowImage.getBoundingClientRect();
      var textRect = textElement.getBoundingClientRect();
  
      // Check if the first set of elements is within the viewport
      if (arrowRect.top < window.innerHeight && textRect.bottom >= 0) {
        arrowImage.style.opacity = 1;
        textElement.style.opacity = 1;
        // Remove the scroll event listener for the first set of elements
        window.removeEventListener('scroll', revealElements);
        
        // Add a new scroll event listener for the second set of elements
        window.addEventListener('scroll', revealAnotherElements);
      }
    }
  
    function revealAnotherElements() {
      var anotherArrowRect = anotherArrowImage.getBoundingClientRect();
      var anotherTextRect = anotherTextElement.getBoundingClientRect();
  
      // Check if the second set of elements is within the viewport
      if (anotherArrowRect.top < window.innerHeight && anotherTextRect.bottom >= 0) {
        anotherArrowImage.style.opacity = 1;
        anotherTextElement.style.opacity = 1;
        // Remove the scroll event listener for the second set of elements
        window.removeEventListener('scroll', revealAnotherElements);
      }
    }
  
    // Attach the revealElements function to the scroll event
    window.addEventListener('scroll', revealElements);
  });
  
  
  
  
  
  
  



  


  
  