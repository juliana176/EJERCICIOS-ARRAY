var cal = parseInt(prompt ("Ingresa una calificación (entre 1 y 10)"))  
if(cal <= 6 && cal >= 1){
    console.log("reprobado")}
else if (cal <= 8 && cal >= 6){
        console.log("regular")}
else if (cal == 9){
console.log("bien")}
else if (cal == 10){
console.log("excelente")}
else {
    console.log("Incorrecto")
}


