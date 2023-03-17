function initialize() {
  var map = new google.maps.Map(
    document.getElementById("map"), {
      zoom: 5,
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: false,
      rotateControl: true,
      fullscreenControl: false,
      gestureHandling: "greedy",
      center: new google.maps.LatLng(39.8097343, -98.5556199),
      mapTypeId: google.maps.MapTypeId.HYBRID
      
      
    });
  var directionsService = new google.maps.DirectionsService();
  var polyline = new google.maps.Polyline();

  // Create the request object for the DirectionsService
  var request = {
    origin: new google.maps.LatLng(45.501240, -122.806091), // 1
    
    destination: new google.maps.LatLng(36.056595, -112.125198),
    waypoints: [{location: new google.maps.LatLng(34.052235, -118.243683), stopover: false},
      {location: new google.maps.LatLng(36.083370, -115.1729976), stopover: false}],
    travelMode: google.maps.TravelMode.DRIVING
  };

  // Make the request to the DirectionsService
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      // Set the path of the Polyline
      polyline.setPath(result.routes[0].overview_path);
      // Add the Polyline to the map
      polyline.setMap(map);
    }
  });
  //https://iili.io/H1mtvtf.png
 var image =
    "https://iili.io/HEDM13l.png";
  var beachMarker = new google.maps.Marker({
    position: { lat: 36.083370, lng: -115.1729976 },
    map,
    icon: image,
  
  });
  var Marker = new google.maps.Marker({
    position: { lat: 34.052235, lng: -118.243683 },
    map,
    icon: image,
  
  });
  var image2 =
    "https://iili.io/H1mtvtf.png";
  var currentMarker = new google.maps.Marker({
    position: { lat: 36.056595, lng: -112.125198 },
    map,
    icon: image2,
  
  });
  
  
  map.addListener("center_changed", () => {
    // 3 seconds after the center of the map has changed, pan back to the
    // marker.
    window.setTimeout(() => {
      map.panTo(marker.getPosition());
    }, 5000);
  });
  function closeallNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav2").style.width = "0";
    document.getElementById("mySidenav3").style.width = "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("main").style.marginRight= "0";
    
  }
   function openNav() {
    
    document.getElementById("mySidenav2").style.width = "0";
    document.getElementById("mySidenav3").style.width = "0";
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("main").style.marginRight = "500px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function open2Nav() {
  document.getElementById("mySidenav").style.width = "0";

  document.getElementById("mySidenav3").style.width = "0";

  document.getElementById("mySidenav2").style.width = "500px";
  document.getElementById("main").style.marginRight = "500px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
//openNav()
function close2Nav() {
  
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("mySidenav2").style.width = "0";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav3").style.width = "0";

}
function open3Nav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav2").style.width = "0";
  
  document.getElementById("mySidenav3").style.width = "500px";
  document.getElementById("main").style.marginRight = "500px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  close2Nav();
}
//openNav()
function close3Nav() {
    document.getElementById("mySidenav3").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("mySidenav2").style.width = "0";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav3").style.width = "0";
}
  beachMarker.addListener("click", () => {
    map.setZoom(7);
    map.setCenter(beachMarker.getPosition());
    
    openNav()
    });
    

Marker.addListener("click", () => {
  
  map.setZoom(7);
  map.setCenter(Marker.getPosition());
  open2Nav()
  
  });
  
  currentMarker.addListener("click", () => {
    map.setZoom(7);
    map.setCenter(currentMarker.getPosition());
    open3Nav()
    });
    


}

google.maps.event.addDomListener(window, "load", initialize);
