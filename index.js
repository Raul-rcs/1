import express from 'express'
import rutas from "./rutas/index.js";
const app = express()
//Definiendo el puerto 
const port = process.env.PORT || 2000;

//Defininedo pug para las plantillas 
app.set("view engine","pug");

//Middleware
app.use((req, res, next) => {
    const ano = new Date();
    res.locals.tiempo= " " + ano.getFullYear();
    return next();
});

//Agregar parser body para obtener los datos de un formulario
app.use(express.urlencoded({extended:true}));

//Definiendo carpeta publica
app.use(express.static("public"));

//Definiendo rutas
app.use("/", rutas);

app.listen(port, () =>{
    console.log('Servidor iniciando en el puerto' + port);
});
