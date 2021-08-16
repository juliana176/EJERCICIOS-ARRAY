var a = parseInt(prompt ("Escribe un número"))  
var b = parseInt(prompt ("Escribe otro número"))
var c = parseInt(prompt ("Escribe otro número"))
if (a==b && b==c){
    alert ("Los 3 números son iguales")
}else if (a==b || b==c || a==c){
    alert ("Hay 2 números iguales")
}
else if ( a > b && a > c) {
    alert ( a + " es mayor que " + b + " y " + c)
}else if ( b > a && b > c) {
    alert ( b + " es mayor que " + a + " y " + c)
}else if ( c > a && c > b) {
    alert ( c + " es mayor que " + a + " y " + b)
}



