import express from "express";
import errorMiddleware from "./middlewares/error-middleware.js";
import prisma from "./lib/prisma.js";
import usersRoutes from "./routes/users.routes.js";
import productsRouter from "./routes/products.routes.js";
import ordersRoutes from "./routes/orders.routes.js";
import cors from "cors";
import limiter from "./middlewares/limit-middleware.js";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(limiter);
app.use("/api", usersRoutes);
app.use("/api", productsRouter);
app.use("/api", ordersRoutes);

app.use(errorMiddleware);
const startApp = async () => {
  try {
    app.listen(PORT, () => console.log("START SERVER " + PORT));
    await prisma.$connect();
  } catch (e) {
    console.log(e);
  }
};
startApp();
