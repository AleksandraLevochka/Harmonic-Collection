function changeImage(type) {
    const imageElement = document.getElementById("imageToChange");
  
    if (type === 'color') {
      imageElement.src = 'images3/cakecolor.png';
    } else {
      imageElement.src = 'images3/cakebw.png';
    }
  }