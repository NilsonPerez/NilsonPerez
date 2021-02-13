
// Solicita Diametro
let val1 = window.prompt ("Ingresar Diametro")

// Solicita Grosor
let val2 = window.prompt ("Ingresar Grosor")

// Valida tamaño vehiculo con el diametro
if (val1 > 1.4) {
    console.log("Es para vehiculo grande");    
   
} else if (val1>0.8 && val1<=1.4) {
    console.log("Es para vehiculo mediano")        
} else {
    console.log("Es para vehiculo pequeño")   
}
// valida el grosor con relacion al diamiatro
if (val1>1.4 && val2<0.4 ) {
    console.log("Grosor para la rueda es inferior al recomendado")

} else if (val1>0.8 && val1<=1.4  && val2<0.25 ) {
    console.log("Grosor para la rueda es inferior al recomendado") 
} else {
    console.log("Grosor para la rueda es recomendado")
}

