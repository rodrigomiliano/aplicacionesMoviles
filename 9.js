/*9- Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen*/

//rechazar even [7,9,87,42]
//> [7, 9, 87]

arrayNumeros = [7,9,87,42];

function even(numero){
    return numero %2 === 0;
}
function rechazar(condicion,array){
    var arrayNoCumplen = array.filter(numero => !condicion(numero));
    return arrayNoCumplen;
}
console.log(rechazar(even,arrayNumeros));

// OK