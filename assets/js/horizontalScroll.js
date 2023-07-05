gsap.registerPlugin(ScrollTrigger);

const scrollContainer = document.querySelector('.scroll-content');

gsap.to(scrollContainer, {
  xPercent: -100 * (scrollContainer.childElementCount - 1),
  ease: 'none',
  scrollTrigger: {
    trigger: '.horizontal-scroll',
    pin: true,
    scrub: 1,
    snap: 1 / (scrollContainer.childElementCount - 1),
    end: () => '+=' + document.querySelector('.scroll-content').offsetWidth
  }
});
