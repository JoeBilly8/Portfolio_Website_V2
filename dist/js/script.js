// Get references to the elements you want to control
const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const centre = document.querySelector('.centre');

// Function to pause the animation
function pauseAnimation(element) {
    element.style.animationPlayState = 'paused';
}

// Function to resume the animation
function resumeAnimation(element) {
    element.style.animationPlayState = 'running';
}

centre.addEventListener('mouseover', () => pauseAnimation(circle1));
centre.addEventListener('mouseleave', () => resumeAnimation(circle1));