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


app.use(bodyParser.json({limit : '50mb'}));
app.use(bodyParser.urlencoded({extended : true}));


app.get('/', (req, res) => res.send('Send memes'))

app.listen(port, () => console.log(`Memeing Server is listening on port ${port}!`))

export default app;
