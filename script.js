// A javascript file for handling a photo slideshow
let activeIndex = 0;
let previousIndex = 0;
showSlides(activeIndex);

// A function to increment the current active slide by n indexes
function plusSlides(n) {
    previousIndex = activeIndex;
    activeIndex += n;
    showSlides(activeIndex);
}

function showSlides(n) {
    // Retrieve all elements with the 'slide' class
    let slides = document.getElementsByClassName("slide");
    
    // Handle index overflow
    if (n >= slides.length) {
        activeIndex = 0;
    }
    else if (n < 0) {
        activeIndex = slides.length - 1;
    }

    // Set the previous slide's display to none
    slides[previousIndex].style.display = "none";

    // Set the current slide's display to block
    slides[activeIndex].style.display = "block";
}
