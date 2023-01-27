const l = localStorage;

export const setCity = (inputCity,suceess) =>{
 if(suceess.status)l.setItem("city",`${inputCity}`);
}

export const getCity =  ()=> (l.getItem("city") === null)? l.setItem("city","Buenos Aires") : l.getItem("city");