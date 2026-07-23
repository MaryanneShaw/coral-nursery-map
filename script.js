mapboxgl.accessToken = 'pk.eyJ1IjoibWFyeWFubmVzaGF3IiwiYSI6ImNtcmljbWRxcjBpOGU0YXEwdzB1MjFlMDMifQ.8y6KhUxUMVWoWzUshjLdiA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/maryanneshaw/cmrn1q8q5001f01srg3pe85ke',
    center: [177.5505, -18.1819],
    zoom: 17
});

map.addControl(new mapboxgl.NavigationControl());

const coralLayerId = 'ce8293df4da79970abde';

/*
Photo galleries for each coral nursery point.

The names on the left must match the names shown
on the Mapbox map exactly.
*/
const coralPhotos = {
    "Coral Table 1 - QURU": [
        "images/Guru.JPG",
        "images/Guru-2.jpg",
        "images/Guru-3.jpg"
    ],

    "Coral Table 2 - ULAVI": [
        "images/Ulavi.jpg",
        "images/Ulavi-2.jpg",
        "images/Ulavi-3.jpg"
    ],

    "A-Frames": [
        "images/A-frame.jpg",
        "images/A-frame-2.jpg",
        "images/A-frame-3.jpg"
    ],

    "Coral Table 3 & 4 - IKA VUKA": [
        "images/Ika Vuka.jpg",
        "images/Ika Vuka-2.jpg",
        "images/Ika Vuka-3.jpg"
    ],

    "Gene Bank": [
        "images/Gene Bank.jpg",
        "images/Gene Bank-2.jpg",
        "images/Gene Bank-3.jpg",
        "images/Gene Bank-4.jpg"
    ]
};

map.on('load', () => {
    map.on('click', coralLayerId, (event) => {
        const feature = event.features[0];
        const properties = feature.properties;
        const pointName = properties.Name || 'Coral Nursery Structure';

        const photos = coralPhotos[pointName] || [];

        const galleryHTML = photos.length > 0
            ? `
                <div class="photo-gallery">
                    ${photos.map((photo, index) => `
                        <img
                            src="${photo}"
                            alt="${pointName} photo ${index + 1}"
                            loading="lazy"
                        >
                    `).join('')}
                </div>
            `
            : `
                <p class="no-photos">
                    Photos will be added soon.
                </p>
            `;

        const popupContent = `
            <div class="coral-popup">
                <h3>${pointName}</h3>

                ${galleryHTML}

                <p>
                    <strong>Site ID:</strong>
                    ${properties['Site ID'] || 'Not available'}
                </p>

                <p>
                    <strong>Species:</strong>
                    ${properties.Species || 'Not available'}
                </p>

                <p>
                    <strong>Structure Type:</strong>
                    ${properties['Structure Type'] || 'Not available'}
                </p>

                <p>
                    <strong>Description:</strong>
                    ${properties.Description || 'Not available'}
                </p>
            </div>
        `;

        new mapboxgl.Popup({
            offset: 15,
            closeButton: true,
            closeOnClick: true,
            maxWidth: '340px'
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
