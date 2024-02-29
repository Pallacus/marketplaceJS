//cuando monto una clase que se va encargar de manejar solo los datos, esto en programacion se llama SERVICIO

export default class Api {
    constructor(urlBase) {
        this.urlBase = urlBase
    }

    //obtener todos los productos
    async getAll() {
        let url = `${this.urlBase}products`
        let response = await fetch(url, { method: 'GET' })
        let data = await response.json();
        return data;
    }

    //GET https://062d-77-225-253-65.ngrok-free.app/products/price/50/100
    async getByPrice(min, max) {
        let url = `${this.urlBase}products/price/${min}/${max}`
        let response = await fetch(url, { method: 'GET' });
        let data = await response.json();
        return data;
    }
    async getById(id) {
        let url = `${this.urlBase}products/${id}`;
        let response = await fetch(url, { method: 'GET' });
        let data = await response.json();
        return data;
    }

    //GET https://062d-77-225-253-65.ngrok-free.app/products/search/raton
    async getByName(nombre) {
        let url = `${this.urlBase}products/search/palabra/busqueda/valor/${nombre}`;
        let response = await fetch(url, { method: 'GET' });
        let data = await response.json();
        return data;
    }
}

