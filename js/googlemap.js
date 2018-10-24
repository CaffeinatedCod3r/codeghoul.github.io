function getUluru() {
	let uluru = {lat: 21.190449, lng: 81.284920};
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(setPosition)
	}
	return uluru;
}

function setPosition(position) {
    uluru = {
				lat: +position.coords.latitude,
				lng: +position.coords.longitude
		}
}

function initMap() {
	// The location of Uluru
	let uluru = getUluru(); 
  // The map, centered at Uluru
  console.log(uluru);
  var map = new google.maps.Map(
  	document.getElementById('map'), {zoom: 10, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}