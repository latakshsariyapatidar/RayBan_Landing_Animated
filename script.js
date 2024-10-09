Shery.imageEffect("#back", {
  style: 5,
  config: {
    a: { value: 0.92, range: [0, 30] },
    b: { value: -0.79, range: [-1, 1] },
    zindex: { value: "0", range: [-9999999, 9999999] },
    aspect: { value: 2.105263052224458 },
    ignoreShapeAspect: { value: false },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 1, y: 0.5 } },
    shapeEdgeSoftness: { value: 0.5, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 2.92, range: [1, 15] },
    durationOut: { value: 1.45, range: [0.1, 5] },
    durationIn: { value: 0.81, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.31, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: false },
    onMouse: { value: 1 },
    noise_speed: { value: 0.38, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.59, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.52, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  gooey: true,
});

var elems = document.querySelectorAll(".elem");

elems.forEach(function (elem) {
  var h1s = elem.querySelectorAll("h1");
  var animation = false;
  var index = 0;

  document.querySelector("#back").addEventListener("click", function (e) {
    if (!animation) {
      animation = true;
      gsap.to(h1s[index], {
        top: "-100%",
        duration: 1.5,
        ease: "expo.inOut",
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animation = false;
        },
      });

      index >= h1s.length - 1 ? (index = 0) : index++;

      gsap.to(h1s[index], {
        top: "0%",
        duration: 1.5,
        ease: "expo.inOut",
      });
    }
  });
});
