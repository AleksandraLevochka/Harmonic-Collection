function changeImage(type) {
    const imageElement = document.getElementById("imageToChange");
  
    if (type === 'color') {
      imageElement.src = 'images/islandcolor.png';
    } else {
      imageElement.src = 'images/islandbw.png';
    }
  }