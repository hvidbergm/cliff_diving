// map.js
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    var map = L.map('map').setView([43.51140429821651, 16.43998554475423], 13);
    
    // Create a tile layer using a map provider (e.g., OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);
    
    // Fetch the markers file
    fetch('/markers')
        .then(response => response.json())
        .then(data => {
            // Loop through the markers data and create Leaflet markers
            data.forEach(marker => {
                const lat = marker.lat;
                const lng = marker.lng;
                const title = marker.title;

            // Create a Leaflet marker and add it to the map
            L.marker([lat, lng]).addTo(map).bindPopup(title);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        }
    );

    // Add new marker on map click
    var marker; 
    // make a state of clicked or not clicked
    // if clicked, remove marker on next click
    // if not clicked, add marker on next click
        map.on('click', function (e) {
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;
        if (marker) {
            map.removeLayer(marker);
        }
        marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup('<button id="markerButton">Add this spot</button>').openPopup();
        document.getElementById('markerButton').addEventListener('click', function () {
            window.open('https://docs.google.com/forms/d/e/1FAIpQLSffNRZ9sekurtFgDXxg7L44AqPEGPcYIjpCp4eD9dALATmIRg/viewform?entry.1577354519=' + lng + '&entry.1555334124=' + lat);
            map.removeLayer(marker);
        });
    });
});