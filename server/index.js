const express = require("express")
const app = express();
const { db } = require('./db')
const morgan = require('morgan')
//initialize app
//require morgan|volleyball, path packages
//require db from /db

app.use(morgan('dev'))
app.use(express.json())
//use morgan|volleyball
//use express.json()
//use express.static() MAKE SURE THE PATH TO YOUR PUBLIC FOLDER IS RIGHT!
app.use(express.static('/public'))

//require in your routes and use them on your api path

//404 handler

//500 handler

//set PORT
const port = process.env.PORT || 0;
const init = async () => {
  await db.sync()
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
}

init();

//listen
