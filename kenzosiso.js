

// Initialize and add the map
function initMap() {


  // The location of Atlanta
  const Las = { lat: 36.1716, lng: -115.1391, };
  const Portland = { lat: 45.5152, lng: -122.6784, };
  const Rocky = { lat: 40.3428, lng: -105.6836, };
  const Dallas = { lat: 32.7767, lng: -96.7970, };
  const Atlanta = { lat: 33.7488, lng: -84.3877, };
  const Denver = { lat: 39.7392, lng: -104.9903, };
  const Orleans = { lat: 29.9511, lng:-90.0715, };
  const Angeles = { lat: 34.0522, lng: -118.2437,};
  const Louis = {lat: 38.6270, lng: -90.1994, };
  const Disney = { lat: 28.37722, lng:-81.5707, };
  const Phoenix = { lat:33.4484,lng:-112.0740,};
  const Salt = { lat: 40.7608,lng: -111.8910,};
  const Nash = { lat:36.1627, lng:-86.7816};
  const Grand = { lat: 36.2679, lng:-112.3535};
  // The map, centered at Dallas t12.0740o view all of the icons at once
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: Dallas,
    gestutreHandling: "greedy",
  });

  const flightPlanCoordinates = [
    { lat: 45.5152, lng: -122.6784 },
    { lat: 45.7068, lng: -121.5281 },
    { lat: 45.5946, lng: -121.1787 },
    { lat: 45.6698, lng: -120.8328 }, 
    { lat: 45.7168, lng: -120.2009 },
    { lat: 45.8399, lng: -119.7006 },
    { lat: 45.6721, lng: -118.7886 },
    { lat: 45.3246, lng: -118.0877 },
    
    { lat: 45.0285, lng: -117.9199 },
    { lat: 44.9115, lng: -117.9388 },
    { lat: 44.7749, lng:-117.8344 },
    { lat: 44.5813, lng:- 117.4640},
    { lat: 44.0266, lng:-116.9629 },
    {lat: 43.66294, lng:-116.68736},
    {lat: 43.618881, lng: -116.215019},
    { lat: 43.133915, lng:-115.691917},
    {lat: 42.9457307, lng:-115.4661859 },
    {lat: 42.9360165, lng: -114.40587519999997},
    
    
    
    
    
  
  // { lat: 43.3077, lng:-113.9448 },
   // { lat:43.6366, lng:-113.3003},
    //{ lat:43.4927, lng:-112.0408},
   // { lat: 44.4244, lng: -111.3711},
   // { lat: 44.2643, lng: -109.7870 },
   // {lat: 43.4799, lng:-110.7624},
   // {lat: 43.3011, lng:-110.7787},
   // {lat: 43.1611, lng:-111.0165},
   // {lat: 42.6205, lng:-110.9144},
   //{ lat:42.0824, lng:-110.9552},

   {lat:41.7370, lng: -111.8338},
    {lat: 41.5102, lng:-112.0155},
    {lat:40.9805, lng:-111.8874},
    { lat: 40.7608, lng: -111.8910 },
    {lat:40.3916, lng:-111.8508},
    {lat:40.2338, lng:-111.6585},
    {lat:38.2769, lng:-112.6411},
    {lat:37.0965, lng:-113.5684},
    {lat:36.6422, lng:-114.5403},
    { lat: 36.1716, lng: -115.1391 },
    {lat:35.4710, lng:-115.5456},
    {lat:34.8958, lng:-117.0173},
    {lat:34.5362, lng:-117.2928},
    {lat:34.1083, lng:-117.2898},
    //los angles 
    { lat: 34.0522, lng: -118.2437 },
    {lat:33.9806, lng:-117.3755},
    {lat:33.7206, lng:-116.2156},
    {lat:33.7133, lng:-115.4004},
    {lat:33.8225, lng:-113.5416},
    {lat:33.9698, lng:-112.7302},
    {lat:34.7051, lng:-113.6118},
    {lat: 35.1894, lng:-114.0530},
    {lat:35.6605, lng:-113.1530},
    //Grand canyon
    { lat: 36.2679, lng:-112.3535},
    {lat:36.0544, lng:-112.1401},
    {lat: 35.2495, lng:-112.1910},
    {lat:35.1983, lng:-111.6513},
    {lat:34.7803, lng:-111.7627},
    {lat:34.3139, lng:-112.1048},
    {lat:33.9159, lng:-112.1360},
    //Phoenix
    { lat: 33.4484, lng: -112.0740 },
    {lat:32.2540,lng:-110.9742},
    {lat:32.3199,lng:-106.7637},
    {lat:33.1284,lng:-107.2528},
    {lat:35.0844,lng:-106.6504},
    {lat:35.6870,lng:-105.9378},
    {lat:35.5942,lng:-105.2228},
    {lat:36.9034,lng:-104.4392},
    {lat:37.9453,lng:-104.8353},
    { lat: 40.3428, lng: -105.6836,},
    //denver
    { lat: 39.7392, lng: -104.9903,},
    {lat:38.8403,lng:-97.6114},
    {lat:35.4676,lng:-97.5164},
    //Dallas
    { lat: 32.7767, lng: -96.7970, },
    {lat:34.7445,lng:-92.2880},
    {lat:35.1495,lng:-90.0490},
    {lat:36.8767,lng:-89.5879},
    //louis
    { lat: 38.6270, lng: -90.1994, },
    {lat:38.2527,lng:-85.7585},
    {lat:36.7534,lng:-86.1905},
    {lat:36.3884, lng:-86.4467},
    //Nashville
    { lat:36.1627, lng:-86.7816},
    {lat:33.5186, lng:-86.8104},
    {lat: 32.3643,lng:-88.7037 },
    //orleans
    { lat: 29.9511, lng:-90.0715,  },
    {lat: 30.6954, lng: -88.0399},
    {lat:30.4383, lng:-84.2807},
    {lat: 30.1897, lng:-82.6393 },
    //disney
    { lat: 28.37722,lng:-81.5707,  },
    {lat:29.2108,lng:-81.0228},
    {lat:30.3322,lng:- 81.6557},
    {lat:32.0809,lng:-81.0912},
    {lat:32.8407,lng:-83.6324},
    //Atl
    { lat: 33.7488, lng: -84.3877, },
  
    


  ];
  const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF5555",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
  


  // The marker, positioned at Atlanta
  const marker = new google.maps.Marker({

    position: Atlanta,
    map: map,
  });
  const marker1 = new google.maps.Marker({
    position: Rocky,
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
  const marker12 = new google.maps.Marker({
    position: Salt,
    map: map,
  });
  const marker13 = new google.maps.Marker({
    position: Nash,
    map: map,
  });
  const marker14 = new google.maps.Marker({
    position: Grand,
    map: map,
  });

}






window.initMap = initMap;

