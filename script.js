let map, userPos,infoWindow, stationMarker, stationPos;
var transportMarker = [];
var showTransportMarker = false;

async function initMap() {
  userPos = {
    lat: 42.0894,
    lng: -75.9695,
  };
  
  map = new google.maps.Map(document.getElementById("map"), {
    center: userPos,
    zoom: 12,
    gestureHandling: "cooperative",
  });
  
  var marker = new google.maps.Marker({
    position: userPos,
    map: map,
    draggable:true,
    animation: google.maps.Animation.DROP,
    icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
      fillOpacity: 1,
      strokeWeight: 2,
      fillColor: '#5384ED',
      strokeColor: '#ffffff',
    },
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        userPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        map.setCenter(userPos);
        marker.setPosition(userPos);
        map.setZoom(15);
      },
    );
  } 
  else {
    // Browser doesn't support Geolocation
    alert("Error: Your browser doesn't support geolocation.");
  }

  //marker dragged event gives new position
  google.maps.event.addListener(marker,'dragend',function(event) {
    userPos = {
      lat: marker.getPosition().lat(),
      lng: marker.getPosition().lng(),
    };
  });

// console.log(marker.getPosition());

  //turning on the transit layer
  const transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);

  var customStyled = [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [
        { visibility: "simplified" }
      ]
    }
  ];  
  map.set('styles',customStyled);

}