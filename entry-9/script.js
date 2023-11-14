if (window.location.href.includes('index.html')) {
    // Create a new image element for the cursor
    const alligatorCursor = new Image();
    alligatorCursor.src = 'images/crocodile.png'; 

    const cursorSize = 70; // Adjust the size as needed
    alligatorCursor.width = cursorSize;
    alligatorCursor.height = cursorSize;
  
    alligatorCursor.onload = function () {
        // hide the default cursor
        document.body.style.cursor = 'none';
    
        // update cursor position for no delay
        function updateCursorPosition(event) {
          //follow the mouse
          alligatorCursor.style.position = 'absolute';
          alligatorCursor.style.left = `${event.pageX - cursorSize / 2}px`;
          alligatorCursor.style.top = `${event.pageY - cursorSize / 2}px`;
    
          
          document.body.appendChild(alligatorCursor);
        }
    
        // update the cursor position on mousemove - no delay
        document.addEventListener('mousemove', updateCursorPosition);
    
        // update the cursor position on scroll - no delay
        document.addEventListener('scroll', updateCursorPosition);
      };
    }



