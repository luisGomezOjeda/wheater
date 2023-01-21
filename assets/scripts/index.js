import KEY from "./api_key.js"
import {getCurrentWheater} from "./getWheater.js";

document.addEventListener("DOMContentLoaded",(e)=>{
  getCurrentWheater("San Antonio Oeste",KEY.secret);
})
