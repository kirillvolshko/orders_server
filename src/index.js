import express from "express";
import errorMiddleware from "./middlewares/error-middleware";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.use(errorMiddleware);
const startApp = async () => {
  try {
    app.listen(PORT, () => console.log("START SERVER"));
  } catch (e) {
    console.log(e);
  }
};
startApp();
