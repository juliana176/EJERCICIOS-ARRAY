
var helado=prompt("Elige el helado de tu preferencia").toLowerCase();

if(helado== "sin_topping"){
    console.log("El valor del helado sin topping es 50mxm")
}
else if( helado=="oreo"){
    console.log("El valor del helado de topping oreo es 10mxm")
}
else if(helado=="Kitkat"){
    console.log("El valor del helado de topping kitkat es 15mxm")
}
else if(helado=="brownie"){
    console.log("El valor del helado de topping brownie es 20mxm")
}
else {
    console.log("No tenemos este topping lo sentimos")
}