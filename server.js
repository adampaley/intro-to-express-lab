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
    console.log(formattedName)
    res.send(`Hello, ${formattedName}. Would you like some fava beans and a nice chianti?`)
})


// listen on port 3000 for request
app.listen(3000, () => {
  console.log("Listening on port 3000")  
})