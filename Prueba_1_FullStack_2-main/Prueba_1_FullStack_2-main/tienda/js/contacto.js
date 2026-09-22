// contacto.js

var formulario = document.getElementById("formulario-contacto");
var campoNombre = document.getElementById("nombre");
var campoCorreo = document.getElementById("correo");
var campoComentario = document.getElementById("comentario");
var mensajeExito = document.getElementById("mensaje-exito");

function validarNombre() {
  actualizarContador(campoNombre, "contador-nombre", 100);
  return validarTexto(campoNombre, "error-nombre", "tu nombre", true, 100);
}

function validarCorreo() {
  return validarCorreoCampo(campoCorreo, "error-correo", false);
}

function validarComentario() {
  actualizarContador(campoComentario, "contador-comentario", 500);
  return validarTexto(campoComentario, "error-comentario", "un comentario", true, 500);
}

campoNombre.addEventListener("input", function () {
  mensajeExito.className = "oculto";
  validarNombre();
});

campoCorreo.addEventListener("input", function () {
  mensajeExito.className = "oculto";
  validarCorreo();
});

campoComentario.addEventListener("input", function () {
  mensajeExito.className = "oculto";
  validarComentario();
});

campoNombre.addEventListener("blur", validarNombre);
campoCorreo.addEventListener("blur", validarCorreo);
campoComentario.addEventListener("blur", validarComentario);

function guardarMensaje() {
  var texto = localStorage.getItem("mensajes");
  var mensajes = [];
  if (texto != null) {
    mensajes = JSON.parse(texto);
  }

  mensajes.push({
    nombre: campoNombre.value.trim(),
    correo: campoCorreo.value.trim(),
    comentario: campoComentario.value.trim(),
    fecha: new Date().toLocaleString("es-CL")
  });

  localStorage.setItem("mensajes", JSON.stringify(mensajes));
}

function limpiarFormulario() {
  formulario.reset();
  campoNombre.className = "";
  campoCorreo.className = "";
  campoComentario.className = "";
  actualizarContador(campoNombre, "contador-nombre", 100);
  actualizarContador(campoComentario, "contador-comentario", 500);
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  var nombreOk = validarNombre();
  var correoOk = validarCorreo();
  var comentarioOk = validarComentario();

  if (nombreOk && correoOk && comentarioOk) {
    guardarMensaje();
    limpiarFormulario();
    mensajeExito.textContent = "¡Mensaje enviado! Te responderemos lo antes posible.";
    mensajeExito.className = "exito";
  } else {
    mensajeExito.className = "oculto";
  }
});
