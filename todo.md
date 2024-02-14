## PIVOT?
* Make a mobile app instead?

## PHASE 1
* Fix default location of map
* Add about page
* Make stats dynamic
* Add full-screen map page
* Add more info to markers --> contributor, desription, how to get there, safety measures, altitude
* Create flow for validating spots --> do not implement before corrupt behaviour has been seen (the later we filter, the easier it is to add data, hence the more spots will be added). V1=validation DB where I can mark which should be transfered to deployment

## PHASE 2
* Add user auth - maybe using Clerck? [Clerk.com](https://clerk.com/)

## PHASE 3
* Deploy to get some actual spots on the map
* Add upvote ranking --> issue of spam/bad user behaviour
* Add commenting --> issue of content filtering
* Calculate nearest city
* Migrate to an actual DB - maybe firestore? azure blob storage? google one?

## SITE UPGRADES: TBD
* Header: https://getbootstrap.com/docs/5.3/examples/headers/    

## MAP UPGRADES: TBD 
* Tile layers (sattelite/map): https://tomickigrzegorz.github.io/leaflet-examples/#34.multiple-tile-layers
* Center map when clicking marker: https://tomickigrzegorz.github.io/leaflet-examples/#22.center-map-when-click-marker
* Ask for location data to center map: https://tomickigrzegorz.github.io/leaflet-examples/#33.location
* Cluster markers on zoom: https://tomickigrzegorz.github.io/leaflet-examples/#09.marker-grouping-markercluster-plugin 
* Location button: https://tomickigrzegorz.github.io/leaflet-examples/#49.location-button
* Tabs in popup: https://tomickigrzegorz.github.io/leaflet-examples/#51.tabs-in-popup
* Popup as side panel on fixed position: https://tomickigrzegorz.github.io/leaflet-examples/#68.popup-in-a-fixed-position
