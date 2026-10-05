<?php
$conexion = new mysqli("localhost", "root", "", "farmacia");

if ($conexion->connect_error) {
  die("Conexión fallida: " . $conexion->connect_error);
}

// Subir imagen
$nombreImagen = basename($_FILES["imagen"]["name"]);
$ruta = "imagenes/" . $nombreImagen;
move_uploaded_file($_FILES["imagen"]["tmp_name"], $ruta);

// Obtener datos
$nombre = $_POST["nombre"];
$tipo = $_POST["tipo"];
$categoria = $_POST["categoria"];
$descripcion = $_POST["descripcion"];

// Insertar en la base de datos
$sql = "INSERT INTO medicamentos (nombre, tipo, categoria, descripcion, imagen)
        VALUES ('$nombre', '$tipo', '$categoria', '$descripcion', '$ruta')";

if ($conexion->query($sql) === TRUE) {
  echo "<p>Medicamento registrado correctamente.</p>";
  echo "<a href='tabla.php'>Ver lista</a>";
} else {
  echo "Error: " . $conexion->error;
}

$conexion->close();
?>
