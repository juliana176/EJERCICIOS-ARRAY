var dia =  prompt ("Ingrese un día de la semana:").toLowerCase();
if(dia == "lunes"){
   console.log("Inicio de semana")
}else if(dia == "viernes"){
    console.log("Ultimo día de trabajo")
}else if(dia == "sabado" || dia=="domingo" ){
    console.log("Fin de semana")
}else {
    console.log("A trabajar")} 