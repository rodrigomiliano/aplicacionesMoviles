/*10- Define la función contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento*/
//contiene 8 [7,8,9]
//> True

numeroBuscado = 8;
arrayNumeros = [7,8,9];

function contiene(numeroBuscado,arrayNumeros){
    return arrayNumeros.some(numero => numero === numeroBuscado);
}

console.log(contiene(numeroBuscado,arrayNumeros))

// OK