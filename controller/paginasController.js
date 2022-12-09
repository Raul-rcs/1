const paginaInicio = (req, rest) => {
  rest.render('inicio', {
    pagina: 'Inicio',
  })
}
const paginaFestividades=(req,rest)=>{
  rest.render('festividades',{
    pagina: 'Festividades'
  })
}
const paginaLugares=(req,rest)=>{
  rest.render('lugares',{
    pagina: 'Lugares'
  })
}

export {
  paginaInicio,
  paginaFestividades,
  paginaLugares,
}
