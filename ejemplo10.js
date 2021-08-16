/*Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
Course: $4999 MXN
Carrera $3999 MXN
Master: $2999 MXN
Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
Beca Facebook: 20% de descuento.
Beca Google: 15% de descuento.
Beca Jesua: 50% de descuento.
Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
Course: 2 meses
Carrera 6 meses
Master: 12 meses*/

var programa = prompt("¿En que nivel de programa estas interesado?").toLowerCase();
var beca = prompt("¿Cuenta con alguna beca?").toLowerCase();

if(beca == "si"){
    var beca = prompt("¿Cual es tu beca?").toLowerCase();
if (beca == "beca facebook"){

         if(programa =="course"){
                console.log("Tiene un descuento de 20%, por lo tanto su costo sera de $1999.6 mxn")
            }
            if(programa == "carrera"){
                console.log("Tiene un descuento de 20%, por lo tanto su costo sera de $4798.8 mxn")
            }
           if(programa == "master"){
                console.log("Tiene un descuento de 20%, por lo tanto su costo sera de $7197.6 mxn")
            }
}
    else if (beca == "beca google"){
        
    
        if(programa =="course"){
            console.log("Tiene un descuento de 15%, por lo tanto su costo sera de $1499.7 mxn")
        }
      if(programa == "carrera"){
            console.log("Tiene un descuento de 15%, por lo tanto su costo sera de $3599.1 mxn")
        }
        if(programa == "master"){
            console.log("Tiene un descuento de 15%, por lo tanto su costo sera de $5398.2 mxn")
        }
    }
else  if(beca== "beca jesua"){

      if(programa =="course"){
            console.log("Tiene un descuento de 50%, por lo tanto su costo sera de $4999 mxn")
        }
        if(programa == "carrera"){
            console.log("Tiene un descuento de 50%, por lo tanto su costo sera de $11997 mxn")
        }
         if(programa == "master"){
            console.log("Tiene un descuento de 50%, por lo tanto su costo sera de $17994mxn")
        }
    
    }
}
else if(beca =="no") {

    if(programa =="course"){
        console.log("Su costo sera de $4999 mxn")
    }
  else   if(programa == "carrera"){
        console.log("Su costo sera de $3999 mxn")
    }
  else if(programa == "master"){
        console.log("Su costo sera de $2999 mxn")
    }
}