document.addEventListener('DOMContentLoaded', function () {
    const contenedor = document.getElementById('contenedor');
    const nuevaCuadriculaBtn = document.getElementById('nuevaCuadricula');
    
    function crearCuadricula(numCeldas) {
      // Limpiar cuadricula anterior
      while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
      }

      // Calcular el tamaño de las celdas en función del número de celdas por lado
      const tamañoCelda = 100 / numCeldas;
  
      // Crear la cuadrícula
      for (let i = 0; i < numCeldas * numCeldas; i++) {
        const celda = document.createElement('div');
        celda.classList.add('celda');
        celda.style.width = `${tamañoCelda}%`;
        celda.style.paddingBottom = `${tamañoCelda}%`;
  
        // Evento hover
        celda.addEventListener('mouseover', function () {
          celda.style.backgroundColor = 'black';
        });
  
        contenedor.appendChild(celda);
      }
    }
  
    // Crear cuadrícula inicial de 16x16
    crearCuadricula(16);
  
    // Evento para el botón "Nueva Cuadrícula"
    nuevaCuadriculaBtn.addEventListener('click', function () {
      let numCeldas = prompt('Introduce el número de cuadrados por lado para la nueva cuadrícula (máximo 100):');
  
      // Validar entrada del usuario
      numCeldas = parseInt(numCeldas);
      if (isNaN(numCeldas) || numCeldas < 1 || numCeldas > 100) {
        alert('Por favor, introduce un número válido entre 1 y 100.');
        return;
      }
  
      // Crear nueva cuadrícula
      crearCuadricula(numCeldas);
    });
  });
