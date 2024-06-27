let form = document.querySelector("form");

function validarFormulario() {

  let usuario = document.getElementById('user').value;
  if (usuario.length == 0) {
    alert("Porfavor ingrese un usuario");
    return false;
  }

  let contraseña = document.getElementById("password").value;
  if (!validarContraseña(contraseña)) {
    alert("Contraseña invalida");
    return false;
  }

  return true;
}

function validarContraseña(contraseña) {
  // Que la contraseña tenga mas de 8 caracteres
  if (contraseña.length < 8) {
    return false;
  }

  // Contadores
  let contadorDeLetras = 0;
  let contadorDeNumeros = 0;
  let contadorCaracEsp = 0;

  // Expresiones regulares
  const letras = /[A-Za-z]/;
  const numeros = /\d/;
  const letrasEsp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  for (let i = 0; i < contraseña.length; i++) {
    // Cada caracter de la contraseña
    const caracter = contraseña[i];
    if (letras.test(caracter)) {
      contadorDeLetras++;
    }

    if (numeros.test(caracter)) {
      contadorDeNumeros++;
    }

    if (letrasEsp.test(caracter)) {
      contadorCaracEsp++;
    }
  }
  // Validar los contadores
  return contadorDeLetras >= 2 && contadorDeNumeros >= 2 && contadorCaracEsp >= 2;
}

const contraseña = document.getElementById("password");
const icono = document.querySelector(".bx");

icono.addEventListener("click", e => {
  if (contraseña.type === "password") {
    contraseña.type = "text";
    icono.classList.remove("bx-show-alt");
    icono.classList.add("bx-hide");
  } else {
    contraseña.type = "password";
    icono.classList.remove("bx-hide");
    icono.classList.add("bx-show-alt");
  }
});

let submit = document.getElementById('btnSubmit');
submit.addEventListener('click', function () {
  let usuario = document.getElementById('user').value;
  localStorage.setItem('usuario', usuario);

  let contraseña = document.getElementById("password").value;
  localStorage.setItem('contraseña', contraseña);
});
