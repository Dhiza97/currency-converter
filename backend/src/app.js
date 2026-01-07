import 'dotenv/config';
import express from 'express';
import connectDB from "../config/db.js"

const app = express();

connectDB()

app.get('/', (req, res) => {
  res.send('Currency Converter API is running');
});

export default app;