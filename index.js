
const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3000

mongoose.connect('mongodb://admin:admin@ds119302.mlab.com:19302/pruebas', (err, res) => {
  if (err) throw err
  console.log('conexion a la base de datos establecida...');

  app.listen(port, () => {
    console.log(`API REST corriendo en http://localhost:${port}`);
  })
})
