// imports
const express = require('express')

// create our express application object
const app = express()

// listen on port 3000 for request
app.listen(3000, () => {
  console.log("Listening on port 3000")  
})