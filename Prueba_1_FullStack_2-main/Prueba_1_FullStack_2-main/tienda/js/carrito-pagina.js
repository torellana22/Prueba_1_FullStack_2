// carrito-pagina.js

var contenedorCarrito = document.getElementById("carrito-items");
var contenedorVacio = document.getElementById("carrito-vacio");
var contenedorResumen = document.getElementById("carrito-resumen");
var textoTotal = document.getElementById("carrito-total");
var botonVaciar = document.getElementById("boton-vaciar");

function crearFilaCarrito(item, producto) {
  var subtotal = producto.precio * item.cantidad;
  var maximo = producto.stock;
  if (maximo > 10) {
    maximo = 10;
  }

  var opciones = "";
  for (var i = 1; i <= maximo; i++) {
    var seleccionado = i == item.cantidad ? " selected" : "";
    opciones += '<option value="' + i + '"' + seleccionado + ">" + i + "</option>";
  }

  var html = '<div class="fila-carrito">';
  html += '<img src="' + producto.imagen + '" alt="' + producto.nombre + '">';
  html += '<div class="fila-carrito-info">';
  html += '<h3><a href="detalle-producto.html?codigo=' + producto.codigo + '">' + producto.nombre + "</a></h3>";
  html += '<p class="precio">' + formatearPrecio(producto.precio) + " c/u</p>";
  html += "</div>";
  html += '<label class="fila-carrito-cantidad">Cantidad ';
  html += '<select onchange="cambiarCantidad(\'' + producto.codigo + '\', this.value)">' + opciones + "</select>";
  html += "</label>";
  html += '<p class="fila-carrito-subtotal">' + formatearPrecio(subtotal) + "</p>";
  html += '<button class="boton-eliminar" onclick="quitarProducto(\'' + producto.codigo + '\')" aria-label="Quitar ' + producto.nombre + '">Quitar</button>';
  html += "</div>";

  return html;
}

function mostrarCarrito() {
  var carrito = obtenerCarrito();

  if (carrito.length == 0) {
    contenedorCarrito.innerHTML = "";
    contenedorVacio.className = "carrito-vacio";
    contenedorResumen.className = "oculto";
    return;
  }

  contenedorVacio.className = "oculto";
  contenedorResumen.className = "resumen-carrito";

  var html = "";
  var total = 0;

  for (var i = 0; i < carrito.length; i++) {
    var producto = buscarProducto(carrito[i].codigo);
    if (producto == null) {
      continue;
    }
    html += crearFilaCarrito(carrito[i], producto);
    total = total + producto.precio * carrito[i].cantidad;
  }

  contenedorCarrito.innerHTML = html;
  textoTotal.textContent = formatearPrecio(total);
}

function cambiarCantidad(codigo, nuevaCantidad) {
  cambiarCantidadCarrito(codigo, parseInt(nuevaCantidad));
  mostrarCarrito();
}

function quitarProducto(codigo) {
  eliminarDelCarrito(codigo);
  mostrarCarrito();
}

botonVaciar.addEventListener("click", function () {
  vaciarCarrito();
  mostrarCarrito();
});

mostrarCarrito();
