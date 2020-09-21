/*6- Define la función quienesAprobaron, que dada la información de un curso devuelve la información de los alumnos que aprobaron. Podés usar la función que hiciste en el ejercicio anterior.*/

arrayNotas = [[8,6,2,4],[7,9,4,5],[6,2,4,2],[9,6,7,10]];

function aprobo(arrayNotas){
return arrayNotas.every(notas => notas >= 4);
}

function quienesAprobaron(arrayNotasAlumno) {
    return arrayNotasAlumno.filter(alumno => aprobo(alumno));
}

console.log(quienesAprobaron(arrayNotas))

// OK