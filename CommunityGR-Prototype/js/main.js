var googleMap;
var marker;
var polygonMap = new Map();

function initMap() {
    googleMap = new google.maps.Map(document.getElementById('map-card'), {
        center: {lat: 42.955267, lng: -85.671772},
        zoom: 10
    });

    marker = new google.maps.Marker({
        position: {lat: 42.970371, lng: -85.665655},
        title: "Helen Devos Children's Hospital"
    });

    setBoundaries();
}

function onChangeCheckbox(checkbox){
    if(checkbox.checked){
        marker.setMap(googleMap);
    }
    else {
        marker.setMap(null);
    }
}
