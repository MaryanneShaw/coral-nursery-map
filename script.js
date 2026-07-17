mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeWFubmVzaGF3IiwiYSI6ImNtcmljbWRxcjBpOGU0YXEwdzB1MjFlMDMifQ.8y6KhUxUMVWoWzUshjLdiA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/maryanneshaw/cmrn1q8q5001f01srg3pe85ke',
  center: [177.5505, -18.1819],
  zoom: 17
});

map.addControl(new mapboxgl.NavigationControl());
