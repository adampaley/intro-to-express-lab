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
// localhost:3000/roll/:number

app.get('/roll/:number', (req, res) => {
    const number = Number(req.params.number)

    if (!number) {
        return res.send("You must specify a number.")
    } else {
        res.send(`You rolled a ${Math.floor(Math.random() * number)}.`)
    }
})

// 3. I Want THAT One!
// localhost:3000/collectibiles/:index

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:index', (req, res) => {
    const index = Number(req.params.index)

    if (!collectibles[index]) {
        return res.send('This item is not yet in stock. Check back soon!')
    } else {
        return res.send(`I see you eyeing that ${collectibles[index].name}. I'll give you a deal, just $${collectibles[index].price}!`)
    }
})

// 4. Filter Shoes by Query Parameters 
// localhost:3000/shoes + query

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    const { 'max-price': maxPrice, 'min-price': minPrice, type} = req.query
    let shownShoes = shoes

    if (minPrice) {
        shownShoes = shownShoes.filter(shoe => shoe.price >= Number(minPrice))
    }

    if (maxPrice) {
        shownShoes = shownShoes.filter(shoe => shoe.price <= Number(maxPrice))
    }

    if (type) {
        shownShoes = shownShoes.filter(shoe => shoe.type.toLowerCase() === type.toLowerCase())
    }

    res.json(shownShoes)
})


// listen on port 3000 for request
app.listen(3000, () => {
  console.log("Listening on port 3000")  
})