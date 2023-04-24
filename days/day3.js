if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    alert("Bear Tracker was designed for desktop, for the best experience please use a desktop")
      }


const currentlocation = "Dallas, Texas"
const dayyy =  3
const dailyfunfact = "https://iili.io/H8RaTCu.png"
const easyquiz = "https://kahoot.it/challenge/08125463?challenge-id=a1e77805-a03e-471b-a0fe-4b3b245e5f2c_1679937222692"
const hardquiz = ""
iszoomcontroltrue = true

function initialize() {
    var map = new google.maps.Map(
        document.getElementById("map"), {
            zoom: 5,
            minZoom: 5,
            zoomControl: iszoomcontroltrue,
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
     document.getElementById("sidenavhead" + dayyy).innerHTML = "Current Location: " + currentlocation;
     document.getElementById("dailyfunfact").src=dailyfunfact;
     document.getElementById("easyquiz").href=easyquiz;
     document.getElementById("hardquiz").href=hardquiz;
    var request = {
        // oregon, 24
        origin: new google.maps.LatLng(45.30279098426493, -121.7698224918919), // 1
        //atlanta
        destination: new google.maps.LatLng(32.7767, -96.7970),
        //Los Angeles25
        waypoints: [{
                location: new google.maps.LatLng(34.052235, -118.243683),
                stopover: false
            },
            //Las Vegas​26
            {
                location: new google.maps.LatLng(36.083370, -115.1729976),
                stopover: false
            },
            //Grand canyon27
            {
                location: new google.maps.LatLng(36.056595, -112.125198),
                stopover: false
            },
            //saltlake28 29 30
            {
                location: new google.maps.LatLng(40.7608, -112.125198),
                stopover: false
            },
            //rockys1
            {
                location: new google.maps.LatLng(40.32588865091826, -105.85341753896974),
                stopover: false
            },
            //denver2
            {
                location: new google.maps.LatLng(39.74077241922982, -104.97440875285031),
                stopover: false
            },
            //dallas3
            {
                location: new google.maps.LatLng(32.7767, -96.7970),
                stopover: false
            }/* ,
            //new orlens 4
            {
                location: new google.maps.LatLng(29.957825344792173, -90.09442183026373),
                stopover: false
            },
            //nashvile5 6 7
            {
                location: new google.maps.LatLng(36.13063521329554, -86.79150842788147),
                stopover: false
            } */
        ],
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
    polyline.setOptions({
        strokeColor: '#FFC72C'
    });
    //https://iili.io/H1mtvtf.png
    const image = {
        url: "https://iili.io/HNZ36LN.png",
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(26, 40),
        scaledSize: new google.maps.Size(26, 40),
    };
    const image2 = {
        url: "https://iili.io/HNZK6lt.png",
        // This marker is 20 pixels wide by 32 pixels high.
        scaledSize: new google.maps.Size(34, 20),
    };
    var Marker1 = new google.maps.Marker({
        position: {
            lat: 36.083370,
            lng: -115.1729976
        },
        map,
        icon: image,
        scaledSize: new google.maps.Size(60, 60),
        size: new google.maps.Size(71, 71),
    });
    var Marker2 = new google.maps.Marker({
        position: {
            lat: 34.052235,
            lng: -118.243683
        },
        map,
        icon: image,
        scaledSize: new google.maps.Size(60, 60),
        size: new google.maps.Size(71, 71),
    });
    var Marker4 = new google.maps.Marker({
        position: {
            lat: 40.770412815224844,
            lng: -111.89109521450753
        },
        map,
        icon: image,
        scaledSize: new google.maps.Size(60, 60),
        size: new google.maps.Size(71, 71),
    });
    var Marker5 = new google.maps.Marker({
        position: {
            lat: 40.32588865091826,
            lng: -105.85341753896974
        },
        map,
        icon: image,
        scaledSize: new google.maps.Size(60, 60),
        size: new google.maps.Size(71, 71),
    });
    var Marker6 = new google.maps.Marker({
        position: {
            lat: 39.74077241922982,
            lng: -104.97440875285031
        },
        map,
        icon: image,
        scaledSize: new google.maps.Size(60, 60),
        size: new google.maps.Size(71, 71),
    });
    var Marker7 = new google.maps.Marker({
        position: {
            lat: 32.7767,
            lng: -96.7970
        },
        map,
        icon: image2,
        scaledSize: new google.maps.Size(60, 60),
        size: new google.maps.Size(71, 71),
    });
   /*  var Marker8 = new google.maps.Marker({
        position: {
            lat: 36.13063521329554,
            lng: -86.79150842788147
        },
        map,
        icon: image,
        scaledSize: new google.maps.Size(60, 60),
        size: new google.maps.Size(71, 71),
    });
    var Marker10 = new google.maps.Marker({
        position: {
            lat: 29.957825344792173,
            lng: -90.09442183026373
        },
        map,
        icon: image,
    }); */
    var currentMarker = new google.maps.Marker({
        position: {
            lat: 36.056595,
            lng: -112.125198
        },
        map,
        icon: image,
        scaledSize: new google.maps.Size(60, 60),
        size: new google.maps.Size(71, 71),
    });
 /*    var Marker9 = new google.maps.Marker({
        position: {
            lat: 33.90787057154466,
            lng: -84.41525459289551
        },
        map,
        icon: image2,
    }); */
    var Marker11 = new google.maps.Marker({
        position: {
            lat: 45.37359353794444,
            lng: -121.6959507693793
        },
        map,
        icon: image,
    });
    map.addListener("center_changed", () => {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(() => {
            map.panTo(marker.getPosition());
        }, 5000);
    });

    function closeallNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mySidenav2").style.width = "0";
        document.getElementById("mySidenav3").style.width = "0";
        document.getElementById("mySidenav4").style.width = "0";
        document.getElementById("mySidenav5").style.width = "0";
        document.getElementById("mySidenav6").style.width = "0";
        document.getElementById("mySidenav7").style.width = "0";
        document.getElementById("mySidenav8").style.width = "0";
        document.getElementById("mySidenav9").style.width = "0";
        document.getElementById("mySidenav10").style.width = "0";
        document.getElementById("mySidenav11").style.width = "0";
    }

    function openNav() {
        document.getElementById("whatdoescalloutmean").style.display = "none";
        closeallNav()
        document.getElementById("mySidenav").style.width = "500px";
        document.getElementById("main").style.marginRight = "500px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function open2Nav() {
        document.getElementById("whatdoescalloutmean").style.display = "none";
        closeallNav()
        document.getElementById("mySidenav2").style.width = "500px";
        document.getElementById("main").style.marginRight = "500px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    //openNav()
    function open3Nav() {
        document.getElementById("whatdoescalloutmean").style.display = "none";
        closeallNav()
        document.getElementById("mySidenav3").style.width = "500px";
        document.getElementById("main").style.marginRight = "500px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    //openNav()
    function open4Nav() {
        document.getElementById("whatdoescalloutmean").style.display = "none";
        closeallNav()
        document.getElementById("mySidenav4").style.width = "500px";
        document.getElementById("main").style.marginRight = "500px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function open5Nav() {
        document.getElementById("whatdoescalloutmean").style.display = "none";
        closeallNav()
        document.getElementById("mySidenav5").style.width = "500px";
        document.getElementById("main").style.marginRight = "500px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function open6Nav() {
        document.getElementById("whatdoescalloutmean").style.display = "none";
        closeallNav()
        document.getElementById("mySidenav6").style.width = "500px";
        document.getElementById("main").style.marginRight = "500px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function open7Nav() {
        document.getElementById("whatdoescalloutmean").style.display = "none";
        closeallNav()
        document.getElementById("mySidenav7").style.width = "500px";
        document.getElementById("main").style.marginRight = "500px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function open8Nav() {
        document.getElementById("whatdoescalloutmean").style.display = "none";
        closeallNav()
        document.getElementById("mySidenav8").style.width = "500px";
        document.getElementById("main").style.marginRight = "500px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function open9Nav() {
        document.getElementById("whatdoescalloutmean").style.display = "none";
        closeallNav()
        document.getElementById("mySidenav9").style.width = "500px";
        document.getElementById("main").style.marginRight = "500px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function open10Nav() {
        document.getElementById("whatdoescalloutmean").style.display = "none";
        closeallNav()
        document.getElementById("mySidenav10").style.width = "500px";
        document.getElementById("main").style.marginRight = "500px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function open11Nav() {
        document.getElementById("whatdoescalloutmean").style.display = "none";
        closeallNav()
        document.getElementById("mySidenav11").style.width = "500px";
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
    /* Marker8.addListener("click", () => {
        map.setZoom(7);
        map.setCenter(Marker8.getPosition());
        open8Nav()
    });
    Marker9.addListener("click", () => {
        map.setZoom(7);
        map.setCenter(Marker9.getPosition());
        open9Nav()
    });
    Marker10.addListener("click", () => {
        map.setZoom(7);
        map.setCenter(Marker10.getPosition());
        open10Nav()
    }); */
    Marker11.addListener("click", () => {
        map.setZoom(7);
        map.setCenter(Marker11.getPosition());
        open11Nav()
    });
    currentMarker.addListener("click", () => {
        map.setZoom(7);
        map.setCenter(currentMarker.getPosition());
        open3Nav()
    });
    var panoramas = [];
    panoDivs = document.getElementsByClassName('pano');
    $(".pano").each(function(idx, el) {
        console.log("idx=" + idx + " lat:" + parseFloat($(this).data("lat")) + " lng:" + parseFloat($(this).data("lng")) + " heading:" + parseFloat($(this).data("heading")));
        var panorama = new google.maps.StreetViewPanorama(
            el, {
                position: {
                    lat: parseFloat($(this).data("lat")),
                    lng: parseFloat($(this).data("lng"))
                },
                pov: {
                    heading: parseFloat($(this).data("heading")),
                    pitch: 0
                },
                visible: true
            });
        panoramas.push(panorama);
    })
}
google.maps.event.addDomListener(window, "load", initialize);
