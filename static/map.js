// map.js
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    var map = L.map('map', fullscreenControl = true).setView([50, -45], 3);
    
    // Create a tile layer using a map provider (e.g., OpenStreetMap)
    var osMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18})
        
    osMap.addTo(map);
    
    // Fetch the markers file
    fetch('/markers')
        .then(response => response.json())
        .then(data => {
            // Loop through the markers data and create Leaflet markers
            // console.log(data);
            data.forEach(marker => {
                const lat = marker.latitude;
                const lng = marker.longitude;
                const title = marker.title;

            // Create a Leaflet marker and add it to the map
            L.marker([lat, lng]).addTo(map).bindPopup(title);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        }
    );

    // Add new marker on map click but remove the marker on the next click
    var marker;
    var mouseClicked = false;
    map.on('click', function (e) {
        if (mouseClicked == true) {
            mouseClicked = false;
            map.removeLayer(marker);
        } else {
            var lat = e.latlng.lat;
            var lng = e.latlng.lng;
            if (marker) {
                map.removeLayer(marker);
            }
            marker = L.marker([lat, lng]).addTo(map);
            marker._icon.classList.add("huechange");
            marker.bindPopup('<button id="markerButton">Add this spot</button>').openPopup();
            document.getElementById('markerButton').addEventListener('click', function () {
                window.open('https://docs.google.com/forms/d/e/1FAIpQLSffNRZ9sekurtFgDXxg7L44AqPEGPcYIjpCp4eD9dALATmIRg/viewform?entry.1577354519=' + lng + '&entry.1555334124=' + lat);
                map.removeLayer(marker);
            });
            mouseClicked = true;
        }
    });

    var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	    attribution: 'Tiles &copy; Esri'
    });

    var overlayMaps = {
        "Default": osMap,
        "Satellite": Esri_WorldImagery
    };


    // Add a scale bar to the map
    L.control.layers(overlayMaps).addTo(map);
    L.control.scale().addTo(map);

});