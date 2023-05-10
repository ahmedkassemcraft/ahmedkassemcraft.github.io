// Función para agregar un nuevo artículo a la lista
function agregarArticulo(titulo, autor, fecha, contenido, imagenURL) {
  var listaArticulos = document.getElementById("lista");

  var nuevoArticulo = document.createElement("li");
  nuevoArticulo.innerHTML = "<h3>" + titulo + "</h3>" +
    "<p>Autor: " + autor + "</p>" +
    "<p>Fecha: " + fecha + "</p>" +
    "<p>" + contenido + "</p>";

  if (imagenURL) {
    var imagen = document.createElement("img");
    imagen.src = imagenURL;
    nuevoArticulo.appendChild(imagen);
  }

  listaArticulos.appendChild(nuevoArticulo);
}
