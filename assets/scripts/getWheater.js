const $imgCurrentWheater = document.querySelectorAll("#img-current-wheater"),
$currentTemp = document.getElementById("current-temp"),
$wheaterDescription = document.getElementById("wheater-description"),
$city = document.getElementById("city"),
$humidity = document.getElementById("humidity"),
$wheaterLike = document.getElementById("wheater-like"),
$wheateMin = document.getElementById("wheater-min"),
$wheateMax = document.getElementById("wheater-max"),
$wind = document.getElementById("wind"),
$clouds = document.getElementById("clouds");
console.log($wheaterDescription);

let idCity;
export async function getCurrentWheater(currentCity,APIkey){
  try{
    let resCities = await fetch("./assets/city.list.json"),
    jsonCities = await resCities.json(),
    cities = jsonCities.filter(item => item.name === currentCity);
    idCity = cities[0];

    
    let resWheater = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${idCity.coord.lat}&lon=${idCity.coord.lon}&appid=${APIkey}&units=metric`),
    jsonWheater = await resWheater.json();
    
    if(jsonWheater.cod !== 200) throw {status : jsonWheater.cod , message : jsonWheater.message}
    
    console.log(jsonWheater.weather[0].description);
    
    $city.innerHTML = `${jsonWheater.name}`;
    $humidity.innerHTML = `${jsonWheater.main.humidity}%`
    $imgCurrentWheater.forEach(img => img.src = `https://openweathermap.org/img/wn/${jsonWheater.weather[0].icon}@2x.png`);
    $wind.innerHTML = `${jsonWheater.wind.speed}m/s`;
    $wheaterLike.innerHTML = `${Math.floor(jsonWheater.main.feels_like)}°`;
    $clouds.innerHTML = `${jsonWheater.clouds.all}%`;
    
    $wheateMin.innerHTML = `${Math.floor(jsonWheater.main.temp_min)}°`
    $wheateMax.innerHTML = `${Math.floor(jsonWheater.main.temp_max)}°`

    $currentTemp.innerHTML =`${Math.floor(jsonWheater.main.temp)}°`;
    $wheaterDescription.innerHTML = `${jsonWheater.weather[0].description}`;


  }catch(err){
    console.log(err);
  }
}