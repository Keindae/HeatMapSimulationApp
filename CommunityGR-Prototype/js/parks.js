var grandRapidsParks;
var wyomingParks;
var grandvilleParks;
var walkerParks;
var kentwoodParks;
var lowellParks;
var byronCenterParks;
var comstockParks;
var rockfordParks;
var cedarSpringsParks;
var caledoniaParks;
var spartaParks;

function setParks() {
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

    grandvilleParks = new google.maps.Data();
    grandvilleParks.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/parks/ParksAndRec/GrandvilleParks.json');
    grandvilleParks.setMap(googleMap);
    grandvilleParks.setStyle({
        visible: false
    });

    walkerParks = new google.maps.Data();
    walkerParks.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/parks/ParksAndRec/WalkerParks.json');
    walkerParks.setMap(googleMap);
    walkerParks.setStyle({
        visible: false
    });

    kentwoodParks = new google.maps.Data();
    kentwoodParks.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/parks/ParksAndRec/KentwoodParks.json');
    kentwoodParks.setMap(googleMap);
    kentwoodParks.setStyle({
        visible: false
    });

    lowellParks = new google.maps.Data();
    lowellParks.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/parks/ParksAndRec/LowellParks.json');
    lowellParks.setMap(googleMap);
    lowellParks.setStyle({
        visible: false
    });

    byronCenterParks = new google.maps.Data();
    byronCenterParks.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/parks/ParksAndRec/ByronCenterParks.json');
    byronCenterParks.setMap(googleMap);
    byronCenterParks.setStyle({
        visible: false
    });

    comstockParks = new google.maps.Data();
    comstockParks.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/parks/ParksAndRec/ComstockParks.json');
    comstockParks.setMap(googleMap);
    comstockParks.setStyle({
        visible: false
    });

    rockfordParks = new google.maps.Data();
    rockfordParks.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/parks/ParksAndRec/RockfordParks.json');
    rockfordParks.setMap(googleMap);
    rockfordParks.setStyle({
        visible: false
    });

    cedarSpringsParks = new google.maps.Data();
    cedarSpringsParks.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/parks/ParksAndRec/CedarSpringsParks.json');
    cedarSpringsParks.setMap(googleMap);
    cedarSpringsParks.setStyle({
        visible: false
    });

    caledoniaParks = new google.maps.Data();
    caledoniaParks.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/parks/ParksAndRec/CaledoniaPark.json');
    caledoniaParks.setMap(googleMap);
    caledoniaParks.setStyle({
        visible: false
    });

    spartaParks = new google.maps.Data();
    spartaParks.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/parks/ParksAndRec/SpartaPark.json');
    spartaParks.setMap(googleMap);
    spartaParks.setStyle({
        visible: false
    });
}