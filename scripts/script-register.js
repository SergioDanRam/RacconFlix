let nombreIngresado = false, apellidoIngresado = false, emailIngresado = false, usuarioIngresado = false, contraseñaIngresada = false, repContraseña = false, metPagoIngresado = false;

// Expresiones regulares
const letras = /[A-Za-z]/;
const numeros = /\d/;
const letrasEsp = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

let btnSubmit = document.getElementById("btnSubmit");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let usuario = document.getElementById("user");
let contraseña = document.getElementById("password");
let confimContraseña = document.getElementById("repeat_password");


function activar() {
   if (nombreIngresado, apellidoIngresado, emailIngresado, usuarioIngresado, contraseñaIngresada, repContraseña) {
      btnSubmit.disabled = false; //Lo habilitamos
   }
}

nombre.addEventListener("input", function () {
   // Validar que no este vacio y solo ingrese letras
   if (this.value.length) {
      nombreIngresado = true;
      activar();
   } else {
      nombreIngresado = false;
      btnSubmit.disabled = true;
   }
});

apellido.addEventListener("input", function () {
   // Validar que no este vacio y solo ingrese letras
   if (this.value.length) {
      apellidoIngresado = true;
      activar();
   } else {
      apellidoIngresado = false;
      btnSubmit.disabled = true;
   }
});

email.addEventListener("input", function () {
   // Validar que no este vacio y el email sea valido
   if (this.value.length) {
      emailIngresado = true;
      activar();
   } else {
      emailIngresado = false;
      btnSubmit.disabled = true;
   }
});

usuario.addEventListener("input", function () {
   // Validar que no este vacio y el email sea valido
   if (this.value.length) {
      usuarioIngresado = true;
      activar();
   } else {
      usuarioIngresado = false;
      btnSubmit.disabled = true;
   }
});

contraseña.addEventListener("input", function () {
   // Validar que no este vacio y el email sea valido
   if (this.value.length) {
      contraseñaIngresada = true;
      activar();
   } else {
      contraseñaIngresada = false;
      btnSubmit.disabled = true;
   }
});

confimContraseña.addEventListener("input", function () {
   // Validar que no este vacio y el email sea valido
   if (this.value.length) {
      repContraseña = true;
      activar();
   } else {
      repContraseña = false;
      btnSubmit.disabled = true;
   }
});

function validarSoloLetras(campo) {
   let validacion;

   for (let i = 0; i < campo.length; i++) {
      // Cada caracter del campo
      const caracter = campo[i];
      if (letras.test(caracter)) {
         validacion = true;
      } else {
         validacion = false;
      }
   }

   return validacion;
}

function validarEmail(email) {
   let emailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

   return emailValido.test(email);
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
   let validacion = contadorDeLetras >= 2 && contadorDeNumeros >= 2 && contadorCaracEsp >= 2;

   if (validacion) {
      contraseñaIngresada = true;
      return true;
   } else {
      return false;
   }
}

function validarUsuario(usuario) {
   let validacion;

   for (let i = 0; i < usuario.length; i++) {
      // Cada caracter del campo
      const caracter = usuario[i];
      if (letras.test(caracter) || numeros.test(caracter)) {
         validacion = true;
         usuarioIngresado = true;
      } else {
         validacion = false;
      }
   }

   return validacion;
}

function compararContraseñas() {
   if (contraseña.value === confimContraseña.value) {
      repContraseña = true;
      return true;
   } else {
      return false;
   }
}


function validarMetodoDePago() {
   let metodoDePagoActivo = document.querySelector('input[name="pay"]:checked');

   if (metodoDePagoActivo === null) {
      alert('No selecciono ningun metodo de pago');
      return false;
   } else {
      metPagoIngresado = true;
   }

   if (metodoDePagoActivo.value === "credit-card") {
      return validarTarjetaDeCredito();
   }

   return true;
}



function validarTarjetaDeCredito() {
   let numeros = document.getElementById("card-number").value;
   let clave = document.getElementById("card-cvv").value;
   let tarjetaValida = false;

   if (numeros.length < 16 || numeros.length > 19) {
      alert("La tarjeta tiene que tener entre 16 y 19 digitos");
      return false;
   }

   if (clave === "" || clave === "000") {
      alert("La clave deben ser 3 digitos distintos de cero");
      return false;
   }

   let acumulador = 0;
   let ultimoNumero = parseInt(numeros.charAt(numeros.length - 1));

   for (let i = 0; i < numeros.length - 1; i++) {
      let numero = parseInt(numeros[i]);
      acumulador += numero;
   }

   if (acumulador % 2 !== 0 && ultimoNumero % 2 === 0) {
      tarjetaValida = true;
   }

   if (acumulador % 2 === 0 && ultimoNumero % 2 !== 0) {
      tarjetaValida = true;
   }

   if (!tarjetaValida) {
      alert("Tarjeta invalida");
      return false;
   }

   return tarjetaValida;
}


function validarFormulario() {
   if (!validarSoloLetras(nombre.value)) {
      alert("El campo nombre solo acepta letras");
      return false
   }
   if (!validarSoloLetras(apellido.value)) {
      alert("El campo apellido solo acepta letras");
      return false
   }
   if (!validarEmail(email.value)) {
      alert('Email invalido, intente de nuevo');
      return false;
   }
   if (!validarUsuario(usuario.value)) {
      alert('El campo usuario solo acepta letras y numeros');
      return false;
   }
   if (!validarContraseña(contraseña.value)) {
      alert("Contraseña invalida");
      return false;
   }
   if (!compararContraseñas()) {
      alert("Las contraseñas no son iguales");
      return false;
   }

   if (!validarMetodoDePago()) {
      return false;
   }
}