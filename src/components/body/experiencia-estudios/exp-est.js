
import { button } from '../../buttons/button'
import "./exp-est-style.css"

const contenedorMain = document.querySelector("main")
const contenedorExpEst= document.createElement ("section")
contenedorExpEst.classList = "experiencia-estudios"
contenedorExpEst.id = `experiencia-estudios`
contenedorExpEst.innerHTML = `${button("Experiencia" ,"boton-experiencia active" )} ${button("Estudios","boton-estudios" )} `
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


const exp1 = contenido("Agente de 1N","Teleperformance S.A.")
const exp2 = contenido("Agente de 2N","Teleperformance S.A.")


const est1 = contenido("Desarrollador web Full Stack","The Code")
const est2 = contenido("Técnico en Telecomunicaciones","IES Pablo de Olavide.")

contenedorExpMain.append(exp1,exp2,)
contenedorEstMain.append(est1, est2)

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
      toggleVisibility('.experiencias', '.estudios', 'boton-experiencia');
  }

  function showEstudios() {
      toggleVisibility('.estudios', '.experiencias', 'boton-estudios');
  }

  function toggleVisibility(showSelector, hideSelector, activeButtonClass) {
      const showElements = document.querySelectorAll(showSelector);
      const hideElements = document.querySelectorAll(hideSelector);
      const buttons = document.querySelectorAll('.button');
      
      showElements.forEach(element => {
          element.classList.remove('hidden');
      });

      hideElements.forEach(element => {
          element.classList.add('hidden');
      });
      buttons.forEach(button => {
        if (button.classList.contains(activeButtonClass)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
  }
});
