// ================================
// JavaScript principal del portafolio
// ================================


// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portafolio cargado correctamente"); // Mensaje de comprobación en consola
});


// ================================
// Scroll suave al hacer clic en el menú
// ================================

document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Evita el salto brusco por defecto del navegador

    const target = document.querySelector(link.getAttribute('href')); // Obtiene la sección destino
    target.scrollIntoView({ behavior: 'smooth' }); // Scroll suave hasta la sección
  });
});


// ================================
// Efectos hover en tarjetas de testimonios
// ================================

const cards = document.querySelectorAll('.testimonial-card'); // Selecciona todas las cards de testimonios

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cards.forEach(c => c.style.opacity = '0.6'); // Baja la opacidad de todas las tarjetas
    card.style.opacity = '1'; // Mantiene visible la tarjeta activa
    card.style.transform = 'scale(1.05)'; // Se agranda ligeramente la tarjeta activa
  });

  card.addEventListener('mouseleave', () => {
    cards.forEach(c => c.style.opacity = '1'); // Restaura la opacidad de todas
    card.style.transform = 'scale(1)'; // Devuelve la tarjeta a su tamaño original
  });
});


// ================================
// Validación del formulario de contacto
// ================================

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto"); // Formulario
  const nombre = document.getElementById("nombre"); // Input nombre
  const email = document.getElementById("email"); // Input email
  const mensaje = document.getElementById("mensaje"); // Textarea mensaje

  const error = document.getElementById("mensaje-error"); // Mensaje de error
  const exito = document.getElementById("mensaje-exito"); // Mensaje de éxito

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el envío real del formulario

    error.classList.add("d-none"); // Oculta error previo
    exito.classList.add("d-none"); // Oculta éxito previo

    // Validación del nombre
    if (nombre.value.trim() === "") {
      mostrarError("El nombre es obligatorio");
      return;
    }

    // Validación del email
    if (email.value.trim() === "") {
      mostrarError("El email es obligatorio");
      return;
    }

    if (!validarEmail(email.value)) {
      mostrarError("El email no es válido");
      return;
    }

    // Validación del mensaje
    if (mensaje.value.trim().length < 10) {
      mostrarError("El mensaje debe tener al menos 10 caracteres");
      return;
    }

    // Si todo es correcto
    exito.classList.remove("d-none"); // Muestra mensaje de éxito
    form.reset(); // Limpia el formulario
  });

  // Muestra un mensaje de error personalizado
  function mostrarError(texto) {
    error.textContent = texto; // Inserta el texto de error
    error.classList.remove("d-none"); // Hace visible el mensaje
  }

  // Valida el formato del email usando expresión regular
  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Devuelve true o false
  }
});

