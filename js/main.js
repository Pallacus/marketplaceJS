import Api from "./api.js";
const productService = new Api('https://062d-77-225-253-65.ngrok-free.app/');
const divProducts = document.querySelector('#products');

//captura el formulario de precio y lanzar el evento para hacer la peticion por precio.
const formPrice = document.querySelector('#formprice');

async function getDataForm(event) {
    event.preventDefault();

    let min = Number(event.target.min.value);
    let max = Number(event.target.max.value);
    let productos = [];

    if (min === 0 && max === 0) {
        productos = await productService.getAll()
        printAllProducts(productos, divProducts);
    }
    else if (min <= max) {
        //filtraria los producto por precio
        productos = await productService.getByPrice(min, max)
        printAllProducts(productos, divProducts);
    } else {
        alert('El precio minimo no puede ser mayor que maximo')
    }

}


formPrice.addEventListener('submit', getDataForm);


function printOneProduct(product, dom) {
    const article = document.createElement('article');
    article.classList.add('col-12', 'col-md-6', 'col-lg-3');

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
    p.textContent = `Precio: ${product.precio}€`

    const a = document.createElement('a');
    a.href = "detail.html?id=" + product.id
    a.classList.add('btn', 'btn-warning')
    a.textContent = 'Ver detalle';

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-outline-warning', 'ms-2');
    button.textContent = 'Añadir Carrito'
    button.addEventListener('click', setShoppingCart)
    div2.append(h5, p, a, button);
    div1.append(img, div2);
    article.appendChild(div1);

    dom.appendChild(article);

}

function printAllProducts(list, dom) {
    dom.innerHTML = "";
    if (list.length !== 0) {
        list.forEach(product => printOneProduct(product, dom))
    } else {
        dom.innerHTML = "<h2>NO HAY RESULTADOS</h2>"
    }
}

async function initData() {
    let productos = [];
    if (window.location.search !== "") {
        let palabra = window.location.search.split('=')[1];
        productos = await productService.getByName(palabra)
    } else {
        productos = await productService.getAll()
    }
    printAllProducts(productos, divProducts);
}

initData()