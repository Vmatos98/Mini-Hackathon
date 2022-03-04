const key =  "b5419f679f98edf4ad4be4d55d04c894";
let lat = 0;
let long;
function obterData(lat, long){
    long = document.querySelector(".long").value;
    lat = document.querySelector(".lat").value;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`
    const promise = axios.get(url);
    promise.then(imprimirData)
}

function imprimirData(load){
    console.log(load.data.weather[0].icon);
    let data = document.querySelector(".conteudo")
    let temperatura = load.data.main.temp - 273.15;
    const urlIcon = ` http://openweathermap.org/img/wn/10d@2x.png`;
    data.innerHTML=`
    <ul>
        <li>${load.data.name}</li>
        <li>${temperatura.toFixed(2)} C</li>
        <li>${load.data.weather[0].main}</li>
        <li>${load.data.weather[0].description}</li>
    </ul>
    <img src="http://openweathermap.org/img/wn/${load.data.weather[0].icon}@2x.png" alt=""> 
`
document.querySelector(".all").style.backgroundImage = `url('./content/${load.data.weather[0].description}.jpg')`;
}


function busca(callback) { 
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        callback(latitude, longitude);
        });
}
// function printLL(latitude, longitude){
//     console.log(latitude);
// }
busca(obterData);