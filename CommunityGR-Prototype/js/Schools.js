var michiganHighSchools;
var michiganMiddleSchools;
var michiganElementarySchools;
var nonPublicElementarySchools;
var nonPublicHighSchools;
var nonPublicMiddleSchools;
var nonPublicElementarySchools;

function setHighSchools(){
  michiganHighSchools = new google.maps.Data();
  michiganHighSchools.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/WorkingOnHTML/MichiganHighSchools/HighSchools.json');
  michiganHighSchools.setStyle({
    visible: false
  });
  michiganHighSchools.setMap(googleMap);
}

function setPrivateHighSchools(){
  nonPublicHighSchools = new google.maps.Data();
  nonPublicHighSchools.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/Hospitals/MichiganHighSchools/PrivateHighSchools.json');
  nonPublicHighSchools.setStyle({
    visible: false
  });
  nonPublicHighSchools.setMap(googleMap);
}

function setMiddleSchools(){
  michiganMiddleSchools = new google.maps.Data();
  michiganMiddleSchools.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/WorkingOnHTML/MichiganMiddleSchools/MichiganMiddleSchools.json');
  michiganMiddleSchools.setStyle({
    visible: false
  });
  michiganMiddleSchools.setMap(googleMap);
}

function setElementarySchools(){
  michiganElementarySchools = new google.maps.Data();
  michiganElementarySchools.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/WorkingOnHTML/MichiganElementarySchools/MichiganElementarySchools.json');
  michiganElementarySchools.setStyle({
    visible: false
  });
  michiganElementarySchools.setMap(googleMap);
}

function setNonPublicElementarySchools(){
  nonPublicElementarySchools = new google.maps.Data();
  nonPublicElementarySchools.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/Hospitals/MichiganMiddleSchools/NonPublicMiddleElementarySchools.json');
  nonPublicElementarySchools.setStyle({
    visible: false
  });
  nonPublicElementarySchools.setMap(googleMap);
}

function setNonPublicMiddleSchools(){
  nonPublicMiddleSchools = new google.maps.Data();
  nonPublicMiddleSchools.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/Hospitals/MichiganMiddleSchools/NonPublicMiddleElementarySchools.json');
  nonPublicMiddleSchools.setStyle({
    visible: false
  });
  nonPublicMiddleSchools.setMap(googleMap);
}
