// Made with Zdog

const orange = '#E62';
const garnet = '#C25';
const eggplant = '#fff';

const illo = new Zdog.Illustration({
  element: '.zdog-canvas',
  dragRotate: true,
zoom: 2
});

let isSpinning = true;

new Zdog.Shape({
    addTo: illo,
    path: [
        { x: 0, y: 0 },
        { x: 32, y: 0},
    ],
    stroke: 20,
    color: '#fff',
  });
  new Zdog.Shape({
    addTo: illo,
    path: [   
        { x: 32, y: 0 },
        { x: 32, y: 32},
    ],
    stroke: 20,
    color: '#fff',
  });
  new Zdog.Shape({
    addTo: illo,
    path: [   
        { x: 0, y: 0 },
        { x: 0, y: -32},
    ],
    stroke: 20,
    color: '#fff',
  });
  new Zdog.Shape({
    addTo: illo,
    path: [   
        { x: 0, y: -32 },
        { x: 32, y: -32},
    ],
    stroke: 20,
    color: '#fff',
  });
  new Zdog.Shape({
    addTo: illo,
    path: [   
        { x: 0, y: 0 },
        { x: -32, y: 0},
    ],
    stroke: 20,
    color: '#fff',
  });
  new Zdog.Shape({
    addTo: illo,
    path: [   
        { x: -32, y: 0 },
        { x: -32, y: -32},
    ],
    stroke: 20,
    color: '#fff',
  });
  new Zdog.Shape({
    addTo: illo,
    path: [   
        { x: 0, y: 0 },
        { x: 0, y: 32},
    ],
    stroke: 20,
    color: '#fff',
  });
  new Zdog.Shape({
    addTo: illo,
    path: [   
        { x: 0, y: 32 },
        { x: -32, y: 32},
    ],
    stroke: 20,
    color: '#fff',
  });

  function animate() {
    // rotate
    if ( isSpinning ) {
      illo.rotate.y += 0.03;
    }
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  }

animate();
