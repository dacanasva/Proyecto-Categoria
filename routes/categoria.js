const {Router} = require('express')

const route = Router()

//Listar todos los datos
const {getCategoria, postCategoria, putCategoria, deleteCategoria} = require('../controllers/categoria') //Importando el controlador

route.get('/', getCategoria)

route.post('/', postCategoria)

route.put('/', putCategoria)

route.delete('/', deleteCategoria)

module.exports = route