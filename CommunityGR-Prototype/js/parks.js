var parks;

function setParks(){
    parks = new google.maps.Data();
    parks.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/parks/ParksAndRec/GrandRapidsParks.json');
    parks.setMap(googleMap);
    parks.setStyle({
        visible: false
    });
}