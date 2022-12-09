import express from 'express'
import{paginaInicio,paginaFestividades,paginaLugares} from '../controller/paginasController.js'
const rutas = express.Router()
rutas.get('/', paginaInicio)
rutas.get('/festividades', paginaFestividades)
rutas.get('/lugares', paginaLugares)


export default rutas
