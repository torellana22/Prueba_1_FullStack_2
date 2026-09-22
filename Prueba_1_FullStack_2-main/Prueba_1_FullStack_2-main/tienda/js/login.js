// login.js

var formulario = document.getElementById("formulario-login");
var campoCorreo = document.getElementById("correo");
var campoContrasena = document.getElementById("contrasena");
var mensajeLogin = document.getElementById("mensaje-login");

function validarCorreo() {
  return validarCorreoCampo(campoCorreo, "error-correo", true);
}

function validarContrasena() {
  return validarContrasenaCampo(campoContrasena, "error-contrasena");
}

campoCorreo.addEventListener("input", function () {
  mensajeLogin.className = "oculto";
  validarCorreo();
});

campoContrasena.addEventListener("input", function () {
  mensajeLogin.className = "oculto";
  validarContrasena();
});

campoCorreo.addEventListener("blur", validarCorreo);
campoContrasena.addEventListener("blur", validarContrasena);

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  var correoOk = validarCorreo();
  var contrasenaOk = validarContrasena();

  if (!correoOk || !contrasenaOk) {
    return;
  }

  var correo = campoCorreo.value.trim().toLowerCase();
  var usuario = buscarUsuarioPorCorreo(correo);

  if (usuario == null || usuario.contrasena != campoContrasena.value) {
    mensajeLogin.textContent = "Correo o contraseña incorrectos.";
    mensajeLogin.className = "error-general";
    return;
  }

  localStorage.setItem("usuarioActivo", JSON.stringify({
    nombre: usuario.nombre,
    correo: usuario.correo,
    tipo: usuario.tipo
  }));

  var destino = "index.html";
  if (usuario.tipo == "Administrador" || usuario.tipo == "Vendedor") {
    destino = "administrador/index.html";
  }

  mensajeLogin.textContent = "¡Bienvenido/a, " + usuario.nombre + "! Te estamos redirigiendo...";
  mensajeLogin.className = "exito";

  setTimeout(function () {
    window.location.href = destino;
  }, 1200);
});
