// detalle.js

var contenedorDetalle = document.getElementById("detalle-producto");
var contenedorMigas = document.getElementById("migas");
var contenedorRelacionados = document.getElementById("relacionados");
var seccionRelacionados = document.getElementById("seccion-relacionados");

var parametros = new URLSearchParams(window.location.search);
var codigo = parametros.get("codigo");
var producto = buscarProducto(codigo);

function crearFichaTecnica(producto) {
  var html = "<h2>Ficha técnica</h2>";
  html += "<table>";
  for (var nombre in producto.especificaciones) {
    html += "<tr><th>" + nombre + "</th><td>" + producto.especificaciones[nombre] + "</td></tr>";
  }
  html += "</table>";
  return html;
}

function crearOpcionesCantidad(stock) {
  var maximo = stock;
  if (maximo > 10) {
    maximo = 10;
  }
  var html = "";
  for (var i = 1; i <= maximo; i++) {
    html += '<option value="' + i + '">' + i + "</option>";
  }
  return html;
}

function mostrarDetalle(producto) {
  var html = "";

  html += '<div class="detalle-imagen">';
  html += '<img src="' + producto.imagen + '" alt="' + producto.nombre + '">';
  html += "</div>";

  html += '<div class="detalle-info">';
  html += '<p class="categoria">' + producto.categoria + "</p>";
  html += "<h1>" + producto.nombre + "</h1>";
  html += '<p class="codigo">Código: ' + producto.codigo + "</p>";
  html += '<p class="precio-grande">' + formatearPrecio(producto.precio) + "</p>";
  html += "<p>" + producto.descripcion + "</p>";
  html += avisoStock(producto);

  if (producto.stock == 0) {
    html += '<button class="boton boton-grande" disabled>Sin stock</button>';
  } else {
    html += '<div class="cantidad-fila">';
    html += '<label for="cantidad">Cantidad</label>';
    html += '<select id="cantidad">' + crearOpcionesCantidad(producto.stock) + "</select>";
    html += "</div>";
    html += '<button class="boton boton-grande" onclick="agregarDesdeDetalle(\'' + producto.codigo + '\')">Añadir al carrito</button>';
  }
  html += "</div>";

  contenedorDetalle.innerHTML = html;
  document.getElementById("ficha-tecnica").innerHTML = crearFichaTecnica(producto);

  document.title = producto.nombre + " | NodoPC";
  contenedorMigas.innerHTML = '<a href="index.html">Home</a> &gt; <a href="productos.html">Productos</a> &gt; ' +
    '<a href="productos.html?categoria=' + encodeURIComponent(producto.categoria) + '">' + producto.categoria + "</a> &gt; " +
    "<span>" + producto.nombre + "</span>";
}

function mostrarRelacionados(producto) {
  var posicion = 0;
  for (var i = 0; i < productos.length; i++) {
    if (productos[i].codigo == producto.codigo) {
      posicion = i;
    }
  }

  var html = "";
  for (var n = 1; n <= 3; n++) {
    var indice = (posicion + n) % productos.length;
    html += crearTarjeta(productos[indice]);
  }
  contenedorRelacionados.innerHTML = html;
}

function agregarDesdeDetalle(codigo) {
  var cantidad = parseInt(document.getElementById("cantidad").value);
  agregarAlCarrito(codigo, cantidad);
}

if (producto == null) {
  contenedorDetalle.innerHTML = '<p class="error-pagina">No encontramos ese producto. <a href="productos.html">Volver a productos</a></p>';
  seccionRelacionados.className = "oculto";
  document.getElementById("ficha-tecnica").className = "oculto";
} else {
  mostrarDetalle(producto);
  mostrarRelacionados(producto);
}
