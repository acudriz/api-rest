module.exports = {
  port: process.env.PORT || 3000,
  db: process.env.MONGODB || 'mongodb://admin:admin@ds119302.mlab.com:19302/pruebas',
  SECRET_TOKEN: 'miclavedetokens' //clave de ejemplo, lo normal es que sea mas largo y complicado de descifrar
}
