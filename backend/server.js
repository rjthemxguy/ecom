import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';
import productRoutes from "./routes/productRoutes.js"

dotenv.config()

const port = process.env.PORT;

connectDB();

const app = express();

app.use(cors({
    origin: '*'
}));

app.use("/api/products", productRoutes)



app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})