import Api from "./api.js";

const productService = new Api('https://062d-77-225-253-65.ngrok-free.app/')
const contadorCarrito = document.querySelector('#contadorCarrito');
const searchByName = document.querySelector('#searchByName');
const serachButton = document.querySelector('#serachButton');
const divProducts = document.querySelector('#products');


//capturar el formulario de precio y lanzar el evento
const formPrice = document.querySelector('#formprice');

async function getDataForm(event) {
    event.preventDefault();

    let min = Number(event.target.min.value);
    let max = Number(event.target.max.value);
    let productos = [];

    if (min === 0 && max === 0) {
        productos = await productService.getAll()
        printAllProducts(productos, divProducts);
    } else if (min <= max) {
        productos = await productService.getByPrice(min, max);
        printAllProducts(productos, divProducts);
    } else {
        alert('El precio mínimo debe ser menor que el precio máximo.')
    }

    //let productosPorPrecio = 
}

formPrice.addEventListener('submit', getDataForm);















function printOneProduct(product, dom) {
    const article = document.createElement('article');
    article.classList.add('col-12', 'col-md-6', 'col-lg-3')

    const div1 = document.createElement('div');
    div1.classList.add('card', 'shadow');

    const img = document.createElement('img');
    img.src = product.foto;
    img.classList.add('card-img-top');

    const div2 = document.createElement('div');
    div2.classList.add('card-body');

    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.textContent = product.nombre;

    const p = document.createElement('p');
    p.classList.add('card-text');
    p.textContent = `Precio: ${product.precio}€`;

    const a = document.createElement('a');
    a.href = '#' // Mas adelante añadiremos el enlace a la vista de detalle
    a.classList.add('btn', 'btn-warning');
    a.textContent = "Ver detalle";

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-outline-warning', 'ms-2');
    button.textContent = "Añadir carrito";
    // button.addEventListener....

    div2.append(h5, p, a, button);
    div1.append(img, div2);
    article.appendChild(div1);

    dom.appendChild(article);

}

function printAllProducts(lista, dom) {
    dom.innerHTML = "";
    if (lista.width !== 0) {
        lista.forEach(product => printOneProduct(product, dom));
    } else {
        dom.innerHTML = "<h2>No hay resultados.</h2>"
    }
}


async function initData() {
    let productos = await productService.getAll()
    printAllProducts(productos, divProducts)
}

initData()