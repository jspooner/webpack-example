import bar from './bar';
require('../css/main.scss');


bar();

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken = 'pk.eyJ1IjoianNwb29uZXIiLCJhIjoiY2o5azhtdzNrMDR0bDJxcXp6ZTE1aDl6eSJ9.grYeGx57z6SCyUgnb5xJtw';

var map = new mapboxgl.Map({
  container: 'map',
  center: [-74.5447, 40.6892],
  zoom: 8,
  style: 'mapbox://styles/mapbox/streets-v10'
});

map.on('load', function() {
  map.addLayer({
    'id': 'wms-test-layer',
    'type': 'raster',
    'source': {
      'type': 'raster',
      'tiles': [
        'https://geodata.state.nj.us/imagerywms/Natural2015?bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&width=256&height=256&layers=Natural2015'
      ],
      'tileSize': 256
    },
    'paint': {}
  }, 'aeroway-taxiway');
});
