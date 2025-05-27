gsap.registerPlugin(MotionPathPlugin, TextPlugin);

// Function to calculate center of viewport
function getCenter() {
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;
  var centerX = viewportWidth / 2;
  var centerY = viewportHeight / 2;
  return { x: centerX, y: centerY };
}

// Function to animate images to their positions after appearing in the center
function animateImages() {
  gsap.from("#image1", { duration: .1, x: "0%", y: "0%" });
  gsap.from("#image2", { duration: .1, x: "0%", y: "0%" });
  gsap.from("#image3", { duration: .1, x: "0%", y: "0%" });
  gsap.from("#image4", { duration: .1, x: "0%", y: "0%" });
  gsap.from("#image5", { duration: .1, x: "0%", y: "0%" });
  gsap.from("#image6", { duration: .1, x: "0%", y: "0%" });
  gsap.from("#image7", { duration: .1, x: "0%", y: "0%" });
  gsap.from("#image8", { duration: .1, x: "0%", y: "0%" });

  // Animation for text content to zoom in (starting after the image animations are complete)
  gsap.to(".hero-content", {
    scale: 1,
    duration: 1,
    ease: "back.out(1.3)",
    delay: 0.2 // Adjust the delay as needed to synchronize with the image animations
  });

  // Animation for the background image to zoom in (starting after the image animations are complete)
  gsap.to('.hero-banner-bg-image', {
    duration: 1,
    width: "100vw",
    height: "100vh",
    ease: "power2.out",
    rotate: 0,
    delay: 0.1 // Adjust the delay as needed to synchronize with the image animations
  });
}

// Animation for images to appear in the viewport center one by one
gsap.from(".hero-banner-bg-image img", {
  autoAlpha: 0,
  duration: .1,
  x: function () { return getCenter().x - this.offsetWidth / 2; },
  y: function () { return getCenter().y - this.offsetHeight / 2; },
  stagger: 0.1,
  onComplete: animateImages
});

// Mouse move action for .hero-banner-bg-image
window.addEventListener('mousemove', function (event) {
// Define the maximum movement allowed for the images
var maxMove = 20; // You can adjust this value as needed

// Calculate the new positions for the images
var newX = event.clientX * maxMove / window.innerWidth;
var newY = event.clientY * maxMove / window.innerHeight;

// Animate the images to their new positions
gsap.to('.hero-banner-bg-image img', {
    duration: 0.5,
    x: newX,
    y: newY,
    ease: "power2.out"
});
});



// cursur pointer
let posX = 0,
      posY = 0;

    let mouseX = 0,
      mouseY = 0;

    gsap.to(".cursor-example", {
      duration: 0.018,
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 8;
        posY += (mouseY - posY) / 8;

        gsap.set(".cursor-example", {
          css: {
            left: posX - 1,
            top: posY - 2
          }
        });
      }
    });

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }); 