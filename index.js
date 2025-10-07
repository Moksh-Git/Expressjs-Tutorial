import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose';
import path from 'path'
import { fileURLToPath } from 'url'
import productRouter from "./routes/product.js";
import express from "express";
import usersRouter from "./routes/users.js";
const app = express();
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//db connection
main().catch(err=>console.log(err))
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected')
}

app.use(cors())
app.use(express.json());
if(process.env.PUBLIC_DIR){
  app.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)))
}
app.use('/products', productRouter);
app.use('/users', usersRouter);
app.get(/.*/,(req,res)=>{
  res.sendFile(path.resolve(__dirname,'public','index.html'))
})

app.listen(process.env.PORT, () => {
  console.log("server is listening on port " + process.env.PORT);
});
