'use strict'

const User = require('../models/user')
const service = require('../services')

function signUp (req, res) {
  const user = new User({
    email: req.body.email,
    displayname: req.body.displayname,
    password: req.body.password
  })

  user.save((err) => {
    if (err) res.status(500).send({ message: `Error al crear el usuario: ${err}`})

    return res.status(201).send({ token: service.createToken(user) })
  })
}

function signIn (req, res) {
  User.find({ email: req.body.email }, (err, user) => {
    if (err) return res.status(500).send({ message: err })
    if (err) return res.status(404).send({ message: 'no existe el usuario' })

    req.user = user
    res.status(200).send({
      message: 'Te has loqueado correctamente',
      token: service.createToken(user)
    })
  })
}

module.exports = {
  signUp,
  signIn
}
