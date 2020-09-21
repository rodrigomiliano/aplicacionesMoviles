/*11- Crea una clase Persona que tenga los atributos nombre y edad. Además agregale un método presentarse() que como resultado imprima un mensaje diciendo su nombre y edad.*/

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

// OK