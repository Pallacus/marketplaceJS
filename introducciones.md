### API products

- obtenemos el listado de todos los productos
GET https://062d-77-225-253-65.ngrok-free.app/products

- obtener un producto por id
GET    https://062d-77-225-253-65.ngrok-free.app/products/24567dwrew

- guardar un producto, tenemos que recoger le informacion en un form, nombre,  precio, foto, categoria: string, stock: number
POST https://062d-77-225-253-65.ngrok-free.app/products

- Actualizar los datos de un producto, form modificaremos los datos del producto y actualizaremos los campos
PUT https://062d-77-225-253-65.ngrok-free.app/products/24567dwrew

- Borrar un producto.
DELETE https://062d-77-225-253-65.ngrok-free.app/products/24567dwrew

- peticion por rango de precio, precio minimo y maximo
GET https://062d-77-225-253-65.ngrok-free.app/products/price/50/100