//1. import all dependencies: express, app, .env
//express:
const express= require('express')
//create app with express
const app= express();
//.env (allows us to use variables that aren't pushed to the Github)
require('dotenv').config();

// console.log(process.env.PORT);//helps us check the access to .env variables
const port= process.env.PORT
//update the bottom line in app.listen from 8000 with port

//4. import mongoose.config (after config is complete)
require ('./configs/mongoose.config')


//2. configure express with app.use
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//5. import routes
require("./routes/jokes.routes")(app)

//3. listen to the port 
app.listen(port, ()=>console.log(`Listening on port: 8000`))
//-----test the port by running nodemon server.js-----