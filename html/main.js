let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
});

let isSpinning = true;

let semicircle = new Zdog.Ellipse({
  addTo: illo,
  diameter: 100,
  quarters: 2,
  stroke: 30,
  color: "#E43",
  translate: { x: -30, y: -65 },
  rotate: { z: -Zdog.TAU / 4 },
});

let semicircle2 = new Zdog.Ellipse({
  addTo: illo,
  diameter: 100,
  quarters: 2,
  stroke: 30,
  color: "#E43",
  translate: { x: 70, y: -65 },
  rotate: { z: -Zdog.TAU / 4 },
});

new Zdog.Shape({
  addTo: illo,
  path: [
    { x: -80, y: -60 }, // start
    {
      bezier: [
        { x: -80, y: -0 }, // start control point
        { x: 20, y: 60 }, // end control point
        { x: 20, y: 60 }, // end point
      ],
    },
  ],
  closed: false,
  stroke: 30,
  color: "#E43",
});

new Zdog.Shape({
  addTo: illo,
  path: [
    { x: 120, y: -60 }, // start
    {
      bezier: [
        { x: 120, y: -0 }, // start control point
        { x: 20, y: 60 }, // end control point
        { x: 20, y: 60 }, // end point
      ],
    },
  ],
  closed: false,
  stroke: 30,
  color: "#E43",
});

///////////////////////////////////////

function animate() {
  // rotate illo each frame
  if (isSpinning) {
    illo.rotate.y += 0.03;
  }

  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame(animate);
}
// start animation
animate();
