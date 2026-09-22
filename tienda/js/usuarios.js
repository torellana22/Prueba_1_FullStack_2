// usuarios.js

function obtenerUsuarios() {
  var texto = localStorage.getItem("usuarios");
  if (texto == null) {
    return [];
  }
  return JSON.parse(texto);
}

function guardarUsuarios(usuarios) {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function buscarUsuarioPorCorreo(correo) {
  var usuarios = obtenerUsuarios();
  for (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].correo == correo) {
      return usuarios[i];
    }
  }
  return null;
}

function buscarUsuarioPorRun(run) {
  var usuarios = obtenerUsuarios();
  for (var i = 0; i < usuarios.length; i++) {
    if (usuarios[i].run == run) {
      return usuarios[i];
    }
  }
  return null;
}

function asegurarAdminDePrueba() {
  var existente = buscarUsuarioPorCorreo("admin@duoc.cl");
  if (existente != null) {
    return;
  }

  var usuarios = obtenerUsuarios();
  usuarios.push({
    run: "111111111",
    nombre: "Admin",
    apellidos: "De Prueba",
    correo: "admin@duoc.cl",
    contrasena: "admin123",
    tipo: "Administrador"
  });
  guardarUsuarios(usuarios);
}

asegurarAdminDePrueba();
