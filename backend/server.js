
//create an “express” server, then we will attach the “express.json” middleware and “cors”. 
//The “express.json” middleware will be used for sending and receiving “json”
//the Node.js server will be permitted to listen on the “5000” port:

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});

//https://linuxhint.com/get-started-with-mern-stack/#:~:text=To%20get%20started%20with%20the,js%20application.