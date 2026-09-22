// carrito.js

function obtenerCarrito() {
  var texto = localStorage.getItem("carrito");
  if (texto == null) {
    return [];
  }
  return JSON.parse(texto);
}

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function contarProductosCarrito() {
  var carrito = obtenerCarrito();
  var total = 0;
  for (var i = 0; i < carrito.length; i++) {
    total = total + carrito[i].cantidad;
  }
  return total;
}

function actualizarContador() {
  var contador = document.getElementById("contador-carrito");
  if (contador != null) {
    contador.textContent = contarProductosCarrito();
  }
}

var temporizador = null;

function mostrarMensajeCarrito(texto, tipo) {
  var caja = document.getElementById("mensaje-carrito");
  if (caja == null) {
    return;
  }
  caja.textContent = texto;
  caja.className = "mensaje-carrito mensaje-" + tipo;

  clearTimeout(temporizador);
  temporizador = setTimeout(function () {
    caja.textContent = "";
  }, 3000);
}

function agregarAlCarrito(codigo, cantidad) {
  var producto = buscarProducto(codigo);

  if (producto == null) {
    mostrarMensajeCarrito("No se encontró el producto.", "error");
    return;
  }

  if (producto.stock == 0) {
    mostrarMensajeCarrito("Este producto no tiene stock.", "error");
    return;
  }

  var carrito = obtenerCarrito();
  var itemExistente = null;
  for (var i = 0; i < carrito.length; i++) {
    if (carrito[i].codigo == codigo) {
      itemExistente = carrito[i];
    }
  }

  var cantidadActual = 0;
  if (itemExistente != null) {
    cantidadActual = itemExistente.cantidad;
  }

  if (cantidadActual + cantidad > producto.stock) {
    mostrarMensajeCarrito("Solo hay " + producto.stock + " unidades de este producto y ya tienes " + cantidadActual + " en el carrito.", "error");
    return;
  }

  if (itemExistente != null) {
    itemExistente.cantidad = itemExistente.cantidad + cantidad;
  } else {
    carrito.push({ codigo: codigo, cantidad: cantidad });
  }

  guardarCarrito(carrito);
  actualizarContador();
  mostrarMensajeCarrito("Añadiste " + cantidad + " x " + producto.nombre + " al carrito.", "ok");
}

function cambiarCantidadCarrito(codigo, nuevaCantidad) {
  var producto = buscarProducto(codigo);
  var carrito = obtenerCarrito();

  if (nuevaCantidad <= 0) {
    eliminarDelCarrito(codigo);
    return;
  }

  if (producto != null && nuevaCantidad > producto.stock) {
    nuevaCantidad = producto.stock;
    mostrarMensajeCarrito("Solo quedan " + producto.stock + " unidades disponibles.", "error");
  }

  for (var i = 0; i < carrito.length; i++) {
    if (carrito[i].codigo == codigo) {
      carrito[i].cantidad = nuevaCantidad;
    }
  }

  guardarCarrito(carrito);
  actualizarContador();
}

function eliminarDelCarrito(codigo) {
  var carrito = obtenerCarrito();
  var carritoNuevo = [];

  for (var i = 0; i < carrito.length; i++) {
    if (carrito[i].codigo != codigo) {
      carritoNuevo.push(carrito[i]);
    }
  }

  guardarCarrito(carritoNuevo);
  actualizarContador();
}

function vaciarCarrito() {
  guardarCarrito([]);
  actualizarContador();
}

actualizarContador();
