<template>
  <section id="servicios" class="services-section">
    <div class="container">
      <!-- Título de Servicios -->
      <h2 class="section-title typing text-center">
        <span class="line">
          Mis <span class="highlight">Servicios</span>
        </span>
      </h2>

      <p class="services-description text-center">
        Descubre cómo puedo ayudarte con mis <span class="highlight">servicios profesionales</span>, diseñados para <span class="highlight">potenciar</span> tus proyectos con soluciones <span class="highlight">innovadoras</span> y escalables.
      </p>

      <div class="services-list">
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
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  margin: 0 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #ffffff;
  animation: typing 3s steps(30, end), blink-caret 0.5s step-end infinite;
  margin-bottom: 1.5rem;
}

.section-title .highlight {
  color: #6c24a7;
}

.line {
  color: white;
}

.services-description {
  font-size: 1.2rem;
  text-align: center;
  margin: 0 0 2rem 0;
  line-height: 1.6;
  color: #4d4d4d;
}

.services-description .highlight {
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  color: #6c24a7;
  font-weight: bold;
  padding: 0 4px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.services-description .highlight:hover {
  background: linear-gradient(135deg, #a3d8f4, #d6bbfb);
  color: #ffffff;
  transform: scale(1.1);
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.service-item:hover {
  background: #6c24a7;
  box-shadow: 0 8px 15px rgba(108, 36, 167, 0.5);
  color: white;
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
  gap: 1rem;
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
  color: #6c24a7;
  margin-left: 1.5rem;
  transition: color 0.3s ease;
}

.service-item:hover .service-description {
  color: white;
}

.service-item:hover .service-number,
.service-item:hover .service-title .highlight {
  color: white;
}

/* Media queries para responsividad */
@media (max-width: 768px) {
  .services-section {
    padding: 2.5rem 1.5rem;
    margin: 0 0.5rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .services-description {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .service-item {
    padding: 0.75rem 1rem;
  }

  .service-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .service-description {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}

@media (max-width: 576px) {
  .services-section {
    padding: 2rem 1rem;
    margin: 0 0.25rem;
  }

  .section-title {
    font-size: 1.6rem;
    margin-bottom: 0.75rem;
  }

  .services-description {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .service-item {
    padding: 0.75rem;
  }

  .service-number {
    font-size: 1.5rem;
  }

  .service-title {
    font-size: 1.2rem;
  }

  .service-description {
    font-size: 0.9rem;
  }
}
</style>
