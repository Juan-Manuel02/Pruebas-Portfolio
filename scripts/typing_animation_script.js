// Efecto de escritura
const text = "Creo cosas digitales con cariño: líneas de código, tipografías bien pensadas y un toque de caos controlado. No siempre sé lo que hago... pero siempre lo hago con estilo.";
const typingElement = document.getElementById("typing");
const cursor = document.querySelector(".cursor");
let index = 0;
let isDeleting = false;

function typeEffect() {
  // Texto actual
  const currentText = text.substring(0, index);
  typingElement.textContent = currentText;
  
  // Velocidad base: más rápido al borrar, más lento al escribir
  let speed = isDeleting ? 30 : 70;
  
  // Lógica de escritura y borrado
  if (!isDeleting) {
    // Estamos escribiendo
    if (index < text.length) {
      index++;
    } else {
      // Termina de escribir, espera y comienza a borrar
      isDeleting = true;
      speed = 1800; // Pausa antes de empezar a borrar
    }
  } else {
    // Estamos borrando
    if (index > 0) {
      index--;
    } else {
      // Termina de borrar, reinicia para volver a escribir
      isDeleting = false;
      speed = 600; // Pausa antes de volver a escribir
    }
  }
  
  // Programar la siguiente ejecución
  setTimeout(typeEffect, speed);
}

// Cursor parpadeante
setInterval(() => {
  cursor.classList.toggle("hidden");
}, 500);

// Iniciar el efecto después de que la página cargue
window.addEventListener('DOMContentLoaded', () => {
  // Asegurarse de que los elementos existen antes de iniciar
  if (typingElement && cursor) {
    typeEffect();
  } else {
    console.error("No se encontraron los elementos necesarios para el efecto de escritura");
  }
});