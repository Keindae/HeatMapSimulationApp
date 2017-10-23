var wyomingData;
var grandvilleData;
var kentwoodData;
var comstockData;
var spartaData;
var grandRapidsData;
var byronCenterData;
var cedarSpringsData;
var rockfordData;
var lowellData;
var eastGrandRapidsData;
var caledoniaData;
var walkerData;
var miDemographic;
var michiganHighSchools;


function setHighSchools(){
  michiganHighSchools = new google.maps.Data();
  michiganHighSchools.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/WorkingOnHTML/MichiganHighSchools/HighSchools.json');
  michiganHighSchools.setStyle({
    visible: false
  });
  michiganHighSchools.setMap(googleMap);
}

function setBoundaries() {
    wyomingData = new google.maps.Data();
    wyomingData.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/wyomingPolygon.json');
    wyomingData.setStyle({
        fillColor: 'green',
        visible: false
    });
    wyomingData.setMap(googleMap);
    polygonMap.set("wyoming", wyomingData);

    grandvilleData = new google.maps.Data();
    grandvilleData.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/grandvillePolygon.json');
    grandvilleData.setStyle({
        fillColor: 'red',
        visible: false
    });
    grandvilleData.setMap(googleMap);
    polygonMap.set('grandville', grandvilleData);

    kentwoodData = new google.maps.Data();
    kentwoodData.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/kentwoodPolygon.json');
    kentwoodData.setStyle({
        fillColor: 'blue',
        visible: false
    });
    kentwoodData.setMap(googleMap);
    polygonMap.set('kentwood', kentwoodData);

    comstockData = new google.maps.Data();
    comstockData.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/comstockParkPolygon.json');
    comstockData.setStyle({
        fillColor: 'yellow',
        visible: false
    });
    comstockData.setMap(googleMap);
    polygonMap.set('comstock', comstockData);

    spartaData = new google.maps.Data();
    spartaData.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/spartaPolygon.json');
    spartaData.setStyle({
        fillColor: 'orange',
        visible: false

    });
    spartaData.setMap(googleMap);
    polygonMap.set('sparta', spartaData);

    grandRapidsData = new google.maps.Data();
    grandRapidsData.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/grandRapidsPolygon.json');
    grandRapidsData.setStyle({
        fillColor: 'purple',
        visible: false
    });
    grandRapidsData.setMap(googleMap);
    polygonMap.set('grandRapids', grandRapidsData);

    byronCenterData = new google.maps.Data();
    byronCenterData.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/byronCenter.json');
    byronCenterData.setStyle({
        fillColor: 'pink',
        visible: false
    });
    byronCenterData.setMap(googleMap);
    polygonMap.set('byronCenter', byronCenterData);

    cedarSpringsData = new google.maps.Data();
    cedarSpringsData.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/cedarSpringsPolygon.json');
    cedarSpringsData.setStyle({
        fillColor: 'violet',
        visible: false
    });
    cedarSpringsData.setMap(googleMap);
    polygonMap.set('cedarSprings', cedarSpringsData);

    rockfordData = new google.maps.Data();
    rockfordData.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/rockfordPolygon.json');
    rockfordData.setStyle({
        fillColor: 'indigo',
        visible: false
    });
    rockfordData.setMap(googleMap);
    polygonMap.set('rockford', rockfordData);

    lowellData = new google.maps.Data();
    lowellData.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/lowellPolygon.json');
    lowellData.setStyle({
        fillColor: 'darkblue',
        visible: false
    });
    lowellData.setMap(googleMap);
    polygonMap.set('lowell', lowellData);

    eastGrandRapidsData = new google.maps.Data();
    eastGrandRapidsData.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/eastGrandRapidsPolygon.json');
    eastGrandRapidsData.setStyle({
        fillColor: 'gray',
        visible: false
    });
    eastGrandRapidsData.setMap(googleMap);
    polygonMap.set('eastGrandRapids', eastGrandRapidsData);

    caledoniaData = new google.maps.Data();
    caledoniaData.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/caledoniaPolygon.json');
    caledoniaData.setStyle({
        fillColor: 'lime',
        visible: false
    });
    caledoniaData.setMap(googleMap);
    polygonMap.set('caledonia', caledoniaData);

    walkerData = new google.maps.Data();
    walkerData.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/walkerPolygon.json');
    walkerData.setStyle({
       visible: false
    });
    walkerData.setMap(googleMap);

    setListeners();
}

function setListeners() {

    var miDemographicInfo = new google.maps.InfoWindow({
      content: "Michigan Demographics"
    });

    miDemographicInfo.addListener('click', function(event) {
      miDemographicInfo.open(googleMap, this);
      miDemographicInfo.setPosition(event.latLng);
    });

    var wyomingInfoWindow = new google.maps.InfoWindow({
        content: "City Of Wyoming"
    });
    wyomingData.addListener('click', function (event) {
        wyomingInfoWindow.open(googleMap, this);
        wyomingInfoWindow.setPosition(event.latLng);
    });

    var grandvilleInfoWindow = new google.maps.InfoWindow({
        content: "City of Grandville"
    });
    grandvilleData.addListener('click', function (event) {
        grandvilleInfoWindow.open(googleMap, this);
        grandvilleInfoWindow.setPosition(event.latLng);
    });

    var kentwoodInfoWindow = new google.maps.InfoWindow({
        content: "City of Kentwood"
    });
    kentwoodData.addListener('click', function (event) {
        kentwoodInfoWindow.open(googleMap, this);
        kentwoodInfoWindow.setPosition(event.latLng);
    });

    var comstockInfoWindow = new google.maps.InfoWindow({
        content: "City of Comstock Park"
    });
    comstockData.addListener('click', function (event) {
        comstockInfoWindow.open(googleMap, this);
        comstockInfoWindow.setPosition(event.latLng);
    });

    var spartaInfoWindow = new google.maps.InfoWindow({
        content: "City of Sparta"
    });
    spartaData.addListener('click', function (event) {
        spartaInfoWindow.open(googleMap, this);
        spartaInfoWindow.setPosition(event.latLng);
    });

    var grandRapidsInfoWindow = new google.maps.InfoWindow({
        content: "City of Grand Rapids"
    });
    grandRapidsData.addListener('click', function (event) {
        grandRapidsInfoWindow.open(googleMap, this);
        grandRapidsInfoWindow.setPosition(event.latLng);
    });

    var byronCenterInfoWindow = new google.maps.InfoWindow({
        content: "City of Byron Center"
    });
    byronCenterData.addListener('click', function (event) {
        byronCenterInfoWindow.open(googleMap, this);
        byronCenterInfoWindow.setPosition(event.latLng);
    });

    var cedarSpringsInfoWindow = new google.maps.InfoWindow({
        content: "City of Cedar Springs"
    });
    cedarSpringsData.addListener('click', function (event) {
        cedarSpringsInfoWindow.open(googleMap, this);
        cedarSpringsInfoWindow.setPosition(event.latLng);
    });

    var rockfordInfoWindow = new google.maps.InfoWindow({
        content: "City of Rockford"
    });
    rockfordData.addListener('click', function (event) {
        rockfordInfoWindow.open(googleMap, this);
        rockfordInfoWindow.setPosition(event.latLng);
    });

    var lowellInfoWindow = new google.maps.InfoWindow({
        content: "City of Lowell"
    });
    lowellData.addListener('click', function (event) {
        lowellInfoWindow.open(googleMap, this);
        lowellInfoWindow.setPosition(event.latLng);
    });

    var eastGrandRapidsInfoWindow = new google.maps.InfoWindow({
        content: "City of East Grand Rapids"
    });
    eastGrandRapidsData.addListener('click', function (event) {
        eastGrandRapidsInfoWindow.open(googleMap, this);
        eastGrandRapidsInfoWindow.setPosition(event.latLng);
    });

    var caledoniaInfoWindow = new google.maps.InfoWindow({
        content: "City of Caledonia"
    });
    caledoniaData.addListener('click', function (event) {
        caledoniaInfoWindow.open(googleMap, this);
        caledoniaInfoWindow.setPosition(event.latLng);
    });

    var walkerInfoWindow = new google.maps.InfoWindow({
        content: "City of Walker"
    });
    walkerData.addListener('click', function (event) {
        walkerInfoWindow.open(googleMap, this);
        walkerInfoWindow.setPosition(event.latLng);
    });
}

function setDemographics(){
  miDemographic = new google.maps.Data();
  miDemographic.loadGeoJson('http://gis-michigan.opendata.arcgis.com/datasets/172a00f7218b455299682f4d76562757_13.geojson');

}
