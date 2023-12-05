// Assuming this is the same variable used for the image gallery
let scrollContainer = document.querySelector(".gallery");

scrollContainer.addEventListener("wheel", (evt) => {
    const containerScrollWidth = scrollContainer.scrollWidth;
    const containerClientWidth = scrollContainer.clientWidth;

    // Check if scrolling reaches the left or right edge of the container
    if (
        (evt.deltaY < 0 && scrollContainer.scrollLeft > 0) ||
        (evt.deltaY > 0 && scrollContainer.scrollLeft < containerScrollWidth - containerClientWidth)
    ) {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    }
});

// Animation for paragraph 
const animatedText = document.getElementById("animatedText");
animatedText.classList.add("animation");
