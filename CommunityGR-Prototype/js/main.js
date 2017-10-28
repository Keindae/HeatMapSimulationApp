var googleMap;
var marker;
var highschoolMarker;
var polygonMap = new Map();

function initMap() {
    googleMap = new google.maps.Map(document.getElementById('map-card'), {
        center: {lat: 42.955267, lng: -85.671772},
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.TERRAIN
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
    setParks();
    setHighSchools();
    setMiddleSchools();
    setElementarySchools();
    setNonPublicElementarySchools();
    setNonPublicMiddleSchools();
    setPrivateHighSchools();
}

//The error I am getting, "setStyle" does not exist
function publicHighSchoolsCheckBox(checkbox){
  if(checkbox.checked){
    michiganHighSchools.setStyle({
      visible: true
    });
  }
  else {
    michiganHighSchools.setStyle({
      visible: false
    });
    }
}

function privateHighSchoolsCheckBox(checkbox){
  if(checkbox.checked){
    nonPublicHighSchools.setStyle({
      visible: true
    });
    else{
      nonPublicHighSchools.setStyle({
        visible: false
      });
    }
  }
}

function privateMiddleSchoolsCheckBox(checkbox){
  if(checkbox.checked){
    nonPublicMiddleSchools.setStyle({
      visible: true
    });
    else{
      nonPublicMiddleSchools.setStyle({
        visible: false
      });
    }
  }
}

function privateElementarySchoolsCheckBox(checkbox){
  if(checkbox.checked){
    nonPublicElementarySchools.setStyle({
      visible: true
    });
    else{
      nonPublicElementarySchools.setStyle({
        visible: false
      });
    }
  }
}

function publicMiddleSchoolsCheckBox(checkbox){
  if(checkbox.checked){
    michiganMiddleSchools.setStyle({
      visible: true
    });
  }
  else{
    michiganMiddleSchools.setStyle({
      visible: false
    });
  }
}

function publicElementarySchoolsCheckBox(checkbox){
  if(checkbox.checked){
    michiganElementarySchools.setStyle({
      visible: true
    });
  }
  else{
    michiganElementarySchools.setStyle({
      visible: false
    });
  }
}

function grandRapidsCheckBox(event) {
    if (event.checked) {
        grandRapidsData.setStyle({
            fillColor: 'red',
            visible: true
        });
    }
    else {
        grandRapidsData.setStyle({
            visible: false
        });
    }
}

function wyomingCheckbox(event) {
    if (event.checked) {
        wyomingData.setStyle({
            fillColor: 'blue',
            visible: true
        });
    }
    else {
        wyomingData.setStyle({
            visible: false
        });
    }
}

function grandvilleCheckbox(event){
    if(event.checked){
    grandvilleData.setStyle({
            fillColor: 'cyan',
            visible: true
        });
    }
    else {
        grandvilleData.setStyle({
            visible: false
        });
    }
}

function walkerCheckbox(event){
    if(event.checked){
    walkerData.setStyle({
            fillColor: 'navy',
            visible: true
        });
    }
    else {
        walkerData.setStyle({
            visible: false
        });
    }
}

function kentwoodCheckbox(event){
    if(event.checked){
    kentwoodData.setStyle({
            fillColor: 'teal',
            visible: true
        });
    }
    else {
        kentwoodData.setStyle({
            visible: false
        });
    }
}

function lowellCheckbox(event){
    if(event.checked){
    lowellData.setStyle({
            fillColor: 'magenta',
            visible: true
        });
    }
    else {
        lowellData.setStyle({
            visible: false
        });
    }
}

function byronCenterCheckbox(event){
    if(event.checked){
    byronCenterData.setStyle({
            fillColor: 'yellow',
            visible: true
        });
    }
    else {
        byronCenterData.setStyle({
            visible: false
        });
    }
}

function comstockCheckbox(event){
    if(event.checked){
    comstockData.setStyle({
            fillColor: 'orange',
            visible: true
        });
    }
    else {
        comstockData.setStyle({
            visible: false
        });
    }
}

function rockfordCheckbox(event){
    if(event.checked){
    rockfordData.setStyle({
            fillColor: 'purple',
            visible: true
        });
    }
    else {
        rockfordData.setStyle({
            visible: false
        });
    }
}

function cedarSpringsCheckbox(event){
    if(event.checked){
    cedarSpringsData.setStyle({
            fillColor: 'blue',
            visible: true
        });
    }
    else {
        cedarSpringsData.setStyle({
            visible: false
        });
    }
}

function caledoniaCheckbox(event){
    if(event.checked){
    caledoniaData.setStyle({
            fillColor: 'green',
            visible: true
        });
    }
    else {
        caledoniaData.setStyle({
            visible: false
        });
    }
}

function spartaCheckbox(event){
    if(event.checked){
    spartaData.setStyle({
            fillColor: 'red',
            visible: true
        });
    }
    else {
        spartaData.setStyle({
            visible: false
        });
    }
}

function demographicsCheckBox(event) {
    if (event.checked) {
        miDemographic.setStyle({
            visible: true
        });
    } else {
        miDemographic.setStyle({
            visible: false
        });
    }
}

function onChangeCheckbox(checkbox) {
    if (checkbox.checked) {
        marker.setMap(googleMap);
    }
    else {
        marker.setMap(null);
    }
}

function highSchoolChangeMarker(checkbox) {
    if (checkbox.checked) {
        highSchoolMarker.setMap(googleMap);
    }
    else {
        highSchoolMarker.setMap(null);
    }
}

function parksCheckbox(event) {
    if (event.checked) {
        grandRapidsParks.setStyle({
            visible: true
        });

        wyomingParks.setStyle({
            visible: true
        });

        grandvilleParks.setStyle({
            visible: true
        });

        walkerParks.setStyle({
            visible: true
        });

        kentwoodParks.setStyle({
            visible: true
        });

        lowellParks.setStyle({
            visible: true
        });

        byronCenterParks.setStyle({
            visible: true
        });

        comstockParks.setStyle({
            visible: true
        });

        rockfordParks.setStyle({
            visible: true
        });

        cedarSpringsParks.setStyle({
            visible: true
        });

        caledoniaParks.setStyle({
            visible: true
        });

        spartaParks.setStyle({
            visible: true
        });
    }
    else {
        grandRapidsParks.setStyle({
            visible: false
        });

        wyomingParks.setStyle({
            visible: false
        });

        grandvilleParks.setStyle({
            visible: false
        });

        walkerParks.setStyle({
            visible: false
        });

        kentwoodParks.setStyle({
            visible: false
        });

        lowellParks.setStyle({
            visible: false
        });

        byronCenterParks.setStyle({
            visible: false
        });

        comstockParks.setStyle({
            visible: false
        });

        rockfordParks.setStyle({
            visible: false
        });

        cedarSpringsParks.setStyle({
            visible: false
        });

        caledoniaParks.setStyle({
            visible: false
        });

        spartaParks.setStyle({
            visible: false
        });
    }
}
