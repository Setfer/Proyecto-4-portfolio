import './contacto-style.css'

let main = document.querySelector ("main")
main.innerHTML += `<section id="sidebar">
  <button id="closeSidebar">&times;</button>
  <h2>Contacto</h2>
  <p>Direccion : Calle Jesus en Jerusalen,La Carolina, Jaen, 23200</p>
  <p>Número de telefono :605966883</p>
  <p>Correo electronico: andres88lacarolina@gmail.com</p>
  <p>Linkedin: https://www.linkedin.com</p>
</section>`


document.addEventListener('DOMContentLoaded', function() {
  const contactoLink = document.querySelector('.contacto');
  const sidebar = document.getElementById('sidebar');
  const closeSidebar = document.getElementById('closeSidebar');

  // Añadir evento para abrir el sidebar al hacer clic en el enlace "Contacto"
  contactoLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    sidebar.classList.add('active');
  });

  // Añadir evento para cerrar el sidebar al hacer clic en el botón de cierre
  closeSidebar.addEventListener('click', function() {
    sidebar.classList.remove('active'); 
  });

  // Cerrar el sidebar si se hace clic fuera de él
  window.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target) && event.target !== contactoLink) {
      sidebar.classList.remove('active'); 
    }
  });
});
