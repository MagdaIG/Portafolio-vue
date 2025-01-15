<template>
  <section id="proyectos" class="projects-section py-5">
    <div class="container">
      <!-- Título con efecto de escritura -->
      <h2 class="projects-title typing">
        <span class="line">
          <span class="white">Mis</span> <span class="highlight">Proyectos</span>
        </span>
      </h2>

      <p class="projects-description" data-aos="fade-up" data-aos-delay="200">
        Descubre una selección de <span class="highlight">proyectos</span> que capturan mi <span class="highlight">pasión</span> por el desarrollo web y mi capacidad para transformar <span class="highlight">ideas</span> en <span class="highlight">soluciones funcionales y significativas</span>. Aunque aquí presento <span class="highlight">tres proyectos destacados</span>, son solo una pequeña muestra de todo lo que he creado. Te invito a explorar el resto de mi trabajo, donde cada proyecto cuenta una <span class="highlight">historia de aprendizaje, innovación y dedicación</span>.
      </p>

      <!-- Contenedor de proyectos -->
      <div class="row justify-content-center mt-4">
        <div
            class="col-md-4"
            v-for="(project, index) in projects"
            :key="index"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 200"
        >
          <div class="project-card">
            <img :src="require(`@/assets/images/${project.image}`)" :alt="project.name" class="project-image" />
            <div class="project-content">
              <h5 class="project-title highlight">{{ project.name }}</h5>
              <p class="project-description">{{ project.description }}</p>
              <a :href="project.link" target="_blank" class="btn btn-outline-morado">
                Ver Proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Projects",
  data() {
    return {
      projects: [
        {
          name: "Administrador de Cursos",
          description: "Administrador de Cursos, con VueJS, utilizando una API.",
          image: "proyecto1.png",
          link: "https://administrador-cursos.onrender.com/",
        },
        {
          name: "Catálogo de Juegos",
          description: "Catálogo de juegos, carga de juegos, interacciones y comentarios. Vue.",
          image: "proyecto2.png",
          link: "https://magdaig.github.io/video-juegos-vue/",
        },
        {
          name: "Interfaz de Chat",
          description: "Prototipo de chat. Interfaz de chat utilizando Bootstrap, CSS y JS.",
          image: "proyecto3.png",
          link: "https://magdaig.github.io/interfaz-chat/",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Sección */
.projects-section {
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  padding: 50px 20px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  margin-top: 40px;
}

.projects-title {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #ffffff;
  animation: typing 3s steps(30, end), blink-caret 0.5s step-end infinite;
  text-align: center;
}

.projects-title .highlight {
  color: #6c24a7;
}

.projects-title .white {
  color: #ffffff;
}

.typing.active-typing {
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #ffffff;
  animation: typing 4s steps(30, end), blink-caret 0.5s step-end infinite;
}

.projects-description {
  font-size: 1.2rem;
  text-align: center;
  margin: 20px 0 40px;
  line-height: 1.6;
}

.projects-description .highlight {
  background: linear-gradient(135deg, #a3d8f4, #d6bbfb);
  color: #6c24a7;
  font-weight: bold;
  padding: 0 4px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.projects-description .highlight:hover {
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  color: #ffffff;
  transform: scale(1.1);
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

/* Tarjetas */
.project-card {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  padding: 20px;
  margin-bottom: 30px;
  color:black;
}

.project-card:hover {
  background: rgba(113, 64, 159, 0.99);
  transform: translateY(-10px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
  color: white;
}

.project-image {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.project-description {
  font-size: 1rem;
  margin-bottom: 15px;
  color: #f1f1f1;
}

.btn-outline-morado {
  color: #6c24a7;
  border: 2px solid #6c24a7;
  transition: all 0.3s ease;
}

.btn-outline-morado:hover {
  background: rgba(219, 192, 246, 0.99);
  color: #ffffff;
}
</style>