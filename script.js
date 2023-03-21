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
    // oregon
    origin: new google.maps.LatLng(45.501240, -122.806091), // 1
    
    //atlanta
    destination: new google.maps.LatLng(33.90787057154466, -84.41525459289551),
    //Los Angeles
    waypoints: [{location: new google.maps.LatLng(34.052235, -118.243683), stopover: false},
      //Las Vegas​
      {location: new google.maps.LatLng(36.083370, -115.1729976), stopover: false},
      //Grand canyon
      {location: new google.maps.LatLng(36.056595, -112.125198), stopover: false},
      //saltlake
      {location: new google.maps.LatLng(40.7608, -112.125198), stopover: false},
      //rockys
      {location: new google.maps.LatLng(44.463132159838196,  -109.01770422743095), stopover: false},
      //denver
      {location: new google.maps.LatLng(39.74077241922982,  -104.97440875285031), stopover: false},
   
      //dallas
     {location: new google.maps.LatLng(32.7767, -96.7970), stopover: false},

      //nashvile
      {location: new google.maps.LatLng( 36.13063521329554, -86.79150842788147), stopover: false}],
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
  var Marker1 = new google.maps.Marker({
    position: { lat: 36.083370, lng: -115.1729976 },
    map,
    icon: image,
  
  });
  var Marker2 = new google.maps.Marker({
    position: { lat: 34.052235, lng: -118.243683 },
    map,
    icon: image,
  
  });
  var Marker4 = new google.maps.Marker({
    position: { lat: 40.7608, lng: -112.125198 },
    map,
    icon: image,
  
  });
  var Marker5 = new google.maps.Marker({
    position: { lat: 44.463132159838196, lng:-109.01770422743095 },
    map,
    icon: image,
  
  });
  
  var Marker6 = new google.maps.Marker({
    position: { lat: 39.74077241922982, lng:-104.97440875285031 },
    map,
    icon: image,
  
  });

  var Marker7 = new google.maps.Marker({
    position: { lat: 32.7767, lng:-96.7970 },
    map,
    icon: image,
  
  });

  var Marker8 = new google.maps.Marker({
    position: { lat: 36.13063521329554, lng:-86.79150842788147 },
    map,
    icon: image,
  
  });
  var Marker9 = new google.maps.Marker({
    position: { lat: 33.90787057154466, lng:-84.41525459289551 },
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
    document.getElementById("mySidenav4").style.width = "0";
    document.getElementById("mySidenav5").style.width = "0";
  document.getElementById("mySidenav6").style.width = "0";
  document.getElementById("mySidenav7").style.width = "0";
  document.getElementById("mySidenav8").style.width = "0";
  document.getElementById("mySidenav9").style.width = "0";
  
    
  }
   function openNav() {
    
   closeallNav()
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("main").style.marginRight = "500px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function open2Nav() {
  closeallNav()
  document.getElementById("mySidenav2").style.width = "500px";
  document.getElementById("main").style.marginRight = "500px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
//openNav()

function open3Nav() {
  closeallNav()
  document.getElementById("mySidenav3").style.width = "500px";
  document.getElementById("main").style.marginRight = "500px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
 
}
//openNav()

function open4Nav() {
  closeallNav()
  document.getElementById("mySidenav4").style.width = "500px";
  document.getElementById("main").style.marginRight = "500px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
 
}

function open5Nav() {
  closeallNav()
  document.getElementById("mySidenav5").style.width = "500px";
  document.getElementById("main").style.marginRight = "500px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  
}
function open6Nav() {
  closeallNav()
  document.getElementById("mySidenav6").style.width = "500px";
  document.getElementById("main").style.marginRight = "500px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
 
}
function open7Nav() {
  closeallNav()
  document.getElementById("mySidenav7").style.width = "500px";
  document.getElementById("main").style.marginRight = "500px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
 
}
function open8Nav() {
  closeallNav()
  document.getElementById("mySidenav8").style.width = "500px";
  document.getElementById("main").style.marginRight = "500px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
 
}
function open9Nav() {
  closeallNav()
  document.getElementById("mySidenav9").style.width = "500px";
  document.getElementById("main").style.marginRight = "500px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
 
}


  Marker1.addListener("click", () => {
    map.setZoom(7);
    map.setCenter(Marker1.getPosition());
    
    openNav()
    });
    

Marker2.addListener("click", () => {
  
  map.setZoom(7);
  map.setCenter(Marker2.getPosition());
  open2Nav()
  
  });
  

Marker4.addListener("click", () => {
  
  map.setZoom(7);
  map.setCenter(Marker4.getPosition());
  open4Nav()
  
  });

Marker5.addListener("click", () => {
  
  map.setZoom(7);
  map.setCenter(Marker5.getPosition());
  open5Nav()
  
  });

Marker6.addListener("click", () => {
  
  map.setZoom(7);
  map.setCenter(Marker6.getPosition());
  open6Nav()
  
  });

Marker7.addListener("click", () => {
  
  map.setZoom(7);
  map.setCenter(Marker7.getPosition());
  open7Nav()
  
  });

Marker8.addListener("click", () => {
  
  map.setZoom(7);
  map.setCenter(Marker8.getPosition());
  open8Nav()
  
  });

Marker9.addListener("click", () => {
  
  map.setZoom(7);
  map.setCenter(Marker9.getPosition());
  open9Nav()
  
  });




  currentMarker.addListener("click", () => {
    map.setZoom(7);
    map.setCenter(currentMarker.getPosition());
    open3Nav()
    });
    


}

google.maps.event.addDomListener(window, "load", initialize);
