
// Initialize and add the map
  function initMap() {
  // The location of Atlanta
  const Las = { lat: 36.1716, lng: -115.1391, };
  const Portland = { lat: 45.5152, lng: -122.6784, };
  const Rocky = { lat: 44.2643, lng: -109.7870, };
  const Dallas = { lat: 32.7767, lng: -96.7970, };
  const Atlanta = { lat: 33.7488, lng: -84.3877, };
  const Denver = { lat: 39.7392, lng: -104.9903, };
  const Orleans = { lat: 29.9511, lng:-90.0715, };
  const Angeles = { lat: 34.0522, lng: -118.2437,};
  const Louis = {lat: 38.6270, lng: -90.1994, };
  const Disney = { lat: 28.37722, lng:-81.5707 };
  const Phoenix = { lat:33.4484,lng:-112.0740,};
  // The map, centered at Dallas to view all of the icons at once
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Denver,
  });
  // The marker, positioned at Atlanta
  const marker = new google.maps.Marker({
    position: Atlanta,
    map: map,
  });
  const marker2 = new google.maps.Marker({
    position: Portland,
    map: map,
  });
  const marker3 = new google.maps.Marker({
    position: Las ,
    map: map,
  });
  const marker4 = new google.maps.Marker({
    position: Rocky,
    map: map,
  });
  const marker5 = new google.maps.Marker({
    position: Dallas,
    map: map,
  });
  const marker6 = new google.maps.Marker({
    position: Denver,
    map: map,
  });
  const marker7 = new google.maps.Marker({
    position: Orleans,
    map: map,
  });
  const marker8 = new google.maps.Marker({
    position: Disney,
    map: map,
  });
  const marker9 = new google.maps.Marker({
    position: Angeles,
    map: map,
  });
  const marker10 = new google.maps.Marker({
    position: Louis,
    map: map,
  });
  const marker11 = new google.maps.Marker({
    position: Phoenix,
    map: map,
  });
}
const flightPlanCoordinates = [
    { lat: 37.772, lng: -122.214 },
    { lat: 21.291, lng: -157.821 },
    { lat: -18.142, lng: 178.431 },
    { lat: -27.467, lng: 153.027 },
  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
window.initMap = initMap;


