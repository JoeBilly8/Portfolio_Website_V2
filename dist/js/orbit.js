const orbitBall = document.querySelector('.orbit-ball');
const initials = document.querySelector('.initials');

let angle = 0;
let speed = 0.01; // base speed
let speedTarget = 0.01;

function animateOrbit() {
    angle += speed;
    const radius = 60;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    orbitBall.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

    // Smoothly ease toward target speed
    speed += (speedTarget - speed) * 0.025;

    requestAnimationFrame(animateOrbit);
  }

  initials.addEventListener('mouseenter', () => {
    speedTarget = 0.1; // speed up
  });

  initials.addEventListener('mouseleave', () => {
    speedTarget = 0.01; // slow back down
  });

  animateOrbit(); // start the loop