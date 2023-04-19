function initialize() {
  var map = new google.maps.Map(
    document.getElementById("map"), {
      zoom: 5,
      zoomControl: true,
      mapTypeControl: false,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: true,
      fullscreenControl: false,
      center: new google.maps.LatLng(39.8097343, -98.5556199),
      //mapTypeId: google.maps.MapTypeId.ROADMAP
      mapId: '74e3a9c898ec9695'
    });
  var directionsService = new google.maps.DirectionsService();
  var polyline = new google.maps.Polyline()
   
  // Create the request object for the DirectionsService
  var request = {
    origin: new google.maps.LatLng(45.5011493, -122.8064663),
    destination: new google.maps.LatLng(36.083370, -115.172997),
    travelMode: google.maps.TravelMode.DRIVING
  };
  polyline.setOptions({
    strokeColor: '#862633'
    
});
  // Make the request to the DirectionsService
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // Set the path of the Polyline
      polyline.setPath(result.routes[0].overview_path);
      // Add the Polyline to the map
      polyline.setMap(map);
    }
  });
  
 var image =
     "https://iili.io/HEKuNMN.png";
  var beachMarker = new google.maps.Marker({
    position: { lat: 36.083370, lng: -115.1729976 },
    map,
    icon: image,
    
  
  });
  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 3000);
  });
   function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("main").style.marginRight = "500px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

//openNav()
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "white";
}
  beachMarker.addListener("click", () => {
    map.setZoom(7);
    map.setCenter(beachMarker.getPosition());
    openNav()
    });
}

google.maps.event.addDomListener(window, "load", initialize);
