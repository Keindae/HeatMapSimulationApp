var googleMap;
var marker;
var highschoolMarker;
var polygonMap = new Map();

function initMap() {
    googleMap = new google.maps.Map(document.getElementById('map-card'), {
        center: {lat: 42.955267, lng: -85.671772},
        zoom: 10
    });

    marker = new google.maps.Marker({
        position: {lat: 42.970371, lng: -85.665655},
        title: "Helen Devos Children's Hopsital"
    });

    highSchoolMarker = new google.maps.Marker({
      position: {lat: 43.033235, lng: -85.749957},
      title: "Kenowa Hills High School"
    });

    setBoundaries();
}

function grandRapidsCheckBox(event){
    if(event.checked){
        grandRapidsData.setStyle({
            visible: true
        });
    }
    else{
        grandRapidsData.setStyle({
            visible: false
        });
    }
}

function wyomingCheckbox(event){
    if(event.checked){
        wyomingData.setStyle({
            visible: true
        });
    }
    else{
        wyomingData.setStyle({
            visible: false
        });
    }
}

function grandvilleCheckbox(event){
    if(event.checked){
    grandvilleData.setStyle({
            visible: true
        });
    }
    else{
    grandvilleData.setStyle({
            visible: false
        });
    }
}

function walkerCheckbox(event){
    if(event.checked){
    walkerData.setStyle({
            visible: true
        });
    }
    else{
    walkerData.setStyle({
            visible: false
        });
    }
}

function kentwoodCheckbox(event){
    if(event.checked){
    kentwoodData.setStyle({
            visible: true
        });
    }
    else{
    kentwoodData.setStyle({
            visible: false
        });
    }
}

function lowellCheckbox(event){
    if(event.checked){
    lowellData.setStyle({
            visible: true
        });
    }
    else{
    lowellData.setStyle({
            visible: false
        });
    }
}

function byronCenterCheckbox(event){
    if(event.checked){
    byronCenterData.setStyle({
            visible: true
        });
    }
    else{
    byronCenterData.setStyle({
            visible: false
        });
    }
}

function comstockCheckbox(event){
    if(event.checked){
    comstockData.setStyle({
            visible: true
        });
    }
    else{
    comstockData.setStyle({
            visible: false
        });
    }
}

function rockfordCheckbox(event){
    if(event.checked){
    rockfordData.setStyle({
            visible: true
        });
    }
    else{
    rockfordData.setStyle({
            visible: false
        });
    }
}

function cedarSpringsCheckbox(event){
    if(event.checked){
    cedarSpringsData.setStyle({
            visible: true
        });
    }
    else{
    cedarSpringsData.setStyle({
            visible: false
        });
    }
}

function caledoniaCheckbox(event){
    if(event.checked){
    caledoniaData.setStyle({
            visible: true
        });
    }
    else{
    caledoniaData.setStyle({
            visible: false
        });
    }
}

function spartaCheckbox(event){
    if(event.checked){
    spartaData.setStyle({
            visible: true
        });
    }
    else{
    spartaData.setStyle({
            visible: false
        });
    }
}

function demographicsCheckBox(event){
  if(event.checked){
    miDemographic.setStyle({
      visible: true
    });
  }else {
    miDemographic.setStyle({
      visible: false
    });
  }
}

function onChangeCheckbox(checkbox){
    if(checkbox.checked){
        marker.setMap(googleMap);
    }
    else {
        marker.setMap(null);
    }
}

function highSchoolChangeMarker(checkbox){
  if(checkbox.checked){
    highSchoolMarker.setMap(googleMap);
  }
  else{
   highSchoolMarker.setMap(null);
  }
}
