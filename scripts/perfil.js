/** 
 * 
 * MOSTRAR NOMBRE,EMAIL Y CONTRASEÑA
 * 
*/
window.onload = () => {
    asignarUsuario();
    let email = document.getElementById("email");
    let contraseña = document.getElementById("password");
    let usuario = localStorage.getItem("usuario");

    if (usuario !== null) {
        email.value = usuario + "@gmail.com";
        contraseña.value = localStorage.getItem("contraseña");
    } else {
        email.value = "No se ha registrado email";
        contraseña.value = "";
    }


};

function asignarUsuario() {
    let nodoP = document.createElement("p");

    let contenido = localStorage.getItem("usuario");

    let nodoTexto;
    if (contenido !== null) {
        nodoTexto = document.createTextNode(contenido);
    } else {
        nodoTexto = document.createTextNode("No se ha registrado usuario");
    }

    nodoP.appendChild(nodoTexto);

    let fotoperfil = document.getElementById("foto-perfil");
    fotoperfil.appendChild(nodoP);

}


/**
 * 
 * 
 * VALIDAR CONTRASEÑAS
 * 
 * 
 */

const nuevaContrasenia = document.querySelector('.nuevacontrasenia')
const repetirContrasenia = document.querySelector('.repetircontrasenia');
const miPerfil = document.querySelector('.mi-perfil');
const btnGuardar = document.querySelector('.guardar');
const expreg = /^(?=(.*[a-zA-Z]){2,})(?=(.*\d){2,})(?=(.*[!@#$%^&*()\-_=+{};:,<.>]){2,}).{8,}$/;
const contenedorNuevaContrasenia = document.querySelector('.nueva');
const contenedorRepetirContrasenia = document.querySelector('.repetir');

const inputRadio = document.querySelectorAll('input[type="radio"]');

//Eventos
repetirContrasenia.addEventListener('input', validarCamposRepetirContrasenia);
nuevaContrasenia.addEventListener('input', validarCampoNuevaConstrasenia);

inputRadio.forEach(input => {

    input.addEventListener('click', validarInputRadio)

})


function validarInputRadio(e) {
    // console.log(e.target.value) --> on
    // console.log(typeof e.target.value) --> string

    const numerosTarjeta = document.querySelector('.numeros-tarjeta');
    const claveTarjeta = document.querySelector('.codigo-tarjeta');
    const checkboxrapipago = document.querySelector('.checkbox-rapipago')
    const checkboxpagofacil = document.querySelector('.checkbox-pagofacil')
    const expRegNumeroTarjeta = /^[0-9]{16,19}$/
    const expRegClaveTarjeta = /^(?!(?:.*([1-9]).*\1){3})[1-9]{3}$/;

    const tarjetaError = document.querySelector('.tarjeta-error');

    if (e.target.value == 'on') { // Verifica si algun input radio esta activado

        numerosTarjeta.addEventListener('input', (e) => {

            limpiarAlerta(tarjetaError)

            const valorTarjeta = e.target.value;

            const numeros = valorTarjeta.split('').map(Number);

            const suma = numeros.slice(0, -1).reduce((acc, num) => acc + num, 0);
            const ultimoNumero = numeros[numeros.length - 1];

            if (suma % 2 !== 0 && ultimoNumero % 2 !== 0) {
                mostrarAlerta('El último número debe ser par si la suma de los anteriores es impar.', tarjetaError);
            } else {
                console.log('La tarjeta es válida.');
            }


            if (expRegNumeroTarjeta.test(e.target.value)) { // Valida si el input del numero de la tarjeta coincide con la validacion de la expresion regular
                console.log('ta bien el numero')
                // localStorage.setItem('NumeroTarjeta', e.target.value);

                claveTarjeta.addEventListener('input', e => {
                    limpiarAlerta(tarjetaError)
                    if (expRegClaveTarjeta.test(e.target.value)) { // Valida si el input clave tarjeta coincide con la validacion de la expresion regular
                        console.log('ta bien')
                        btnGuardar.disabled = false;
                        activarHoverBtnGuardar();
                        localStorage.setItem('ClaveTarjeta', e.target.value);
                    } else {
                        console.log('ta mal wey')
                        mostrarAlerta('Clave erronea', tarjetaError);
                        btnGuardar.disabled = true;
                        desactivarHoverBtnGuardar();
                    }

                })

            } else {
                console.log('ta mal el numero')
                mostrarAlerta('Tarjeta invalida', tarjetaError);
                btnGuardar.disabled = true;
                desactivarHoverBtnGuardar();
            }

        })

        checkboxpagofacil.addEventListener('input', e => {

            if (checkboxpagofacil.checked || checkboxrapipago.checked) { // Verifica si algun checkbox esta tildado
                console.log('El checkbox está tildado');
                activarHoverBtnGuardar();
                localStorage.setItem('CheckboxPagoFacil', checkboxpagofacil.checked)
            } else {
                console.log('El checkbox no está tildado');
                btnGuardar.disabled = true;
                desactivarHoverBtnGuardar();
                localStorage.setItem('CheckboxPagoFacil', checkboxpagofacil.checked)
            }
        })

        checkboxrapipago.addEventListener('input', e => {

            if (checkboxrapipago.checked || checkboxpagofacil.checked) { // Verifica si algun checkbox esta tildado
                console.log('El checkbox está tildado');
                activarHoverBtnGuardar();
                localStorage.setItem('CheckboxRapiPago', checkboxrapipago.checked)
            } else {
                console.log('El checkbox no está tildado');
                btnGuardar.disabled = true;
                desactivarHoverBtnGuardar();
                localStorage.setItem('CheckboxRapiPago', checkboxrapipago.checked)
            }
        })

    } else {
        btnGuardar.disabled = true;
        desactivarHoverBtnGuardar();
    }



    console.log(e)

}

function validarCampoNuevaConstrasenia(e) {


    limpiarAlerta(contenedorNuevaContrasenia)

    if (expreg.test(e.target.value)) {
        console.log('ta bien')


        if (e.target.value == repetirContrasenia.value) {
            btnGuardar.disabled = false;
            console.log('son iguales');

            activarHoverBtnGuardar();
            limpiarAlerta(contenedorRepetirContrasenia);
        } else {
            limpiarAlerta(contenedorRepetirContrasenia);
            console.log('no son iguales');
            btnGuardar.disabled = true;
            desactivarHoverBtnGuardar();
            mostrarAlerta('Los campos no coinciden.', contenedorRepetirContrasenia);
        }
    } else {
        console.log('ta mal');
        mostrarAlerta('Campo Incorrecto.', contenedorNuevaContrasenia)
    }

}

function validarCamposRepetirContrasenia(e) {
    limpiarAlerta(contenedorRepetirContrasenia);

    if (expreg.test(nuevaContrasenia.value) && e.target.value == nuevaContrasenia.value) {
        btnGuardar.disabled = false;
        console.log('son iguales');

        activarHoverBtnGuardar();

    } else {
        console.log('no son iguales');
        btnGuardar.disabled = true;
        desactivarHoverBtnGuardar();
        mostrarAlerta('Los campos no coinciden.', contenedorRepetirContrasenia)

    }

}

function desactivarHoverBtnGuardar() {
    btnGuardar.style.color = 'gray';

    btnGuardar.addEventListener('mouseover', () => {
        btnGuardar.style.backgroundColor = '';
        btnGuardar.style.color = 'gray';
        btnGuardar.style.cursor = ''
    });
    btnGuardar.addEventListener('mouseout', () => {
        btnGuardar.style.backgroundColor = '';
        btnGuardar.style.color = 'gray';
        btnGuardar.style.cursor = ''
    });
}

function activarHoverBtnGuardar() {
    btnGuardar.style.color = 'black';

    btnGuardar.addEventListener('mouseover', () => {
        btnGuardar.style.backgroundColor = 'green';
        btnGuardar.style.color = 'white';
        btnGuardar.style.cursor = 'pointer'
    });
    btnGuardar.addEventListener('mouseout', () => {
        btnGuardar.style.backgroundColor = '';
        btnGuardar.style.color = 'black';
        btnGuardar.style.cursor = ''
    });
}

function mostrarAlerta(texto, referencia) {

    const parrafo = document.createElement('P');
    parrafo.textContent = texto;
    parrafo.style.color = 'red';
    parrafo.style.fontSize = '12px';

    referencia.appendChild(parrafo);

}

function limpiarAlerta(referencia) {

    while (referencia.firstChild) {
        referencia.removeChild(referencia.firstChild);
    }
}


