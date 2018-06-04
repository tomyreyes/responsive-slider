const slider = tns({
  "items": 1,
  "controls": false, //remove arrows 
  "responsive": {
    "600": {
      "items": 1,
      "controls": false,
    },
    "900": {
      "items": 1,
      "controls": true
    }
  },
  "container": "#responsive",
  "mode": "carousel",
  "navContainer": "#customize-thumbnails",
  "navAsThumbnails": true,
  "controlsContainer": "#custom-controls",
  "mouseDrag": true,
  "speed": 1000
});