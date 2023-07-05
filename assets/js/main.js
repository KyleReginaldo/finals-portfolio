

document.addEventListener('DOMContentLoaded', function () {

// Scroll to top functionality
// Select the scroll-to-top button
var scrollToTopButton = document.querySelector('.scroll-to-top');



// Function to toggle the visibility of the scroll-to-top button
function toggleScrollToTopButton() {
  if (window.scrollY > 0) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
}

// Scroll event listener to toggle the button visibility
window.addEventListener('scroll', toggleScrollToTopButton);


// Show/hide the scroll-to-top button based on scroll position
gsap.registerPlugin(ScrollTrigger);

gsap.to(scrollToTopButton, {
  scrollTrigger: {
    trigger: 'body',
    start: 'top 20%',
    end: 'bottom 20%',
    toggleClass: 'show',
    markers: false // Remove this line to hide markers
  }
});


gsap.to(".albums img", {
  scale: 1.1,
  duration: 0.3,
  ease: "power3.out",
  paused: true,
});

const images = document.querySelectorAll(".albums img");

images.forEach((image) => {
  image.addEventListener("mouseenter", () => {
    gsap.to(image, { scale: 1.2, duration: 0.3, ease: "power3.out" });
  });

  image.addEventListener("mouseleave", () => {
    gsap.to(image, { scale: 1, duration: 0.3, ease: "power3.out" });
  });
});




  
// Select the loading screen and intro animation elements
  var loadingScreen = document.querySelector('.loading-screen');
  var introAnimation = document.querySelector('.intro-animation');
  const navbar = document.querySelector('.navbar');

  navbar.style.opacity = 0;

  // Create a GSAP timeline
  var timeline = gsap.timeline();

  // Set initial state of loading screen
  timeline.fromTo(loadingScreen, { opacity: 1 }, { opacity: 1, duration: 1 });

  // Play the loading screen animation
  timeline.play();

  // Add an event listener to load the intro title and description after the loading screen animation is complete
  timeline.eventCallback('onComplete', function () {
    // Set initial state of intro animation
    gsap.fromTo(introAnimation, { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(navbar, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });


  });

  // Fade out the loading screen
  timeline.to(loadingScreen, {
    opacity: 0,
    duration: 0.5,
    onComplete: function () {
      loadingScreen.style.display = 'none'; // Hide the loading screen after fading out
    }
  });

  // ScrollTrigger for navbar
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    toggleClass: { className: 'navbar-scrolled', targets: '.navbar' },
    onEnter: () => {
      gsap.to('.navbar-brand', { scale: 0.5, duration: 0.3 });
      gsap.to('.navbar-toggler', { marginRight: '5px', scale: 0.8, duration: 0.3 });
    },
    onLeaveBack: () => {
      gsap.to('.navbar-brand', { scale: 1, duration: 0.3 });
      gsap.to('.navbar-toggler', { scale: 1, duration: 0.3 });
    }
  });

  // Select the elements within the services section
  var schoolSection = document.querySelector('#school');
  var albums = document.querySelectorAll('.albums');
  var textContent = document.querySelector('.services-text');

  // Set initial state of elements
  gsap.set(albums, { opacity: 0, y: 50 });
  gsap.set(textContent, { opacity: 0, x: -50 });

  // Create a timeline for the animation
  var servicesTimeline = gsap.timeline({ delay: 0.5 });

  // Add animations to the timeline
  servicesTimeline
    .fromTo(albums, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.3 })
    .fromTo(textContent, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 });

  // Create a ScrollTrigger for the services section
  ScrollTrigger.create({
    trigger: schoolSection,
    start: 'top center',
    end: 'bottom center',
    animation: servicesTimeline,
    toggleActions: 'play none none reverse',
  });


    // Select the elements within the resources section
    var resourcesSection = document.querySelector('#resources');
    var textContent = document.querySelector('.col-md-4');
    var rotationImages = document.querySelector('.rotation');
  
    // Set initial state of elements
    gsap.set(textContent, { opacity: 0, x: -50 });
    gsap.set(rotationImages, { opacity: 0, rotationY: -90 });
  
    // Create a timeline for the animation
    var resourcesTimeline = gsap.timeline({ delay: 0.5 });
  
    // Add animations to the timeline
    resourcesTimeline
      .fromTo(textContent, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 })
      .fromTo(rotationImages, { opacity: 0, rotationY: -90 }, { opacity: 1, rotationY: 0, duration: 1 });
  
    // Create a ScrollTrigger for the resources section
    ScrollTrigger.create({
      trigger: resourcesSection,
      start: 'top center',
      end: 'bottom center',
      animation: resourcesTimeline,
      toggleActions: 'play none none reverse'
    });

    
});
