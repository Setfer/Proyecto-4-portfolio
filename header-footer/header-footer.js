import './styles-head-foot.css'
import { link } from '../src/links/links'

const container = document.querySelector('header')
container.innerHTML= `<h2>Andrés Segura</h2>`
const nav = document.createElement('nav')
nav.classList = 'navbar'
const ul = document.createElement('ul')
ul.innerHTML = `<li>${link('Inicio', ' link_header', `#presentacion`)} </li> <li>${link('Experiencia',' link_header ',`#experiencia-estudios`)}
</li>  <li>${link('Mis proyectos', ' link_header ', `#proyectos`)}</li>`

let contacto = document.createElement("div")
contacto.innerHTML= ` ${link('Contacto', 'contacto')}`

container.append(nav , contacto)
nav.append(ul)


//FOOTER

let footer = document.querySelector("footer")
footer.innerHTML = "<p>Andrés Segura Gonzalez</p> <p>Proyecto 4</p> <p>Por suerte he elegido estudiar programación y no diseño</p>"