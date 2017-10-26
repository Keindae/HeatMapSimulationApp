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

    setParkListener();
}

function setParkListener() {
    var grandRapidsParksInfo = new google.maps.InfoWindow();
    grandRapidsParks.addListener('click', function (event) {
        var myHTML = event.feature.getProperty("name");
        grandRapidsParksInfo.setContent("<div style='width:150px;'>" + myHTML + "</div>");
        grandRapidsParksInfo.setPosition(event.latLng);
        grandRapidsParksInfo.open(googleMap);
    });

    var wyomingParksInfo = new google.maps.InfoWindow();
    wyomingParks.addListener('click', function (event) {
        var myHTML = event.feature.getProperty("name");
        wyomingParksInfo.setContent("<div style='width:150px;'>" + myHTML + "</div>");
        wyomingParksInfo.setPosition(event.latLng);
        wyomingParksInfo.open(googleMap);
    });

    var grandvilleParksInfo = new google.maps.InfoWindow();
    grandvilleParks.addListener('click', function (event) {
        var myHTML = event.feature.getProperty("name");
        grandvilleParksInfo.setContent("<div style='width:150px;'>" + myHTML + "</div>");
        grandvilleParksInfo.setPosition(event.latLng);
        grandvilleParksInfo.open(googleMap);
    });

    var walkerParksInfo = new google.maps.InfoWindow();
    walkerParks.addListener('click', function (event) {
        var myHTML = event.feature.getProperty("name");
        walkerParksInfo.setContent("<div style='width:150px;'>" + myHTML + "</div>");
        walkerParksInfo.setPosition(event.latLng);
        walkerParksInfo.open(googleMap);
    });

    var kentwoodParksInfo = new google.maps.InfoWindow();
    kentwoodParks.addListener('click', function (event) {
        var myHTML = event.feature.getProperty("name");
        kentwoodParksInfo.setContent("<div style='width:150px;'>" + myHTML + "</div>");
        kentwoodParksInfo.setPosition(event.latLng);
        kentwoodParksInfo.open(googleMap);
    });

    var lowellParksInfo = new google.maps.InfoWindow();
    lowellParks.addListener('click', function (event) {
        var myHTML = event.feature.getProperty("name");
        lowellParksInfo.setContent("<div style='width:150px;'>" + myHTML + "</div>");
        lowellParksInfo.setPosition(event.latLng);
        lowellParksInfo.open(googleMap);
    });

    var byronCenterParksInfo = new google.maps.InfoWindow();
    byronCenterParks.addListener('click', function (event) {
        var myHTML = event.feature.getProperty("name");
        byronCenterParksInfo.setContent("<div style='width:150px;'>" + myHTML + "</div>");
        byronCenterParksInfo.setPosition(event.latLng);
        byronCenterParksInfo.open(googleMap);
    });

    var comstockParksInfo = new google.maps.InfoWindow();
    comstockParks.addListener('click', function (event) {
        var myHTML = event.feature.getProperty("name");
        comstockParksInfo.setContent("<div style='width:150px;'>" + myHTML + "</div>");
        comstockParksInfo.setPosition(event.latLng);
        comstockParksInfo.open(googleMap);
    });

    var rockfordParksInfo = new google.maps.InfoWindow();
    rockfordParks.addListener('click', function (event) {
        var myHTML = event.feature.getProperty("name");
        rockfordParksInfo.setContent("<div style='width:150px;'>" + myHTML + "</div>");
        rockfordParksInfo.setPosition(event.latLng);
        rockfordParksInfo.open(googleMap);
    });

    var cedarSpringsParksInfo = new google.maps.InfoWindow();
    cedarSpringsParks.addListener('click', function (event) {
        var myHTML = event.feature.getProperty("name");
        cedarSpringsParksInfo.setContent("<div style='width:150px;'>" + myHTML + "</div>");
        cedarSpringsParksInfo.setPosition(event.latLng);
        cedarSpringsParksInfo.open(googleMap);
    });

    var caledoniaParksInfo = new google.maps.InfoWindow();
    caledoniaParks.addListener('click', function (event) {
        var myHTML = event.feature.getProperty("name");
        caledoniaParksInfo.setContent("<div style='width:150px;'>" + myHTML + "</div>");
        caledoniaParksInfo.setPosition(event.latLng);
        caledoniaParksInfo.open(googleMap);
    });

    var spartaParksInfo = new google.maps.InfoWindow();
    spartaParks.addListener('click', function (event) {
        var myHTML = event.feature.getProperty("name");
        spartaParksInfo.setContent("<div style='width:150px;'>" + myHTML + "</div>");
        spartaParksInfo.setPosition(event.latLng);
        spartaParksInfo.open(googleMap);
    });
}