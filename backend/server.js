import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

const port = process.env.PORT;

connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: '*'
}));

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)

app.use(errorHandler)
app.use(notFound)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})