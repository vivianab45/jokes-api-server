//1. import mongoose
const mongoose= require("mongoose");

//2.1 create the schema with all keys validation
const JokeSchema= new mongoose.Schema({
    setup: {
        type: String,
        required: [true,"Setup is required"],
        minLength:[10, "Setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true,"Punchline is required"],
        minLength:[3, "Punchline must be at least 3 characters long"]
}
},{timestamps:true})//2.2 enable the timestamp for createdAt & updatedAt

//3. create a mongoose model based on the schema and export it
const Joke= mongoose.model('Joke', JokeSchema)

module.exports=Joke