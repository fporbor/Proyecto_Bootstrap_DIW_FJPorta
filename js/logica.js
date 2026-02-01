// JavaScript principal del portafolio

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portafolio cargado correctamente");
});

document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const cards = document.querySelectorAll('.testimonial-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cards.forEach(c => c.style.opacity = '0.6');
    card.style.opacity = '1';
    card.style.transform = 'scale(1.05)';
  });
  card.addEventListener('mouseleave', () => {
    cards.forEach(c => c.style.opacity = '1');
    card.style.transform = 'scale(1)';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  const error = document.getElementById("mensaje-error");
  const exito = document.getElementById("mensaje-exito");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    error.classList.add("d-none");
    exito.classList.add("d-none");

    // Validaciones
    if (nombre.value.trim() === "") {
      mostrarError("El nombre es obligatorio");
      return;
    }

    if (email.value.trim() === "") {
      mostrarError("El email es obligatorio");
      return;
    }

    if (!validarEmail(email.value)) {
      mostrarError("El email no es válido");
      return;
    }

    if (mensaje.value.trim().length < 10) {
      mostrarError("El mensaje debe tener al menos 10 caracteres");
      return;
    }

    // Si todo va bien
    exito.classList.remove("d-none");
    form.reset();
  });

  function mostrarError(texto) {
    error.textContent = texto;
    error.classList.remove("d-none");
  }

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
});
