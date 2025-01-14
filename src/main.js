import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Estilos y librerías CSS
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS
import './styles/global.css'; // Estilos globales personalizados
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome Iconos
import 'aos/dist/aos.css'; // AOS Animaciones CSS

// Fuentes personalizadas
import './assets/fonts/font.css'; // Asegúrate de que este archivo apunte a tus fuentes instaladas

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

// Usar el router y montar la app
app.use(router);
app.mount('#app');