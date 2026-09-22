// registro.js

var formulario = document.getElementById("formulario-registro");
var campoRun = document.getElementById("run");
var campoNombre = document.getElementById("nombre");
var campoApellidos = document.getElementById("apellidos");
var campoCorreo = document.getElementById("correo");
var campoCorreoConfirmar = document.getElementById("correo-confirmar");
var campoContrasena = document.getElementById("contrasena");
var campoContrasenaConfirmar = document.getElementById("contrasena-confirmar");
var campoTelefono = document.getElementById("telefono");
var campoFecha = document.getElementById("fecha");
var campoRegion = document.getElementById("region");
var campoComuna = document.getElementById("comuna");
var campoDireccion = document.getElementById("direccion");
var mensajeExito = document.getElementById("mensaje-exito");

function cargarRegiones() {
  var html = '<option value="">-- Seleccione la región --</option>';
  for (var i = 0; i < regiones.length; i++) {
    html += '<option value="' + i + '">' + regiones[i].nombre + "</option>";
  }
  campoRegion.innerHTML = html;
}

function cargarComunas() {
  var html = '<option value="">-- Seleccione la comuna --</option>';

  if (campoRegion.value == "") {
    campoComuna.disabled = true;
  } else {
    campoComuna.disabled = false;
    var comunas = regiones[campoRegion.value].comunas;
    for (var i = 0; i < comunas.length; i++) {
      html += '<option value="' + comunas[i] + '">' + comunas[i] + "</option>";
    }
  }

  campoComuna.innerHTML = html;
}

function runCorrecto(run) {
  var cuerpo = run.substring(0, run.length - 1);
  var dv = run.charAt(run.length - 1);

  var suma = 0;
  var multiplicador = 2;
  for (var i = cuerpo.length - 1; i >= 0; i--) {
    suma = suma + parseInt(cuerpo.charAt(i)) * multiplicador;
    multiplicador++;
    if (multiplicador > 7) {
      multiplicador = 2;
    }
  }

  var resto = 11 - (suma % 11);
  var dvCorrecto = "";
  if (resto == 11) {
    dvCorrecto = "0";
  } else if (resto == 10) {
    dvCorrecto = "K";
  } else {
    dvCorrecto = String(resto);
  }

  return dv == dvCorrecto;
}

function validarRun() {
  var texto = campoRun.value.trim().toUpperCase();
  var mensaje = "";

  if (texto == "") {
    mensaje = "El RUN es obligatorio.";
  } else if (texto.indexOf(".") != -1 || texto.indexOf("-") != -1) {
    mensaje = "Escríbelo sin puntos ni guion. Ejemplo: 19011022K";
  } else if (texto.length < 7) {
    mensaje = "El RUN debe tener al menos 7 caracteres (llevas " + texto.length + ").";
  } else if (texto.length > 9) {
    mensaje = "El RUN puede tener máximo 9 caracteres.";
  } else if (!/^[0-9]+[0-9K]$/.test(texto)) {
    mensaje = "El RUN solo puede tener números y una K al final.";
  } else if (!runCorrecto(texto)) {
    mensaje = "El RUN no es válido. Revisa el dígito verificador.";
  }

  mostrarResultado(campoRun, "error-run", mensaje);
  return mensaje == "";
}

function validarNombre() {
  actualizarContador(campoNombre, "contador-nombre", 50);
  return validarTexto(campoNombre, "error-nombre", "tu nombre", true, 50);
}

function validarApellidos() {
  actualizarContador(campoApellidos, "contador-apellidos", 100);
  return validarTexto(campoApellidos, "error-apellidos", "tus apellidos", true, 100);
}

function validarDireccion() {
  actualizarContador(campoDireccion, "contador-direccion", 300);
  return validarTexto(campoDireccion, "error-direccion", "tu dirección", true, 300);
}

function validarCorreo() {
  return validarCorreoCampo(campoCorreo, "error-correo", true);
}

function validarCorreoConfirmar() {
  var correo = campoCorreo.value.trim().toLowerCase();
  var confirmar = campoCorreoConfirmar.value.trim().toLowerCase();
  var mensaje = "";

  if (confirmar == "") {
    mensaje = "Confirma tu correo.";
  } else if (confirmar != correo) {
    mensaje = "Los correos no coinciden.";
  }

  mostrarResultado(campoCorreoConfirmar, "error-correo-confirmar", mensaje);
  return mensaje == "";
}

function validarContrasena() {
  return validarContrasenaCampo(campoContrasena, "error-contrasena");
}

function validarContrasenaConfirmar() {
  var mensaje = "";

  if (campoContrasenaConfirmar.value == "") {
    mensaje = "Confirma tu contraseña.";
  } else if (campoContrasenaConfirmar.value != campoContrasena.value) {
    mensaje = "Las contraseñas no coinciden.";
  }

  mostrarResultado(campoContrasenaConfirmar, "error-contrasena-confirmar", mensaje);
  return mensaje == "";
}

function validarTelefono() {
  var texto = campoTelefono.value.trim();
  var mensaje = "";

  if (texto != "" && !/^[0-9]{9}$/.test(texto)) {
    mensaje = "Escribe solo números, 9 dígitos. Ejemplo: 912345678";
  }

  mostrarResultado(campoTelefono, "error-telefono", mensaje);
  return mensaje == "";
}

function validarFecha() {
  var mensaje = "";

  if (campoFecha.value != "") {
    var fecha = new Date(campoFecha.value);
    var hoy = new Date();
    if (fecha > hoy) {
      mensaje = "La fecha de nacimiento no puede ser futura.";
    }
  }

  mostrarResultado(campoFecha, "error-fecha", mensaje);
  return mensaje == "";
}

function validarRegion() {
  var mensaje = "";
  if (campoRegion.value == "") {
    mensaje = "Selecciona una región.";
  }
  mostrarResultado(campoRegion, "error-region", mensaje);
  return mensaje == "";
}

function validarComuna() {
  var mensaje = "";
  if (campoComuna.value == "") {
    mensaje = "Selecciona una comuna.";
  }
  mostrarResultado(campoComuna, "error-comuna", mensaje);
  return mensaje == "";
}

campoRun.addEventListener("input", function () { mensajeExito.className = "oculto"; validarRun(); });
campoNombre.addEventListener("input", function () { mensajeExito.className = "oculto"; validarNombre(); });
campoApellidos.addEventListener("input", function () { mensajeExito.className = "oculto"; validarApellidos(); });
campoDireccion.addEventListener("input", function () { mensajeExito.className = "oculto"; validarDireccion(); });
campoTelefono.addEventListener("input", function () { mensajeExito.className = "oculto"; validarTelefono(); });
campoFecha.addEventListener("input", function () { mensajeExito.className = "oculto"; validarFecha(); });

campoCorreo.addEventListener("input", function () {
  mensajeExito.className = "oculto";
  validarCorreo();
  if (campoCorreoConfirmar.value != "") {
    validarCorreoConfirmar();
  }
});
campoCorreoConfirmar.addEventListener("input", function () { mensajeExito.className = "oculto"; validarCorreoConfirmar(); });

campoContrasena.addEventListener("input", function () {
  mensajeExito.className = "oculto";
  validarContrasena();
  if (campoContrasenaConfirmar.value != "") {
    validarContrasenaConfirmar();
  }
});
campoContrasenaConfirmar.addEventListener("input", function () { mensajeExito.className = "oculto"; validarContrasenaConfirmar(); });

campoRegion.addEventListener("change", function () {
  mensajeExito.className = "oculto";
  cargarComunas();
  validarRegion();
  campoComuna.className = "";
  document.getElementById("error-comuna").textContent = "";
});
campoComuna.addEventListener("change", function () { mensajeExito.className = "oculto"; validarComuna(); });

campoRun.addEventListener("blur", validarRun);
campoNombre.addEventListener("blur", validarNombre);
campoApellidos.addEventListener("blur", validarApellidos);
campoCorreo.addEventListener("blur", validarCorreo);
campoCorreoConfirmar.addEventListener("blur", validarCorreoConfirmar);
campoContrasena.addEventListener("blur", validarContrasena);
campoContrasenaConfirmar.addEventListener("blur", validarContrasenaConfirmar);
campoDireccion.addEventListener("blur", validarDireccion);

function guardarUsuario() {
  var usuarios = obtenerUsuarios();

  usuarios.push({
    run: campoRun.value.trim().toUpperCase(),
    nombre: campoNombre.value.trim(),
    apellidos: campoApellidos.value.trim(),
    correo: campoCorreo.value.trim().toLowerCase(),
    contrasena: campoContrasena.value,
    fechaNacimiento: campoFecha.value,
    telefono: campoTelefono.value.trim(),
    region: regiones[campoRegion.value].nombre,
    comuna: campoComuna.value,
    direccion: campoDireccion.value.trim(),
    tipo: "Cliente"
  });

  guardarUsuarios(usuarios);
}

function limpiarFormulario() {
  formulario.reset();

  var campos = [campoRun, campoNombre, campoApellidos, campoCorreo, campoCorreoConfirmar,
    campoContrasena, campoContrasenaConfirmar, campoTelefono, campoFecha,
    campoRegion, campoComuna, campoDireccion];
  for (var i = 0; i < campos.length; i++) {
    campos[i].className = "";
  }

  cargarComunas();
  actualizarContador(campoNombre, "contador-nombre", 50);
  actualizarContador(campoApellidos, "contador-apellidos", 100);
  actualizarContador(campoDireccion, "contador-direccion", 300);
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  var validaciones = [
    { campo: campoRun, ok: validarRun() },
    { campo: campoNombre, ok: validarNombre() },
    { campo: campoApellidos, ok: validarApellidos() },
    { campo: campoCorreo, ok: validarCorreo() },
    { campo: campoCorreoConfirmar, ok: validarCorreoConfirmar() },
    { campo: campoContrasena, ok: validarContrasena() },
    { campo: campoContrasenaConfirmar, ok: validarContrasenaConfirmar() },
    { campo: campoTelefono, ok: validarTelefono() },
    { campo: campoFecha, ok: validarFecha() },
    { campo: campoRegion, ok: validarRegion() },
    { campo: campoComuna, ok: validarComuna() },
    { campo: campoDireccion, ok: validarDireccion() }
  ];

  var primerError = null;
  for (var i = 0; i < validaciones.length; i++) {
    if (!validaciones[i].ok && primerError == null) {
      primerError = validaciones[i].campo;
    }
  }

  if (primerError != null) {
    mensajeExito.className = "oculto";
    primerError.focus();
    return;
  }

  var correo = campoCorreo.value.trim().toLowerCase();
  var run = campoRun.value.trim().toUpperCase();

  if (buscarUsuarioPorCorreo(correo) != null) {
    mostrarResultado(campoCorreo, "error-correo", "Ya existe una cuenta con este correo.");
    campoCorreo.focus();
    return;
  }

  if (buscarUsuarioPorRun(run) != null) {
    mostrarResultado(campoRun, "error-run", "Ya existe una cuenta con este RUN.");
    campoRun.focus();
    return;
  }

  guardarUsuario();
  limpiarFormulario();
  mensajeExito.innerHTML = '¡Cuenta creada! Ya puedes <a href="login.html">iniciar sesión</a>.';
  mensajeExito.className = "exito";
});

cargarRegiones();
cargarComunas();
