var michiganHospitals;


function setHospitals(){
  michiganHospitals = new google.maps.Data();
  //michiganHospitals.loadGeoJson('file here');
  michiganHospitals.setMap(googleMap);
}
