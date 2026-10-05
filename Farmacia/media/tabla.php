<?php
$conexion = new mysqli("localhost", "root", "", "farmacia");
$resultado = $conexion->query("SELECT * FROM medicamentos");
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Medicamentos Registrados</title>
</head>
<body>
  <h2>Lista de Medicamentos</h2>
  <table border="1">
    <tr>
      <th>Nombre</th>
      <th>Tipo</th>
      <th>Categoría</th>
      <th>Descripción</th>
      <th>Imagen</th>
    </tr>
    <?php while($row = $resultado->fetch_assoc()) { ?>
      <tr>
        <td><?= $row['nombre'] ?></td>
        <td><?= $row['tipo'] ?></td>
        <td><?= $row['categoria'] ?></td>
        <td><?= $row['descripcion'] ?></td>
        <td><img src="<?= $row['imagen'] ?>" width="100"></td>
      </tr>
    <?php } ?>
  </table>
</body>
</html>
