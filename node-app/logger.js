const EventEmitter = require('events')



const URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q='

class Logger extends EventEmitter {
    askMe(phrase) {
        console.log(phrase)

        //Raise an event
        this.emit('messageLogged', { id: 1, url: 'http://' })
    }
}



module.exports = Logger

// console.log(module)