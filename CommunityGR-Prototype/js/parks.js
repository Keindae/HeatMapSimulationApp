var grandRapidsParks;
var wyomingParks;

function setParks(){
    grandRapidsParks = new google.maps.Data();
    grandRapidsParks.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/parks/ParksAndRec/GrandRapidsParks.json');
    grandRapidsParks.setMap(googleMap);
    grandRapidsParks.setStyle({
        visible: false
    });

    wyomingParks = new google.maps.Data();
    wyomingParks.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/parks/ParksAndRec/WyomingParks.json');
    wyomingParks.setMap(googleMap);
    wyomingParks.setStyle({
        visible: false
    });


}