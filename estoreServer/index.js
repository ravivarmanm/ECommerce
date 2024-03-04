import express from "express";
import productCategories from "./Routes/productCategories.js";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());
app.use("/", productCategories);

app.listen(port, () => {
  console.log(`${port} is running`);
});
