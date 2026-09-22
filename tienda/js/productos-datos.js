// productos-datos.js

var categorias = [
  "Procesadores",
  "Tarjetas de video",
  "Memorias RAM",
  "Almacenamiento",
  "Placas madre",
  "Fuentes de poder",
  "Gabinetes",
  "Monitores"
];

var productos = [
  {
    codigo: "CPU001",
    nombre: "Procesador AMD Ryzen 5 5600",
    descripcion: "Procesador de 6 núcleos y 12 hilos para armar un PC de estudio o gamer con muy buen rendimiento por su precio. Incluye cooler.",
    precio: 119990,
    stock: 15,
    stockCritico: 3,
    categoria: "Procesadores",
    imagen: "img/ryzen_5600.webp",
    especificaciones: {
      "Núcleos": "6",
      "Hilos": "12",
      "Frecuencia base": "3,5 GHz",
      "Frecuencia turbo": "Hasta 4,4 GHz",
      "Socket": "AM4"
    }
  },
  {
    codigo: "CPU002",
    nombre: "Procesador Intel Core i5-12400F",
    descripcion: "Procesador de 6 núcleos y 12 hilos de la 12ª generación. No trae gráficos integrados, así que necesita una tarjeta de video.",
    precio: 139990,
    stock: 8,
    stockCritico: 3,
    categoria: "Procesadores",
    imagen: "img/i5.webp",
    especificaciones: {
      "Núcleos": "6",
      "Hilos": "12",
      "Frecuencia turbo": "Hasta 4,4 GHz",
      "Socket": "LGA 1700",
      "Gráficos integrados": "No incluye"
    }
  },
  {
    codigo: "GPU001",
    nombre: "Tarjeta de video GeForce RTX 4060 8GB",
    descripcion: "Tarjeta de video para jugar en Full HD con muy buenos cuadros por segundo y tecnologías de trazado de rayos.",
    precio: 329990,
    stock: 6,
    stockCritico: 2,
    categoria: "Tarjetas de video",
    imagen: "img/rtx_4060.webp",
    especificaciones: {
      "Memoria": "8 GB GDDR6",
      "Bus de memoria": "128 bits",
      "Consumo": "115 W",
      "Salidas": "HDMI y DisplayPort"
    }
  },
  {
    codigo: "GPU002",
    nombre: "Tarjeta de video Radeon RX 7600 8GB",
    descripcion: "Tarjeta de video pensada para jugar en Full HD con buena eficiencia y un precio más bajo.",
    precio: 279990,
    stock: 2,
    stockCritico: 3,
    categoria: "Tarjetas de video",
    imagen: "img/rx_7600.webp",
    especificaciones: {
      "Memoria": "8 GB GDDR6",
      "Bus de memoria": "128 bits",
      "Consumo": "165 W",
      "Salidas": "HDMI y DisplayPort"
    }
  },
  {
    codigo: "RAM001",
    nombre: "Memoria RAM Kingston Fury Beast 16GB DDR4 3200MHz",
    descripcion: "Módulo de 16 GB DDR4 con disipador. Ideal para actualizar equipos con plataforma AM4 o Intel de generaciones anteriores.",
    precio: 42990,
    stock: 40,
    stockCritico: 5,
    categoria: "Memorias RAM",
    imagen: "img/Hyperx.jpg",
    especificaciones: {
      "Capacidad": "16 GB (1 x 16 GB)",
      "Tipo": "DDR4",
      "Velocidad": "3200 MHz",
      "Formato": "DIMM"
    }
  },
  {
    codigo: "RAM002",
    nombre: "Memoria RAM Corsair Vengeance 32GB (2x16GB) DDR5 6000MHz",
    descripcion: "Kit de dos módulos DDR5 para plataformas nuevas. Da espacio de sobra para juegos, edición y varias aplicaciones abiertas.",
    precio: 119990,
    stock: 12,
    stockCritico: 4,
    categoria: "Memorias RAM",
    imagen: "img/corsair.avif",
    especificaciones: {
      "Capacidad": "32 GB (2 x 16 GB)",
      "Tipo": "DDR5",
      "Velocidad": "6000 MHz",
      "Formato": "DIMM"
    }
  },
  {
    codigo: "SSD001",
    nombre: "SSD NVMe WD Blue SN580 1TB",
    descripcion: "Unidad de estado sólido M.2 de 1 TB. Hace que el PC encienda y cargue los programas mucho más rápido que un disco duro.",
    precio: 64990,
    stock: 20,
    stockCritico: 5,
    categoria: "Almacenamiento",
    imagen: "img/WDBLUE.png",
    especificaciones: {
      "Capacidad": "1 TB",
      "Interfaz": "PCIe Gen4 x4 NVMe",
      "Formato": "M.2 2280"
    }
  },
  {
    codigo: "SSD002",
    nombre: "SSD NVMe Kingston NV2 500GB",
    descripcion: "Unidad M.2 de 500 GB, una opción económica para instalar el sistema operativo y los programas de todos los días.",
    precio: 39990,
    stock: 25,
    stockCritico: 5,
    categoria: "Almacenamiento",
    imagen: "img/Kingston.jpg",
    especificaciones: {
      "Capacidad": "500 GB",
      "Interfaz": "PCIe Gen4 x4 NVMe",
      "Formato": "M.2 2280"
    }
  },
  {
    codigo: "MB001",
    nombre: "Placa madre ASUS Prime B550M-K",
    descripcion: "Placa madre micro-ATX para procesadores Ryzen con socket AM4. Buena base para un equipo de presupuesto medio.",
    precio: 84990,
    stock: 9,
    stockCritico: 3,
    categoria: "Placas madre",
    imagen: "img/b550m.png",
    especificaciones: {
      "Socket": "AM4",
      "Chipset": "B550",
      "Formato": "Micro-ATX",
      "Memoria compatible": "DDR4"
    }
  },
  {
    codigo: "PSU001",
    nombre: "Fuente de poder Corsair CV650 650W 80 Plus Bronze",
    descripcion: "Fuente de 650 W con certificación 80 Plus Bronze, suficiente para un equipo con procesador y tarjeta de video de gama media.",
    precio: 54990,
    stock: 14,
    stockCritico: 3,
    categoria: "Fuentes de poder",
    imagen: "img/fuentecorsair.webp",
    especificaciones: {
      "Potencia": "650 W",
      "Certificación": "80 Plus Bronze",
      "Formato": "ATX",
      "Ventilador": "120 mm"
    }
  },
  {
    codigo: "CAS001",
    nombre: "Gabinete Cooler Master MasterBox Q300L",
    descripcion: "Gabinete compacto con panel lateral transparente, pensado para placas micro-ATX y mini-ITX.",
    precio: 49990,
    stock: 0,
    stockCritico: 2,
    categoria: "Gabinetes",
    imagen: "img/Gabinetec.jpg",
    especificaciones: {
      "Formato": "Micro-ATX / Mini-ITX",
      "Panel lateral": "Acrílico transparente"
    }
  },
  {
    codigo: "MON001",
    nombre: "Monitor gamer LG 24 pulgadas Full HD 144Hz IPS",
    descripcion: "Monitor LG de 24 pulgadas con panel IPS y 144 Hz de frecuencia, para ver movimientos fluidos al jugar.",
    precio: 129990,
    stock: 7,
    stockCritico: 2,
    categoria: "Monitores",
    imagen: "img/Lg.jpg",
    especificaciones: {
      "Tamaño": "24 pulgadas",
      "Resolución": "1920 x 1080 (Full HD)",
      "Frecuencia": "144 Hz",
      "Panel": "IPS",
      "Entradas": "HDMI y DisplayPort"
    }
  }
];

function buscarProducto(codigo) {
  for (var i = 0; i < productos.length; i++) {
    if (productos[i].codigo == codigo) {
      return productos[i];
    }
  }
  return null;
}

function formatearPrecio(numero) {
  return "$" + numero.toLocaleString("es-CL");
}

function avisoStock(producto) {
  if (producto.stock == 0) {
    return '<p class="stock stock-agotado">Sin stock</p>';
  }
  if (producto.stock <= producto.stockCritico) {
    return '<p class="stock stock-critico">¡Últimas unidades! Quedan ' + producto.stock + '</p>';
  }
  return '<p class="stock stock-ok">En stock</p>';
}

function crearTarjeta(producto) {
  var enlace = "detalle-producto.html?codigo=" + producto.codigo;
  var html = "";

  html += '<article class="tarjeta">';
  html += '<a href="' + enlace + '">';
  html += '<img src="' + producto.imagen + '" alt="' + producto.nombre + '">';
  html += '</a>';
  html += '<div class="tarjeta-info">';
  html += '<p class="categoria">' + producto.categoria + '</p>';
  html += '<h3><a href="' + enlace + '">' + producto.nombre + '</a></h3>';
  html += '<p class="precio">' + formatearPrecio(producto.precio) + '</p>';
  html += avisoStock(producto);

  if (producto.stock == 0) {
    html += '<button class="boton" disabled>Sin stock</button>';
  } else {
    html += '<button class="boton" onclick="agregarAlCarrito(\'' + producto.codigo + '\', 1)">Añadir</button>';
  }

  html += '</div>';
  html += '</article>';
  return html;
}
