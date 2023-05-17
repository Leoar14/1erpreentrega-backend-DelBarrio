import express from "express";
import ProductsRouter from "./Routes/Products.js";
import CartRouter from "./Routes/cart.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true} ))

app.use("/api/products", ProductsRouter)
app.use("/api/carts", CartRouter)

const server = app.listen(8080, ()=>{
    console.log("Server Runing on port 8080");
})