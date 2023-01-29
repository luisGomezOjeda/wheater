export function dinamic_bg(url){
 const $main = document.getElementById("bg_dynamic");
 if(url.includes("d")){
 $main.classList.remove("nigth");
 $main.classList.add("day");
 }
 if(url.includes("n")){
  $main.classList.remove("day");
  $main.classList.add("nigth");
 }
}