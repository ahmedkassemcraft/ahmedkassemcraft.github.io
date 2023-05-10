// Función para agregar un nuevo artículo a la lista
function agregarArticulo(titulo, autor, fecha, contenido) {
  var listaArticulos = document.getElementById("lista");

  var nuevoArticulo = document.createElement("li");
  nuevoArticulo.innerHTML = "<h3>" + titulo + "</h3>" +
    "<p>Autor: " + autor + "</p>"
