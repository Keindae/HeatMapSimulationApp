var michiganHighSchools;
var michiganMiddleSchools;
var michiganElementarySchools;
var nonPublicElementarySchools;
var nonPublicHighSchools;
var nonPublicMiddleSchools;
var nonPublicElementarySchools;

function setHighSchools(){
  michiganHighSchools = new google.maps.Data();
  michiganHighSchools.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/master/MichiganHighSchools/HighSchools.json');
  michiganHighSchools.setMap(googleMap);
  michiganHighSchools.setStyle({
    visible: false
  });
  setSchoolListeners();
}

function setPrivateHighSchools(){
  nonPublicHighSchools = new google.maps.Data();
  nonPublicHighSchools.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/master/MichiganHighSchools/PrivateHighSchools.json');
  nonPublicHighSchools.setStyle({
    visible: false
  });
  nonPublicHighSchools.setMap(googleMap);
}

function setMiddleSchools(){
  michiganMiddleSchools = new google.maps.Data();
  michiganMiddleSchools.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/master/MichiganMiddleSchools/MichiganMiddleSchools.json');
  michiganMiddleSchools.setStyle({
    visible: false
  });
  michiganMiddleSchools.setMap(googleMap);
}

function setElementarySchools(){
  michiganElementarySchools = new google.maps.Data();
  michiganElementarySchools.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/master/MichiganElementarySchools/MichiganElementarySchools.json');
  michiganElementarySchools.setStyle({
    visible: false
  });
  michiganElementarySchools.setMap(googleMap);
}

function setNonPublicElementarySchools(){
  nonPublicElementarySchools = new google.maps.Data();
  nonPublicElementarySchools.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/master/MichiganMiddleSchools/NonPublicMiddleElementarySchools.json');
  nonPublicElementarySchools.setStyle({
    visible: false
  });
  nonPublicElementarySchools.setMap(googleMap);
}

function setNonPublicMiddleSchools(){
  nonPublicMiddleSchools = new google.maps.Data();
  nonPublicMiddleSchools.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/master/MichiganMiddleSchools/NonPublicMiddleElementarySchools.json');
  nonPublicMiddleSchools.setStyle({
    visible: false
  });
  nonPublicMiddleSchools.setMap(googleMap);
}

function setSchoolListeners(){
  var publicHighschoolsMarkers = new google.maps.InfoWindow();
  publicHighschoolsMarkers.addListener('click', function (event) {
      var myHTML = event.feature.getProperty("name");
      publicHighschoolsMarkers.setContent("<div style='width:150px;'>" + myHTML + "</div>");
      publicHighschoolsMarkers.setPosition(event.latLng);
      publicHighschoolsMarkers.open(googleMap);
    });
  }
