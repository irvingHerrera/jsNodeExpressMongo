function Persona(nombre) {
    this.nombre = nombre;
}

var persona = new Persona('Neo');

Persona.prototype.saluda = function() {
    console.log("Hola, me llamo " + this.nombre);
};

persona.saluda();

//-------------------- Herencia de Persona ----------
function Agentes(nombre) {
    Persona.call(this, nombre);
    // esto ejecuta el contructor de Persona con el this de Agente
    // definiendo en el this  de Agente una propiedad name
    // y asignandole el parámetro recibido
}

Agentes.prototype = new Persona('');

var agente = new Agentes('Smith');

agente.saluda();

console.log(
    Object.getPrototypeOf(agente),
    agente instanceof Agentes,
    agente instanceof Persona,
    agente instanceof Object
);