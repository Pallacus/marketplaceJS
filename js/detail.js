import Api from "./api.js";
const productService = new Api('https://062d-77-225-253-65.ngrok-free.app/');
const divDetail = document.querySelector('#detail');

function printDetailProduct(product, dom) {
    dom.innerHTML = "";
    const div1 = document.createElement('div');
    div1.classList.add('col-md-4');
    div1.innerHTML = `<img src="${product.foto}" class="img-fluid rounded-start" alt="${product.nombre}">`

    const div2 = document.createElement('div');
    div2.classList.add('col-md-8');
    div2.innerHTML = `<div class="card-body">
<h5 class="card-title">${product.nombre}</h5>
<p class="card-text">Precio: ${product.precio}</p>
<p class="card-text">Cantidad: ${product.stock}</p>
<p class="card-text"><small class="text-body-secondary">${product.categoria}</small></p>
</div>`
    const div3 = document.createElement('div');
    div3.classList.add('d-flex');
    const button = document.createElement('button');
    button.classList.add(`btn`, `btn-warning`, `me-3`);
    button.textContent = 'añadir Carrito';
    button.addEventListener('click', setShoppingCart);

    const a = document.createElement('a');
    a.href = "index.html";
    a.classList.add(`btn`, `btn-secondary`);
    a.textContent = 'Volver a productos';
    div3.append(button, a);
    div2.appendChild(div3);
    dom.append(div1, div2);

}

async function initData() {
    let id = window.location.search.split('=')[1];
    let oneProduct = await productService.getById(id);
    printDetailProduct(oneProduct, divDetail);
}
initData()