const API_KEY = "c57bd39766e3f16afa85f25c1035957b";

function onGeoOk(){
    // const lat = position.coords.latitude;
    // const lng = position.coords.longitude;

    const lat = 37.4980854357918;
    const lon = 127.028000275071;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);
}

function onGeoError(){
    alert("can't find geo")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
