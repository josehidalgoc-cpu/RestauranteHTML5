const contenedor = document.querySelector("#menu");
const inputNombre = document.getElementById("nombre");
const selectPlato = document.getElementById("plato");
const inputCantidad = document.getElementById("cantidad");

const btnAgregar = document.getElementById("btn-agregar");
const tablaPedidos = document.getElementById("tabla-pedidos")

menu.forEach(plato => {
    contenedor.innerHTML += `<div class="menu-item">${plato.nombre} - $${plato.precio}</div>`;
    selectPlato.innerHTML += `<option value="${plato.nombre}">${plato.nombre}</option>`;
});

function agregarPedido() {
    const nombre = inputNombre.value;
    const plato = selectPlato.value;
    const cantidad = inputCantidad.value;

    if (nombre === "") {
        alert("Inrgesa el nombre del cliente");
        return;
    }

    const fila = document.createElement("tr");
    fila.innerHTML =
        `<td>${nombre}</td>
         <td>${plato}</td>
         <td>${cantidad}</td>`;

    tablaPedidos.appendChild(fila);

    inputNombre.value = "";
    inputCantidad.value="1";
    inputNombre.focus();

}

btnAgregar.addEventListener("click", agregarPedido)