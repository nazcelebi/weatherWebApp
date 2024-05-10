function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showWeather);
    } else {
        alert("Tarayıcınız konum izni desteklemiyor.");
    }
}

function showWeather(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Weather.html sayfasına yönlendir
    window.location.href = `weather.html?lat=${latitude}&lon=${longitude}`;
}

document.getElementById("getLocationButton").addEventListener("click", getLocation);
