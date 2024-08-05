import { link } from '../../links/links'
import './proyectos-style.css'

let contenedorMain = document.querySelector('main')
let contenedor = document.createElement('section')
contenedor.classList = 'proyectos'
contenedor.id = `proyectos`
contenedor.innerHTML = '<h2> Mis Proyectos </h2> <p>Estos son mis proyectos</p>'

function crearProyecto(name, enlace, image = '') {
  let contenedorProyecto = document.createElement('div')
  contenedorProyecto.classList = 'proyecto'
  contenedorProyecto.innerHTML = `<h3>${name}</h3>`
  let img = document.createElement('img')
  img.src = image
  contenedorProyecto.append(img)
  contenedorProyecto.innerHTML += link('Visitar', 'link-proyecto', enlace)

  return contenedorProyecto
}

let proyecto1 = crearProyecto(
  'Proyecto1',
  'https://google.es',
  'https://factorialhr.es/wp-content/uploads/2021/04/07154848/gestion-de-proyectos-min.jpg'
)
let proyecto2 = crearProyecto(
  'Proyecto2',
  'https://google.es',
  'https://beinn.es/wp-content/uploads/2018/05/Innovacion.jpg'
)
let proyecto3 = crearProyecto(
  'Proyecto3',
  'https://google.es',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV7H0ljnZyw94h2GfuaQu_rC8INur4SYTR5A&s'
)

contenedor.append(proyecto1, proyecto2, proyecto3)

contenedorMain.append(contenedor)
