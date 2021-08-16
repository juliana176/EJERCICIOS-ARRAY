var belleza = prompt("¿Eres bellesimo /a ?").toLowerCase();
if(belleza == "si" ||beca=="no" ){
   console.log ("ciertamente")
} else if(belleza == "no"){
    console.loge("No te creo")

}


var programa = prompt("¿En que nivel de programa estas interesado?").toLowerCase();
var beca = prompt("¿Cuenta con alguna beca?").toLowerCase();

if(beca == "si"  ){
    var beca = prompt("¿Cual es tu beca?").toLowerCase();
}
else if (beca == "beca facebook")
{
    console.log ("Tiene un descuento del 20%")
}

            else if(programa =="course"){
                console.log("Tiene un descuento de 20%, por lo tanto su costo sera de $1999.6 mxn")
            }
         else   if(programa == "carrera"){
                console.log("Tiene un descuento de 20%, por lo tanto su costo sera de $4798.8 mxn")
            }
           else  if(programa == "master"){
                console.log("Tiene un descuento de 20%, por lo tanto su costo sera de $7197.6 mxn")
            }
        
        else if (beca == "beca google"){
            console.log ("Tiene un descuento del 15%")
        }
        
    
       else  if(programa =="course"){
            console.log("Tiene un descuento de 15%, por lo tanto su costo sera de $1499.7 mxn")
        }
       else   if(programa == "carrera"){
            console.log("Tiene un descuento de 15%, por lo tanto su costo sera de $3599.1 mxn")
       }
      else  if(programa == "master"){
            console.log("Tiene un descuento de 15%, por lo tanto su costo sera de $5398.2 mxn")
        }
    else  if(beca== "beca Jesua"){
        console.log ("Tiene un descuento del 50%")
    }

   else if(programa =="course"){
            console.log("Tiene un descuento de 50%, por lo tanto su costo sera de $4999 mxn")
        }
   else  if(programa == "carrera"){
            console.log("Tiene un descuento de 50%, por lo tanto su costo sera de $11997 mxn")
        }
        else  if(programa == "master"){
            console.log("Tiene un descuento de 50%, por lo tanto su costo sera de $17994mxn")
        }
    


else {

    if(programa =="course"){
        console.log("Su costo sera de $4999 mxn")
    }
     if(programa == "carrera"){
        console.log("Su costo sera de $3999 mxn")
    }
  if(programa == "master"){
        console.log("Su costo sera de $2999 mxn")
    }
    
}



