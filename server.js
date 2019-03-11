import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express from 'express'
import dotenv from 'dotenv';


dotenv.config();
const app = express()
const env = process.env.NODE_ENV || 'development'
const port = env === 'development' ? 4001 : process.env.PORT;




// mongoose instance connection url connection
mongoose.Promise = global.Promise;

// DB CONNECTION STRING
mongoose.connect('mongodb://localhost/MemeMakerDB');
