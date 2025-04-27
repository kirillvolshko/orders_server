import express from "express";
import errorMiddleware from "./middlewares/error-middleware.js";
import prisma from "./lib/prisma.js";
import usersRoutes from "./routes/users.routes.js";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use("/api", usersRoutes);

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
