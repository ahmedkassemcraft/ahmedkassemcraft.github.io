<?php
$archivo = 'contador.txt'; // Archivo donde se almacenará el contador

// Comprobar si el archivo existe
if (file_exists($archivo)) {
    // Leer el contenido del archivo y aumentar el contador en 1
    $contador = intval(file_get_contents($archivo));
    $contador++;
} else {
    // Si el archivo no existe, comenzar el contador en 1
    $contador = 1;
}

// Guardar el nuevo valor del contador en el archivo
file_put_contents($archivo, $contador);

// Mostrar el contador de visitas
echo $contador;
?>
