// productos.js

var listaProductos = document.getElementById("lista-productos");
var listaFiltros = document.getElementById("filtros");
var textoTotal = document.getElementById("total-resultados");

var categoriaActual = "Todos";

var parametros = new URLSearchParams(window.location.search);
var categoriaUrl = parametros.get("categoria");
if (categoriaUrl != null) {
  categoriaActual = categoriaUrl;
}

function mostrarProductos() {
  var html = "";
  var total = 0;

  for (var i = 0; i < productos.length; i++) {
    if (categoriaActual == "Todos" || productos[i].categoria == categoriaActual) {
      html += crearTarjeta(productos[i]);
      total++;
    }
  }

  if (total == 0) {
    html = "<p>No hay productos en esta categoría.</p>";
  }

  listaProductos.innerHTML = html;

  if (total == 1) {
    textoTotal.textContent = "1 producto";
  } else {
    textoTotal.textContent = total + " productos";
  }
}

function mostrarFiltros() {
  var html = '<li><button class="filtro" onclick="filtrarPorCategoria(\'Todos\')">Todos</button></li>';

  for (var i = 0; i < categorias.length; i++) {
    html += '<li><button class="filtro" onclick="filtrarPorCategoria(\'' + categorias[i] + '\')">' + categorias[i] + '</button></li>';
  }

  listaFiltros.innerHTML = html;
}

function marcarFiltroActivo() {
  var botones = listaFiltros.getElementsByTagName("button");
  for (var i = 0; i < botones.length; i++) {
    if (botones[i].textContent == categoriaActual) {
      botones[i].className = "filtro activo";
    } else {
      botones[i].className = "filtro";
    }
  }
}

function filtrarPorCategoria(categoria) {
  categoriaActual = categoria;
  mostrarProductos();
  marcarFiltroActivo();
}

mostrarFiltros();
mostrarProductos();
marcarFiltroActivo();
