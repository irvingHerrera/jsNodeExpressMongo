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

//----- Herencia múltiple ----

function SuperHeroe() {
    this.vuela = function() {
        console.log(this.nombre + ' vuela');
    };
    this.esquivaBalas = function() {
        console.log(this.nombre + ' esquiva balas');
    }
}

Object.assign(Agentes.prototype, new SuperHeroe());

agente.vuela();
agente.esquivaBalas();