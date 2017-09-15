function onChangeCheckbox(checkbox){
    if(checkbox.checked){
        marker.setMap(map);
    }
    else {
        marker.setMap(null);
    }
}
