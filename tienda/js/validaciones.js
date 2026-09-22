// validaciones.js

var dominiosPermitidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];

function mostrarResultado(campo, idError, mensaje) {
  document.getElementById(idError).textContent = mensaje;

  if (mensaje != "") {
    campo.className = "campo-invalido";
  } else if (campo.value != "") {
    campo.className = "campo-valido";
  } else {
    campo.className = "";
  }
}

function actualizarContador(campo, idContador, maximo) {
  var contador = document.getElementById(idContador);
  var largo = campo.value.length;
  contador.textContent = largo + " / " + maximo + " caracteres";

  if (largo > maximo) {
    contador.className = "ayuda ayuda-excedida";
  } else {
    contador.className = "ayuda";
  }
}

function correoConDominioPermitido(correo) {
  for (var i = 0; i < dominiosPermitidos.length; i++) {
    var dominio = dominiosPermitidos[i];
    if (correo.endsWith(dominio)) {
      var usuario = correo.substring(0, correo.length - dominio.length);
      if (usuario != "" && usuario.indexOf("@") == -1 && usuario.indexOf(" ") == -1) {
        return true;
      }
    }
  }
  return false;
}

function validarTexto(campo, idError, pedido, obligatorio, maximo) {
  var texto = campo.value.trim();
  var mensaje = "";

  if (texto == "" && obligatorio) {
    mensaje = "Escribe " + pedido + ".";
  } else if (texto.length > maximo) {
    mensaje = "Máximo " + maximo + " caracteres (llevas " + texto.length + ").";
  }

  mostrarResultado(campo, idError, mensaje);
  return mensaje == "";
}

function validarCorreoCampo(campo, idError, obligatorio) {
  var texto = campo.value.trim().toLowerCase();
  var mensaje = "";

  if (texto == "") {
    if (obligatorio) {
      mensaje = "El correo es obligatorio.";
    }
  } else if (texto.length > 100) {
    mensaje = "El correo no puede tener más de 100 caracteres.";
  } else if (texto.indexOf("@") == -1) {
    mensaje = "Falta el símbolo @. Ejemplo: nombre@gmail.com";
  } else if (!correoConDominioPermitido(texto)) {
    mensaje = "Solo se aceptan correos @duoc.cl, @profesor.duoc.cl o @gmail.com.";
  }

  mostrarResultado(campo, idError, mensaje);
  return mensaje == "";
}

function validarContrasenaCampo(campo, idError) {
  var largo = campo.value.length;
  var mensaje = "";

  if (largo == 0) {
    mensaje = "La contraseña es obligatoria.";
  } else if (largo < 4 || largo > 10) {
    mensaje = "La contraseña debe tener entre 4 y 10 caracteres (llevas " + largo + ").";
  }

  mostrarResultado(campo, idError, mensaje);
  return mensaje == "";
}
