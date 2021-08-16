/*Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5. 
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué: 
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.*/

var mas5= 5;
var mas10=10;
var vehiculo=prompt("¿Que tipo de vehiculo usas?").toLowerCase();
var kilometro=prompt("Ingresar kilometros recorridos").toLowerCase();

if(kilometro >=0 && kilometro <=100){

    if(vehiculo== "coche"){
        console.log("El precio del kilometro es: "+((kilometro*0.2)+mas5))
    }
        else if (vehiculo =="moto"){
            console.log("El precio del kilometro es: "+((kilometro*0.10)+mas5))
        }
        else if(vehiculo=="autobus"){
            console.log("El precio del kilometro es: "+((kilometro*0.10)+mas5))
        }

    }

    else if(kilometro > 100){
        if(vehiculo== "coche"){
            console.log("El precio del kilometro es: "+((kilometro*0.2)+mas10))
            }
            else if (vehiculo =="moto"){
                console.log("El precio del kilometro es: "+((kilometro*0.1)+mas10))
            
            }
            else if(vehiculo=="autobus"){
                console.log("El precio del kilometro es: "+((kilometro*0.5)+mas10))
            }   
    }
   