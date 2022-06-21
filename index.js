require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');




app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));




const start = async () => {
    try {
        app.listen(process.env.PORT, () =>{
            console.log(`server started listening on port: ${process.env.PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
};

start();