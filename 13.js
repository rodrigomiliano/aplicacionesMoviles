/*13- Crea una clase Profesor (que herede de Persona) que tenga un atributo estudiantes con un array de Estudiante. Además debe tener dos métodos enseñando() que imprima por consola todos sus estudiantes a los cuales les está enseñando y el método addEstudiante(unEstudiante) que agregue a ese estudiante a la lista. Además este método es responsable de manejar de agregar al objeto profesor como profesor del estudiante (manejo de doble referencia)*/

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
 return "El estudiante "+ this.nombre + " está estudiando con el profesor " + this.profesor;
    }

}

var estudiante1 = new Estudiante("Pedro", 32, "Pablo");
console.log(estudiante1.estudiando());
estudiante1.setProfesor("Julian");
console.log(estudiante1.estudiando());

class Profesor extends Persona{

	constructor(nombre, edad){
		super(nombre, edad);
		this.estudiantes = [];
	}
    
    enseñando(){
     console.log("Soy el profesor " + this.nombre + " y estoy enseñando a: "); 
     this.estudiantes.forEach(element => console.log(element.nombre));
    }
    
    /* ¿Por que no me toma la funcion enseñando de esta manera?
    enseñando(){
        return "Soy el profesor " + this.nombre + " y estoy enseñando a: " + 
         this.estudiantes.forEach(element => console.log(element.nombre));
        }
    */

    addEstudiante(estudiante){
	 this.estudiantes.push(estudiante);
	 estudiante.setProfesor(this.nombre);
    }
}

var estudiante2 = new Estudiante("Andrés", 33, "Pablo");
var estudiante3 = new Estudiante("Fabio", 38, "Pablo");
profesor1 = new Profesor("Sebastian",48, [estudiante2,estudiante3]);
profesor1.addEstudiante(estudiante2)
profesor1.addEstudiante(estudiante3);
profesor1.enseñando();
var estudiante4 = new Estudiante("Ernesto", 24, "Pablo");
var estudiante5 = new Estudiante("Horacio", 25, "Pablo");
profesor1.addEstudiante(estudiante4)
profesor1.addEstudiante(estudiante5);
profesor1.enseñando();