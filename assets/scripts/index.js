import KEY from "./api_key.js"
import {getCurrentWheater} from "./getWheater.js";
import {getCity,setCity} from "./localStorage.js";
import {dinamic_bg} from "./dynamic_bg.js";

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}

document.addEventListener("DOMContentLoaded",(e)=>{
  getCity();
  const city = localStorage.getItem("city");
  getCurrentWheater(city,KEY.secret,dinamic_bg);
});

document.addEventListener("click",(e)=>{
  if(e.target.matches("#button-serch-city,#button-serch-city *")){
    let $inputSerchCity = document.getElementById("input-serch--city");
    getCurrentWheater($inputSerchCity.value,KEY.secret,dinamic_bg,setCity);
  }
});