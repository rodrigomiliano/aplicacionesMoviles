/*12- Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y tenga dos métodos.
El método estudiando() que imprime el mensaje “Estudiando con ” y el nombre del profesor con el que se encuentra estudiando.
El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.*/

class Persona{

    constructor(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    }  

    presentarse(){
return "Mi nombre es " + this.nombre + ", y mi edad es " + this.edad;
    }
}

var persona = new Persona("Juan", 25);
console.log(persona.presentarse());


class Estudiante extends Persona{

constructor(nombre, edad, profesor){
    super(nombre, edad);
    this.profesor = profesor;
}

    setProfesor(profesor){
 this.profesor = profesor;
    }

    estudiando(){
 return "Estudiando con " + this.profesor;
    }

}


var estudiante1 = new Estudiante("Pedro", 32, "Pablo");
console.log(estudiante1.estudiando());
estudiante1.setProfesor("Julian");
console.log(estudiante1.estudiando());

// OK