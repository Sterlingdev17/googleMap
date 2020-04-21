var map;
var markers = [];
var infoWindow;
var locationSelect;

function initMap() {
    var sydney =
    {
        lat: -33.863276,
        lng: 151.107977
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: sydney,
        zoom: 11,
        mapTypeId: 'roadmap',

    });
    var map = new google.maps.Map(document.getElementById('map'),
     map);

     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function (position) {
             initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
             map.setCenter(initialLocation);
         });
     }
}

function showStoreMarker(){

}