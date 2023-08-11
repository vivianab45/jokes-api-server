//1. import the controller
const JokesController= require('../controllers/jokes.controller')

//2. export a function that reads one argument (app)
module.exports=(app)=>{
    app.get('/api/testing', JokesController.apiTest);
    app.get('/api/jokes', JokesController.allJokes);
    app.get('/api/jokes/:id', JokesController.oneJoke);
    app.post('/api/jokes', JokesController.addJoke);
    app.patch('/api/jokes/:id', JokesController.updateJoke);
    app.delete('/api/jokes/:id', JokesController.deleteJoke);
}

//3. include all the routes with the corresponding logic from controller