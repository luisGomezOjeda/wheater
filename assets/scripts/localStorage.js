const l = localStorage;

export const setCity =(city)=>l.setItem("city",city);

export const getCity =  ()=> (l.getItem("city") === null)? l.setItem("city","Buenos Aires") : l.getItem("city");