import { Router } from "express";

const ordersRoutes = Router();

ordersRoutes.get("/orders/:userId");
ordersRoutes.post("/orders");
