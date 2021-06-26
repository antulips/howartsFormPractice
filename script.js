window.onload = () => {
    const form = document.forms.inscripcion;

    const nombre = form.nombre;
    const contrasenia = form.pass;
    const telefono = form.tel;
    const hobbies = form.hobbies; 
    const nacionalidad = form.nacionalidad;
    const button = form.querySelector('button');
    
    let nameUser = null;
    let passwordUser = null;
    let phoneUser = null;
    let hobbiesUser = [];
    let nationalityUser = null;
    
    class user {
        constructor(nombre, contrasenia, telefono, hobbies, nacionalidad) {
            this.name = nombre;
            this.passwd = contrasenia;
            this.phone = telefono;
            this.hobbies = hobbies;
            this.nationality = nacionalidad;
        }
    };
    
    nombre.addEventListener('keyup', () => {
        nameUser = nombre.value.toLowerCase().trim();
    });

    contrasenia.addEventListener('keyup', () => {
        passwordUser = contrasenia.value.trim();
    });

    telefono.addEventListener('keyup', () => {
        let number = parseInt(telefono.value);
        
        if (isNaN(number)) {
            button.disabled = true;
            phoneUser = null;
        } else {
            button.disabled = false;
            phoneUser = telefono.value.trim();
        }
    });
           
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        hobbies.forEach( (hobbie) => {
            if (hobbie.checked) {
                hobbiesUser.push(hobbie.value);
            }
        })

        nationalityUser = nacionalidad.value;
        
        const newUser = new user(nameUser, passwordUser, phoneUser, hobbiesUser, nationalityUser);
        console.log(newUser);

    });
    


};