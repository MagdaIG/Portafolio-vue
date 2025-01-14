<template>
  <section id="experience-education" class="experience-education-section py-5 mt-5">
    <div class="container">
      <!-- Títulos principales -->
      <div class="row">
        <!-- Experiencia -->
        <div class="col-md-6 mb-4">
          <h2 class="section-title typing">
            <span class="line">
              Mi <span class="highlight">Experiencia</span>
            </span>
          </h2>
          <div class="timeline">
            <div class="timeline-item" v-for="(experience, index) in experience" :key="'experience-' + index">
              <h5 class="timeline-year">{{ experience.year }}</h5>
              <h4 class="timeline-title">{{ experience.title }}</h4>
              <p class="timeline-location">{{ experience.location }}</p>
            </div>
            <!-- Experiencia laboral adicional -->
            <div class="timeline-item">
              <h5 class="timeline-year">2020 - 2023</h5>
              <h4 class="timeline-title">Administrador IVI SpA</h4>
              <p class="timeline-location">Santiago, Chile</p>
              <ul class="timeline-details">
                <li>Atención al cliente, asegurando altos niveles de satisfacción.</li>
                <li>Gestión de pedidos y operaciones comerciales.</li>
                <li>Colaboración con entidades gubernamentales en adquisiciones.</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Educación -->
        <div class="col-md-6 mb-4">
          <h2 class="section-title typing">
            <span class="line">
              Mi <span class="highlight">Educación</span>
            </span>
          </h2>
          <div class="timeline">
            <div class="timeline-item" v-for="(education, index) in education" :key="'education-' + index">
              <h5 class="timeline-year">{{ education.year }}</h5>
              <h4 class="timeline-title">{{ education.title }}</h4>
              <p class="timeline-location">{{ education.location }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Certificados -->
      <div class="certificates-section mt-5">
        <h3 class="section-title typing text-center">
          <span class="line">
            Mis <span class="highlight">Certificados</span>
          </span>
        </h3>
        <div class="row justify-content-center mt-4">
          <div
              class="col-md-4 col-sm-6 mb-3"
              v-for="(certificate, index) in certificates"
              :key="'certificate-' + index"
          >
            <div class="certificate-card text-center">
              <h5 class="certificate-title">{{ certificate.name }}</h5>
              <a
                  :href="`/certificates/${certificate.file}`"
                  download
                  class="btn btn-morado btn-lg mt-3"
              >
                Descargar
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
  name: "ExperienceAndEducation",
  data() {
    return {
      experience: [
        {
          year: "2023 - Presente",
          title: "Técnico en Programación y Análisis de Sistemas (Egresada)",
          location: "Instituto Profesional CIISA - Santiago, Chile",
        },
      ],
      education: [
        {
          year: "2017 - 2019",
          title: "Pedagogía y Literatura en Castellano (Pregrado incompleto)",
          location: "Universidad Ciencias de la Educación (UMCE) - Santiago, Chile",
        },
        {
          year: "2013 - 2015",
          title: "Ingeniería Civil en Computación e Informática (Pregrado incompleto)",
          location: "Universidad Tecnológica Metropolitana (UTEM) - Santiago, Chile",
        },
      ],
      certificates: [
        {
          name: "Metodología Ágil",
          file: "Diplomado-Certificado-UPLA.pdf",
        },
        {
          name: "Diseño UX/UI",
          file: "Diplomado-Certificad0-AIEP2.pdf",
        },
        {
          name: "Diseño y Programación WEB",
          file: "Diplomado-Certificado-AIEP.pdf",
        },
        {
          name: "Programación Orientada a Objetos",
          file: "18628214-0-INALAF-GONZALEZ-001.pdf",
        },
        {
          name: "Base de Datos",
          file: "18628214-0-INALAF-GONZALEZ-002.pdf",
        },
        {
          name: "Metodologías de Desarrollo de Software",
          file: "18628214-0-NALAF-GONZALEZ-003.pdf",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Sección */
.experience-education-section {
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  padding: 60px 20px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* Títulos */
.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #ffffff;
  animation: typing 3s steps(30, end), blink-caret 0.5s step-end infinite;
  margin-bottom: 30px;
  text-align: center; /* Centra el título */
}

.section-title .highlight {
  color: #6c24a7;
}

.line {
  color: white;
}

/* Tarjetas */
.timeline-item,
.certificate-card {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;
  height: 200px; /* Tamaño consistente */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}

.timeline-item:hover,
.certificate-card:hover {
  transform: translateY(-10px);
  background: rgba(113, 64, 159, 0.99);
  color: white;
}

.certificate-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.timeline-year,
.certificate-title {
  font-size: 1.5rem;
  color: #ffffff;
  text-align: center;
}

.certificate-card .btn-morado {
  margin-top: auto; /* Asegura que el botón esté al final */
}

/* Botones */
.btn-morado {
  background: #6c24a7;
  color: #ffffff;
  border: none;
  font-size: 1.2rem;
  padding: 15px 25px; /* Botón más grande */
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-morado:hover {
  background: rgba(219, 192, 246, 0.99);
  color: rgba(113, 64, 159, 0.99);
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

/* Ajustes generales */
.mt-5 {
  margin-top: 5rem !important;
}
</style>