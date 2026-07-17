mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeWFubmVzaGF3IiwiYSI6ImNtcm9vcG53ZjA5MWMyeW9qbGlyb2Mza2EifQ.xhrb94gvM-99dfLttoMnZg';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/maryanneshaw/cmrn1q8q5001f01srg3pe85ke',
  center: [177.5505, -18.1819],
  zoom: 17
});

map.addControl(new mapboxgl.NavigationControl());
