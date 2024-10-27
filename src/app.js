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

function loader() {
  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Fade out the loader
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
      content.style.visibility = "visible";
      content.style.opacity = "1";
    }, 1500);
  });
}

function colorAnimation() {
  document.querySelectorAll(".section").forEach(function (e) {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      // markers: true,
    });
  });
}
colorAnimation();
textAnimation();
loader();
