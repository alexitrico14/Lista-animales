document.addEventListener("DOMContentLoaded", function () {

    // Propietario
    class Propietario {
        constructor(nombrePropietario, direccion, telefono) {
            this.nombrePropietario = nombrePropietario;
            this.direccion = direccion;
            this.telefono = telefono;
        }


        datosPropietario() {
            return `El nombre del dueño es: ${this.nombrePropietario}, su dirección es: ${this.direccion}, y su número telefónico es: ${this.telefono}.`;
        }
    }

    // Animal
    class Animal extends Propietario {
        constructor(nombre, direccion, telefono, tipo) {
            super(nombre, direccion, telefono);
            this.tipo = tipo;
        }

        get tipoAnimal() {
            return `El tipo de animal es un: ${this.tipo}`;
        }
    }

    // Mascota
    class Mascota extends Animal {
        constructor(nombrePropietario, direccion, telefono, tipo, nombre, enfermedad) {
            super(nombrePropietario, direccion, telefono, tipo);
            this.nombre = nombre;
            this.enfermedad = enfermedad;
        }

        get nombreMascota() {
            return this.nombre;
        }

        set nombreMascota(nombre) {
            this.nombre = nombre;
        }

        get enfermedadMascota() {
            return this.enfermedad;
        }

        set enfermedadMascota(enfermedad) {
            this.enfermedad = enfermedad;
        }
    }

    document.getElementById("agregar").addEventListener("click", function (event) {
        event.preventDefault();

        const nombrePropietario = document.getElementById("propietario").value;
        const direccion = document.getElementById("direccion").value;
        const telefono = document.getElementById("telefono").value;
        const nombreMascota = document.getElementById("nombreMascota").value;
        const tipo = document.getElementById("tipo").value;
        const enfermedad = document.getElementById("enfermedad").value;

        let animal;
        switch (tipo) {
            case 'perro':
                animal = new Mascota(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad);
                break;
            case 'gato':
                animal = new Mascota(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad);
                break;
            case 'conejo':
                animal = new Mascota(nombrePropietario, direccion, telefono, tipo, nombreMascota, enfermedad);
                break;
            default:
                console.error("Error");
                return;
        }

        const resultado = document.getElementById("resultado").querySelector("ul");
        resultado.innerHTML = `
        <li>${animal.datosPropietario()}</li>
        <li>${animal.tipoAnimal}, mientras que el nombre de la mascota es: ${animal.nombreMascota} y la enfermedad es: ${animal.enfermedadMascota}</li>
      `;
    });
});
