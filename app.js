'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const app = express()
const api =require('./routes')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: 'hbs'
}))
app.set('view engine', '.hbs')

app.use ('/api', api)
app.get('/login', (req, res) => {
  res.render('login')
})
app.get('/', (req, res) => {  //
  res.render('product')       // no estoy seguro de donde devreia estar ubicado esto, se supone que te debe redirigir aqui despues de comprobar que estas logueado
})                            //

module.exports = app
