import { Router } from "express";
import ProductsController from "../controllers/products.controller.js";

const productsRouter = Router();

productsRouter.get("/products", ProductsController.get);
productsRouter.post("/products", ProductsController.create);

export default productsRouter;
