const key =  "b5419f679f98edf4ad4be4d55d04c894";
let long, lat;

function obterData(){
    let long = document.querySelector(".long").value;
    let lat = document.querySelector(".lat").value;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`
    const promise = axios.get(url);
    promise.then(imprimirData)
}

function imprimirData(load){
    console.log(load.data.weather[0]);
    let data = document.querySelector(".conteudo")
    let temperatura = load.data.main.temp - 273.15;
    data.innerHTML=`
    <ul>
        <li>${load.data.name}</li>
        <li>${temperatura.toFixed(2)} C</li>
        <li>${load.data.weather[0].main}</li>
        <li>${load.data.weather[0].description}</li>
    </ul>
`
}