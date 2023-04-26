class ProductManager {
    constructor() {
        this.products = []
    }
    generateID = () => {
        if (this.products.length === 0) return 1
        return this.products[this.products.length - 1].id + 1
    }
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const id = this.generateID()
        const product = { id, title, description, price, thumbnail, code, stock }
        if (!title || !description || !price || !thumbnail || !code || !stock) {
                return console.log("no se completaron todos los campos") 
            }
        if (this.products.some(product => product.code === code)) {
            return console.log(`El código ${code} ya está en uso`);
        }
            this.products.push(product)
    }
    getProductById = (id) => {
        const product = this.products.find(product => product.code === id);
        return product ?? console.log("Producto no encontrado");
    }
    getProducts = () => {
        return this.products;
    }
}
const manager = new ProductManager()
manager.addProduct("Camiseta de la selección Argentina", "Camiseta nilon talle L selección Argentina", 19000, "../img/camiseta.jpg", 100022, 15);
manager.addProduct("Conjunto de la seleccion Argentina", "Conjunto algodón talle s selección Argentina", 14250, "../img/pantalon.jpg", 100933, 23);
manager.addProduct("Gorra de la seleccion Argentina", "Gorra selección Argentina", 5000, "../img/gorra.jpg", 100412, 8);
manager.addProduct("Mochila de la seleccion Argentina", "Mochila estudiantil selección Argentina", 22500, "../img/pantalon.jpg", 100556, 13);
const products = manager.getProducts();
console.log(products);
const product = manager.getProductById(100022);
console.log(product);
const productNotFound = manager.getProductById(100556);
console.log(productNotFound);