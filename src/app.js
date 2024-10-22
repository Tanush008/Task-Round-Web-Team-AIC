function textAnimation() {
  var clutter = "";
  document
    .querySelector(".textPara")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") {
        clutter += `<span>&nbsp;</span>`;
      }
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textPara").innerHTML = clutter;
  gsap.set(".textPara span", { opacity: 0.1 });
  gsap.to(".textPara span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 50%",
      end: "bottom 80%",
      scrub: 1,
    },
    opacity: 1,
    ease: Power4,
    stagger: 0.03,
  });
}
textAnimation();