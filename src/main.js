import { createApp } from 'vue';
import App from './App.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';

// Estilos y librerías CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS
import '@/styles/global.css'; // Estilos globales personalizados
import 'aos/dist/aos.css'; // AOS Animaciones CSS

// Fuentes personalizadas
import '@/assets/fonts/font.css'; // Asegúrate de que este archivo apunte a tus fuentes instaladas

// Animaciones (AOS)
import AOS from 'aos';

// Crear la aplicación Vue
const app = createApp(App);

// Configuración de AOS
AOS.init({
    duration: 800, // Duración de las animaciones
    easing: 'ease-in-out', // Efecto de las animaciones
    once: true, // Animar solo la primera vez que se visualiza el elemento
});

// Configuración de FontAwesome
library.add(faGithub, faHeart, faEnvelope, faLinkedin);

app.component('font-awesome-icon', FontAwesomeIcon);

// Lógica de IntersectionObserver y detección de clics en el navbar
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".typing");
    const navbarLinks = document.querySelectorAll("nav a"); // Asegúrate de que los enlaces del navbar tengan `<a href="#id">`

    const observerOptions = {
        root: null,
        threshold: 0.3, // Ajusta la visibilidad requerida para activar el efecto
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active-typing"); // Clase activa cuando aparece
                observer.unobserve(entry.target); // Detener la observación para optimizar
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Manejo de clics en el navbar
    navbarLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Evita el comportamiento por defecto
            const targetId = link.getAttribute("href").substring(1); // Obtén el id de la sección
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Scroll suave a la sección
                targetSection.scrollIntoView({ behavior: "smooth" });

                // Activa la clase de animación inmediatamente
                const typingElement = targetSection.querySelector(".typing");
                if (typingElement) {
                    typingElement.classList.add("active-typing");
                }
            }
        });
    });
});

// Montar la aplicación
app.mount('#app');