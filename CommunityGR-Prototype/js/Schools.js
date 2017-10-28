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
  nonPublicElementarySchools.loadGeoJson('JsonFile Here');
  nonPublicElementarySchools.setStyle({
    visible: false
  });
  nonPublicElementarySchools.setMap(googleMap);
}
