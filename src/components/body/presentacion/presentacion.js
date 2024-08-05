import './presentacion-styles.css'

const contenedorMain= document.createElement("section")
contenedorMain.classList= "presentacion"
contenedorMain.id =`presentacion`

const contenedorPerfil = document.createElement("div")
contenedorPerfil.classList= "perfil"

const saludo = document.createElement("p")
saludo.textContent= "Hola"

const titulo = document.createElement("h2")
titulo.textContent= "Soy Developer"

const img = document.createElement("img")
img.src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png"

contenedorPerfil.append(saludo, titulo, img)

contenedorMain.append(contenedorPerfil)

document.querySelector("main").append(contenedorMain)


//SOBRE MI
 const contenedorDatos = document.createElement("div")
 contenedorDatos.classList ="datos"

 contenedorDatos.innerHTML = `<h2>Sobre mi</h2> <p>Actualmente estoy trabajando como agente de 1N y 2N para la empresa de Teleperformance dando soporte a la compañia de Vodafone en todo lo relacionado con incidencias y configuraciones sobre FTTH, HFC, telefonía móvil y centralitas PBX para empresas.</p>

<p>Ademas también me encuentro cursando el bootcamp de The Power Rock (The code) como desarrollador web Full stack.</p>

<p>Me interesa todo lo relacionado con el mundo de la informática y las telecomunicaciones, con especial interés en el mundo de las redes y el desarrollo web. Dispongo de una muy buena capacidad de aprendizaje en entornos nuevos y adaptabilidad a los cambios que puedan surgir.</p>`

 document.querySelector(".presentacion").append(contenedorDatos)

