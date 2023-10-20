document.addEventListener('DOMContentLoaded', () => {

    //Obtenemos los elementos necesarios
    const contra1 = document.getElementById("password1");
    const contra2 = document.getElementById("password2");
    const forms = document.querySelectorAll('.needs-validation');
    const checkbox = document.getElementById('terminosCheck');
    const feedbackDiv = document.getElementById('terminos');

    function vaciar() {
        contra1.value = ""
    }
        
    

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            //Si no está validado el form no se envia el formulario
            
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
            contra1.setAttribute("minlength", "6")
            //Agregamos el mensaje de los términos y condiciones cuando se da click en enviar.
            if (checkbox.checkValidity()) {
                feedbackDiv.style.display = 'none'; // Si es válido, oculta el mensaje de validación
            } else {
                feedbackDiv.style.display = 'block'; // Si no es válido, muestra el mensaje de validación
            }
        });

    });
    setTimeout(() => {
        if (contra1.value.length < 6) {
            contra1.classList.add('is-invalid');
        } else {
            if (contra1.classList.contains('is-invalid')) {
                contra1.classList.remove('is-invalid');
            }
        }
   },1000)
//verificamos si las contrseñas preecargadas en el navegador cumplan con las condiciones.
    contra1.addEventListener('input', function () {
        if (contra1.validity.tooShort) {
            contra1.classList.add('is-invalid');
        } else {
            contra1.classList.remove('is-invalid');
        }
    });
   //Controlamos que las contrseñas sean iguales
    contra2.addEventListener("input", () => {
        if (contra1.value === contra2.value) {
            contra2.setCustomValidity("");
        } else {
            contra2.setCustomValidity("Las contraseñas no coinciden.");
        }
    });
//Ocultamos y mostramos el aviso de los términos y condiciones
    checkbox.addEventListener("change", () => {
        if (checkbox.checkValidity()) {
            feedbackDiv.style.display = 'none'; // Si es válido, oculta el mensaje de validación
        } else {
            feedbackDiv.style.display = 'block'; // Si no es válido, muestra el mensaje de validación
        }
    })
});
