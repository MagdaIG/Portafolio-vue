<template>
  <section id="servicios" class="services-section py-5">
    <div class="container">
      <!-- Título de Servicios -->
      <h2 class="section-title typing text-center">
        <span class="line">
          Mis <span class="highlight">Servicios</span>
        </span>
      </h2>
      <div class="services-list mt-4">
        <div
            class="service-item"
            v-for="(service, index) in services"
            :key="'service-' + index"
        >
          <div class="service-content">
            <div class="service-number-title">
              <span class="service-number">{{ index + 1 }}</span>
              <h4 class="service-title">
                <span class="white">{{ service.title.split(" ")[0] }}</span>
                <span class="highlight">{{ service.title.split(" ").slice(1).join(" ") }}</span>
              </h4>
            </div>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Servicios",
  data() {
    return {
      services: [
        {
          title: "Desarrollo Web",
          description: "Construcción de sitios y aplicaciones web modernas y responsivas con tecnologías como Vue.js, Spring Boot y TailwindCSS.",
        },
        {
          title: "Diseño UI/UX",
          description: "Creación de interfaces atractivas y experiencias de usuario fluidas, enfocadas en la funcionalidad.",
        },
        {
          title: "Gestión de Proyectos",
          description: "Coordinación y ejecución de proyectos ágiles con herramientas como Jira y GitHub.",
        },
        {
          title: "Integración de APIs",
          description: "Conexión y optimización de servicios mediante APIs para funcionalidades robustas y escalables.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Sección */
.services-section {
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  padding: 60px 20px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #ffffff;
  animation: typing 3s steps(30, end), blink-caret 0.5s step-end infinite;
  margin-bottom: 30px;
}

.section-title .highlight {
  color: #6c24a7;
}

.line {
  color: white;
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.service-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 15px 25px;
  border-radius: 10px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.service-item:hover {
  background: #6c24a7; /* Hover morado sólido */
  box-shadow: 0 8px 15px rgba(108, 36, 167, 0.5); /* Sombra elegante */
  color: white; /* Cambia el texto a blanco */
}

.service-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.service-number-title {
  display: flex;
  align-items: center;
  gap: 15px;
}

.service-number {
  font-size: 1.8rem;
  font-weight: bold;
  color: #6c24a7;
}

.service-title {
  font-size: 1.5rem;
  margin: 0;
}

.service-title .highlight {
  color: #6c24a7;
}

.service-title .white {
  color: #ffffff;
}

.service-description {
  font-size: 1rem;
  color: #6c24a7; /* Color morado por defecto */
  margin-left: 25px;
  transition: color 0.3s ease;
}

.service-item:hover .service-description {
  color: white; /* Cambia a blanco en hover */
}

.service-item:hover .service-number,
.service-item:hover .service-title .highlight {
  color: white; /* Asegura que todo el texto sea legible */
}
</style>