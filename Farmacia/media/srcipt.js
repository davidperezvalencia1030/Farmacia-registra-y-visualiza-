 document.getElementById('medForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const nombre = document.getElementById('nombre').value;
      const tipo = document.getElementById('tipo').value;
      const categoria = document.getElementById('categoria').value;
      const descripcion = document.getElementById('descripcion').value;
      const imagenInput = document.getElementById('imagen');

      const reader = new FileReader();
      reader.onload = function() {
        const medicamento = {
          id: Date.now(),
          nombre,
          tipo,
          categoria,
          descripcion,
          imagen: reader.result
        };

        const almacenados = JSON.parse(localStorage.getItem('medicamentos')) || [];
        almacenados.push(medicamento);
        localStorage.setItem('medicamentos', JSON.stringify(almacenados));

        alert('Medicamento registrado correctamente.');
        window.location.href = 'index3.html';
      };

      reader.readAsDataURL(imagenInput.files[0]);
    });