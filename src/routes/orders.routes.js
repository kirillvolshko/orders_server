import { Router } from "express";
import { OrdersController } from "../controllers/orders.controller.js";

const ordersRoutes = Router();

ordersRoutes.get("/orders/:userId", OrdersController.get);
ordersRoutes.post("/orders", OrdersController.create);
