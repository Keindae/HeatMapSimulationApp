var map;
var marker;

function initMap() {
    map = new google.maps.Map(document.getElementById('map-card'), {
        center: {lat: 42.955267, lng: -85.671772},
        zoom: 11
    });

    marker = new google.maps.Marker({
        position: {lat: 42.970371, lng: -85.665655},
        title: "Helen Devos Children's Hospital"
    });

    map.data.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/wyomingPolygon.json');
    map.data.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/grandvillePolygon.json');
    map.data.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/kentwoodPolygon.json');
    map.data.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/comstockParkPolygon.json');
    map.data.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/spartaPolygon.json');
    map.data.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/byronCenter.json');
    map.data.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/cedarSpringsPolygon.json');
    map.data.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/rockfordPolygon.json');
    map.data.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/lowellPolygon.json');
    map.data.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/eastGrandRapidsPolygon.json');
    map.data.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/caledoniaPolygon.json');
    map.data.loadGeoJson('https://raw.githubusercontent.com/nguynam/images/master/grandRapidsPolygon.json');s
}

function onChangeCheckbox(checkbox){
    if(checkbox.checked){
        marker.setMap(map);
    }
    else {
        marker.setMap(null);
    }
}
