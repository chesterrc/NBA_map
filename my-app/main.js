import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';
import './style.css';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    //american center: -10200000, 4500000
    center: [-10200000, 4500000],
    zoom: 4.5,
    //constraint for zooming out
    minZoom: 4.5,
    //constraints the map to only view the US
    extent: [-20200000, 0, -7200000, 7500000],
  }),
});
