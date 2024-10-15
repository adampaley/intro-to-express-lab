// imports
const express = require('express')
const morgan = require('morgan')

// create our express application object
const app = express()

// Use Morgan middleware with the 'dev' option for concise output
app.use(morgan('dev'))


// Default
app.get('/', (req, res) => {
    res.send('<h1>Intro to Express Lab</h1>')
})

// 1. Be Polite, Greet the User
// localhost:3000/greetings/:name

app.get('/greetings/:name', (req, res) => {
    const name = req.params.name
    formattedName = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    res.send(`Hello, ${formattedName}. Would you like some fava beans and a nice chianti?`)
})

// 2. Rolling the Dice
// localhost:3000/roll/:isNumber

app.get('/roll/:number', (req, res) => {
    const number = Number(req.params.number)

    if (!number) {
        return res.send("You must specify a number.")
    } else {
        res.send(`You rolled a ${Math.floor(Math.random() * number)}.`)
    }

})

// listen on port 3000 for request
app.listen(3000, () => {
  console.log("Listening on port 3000")  
})