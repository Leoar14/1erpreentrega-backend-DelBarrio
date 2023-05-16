import fs from 'fs/promises';

class ProductManager {
    constructor(filePath = 'products.json') {
        this.filePath = filePath;
    }

    async getProducts() {
        try {
        const data = await fs.getProducts(this.filePath);
        return JSON.parse(data);
        } catch (error) {
        console.error(`Error al leer el archivo ${this.filePath}: ${error.message}`);
        throw error;
        }
    }

    async writeData(data) {
        try {
        await fs.writeFile(this.filePath, JSON.stringify(data));
        console.log(`Datos guardados en ${this.filePath}`);
        } catch (error) {
        console.error(`Error al escribir en el archivo ${this.filePath}: ${error.message}`);
        throw error;
        }
    }

    async generateId() {
        const products = await this.getProducts();
        return products.length + 1;
    }

    async addProduct(product) {
        const products = await this.getProducts();
        products.push(product);
        console.log('Producto agregado con éxito');
        await this.writeData(products);
    }

    async getProductById(id) {
        const products = await this.getProducts();
        const product = products.find((product) => product.id === id);
        if (!product) {
        console.log('Producto no encontrado');
        return null;
        }
        return product;
    }

    async updateProduct(id, product) {
        const products = await this.getProducts();
        const index = products.findIndex((product) => product.id === id);
        if (index === -1) {
        console.log('Producto no encontrado');
        return null;
        }
        products[index] = { ...product, id };
        await this.writeData(products);
        console.log(`Producto con ID ${id} actualizado`);
    }

    async deleteProduct(id) {
        const products = await this.getProducts();
        const index = products.findIndex((product) => product.id === id);
        if (index === -1) {
        console.log('Producto no encontrado');
        return null;
        }
        products.splice(index, 1);
        await this.writeData(products);
        console.log(`Producto con ID ${id} eliminado`);
    }
    }

    const manager = new ProductManager();

    const product1 = {
        id: await manager.generateId(),
        title: "Camiseta de la selección Argentina",
        description: 'Camiseta nilon talle L selección Argentina',
        price: 19000,
        thumbnail: '../img/camiseta.jpg',
        code: 100022,
        stock: 15,
        };

    const product2 = {
        id: await manager.generateId(),
        title: "Conjunto de la seleccion Argentina",
        description: "Conjunto algodón talle s selección Argentina",
        price: 14250,
        thumbnail: "../img/pantalon.jpg",
        code: 100933,
        stock: 23
        }

    const product3 = {
        id: await manager.generateId(),
        title : "Gorra de la seleccion Argentina", 
        description : "Gorra selección Argentina",
        price: 5000,
        thumbnail: "../img/gorra.jpg",
        code: 100412,
        stock: 8
    }

    const product4 = {
        id: await manager.generateId(),
        title : "Mochila de la seleccion Argentina",
        description : "Mochila estudiantil selección Argentina",
        price: 22500,
        thumbnail: "../img/pantalon.jpg",
        code: 100556,
        stock: 13
    }


manager.deleteProduct(0)


export default ProductManager;