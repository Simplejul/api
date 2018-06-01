function meteo() {
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Toulouse&appid=8f0b4a0bde27b58144f50e307505ac4f&units=metric', function (json) {
        $("#meteo").text(JSON.stringify(json.main.temp));
    })
}

function adresse() {
    $.getJSON('http://open.mapquestapi.com/geocoding/v1/address?key=DtAmIoCAs1jAfa3bcYimRBMo8SerFFx7&location=Saint-Gaudens,France', function (data) {
        console.log(data.results[0].locations[0].latLng);
        $("#adresse").text("St Go : latitude : " + JSON.stringify(data.results[0].locations[0].latLng.lat)+ " longitude : " +  JSON.stringify(data.results[0].locations[0].latLng.lng));
    })
}

function itineraire() {
    $.getJSON('http://www.mapquestapi.com/directions/v2/route?key=DtAmIoCAs1jAfa3bcYimRBMo8SerFFx7&from=Toulouse,FR&to=Saint-Gaudens,FR&unit=k', function (json) {
        $("#itineraire").text(JSON.stringify(json.route.distance)+" km en "+JSON.stringify(json.route.formattedTime));
    });
    
    
}