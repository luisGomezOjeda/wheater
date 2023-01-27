import KEY from "./api_key.js"
import {getCurrentWheater} from "./getWheater.js";
import {getCity,setCity} from "./localStorage.js";

document.addEventListener("DOMContentLoaded",(e)=>{
  getCity();
  const city = localStorage.getItem("city");
  getCurrentWheater(city,KEY.secret);
});


document.addEventListener("click",(e)=>{
  if(e.target.matches("#button-serch-city,#button-serch-city *")){
    let $inputSerchCity = document.getElementById("input-serch--city"),
    success = {status : false};
    getCurrentWheater($inputSerchCity.value,KEY.secret,success);
    setCity($inputSerchCity.value,success);
  }
});