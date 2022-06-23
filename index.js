require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const blogRoutes = require('./routes/blogRoutes');
const db = require('./config/mongoose');
const errorHandler = require('./errors/errorHandler')

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);


//Home page
app.get("/", (req, res) => {
    res.send("Welcome to PJMiles API");
  });

// blog routes
app.use('/blogposts', blogRoutes)

// database 
const database = () => {
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