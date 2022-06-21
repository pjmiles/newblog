require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');


// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Home page
app.get("/", (req, res) => {
    res.send("Welcome to PJMiles API");
  });
  
// routes & API
const Blog = require('./routes/blogRoutes');

// create blog
app.post('/blogpost', Blog)











// database 
const database = () => {
    const db = require('./config/mongoose')
    return db
}

// server and database start
const start = async () => {
    try {
        await database()
        app.listen(process.env.PORT, () =>{
            console.log(`server started listening on port: ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
};

start();