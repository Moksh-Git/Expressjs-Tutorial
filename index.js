import productRouter from "./routes/product.js";
import express from "express";
import usersRouter from "./routes/users.js";
const app = express();


app.use(express.json());
app.use('/products', productRouter);
app.use('/users', usersRouter);



app.listen(6060, () => {
  console.log("server is listening on port 6060");
});
