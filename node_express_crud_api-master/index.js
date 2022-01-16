import express from "express";
import bodyParser from "body-parser";

import productRoutes from "./routes/products.js";
import categoryRoutes from "./routes/categories.js";
import categoryProductRoutes from "./routes/category_product.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use('/', categoryProductRoutes);
app.get("/", (req, res) => res.send("Welcome to the Products API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
