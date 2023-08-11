//1.import mongoose
const mongoose= require ("mongoose")
//2. create a uri variable that shows the connection url
//2.1 make sure to use .env for the sensitive information 
//2.2 Make sure you console log and check if the route is good

const uri=process.env.URI
console.log(uri)//you have to add mongoose.config to server.js for it to console.log and confirm access to URI

//3. When connecting to the databas, check your server terminal for successful connection
mongoose.connect(uri)
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
//Check the code from the platform
//You may need to go to Atlas to update the IP access