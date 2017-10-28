var michiganHospitals;
var michiganUrgentCare;

function setHospitals(){
  michiganHospitals = new google.maps.Data();
  michiganHospitals.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/Hospitals/MichiganHospitals/Hospitals.json');
  michiganHospitals.setMap(googleMap);
  michiganHospitals.setStyle({
    visible: false
  });
}

function setUrgentCare(){
  michiganUrgentCare = new google.maps.Data();
  michiganUrgentCare.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/Hospitals/MichiganHospitals/urgentCare.json');
  michiganUrgentCare.setMap(googleMap);
  michiganUrgentCare.setStyle({
    visible: false
  })
}
