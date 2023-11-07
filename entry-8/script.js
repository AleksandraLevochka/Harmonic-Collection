function shuffleIconLine() {
    const iconLine = document.querySelector('.icon-line');
    const icons = Array.from(iconLine.children);
  
    for (let i = icons.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [icons[i], icons[j]] = [icons[j], icons[i]];
    }
  
    icons.forEach((icon) => iconLine.appendChild(icon));
  }
  
  shuffleIconLine();
  
  setInterval(shuffleIconLine, 2000); 