const tabla = document.querySelector('#tabla tbody');
    let medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];

    function renderTabla() {
      tabla.innerHTML = '';
      medicamentos.forEach((med, index) => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
          <td contenteditable="true">${med.nombre}</td>
          <td contenteditable="true">${med.tipo}</td>
          <td contenteditable="true">${med.categoria}</td>
          <td><img src="${med.imagen}" alt="medicamento"></td>
          <td contenteditable="true">${med.descripcion}</td>
          <td>
            <button class="guardar" onclick="guardarEdicion(${index}, this)">Guardar</button>
            <button class="eliminar" onclick="eliminarMedicamento(${index})">Eliminar</button>
          </td>
        `;

        tabla.appendChild(fila);
      });
    }

    function guardarEdicion(index, boton) {
      const fila = boton.closest('tr');
      medicamentos[index].nombre = fila.children[0].innerText;
      medicamentos[index].tipo = fila.children[1].innerText;
      medicamentos[index].categoria = fila.children[2].innerText;
      medicamentos[index].descripcion = fila.children[4].innerText;

      localStorage.setItem('medicamentos', JSON.stringify(medicamentos));
      alert('Cambios guardados correctamente.');
    }

    function eliminarMedicamento(index) {
      if (confirm('¿Seguro que deseas eliminar este medicamento?')) {
        medicamentos.splice(index, 1);
        localStorage.setItem('medicamentos', JSON.stringify(medicamentos));
        renderTabla();
      }
    }

    renderTabla();