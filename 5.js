/*5- Define la función aprobó, que dada la lista de las notas de un alumno devuelve si el alumno aprobó. Un alumno aprobó si todas sus notas son mayores o iguales a 4*/

arrayNotas = [8,6,5,4];

function aprobo(arrayNotas){
return arrayNotas.every(notas => notas >= 4);
}

console.log(aprobo(arrayNotas))

// OK