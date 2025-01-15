<template>
  <div class="home">
    <!-- Sección Hero -->
    <section id="home" class="hero-section py-5">
      <div class="container">
        <div class="row align-items-center">
          <!-- Columna de texto -->
          <div class="col-md-6 text-center text-md-start">
            <h1 class="hero-title">
              <span class="line typing">
                Soy <span class="highlight">Magdalena,</span>    <br /> <span class="highlight white"> desarrolladora </span>
              </span>
              <br />
              <span class="line">
                Web + <span class="highlight white">UX Designer</span>
              </span>
            </h1>
            <p class="hero-description">
              Me especializo en <span class="highlight">resolver problemas complejos</span> de experiencia de usuario, creando
              <span class="highlight">soluciones dinámicas</span> que conectan a millones de personas.
            </p>
            <div class="buttons-container">
              <a
                  href="/certificates/CV.pdf"
                  download
                  class="btn btn-morado btn-lg"
              >
                Descargar CV
              </a>
              <a
                  href="https://github.com/MagdaIG"
                  target="_blank"
                  class="btn btn-outline-morado btn-lg icon-button"
              >
                <FontAwesomeIcon :icon="['fab', 'github']" />
              </a>
              <a
                  href="https://www.linkedin.com/in/minalaf/"
                  target="_blank"
                  class="btn btn-outline-morado btn-lg icon-button"
              >
                <FontAwesomeIcon :icon="['fab', 'linkedin']" />
              </a>
            </div>
          </div>
          <!-- Columna de imagen -->
          <div class="col-md-6 text-center">
            <div class="hero-image-container">
              <img src="@/assets/images/mi-foto.jpeg" alt="Magdalena" class="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Habilidades -->
    <section id="habilidades" class="py-5">
      <Skills />
    </section>

    <!-- Componente de Proyectos -->
    <section id="proyectos" class="py-5">
      <Projects />
    </section>

    <!-- Componente de Experiencia y Educación -->
    <section id="experience-education" class="py-5">
      <ExperienceAndEducation />
    </section>

    <!-- Componente de Servicios -->
    <section id="servicios" class="py-5">
      <Servicios />
    </section>

    <!-- Componente de Contacto -->
    <section id="contact" class="py-5">
      <Contacto />
    </section>
  </div>
</template>

<script>
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import ExperienceAndEducation from "@/components/ExperienceAndEducation.vue";
import Servicios from "@/components/Servicios.vue";
import Contacto from "@/components/Contacto.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    FontAwesomeIcon,
    Skills,
    Projects,
    ExperienceAndEducation,
    Servicios,
    Contacto,
  },
};
</script>

<style scoped>
/* Sección Hero */
.hero-section {
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  color: #ffffff;
  padding: 60px 20px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  margin-top: 80px;
}

.hero-title {
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.3;
}

.line.typing {
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #ffffff;
  animation: typing 4s steps(30, end), blink-caret 0.5s step-end infinite;
}

.line:not(.typing) {
  white-space: normal;
  overflow: visible;
  border-right: none;
  animation: none;
}

.highlight {
  color: #6c24a7;
}

.hero-title .white {
  color: #ffffff;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #4d4d4d;
  font-weight: 400;
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
}

.hero-description .highlight {
  color: #6c24a7; /* Color morado */
  font-weight: bold; /* Negrita para destacar */
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4); /* Fondo degradado */
  padding: 2px 5px; /* Espaciado reducido */
  border-radius: 5px; /* Bordes redondeados */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: inline-block; /* Asegura que el tamaño sea correcto */
}

.hero-description .highlight:hover {
  transform: scale(1.05); /* Ligeramente más grande al hover */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
}

.buttons-container {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.hero-image-container {
  position: relative;
  max-width: 100%;
}

.hero-image {
  width: 60%;
  border-radius: 20px;
  filter: grayscale(100%);
  transition: filter 0.3s ease, transform 0.3s ease;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.hero-image:hover {
  filter: grayscale(0%);
  transform: scale(1.1);
}

.btn-morado {
  background: #6c24a7;
  color: #ffffff;
  border: none;
  transition: background-color 0.3s ease;
}

.btn-morado:hover {
  background: #4e1a7d;
}

.btn-outline-morado {
  color: #6c24a7;
  border: 2px solid #6c24a7;
  transition: all 0.3s ease;
}

.btn-outline-morado:hover {
  background: #6c24a7;
  color: #ffffff;
}

.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
}

.typing.active-typing {
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #ffffff;
  animation: typing 4s steps(30, end), blink-caret 0.5s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #ffffff;
  }
}
</style>