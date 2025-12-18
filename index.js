require('dotenv').config()
const express = require('express') // Express library ko load kar raha hai.
// import express from "express"
const app = express() // Ye app hi server hai — routes, logic sab isme aata hai.
const port = 4000 // port per server listen karta h(incoming request). Port = gate number jahan browser knock karega

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('hiteshdotcom')
})
app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code<h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> chai aur code<h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
