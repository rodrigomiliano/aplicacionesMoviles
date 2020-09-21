/*8- Escribi una función cuantosCumplen que dada una condición y una lista, diga cuantos elementos la cumplen*/
// even es una función que retorna true si un número es par (deben crearla)
//cuantosCumplen even [7,9,25,42]
//> 1 //Solo 42 es par

arrayNumeros = [7,9,25,42]

function even(numero){
    return numero %2 === 0;
}
function cuantosCumplen(condicion,array){
    var arrayQueCumplen = array.filter(numero => condicion(numero));
    return arrayQueCumplen.length;
}
console.log(cuantosCumplen(even,(arrayNumeros)));

// OK