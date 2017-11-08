var places;
var googleMap;
var marker;
var infowindow;
var polygonMap = new Map();
var grandRapidsFoodMarkers = [];

function initMap() {
    googleMap = new google.maps.Map(document.getElementById('map-card'), {
        center: {lat: 42.955267, lng: -85.671772},
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    var request = {
        location: {lat: 42.955267, lng: -85.671772},
        radius: '10000',
        type: ['restaurant']
    };

    places = new google.maps.places.PlacesService(googleMap);
    places.nearbySearch(request, callback);
    /*
     * Calls to all of the set functions
     */

    setBoundaries();
    setParks();
    setHighSchools();
    setMiddleSchools();
    setElementarySchools();
    setNonPublicElementarySchools();
    setNonPublicMiddleSchools();
    setPrivateHighSchools();
    setHospitals();
    setUrgentCare();
}

/*
 * Toggle Demographics radio
 */
function populationRadio(radio) {
    if (radio.checked) {
        setPopulation();
    } else {

    }
}

function under5Radio(radio) {
    if (radio.checked) {
        setUnder5();
    } else {

    }
}

function under18Radio(radio) {
    if (radio.checked) {
        setUnder18();
    } else {

    }
}

function under65Radio(radio) {
    if (radio.checked) {
        setUnder65();
    } else {

    }
}

function over65Radio(radio) {
    if (radio.checked) {
        setOver65();
    } else {

    }
}

/*
 * Function for displaying the urgent care location.
 */
function urgentCareCheckBox(checkbox) {
    if (checkbox.checked) {
        michiganUrgentCare.setStyle({
            visible: true
        });
    }
    else {
        michiganUrgentCare.setStyle({
            visible: false
        });
    }
}

/*
 * Function for the hospitals
 */
function hospitalsCheckBox(checkbox) {
    if (checkbox.checked) {
        michiganHospitals.setStyle({
            visible: true
        });
    }
    else {
        michiganHospitals.setStyle({
            visible: false
        });
    }
}


/*
 *This piece is setting up the markers for schools in the area, public and private
 */
function publicHighSchoolsCheckBox(checkbox) {
    if (checkbox.checked) {
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

function privateHighSchoolsCheckBox(checkbox) {
    if (checkbox.checked) {
        nonPublicHighSchools.setStyle({
            visible: true
        });
    }
    else {
        nonPublicHighSchools.setStyle({
            visible: false
        });
    }
}

function privateMiddleSchoolsCheckBox(checkbox) {
    if (checkbox.checked) {
        nonPublicMiddleSchools.setStyle({
            visible: true
        });
    }
    else {
        nonPublicMiddleSchools.setStyle({
            visible: false
        });
    }
}

function privateElementarySchoolsCheckBox(checkbox) {
    if (checkbox.checked) {
        nonPublicElementarySchools.setStyle({
            visible: true
        });
    }
    else {
        nonPublicElementarySchools.setStyle({
            visible: false
        });
    }
}

function publicMiddleSchoolsCheckBox(checkbox) {
    if (checkbox.checked) {
        michiganMiddleSchools.setStyle({
            visible: true
        });
    }
    else {
        michiganMiddleSchools.setStyle({
            visible: false
        });
    }
}

function publicElementarySchoolsCheckBox(checkbox) {
    if (checkbox.checked) {
        michiganElementarySchools.setStyle({
            visible: true
        });
    }
    else {
        michiganElementarySchools.setStyle({
            visible: false
        });
    }
}

/*
 * This next set of functions is responsible for the city boundaries portion
 */
function grandRapidsCheckBox(event) {
    if (event.checked) {
        grandRapidsData.forEach(function (feature) {
            processPoints(feature.getGeometry(), bounds.extend, bounds);
            googleMap.fitBounds(bounds);
        });
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
        wyomingData.forEach(function (feature) {
            processPoints(feature.getGeometry(), bounds.extend, bounds);
            googleMap.fitBounds(bounds);
        });
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

function grandvilleCheckbox(event) {
    if (event.checked) {
        grandvilleData.forEach(function(feature){
            processPoints(feature.getGeometry(), bounds.extend, bounds);
            googleMap.fitBounds(bounds);
        });
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

function walkerCheckbox(event) {
    if (event.checked) {
        walkerData.forEach(function(feature){
            processPoints(feature.getGeometry(), bounds.extend, bounds);
            googleMap.fitBounds(bounds);
        });
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

function kentwoodCheckbox(event) {
    if (event.checked) {
        kentwoodData.forEach(function(feature){
            processPoints(feature.getGeometry(), bounds.extend, bounds);
            googleMap.fitBounds(bounds);
        });
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

function lowellCheckbox(event) {
    if (event.checked) {
        lowellData.forEach(function(feature){
            processPoints(feature.getGeometry(), bounds.extend, bounds);
            googleMap.fitBounds(bounds);
        });
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

function byronCenterCheckbox(event) {
    if (event.checked) {
        byronCenterData.forEach(function(feature){
            processPoints(feature.getGeometry(), bounds.extend, bounds);
            googleMap.fitBounds(bounds);
        });
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

function comstockCheckbox(event) {
    if (event.checked) {
        comstockData.forEach(function(feature){
            processPoints(feature.getGeometry(), bounds.extend, bounds);
            googleMap.fitBounds(bounds);
        });
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

function rockfordCheckbox(event) {
    if (event.checked) {
        rockfordData.forEach(function(feature){
            processPoints(feature.getGeometry(), bounds.extend, bounds);
            googleMap.fitBounds(bounds);
        });
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

function cedarSpringsCheckbox(event) {
    if (event.checked) {
        cedarSpringsData.forEach(function(feature){
            processPoints(feature.getGeometry(), bounds.extend, bounds);
            googleMap.fitBounds(bounds);
        });
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

function caledoniaCheckbox(event) {
    if (event.checked) {
        caledoniaData.forEach(function(feature){
            processPoints(feature.getGeometry(), bounds.extend, bounds);
            googleMap.fitBounds(bounds);
        });
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

function spartaCheckbox(event) {
    if (event.checked) {
        spartaData.forEach(function(feature){
            processPoints(feature.getGeometry(), bounds.extend, bounds);
            googleMap.fitBounds(bounds);
        });
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


/*
 * This function is used to set up the parks markers.
 */

function parksCheckbox(event) {
    if (event.checked) {
        if (document.getElementById("checkbox-13").checked) {
            grandRapidsParks.setStyle({
                visible: true
            });
        }

        if (document.getElementById("checkbox-14").checked) {
            wyomingParks.setStyle({
                visible: true
            });
        }

        if (document.getElementById("checkbox-15").checked) {
            grandvilleParks.setStyle({
                visible: true
            });
        }

        if (document.getElementById("checkbox-16").checked) {
            walkerParks.setStyle({
                visible: true
            });
        }

        if (document.getElementById("checkbox-17").checked) {
            kentwoodParks.setStyle({
                visible: true
            });
        }

        if (document.getElementById("checkbox-18").checked) {
            lowellParks.setStyle({
                visible: true
            });
        }

        if (document.getElementById("checkbox-19").checked) {
            byronCenterParks.setStyle({
                visible: true
            });
        }

        if (document.getElementById("checkbox-20").checked) {
            comstockParks.setStyle({
                visible: true
            });
        }

        if (document.getElementById("checkbox-21").checked) {
            rockfordParks.setStyle({
                visible: true
            });
        }

        if (document.getElementById("checkbox-22").checked) {
            cedarSpringsParks.setStyle({
                visible: true
            });
        }

        if (document.getElementById("checkbox-23").checked) {
            caledoniaParks.setStyle({
                visible: true
            });
        }

        if (document.getElementById("checkbox-24").checked) {
            spartaParks.setStyle({
                visible: true
            });
        }

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

function foodCheckbox(event) {
    var marker;

    for (var i = 0; i < grandRapidsFoodMarkers.length; i++) {
        marker = grandRapidsFoodMarkers[i];

        if (event.checked) {
            marker.setVisible(true);
        }
        else {
            marker.setVisible(false);
        }
    }
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
    }
}

function createMarker(place) {
    infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: googleMap,
        position: place.geometry.location
    });
    marker.setVisible(false);
    grandRapidsFoodMarkers.push(marker);

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        infowindow.open(googleMap, this);
    });
}

