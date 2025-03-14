document.addEventListener("DOMContentLoaded", function() {
    console.log("¡Página cargada correctamente!");
});

document.getElementById('domicilio').addEventListener('change', function () {
    let total = 300000; 
    let totalElemento = document.getElementById('total');

    if (this.checked) {
        let adicional = total * 0.02;
        total += adicional;
        totalElemento.textContent = `Total con entrega a domicilio: $${total.toLocaleString('es-CO')}`;
    } else {
        totalElemento.textContent = ''; 
    }
});

