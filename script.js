window.onload = () => {
    const form = document.forms.inscripcion;

    const nombre = form.nombre;
    const contrasenia = form.pass;
    const telefono = form.tel;
    const hobbies = form.hobbies;
    const nacionalidad = form.nacionalidad;
    const button = form.querySelector('button');

    class User {
        constructor() {
            this.name = null;
            this.passwd = null;
            this.phone = null;
            this.hobbies = [];
            this.nationality = null;
        }
    };

    const newUser = new User();


    nombre.addEventListener('keyup', () => {
        newUser.name = nombre.value.toString().toLowerCase().trim();
    });

    contrasenia.addEventListener('keyup', () => {
        newUser.passwd = contrasenia.value.trim();
    });

    telefono.addEventListener('keyup', () => {
        let number = parseInt(telefono.value);

        if (isNaN(number)) {
            button.disabled = true;
            newUser.phone = null;
            alert("Por favor, ingresa un número de teléfono muggle o mágico válido.")
        } else {
            button.disabled = false;
            newUser.phone = telefono.value.trim();
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        hobbies.forEach((hobbie) => {
            if (hobbie.checked) {
                newUser.hobbies.push(hobbie.value);
            }
        })

        newUser.nationality = nacionalidad.value;

        console.table(newUser);
    });

};