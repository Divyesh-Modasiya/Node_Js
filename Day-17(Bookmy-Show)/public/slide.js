let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;

    if (index >= totalSlides) currentSlide = 0;
    else if (index < 0) currentSlide = totalSlides - 1;
    else currentSlide = index;

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentSlide + direction);
    resetAutoplay(); 
}
function startAutoplay() {
    slideInterval = setInterval(() => {
        moveSlide(1); 
    }, 3000);
}

function resetAutoplay() {
    clearInterval(slideInterval); 
    startAutoplay(); 
}


showSlide(currentSlide);
startAutoplay();
