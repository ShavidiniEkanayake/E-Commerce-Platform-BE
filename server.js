require('dotenv').config()
import express from 'express'
import cors from 'cors'
import connectDB from './config/db'

const app = express();

//Connect Database
connectDB();

//Using Cors
app.use(cors());

app.use(express.json({ extended: false }));

// -------------------New Product---------------------
app.use("/api/product", require("./routes/product"));

// -------------------New User---------------------
app.use("/api/user", require("./routes/user"));

// -------------------New Discount---------------------
app.use("/api/discount", require("./routes/discount"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));