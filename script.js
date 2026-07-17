mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeWFubmVzaGF3IiwiYSI6ImNtcmljbWRxcjBpOGU0YXEwdzB1MjFlMDMifQ.8y6KhUxUMVWoWzUshjLdiA';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/maryanneshaw/cmrn1q8q5001f01srg3pe85ke',
  center: [177.5505, -18.1819],
  zoom: 17
});

map.addControl(new mapboxgl.NavigationControl());
const coralLayerId = 'ce8293df4da79970abde';

map.on('load', () => {
    map.on('click', coralLayerId, (event) => {
        const feature = event.features[0];
        const properties = feature.properties;

        const popupContent = `
            <div class="coral-popup">
                <h3>${properties.Name || 'Coral Nursery Structure'}</h3>

                <p><strong>Site ID:</strong>
                ${properties['Site ID'] || 'Not available'}</p>

                <p><strong>Species:</strong>
                ${properties.Species || 'Not available'}</p>

                <p><strong>Structure Type:</strong>
                ${properties['Structure Type'] || 'Not available'}</p>

                <p><strong>Description:</strong>
                ${properties.Description || 'Not available'}</p>
            </div>
        `;

        new mapboxgl.Popup({
            offset: 15,
            closeButton: true,
            closeOnClick: true
        })
            .setLngLat(event.lngLat)
            .setHTML(popupContent)
            .addTo(map);
    });

    map.on('mouseenter', coralLayerId, () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', coralLayerId, () => {
        map.getCanvas().style.cursor = '';
    });
});
