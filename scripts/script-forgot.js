let emailIngresado = false, usuarioIngresado = false;
let btnSubmit = document.getElementById("btnSubmit");
let email = document.getElementById("email");
let usuario = document.getElementById("usuario");

function activar() {
   if (emailIngresado && usuarioIngresado) {
      btnSubmit.disabled = false; //Lo habilitamos
   }
}

email.addEventListener("input", function () {
   if (this.value.length) { //Si la longitud de la cadena de caracteres es 0 => falsa
      emailIngresado = true;
      activar();
   } else {
      emailIngresado = false;
      btnSubmit.disabled = true;
   }
});

usuario.addEventListener("input", function () {
   if (this.value.length) { //Si la longitud de la cadena de caracteres es 0 => falsa
      usuarioIngresado = true;
      activar();
   } else {
      usuarioIngresado = false;
      btnSubmit.disabled = true;
   }
});

function validarEmail() {
   let emailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

   return emailValido.test(email.value);
}

function validarFormulario() {
   if (!validarEmail()) {
      alert('Email invalido, intente de nuevo');
      return false;
   }
   return true;
}





