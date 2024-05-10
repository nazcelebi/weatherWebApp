const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const latitude = urlParams.get('lat');
const longitude = urlParams.get('lon');

const apiKey = 'a6bae4029d93338a0dd71ce991dc7092';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        document.getElementById("location").innerText = `Konum: ${data.name}`;
        document.getElementById("weather").innerText = `Sıcaklık: ${data.main.temp}°C, Durum: ${data.weather[0].description}`;
    })
    .catch(error => console.log("Hava durumu bilgileri alınamadı.", error));
