import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';


dotenv.config();
const app = express();
const env = process.env.NODE_ENV || 'development';
const port = env === 'development' ? 4001 : process.env.PORT;


// bluebird to add supoort for promises with queries
mongoose.Promise = require('bluebird');

// DB CONNECTION INSTANCE
mongoose.connect('mongodb://localhost/MemeMakerDB', { useNewUrlParser: true });

// Routes
routes(app);


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Cross Origin access
app.use(cors());


app.get('/', (req, res) => res.send('Send memes'));

app.listen(port, () => console.log(`Memeing Server is listening on port ${port}!`));

export default app;
