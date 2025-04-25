import { Router } from "express";
import { ProductsController } from "../controllers/products.controller";

const productsRouter = Router();

productsRouter.get("/products", ProductsController.get);
productsRouter.post("/products", productsRouter.create);
