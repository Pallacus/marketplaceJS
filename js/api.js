// Cuando creo una clase que se va a encargar de manejar solo datos, en programación se llama SERVICIO
export default class Api {
    constructor(urlbase) {
        this.urlbase = urlbase
    }
    // Obtener todos los productos
    async getAll() {
        let url = `${this.urlbase}products`
        let response = await fetch(url, { method: 'GET' })
        let data = await response.json();
        return data;
    }
    async getByPrice(min, max) {
        let url = `${this.urlbase}products/price/${min}/${max}`
        let response = await fetch(url, { method: 'GET' })
        let data = await response.json();
        return data;
    }
}   