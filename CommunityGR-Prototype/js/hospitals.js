var michiganHospitals;


function setHospitals(){
  michiganHospitals = new google.maps.Data();
  michiganHospitals.loadGeoJson('https://raw.githubusercontent.com/Keindae/HeatMapSimulationApp/Hospitals/MichiganHospitals/Hospitals.json');
  michiganHospitals.setMap(googleMap);
  michiganHospitals.setStyle({
    visible: false
  });

}
