
export const particlesConfig = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        valueArea: 800 // Changed from value_area to valueArea
      }
    },
    color: {
      value: "#000000"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nbSides: 5 // Added for completeness
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacityMin: 0.1, // Changed from opacity_min to opacityMin
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        sizeMin: 0.1, // Changed from size_min to sizeMin
        sync: false
      }
    },
    lineLinked: { // Changed from line_linked to lineLinked
      enable: true,
      distance: 150,
      color: "#000000",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      outMode: "out", // Changed from out_mode to outMode
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detectOn: "canvas", // Changed from detect_on to detectOn
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        lineLinked: { // Changed from line_linked to lineLinked
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200
      },
      push: {
        particlesNb: 4 // Changed from particles_nb to particlesNb
      },
      remove: {
        particlesNb: 2 // Changed from particles_nb to particlesNb
      }
    }
  },
  retina_detect: true // This should be retinaDetect but keeping for compatibility
};
