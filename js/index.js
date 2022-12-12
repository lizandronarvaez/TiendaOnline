const agregarCarrito = document.querySelectorAll('.videojuegos .boton')
const carrito = ""

agregarCarrito.forEach(item => item.addEventListener('click', (e) => {
    item.innerHTML = "Añadido";
    item.style.background = "blue";
    item.style.justifyContent = "center";
}))