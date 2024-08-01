
import { button } from '../../src/buttons/button'
import "./exp-est-style.css"

const contenedorMain = document.querySelector("main")
const contenedorExpEst= document.createElement ("section")
contenedorExpEst.classList = "experiencia-estudios"
contenedorExpEst.id = `experiencia-estudios`
contenedorExpEst.innerHTML = `${button("Experiencia" ,"boton-experiencia" )} ${button("Estudios","boton-estudios" )} `
const contenedorExpMain = document.createElement("div")
contenedorExpMain.classList = "experiencias"
const contenedorEstMain = document.createElement("div")
contenedorEstMain.classList = "estudios hidden"

const contenido = (titulo, info  ) => {
  const experiencia = document.createElement("div")
  const tituloCont = document.createElement("h3")
  tituloCont.innerText = titulo
  const infoCont = document.createElement("p")
  infoCont.innerText = info
  experiencia.append(tituloCont, infoCont)
  return experiencia
}


const exp1 = contenido("Experiencia 1","Esta es la experiencia 1", )
const exp2 = contenido("Experiencia 2","Esta es la experiencia 2")
const exp3 = contenido("Experiencia 3","Esta es la experiencia 3")
const exp4 = contenido("Experiencia 4","Esta es la experiencia 4")

const est1 = contenido("Estudio 1","Este es el Estudio 1")
const est2 = contenido("Estudio 2","Este es el Estudio 2")
const est3 = contenido("Estudio 3","Este es el Estudio 3")
const est4 = contenido("Estudio 4","Este es el Estudio 4")

contenedorExpMain.append(exp1,exp2,exp3,exp4)
contenedorEstMain.append(est1, est2, est3, est4)

contenedorMain.append(contenedorExpEst)


contenedorExpEst.append(contenedorExpMain, contenedorEstMain)

document.addEventListener('DOMContentLoaded', (event) => {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
      button.addEventListener('click', () => {
          if (button.classList.contains('boton-experiencia')) {
              showExperiencias();
          } else if (button.classList.contains('boton-estudios')) {
              showEstudios();
          }
      });
  });

  function showExperiencias() {
      toggleVisibility('.experiencias', '.estudios');
  }

  function showEstudios() {
      toggleVisibility('.estudios', '.experiencias');
  }

  function toggleVisibility(showSelector, hideSelector) {
      const showElements = document.querySelectorAll(showSelector);
      const hideElements = document.querySelectorAll(hideSelector);
      
      showElements.forEach(element => {
          element.classList.remove('hidden');
      });

      hideElements.forEach(element => {
          element.classList.add('hidden');
      });
  }
});
