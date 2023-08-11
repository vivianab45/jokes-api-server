//1. import the model
const Joke= require('../models/joke.model')

//2. export all the functions with placeholder

module.exports.apiTest=(req, res)=>{
    res.json({message:'ok'})
}

//Example:
//Returns a list of all jokes:
module.exports.allJokes =(req, res)=>{
    //model.builtinfunction--they're async functions,soo: .then() and .catch()
    Joke.find()///returns a list of objects
        .then(jokesList=>res.json(jokesList))
        .catch(err=> res.json(err))
}

//ONE JOKE BY ID
module.exports.oneJoke =(req, res)=>{
    Joke.findOne({_id: req.params.id})
        .then(oneJoke=>res.json(oneJoke))
        .catch(err=> res.json(err))
}

//ADD A NEW JOKE TO DATABASE
module.exports.addJoke =(req, res)=>{
    Joke.create(req.body)
        .then(newJoke=>res.json(newJoke))
        .catch(err=> res.json(err))
}

//PARTIALLY UPDATE AN EXISTING JOKE BY ID
module.exports.updateJoke =(req, res)=>{
    Joke.findOneAndUpdate(
        {_id: req.params.id},//criteria for an update
        req.body,//the info to be updated will come from the request
        {new:true, runValidators:true})
        //new:specify the return response
        //runValidators: enable validation in update
        .then(updatedJoke=>res.json(updatedJoke))
        .catch(err=> res.json(err))
}

//REMOVE A JOKE BY ID
module.exports.deleteJoke =(req, res)=>{
    Joke.deleteOne({_id:req.params.id})
        .then(status=>res.json(status))
        .catch(err=> res.json(err))
}



