import express from "express";

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

const startApp = async () => {
  try {
    app.listen(PORT, () => console.log("START SERVER"));
  } catch (e) {
    console.log(e);
  }
};
startApp();
