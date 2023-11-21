function changeImage(type) {
    const imageElement = document.getElementById("imageToChange");
  
    if (type === 'color') {
      imageElement.src = 'images2/covercolor.png';
    } else {
      imageElement.src = 'images2/coverbw.png';
    }
  }