var map;
var service;
var infowindow;

function initialize() {
  const userLocation = new google.maps.LatLng(41.359620,2.076710);

  map = new google.maps.Map(document.getElementById('map'), {
      center: userLocation,
      zoom: 15
    });

  var request = {
    location: userLocation,
    radius: '140',
    type: ['store']
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      console.log(results[i]);
    }
  }
}