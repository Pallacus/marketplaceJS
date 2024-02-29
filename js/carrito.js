const countCarrito = document.querySelector('#countCarrito');
countCarrito.textContent = localStorage.getItem('carrito');

function setShoppingCart(event) {
    let count = 0;
    if (localStorage.getItem('carrito')) {
        count = Number(localStorage.getItem('carrito'));
    }
    count++;
    localStorage.setItem('carrito', count)
    countCarrito.textContent = count;
}