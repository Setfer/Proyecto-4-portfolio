import './presentacion-styles.css'

const contenedorMain= document.createElement("section")
contenedorMain.classList= "presentacion"
contenedorMain.id =`presentacion`

const contenedorPerfil = document.createElement("div")
contenedorPerfil.classList= "perfil"

const saludo = document.createElement("p")
saludo.textContent= "Hola"

const titulo = document.createElement("h2")
titulo.textContent= "Yo soy Developer"

const img = document.createElement("img")
img.src="https://cdn-icons-png.flaticon.com/512/6326/6326055.png"

contenedorPerfil.append(saludo, titulo, img)

contenedorMain.append(contenedorPerfil)

document.querySelector("main").append(contenedorMain)


//SOBRE MI
 const contenedorDatos = document.createElement("div")
 contenedorDatos.classList ="datos"

 contenedorDatos.innerHTML = `<h2>Sobre mi</h2> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores eius qui, ipsam illum repellendus soluta neque totam, mollitia nobis magni rerum dignissimos velit nisi cumque voluptatem. Maiores, dicta autem.</p>`

 document.querySelector(".presentacion").append(contenedorDatos)

