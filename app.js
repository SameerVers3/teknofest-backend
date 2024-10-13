import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import connectDB from './config/db.js';
// import authRoutes from './routes/authRoutes.js';
import registrationRoute from './routes/registrationRoutes.js';
import competitionRoute from './routes/competitionRoutes.js';
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const env = process.env.NODE_ENV || 'development';

connectDB(env);

app.get('/', (req, res) => {  
  res.send('API is running....');
});

app.use('/api/register', registrationRoute);
app.use('/api/competitions', competitionRoute);

// app.use(errorHandler);

export default app;
