<template>
  <section id="experience-education" class="experience-education-section">
    <div class="container">
      <h2 class="intro-title text-center">
        ¿Cuál es <span class="highlight-morado">mi</span> <span class="highlight-blanco">experiencia?</span>
      </h2>
      <p class="experience-description text-center">
        Mi trayectoria refleja mi pasión por <span class="highlight">aprender, enseñar y crear</span>. Comencé en la <span class="highlight">pedagogía</span>, donde descubrí mi amor por guiar a otros y compartir conocimientos. Estas habilidades ahora potencian mi <span class="highlight">trabajo en equipo</span> y mi capacidad para construir soluciones colaborativas.

        Más adelante, decidí regresar a mis raíces en la <span class="highlight">tecnología</span>, combinando mi formación en programación y análisis de sistemas con las herramientas pedagógicas que adquirí. En el futuro, espero <span class="highlight">fusionar ambos mundos</span>, contribuyendo al desarrollo de equipos y proyectos con un enfoque humano, innovador y estratégico.

        Para mí, enseñar no es solo una pasión; es una forma de <span class="highlight">amplificar el impacto de mi trabajo</span> y generar un cambio significativo.
      </p>
      <!-- Títulos principales -->
      <div class="experience-education-row">
        <!-- Experiencia -->
        <div class="experience-column">
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
        <div class="education-column">
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
      <div class="certificates-section">
        <h3 class="section-title typing text-center">
          <span class="line">
            Mis <span class="highlight">Certificados</span>
          </span>
        </h3>
        <p class="certificates-text text-center">
          Explora aquí los <span class="highlight">certificados</span> que avalan mis <span class="highlight">conocimientos</span> y <span class="highlight">habilidades</span> en <span class="highlight">tecnología</span>, <span class="highlight">diseño</span> y <span class="highlight">metodologías ágiles</span>. Cada uno refleja mi <span class="highlight">compromiso</span> con el <span class="highlight">aprendizaje continuo</span>, porque creo firmemente que el <span class="highlight">estudio</span> y el <span class="highlight">desarrollo personal</span> nunca terminan. Siempre estoy en busca de <span class="highlight">nuevos desafíos</span>, y mis próximos objetivos incluyen <span class="highlight">certificaciones</span> en <span class="highlight">enseñanza</span> y <span class="highlight">comunicación</span>, áreas que me <span class="highlight">apasionan</span> y complementan mi <span class="highlight">perfil profesional</span>.
        </p>
        <div class="row justify-content-center">
          <div
              class="col-md-4 col-sm-6 mb-3"
              v-for="(certificate, index) in certificates"
              :key="'certificate-' + index"
          >
            <div class="certificate-card text-center">
              <h5 class="certificate-title">{{ certificate.name }}</h5>
              <a
                  :href="`certificates/${certificate.file}`"
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
.intro-title {
  font-size: 2.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #ffffff;
}

.highlight-morado {
  color: #6c24a7; /* Morado principal */
  font-weight: bold;
  background: none;
}

/* Estilo para la parte blanca */
.highlight-blanco {
  color: #ffffff;
  font-weight: bold;
  background: none;
}

.intro-text {
  font-size: 2.8rem;
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
}

/* Sección */
.experience-education-section {
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  margin: 0 1rem;
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
  margin-bottom: 2rem;
  text-align: center;
  margin-top: 2rem;
}

.section-title .highlight {
  color: #6c24a7;
}

.line {
  color: rgb(255, 255, 255);
}

/* Layout de columnas */
.experience-education-row {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

.experience-column,
.education-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Separador visual entre columnas */
.experience-column::after {
  content: '';
  position: absolute;
  right: -1.5rem;
  top: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
  border-radius: 1px;
}

.services-description {
  font-size: 1.2rem;
  text-align: center;
  margin: 1.5rem 0 2rem;
  line-height: 1.6;
}

.experience-description {
  font-size: 1.2rem;
  text-align: center;
  margin: 0 0 2rem 0;
  line-height: 1.6;
  color: #4d4d4d;
}

.experience-description .highlight {
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  color: #6c24a7;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0 4px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.experience-description .highlight:hover {
  background: linear-gradient(135deg, #a3d8f4, #d6bbfb);
  color: #ffffff;
  transform: scale(1.1);
}

/* Tarjetas */
.timeline-item,
.certificate-card {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  position: relative;
  overflow: hidden;
}

.timeline-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  border-radius: 2px;
}

.timeline-item:hover,
.certificate-card:hover {
  transform: translateY(-8px);
  background: rgba(113, 64, 159, 0.95);
  color: white;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
}

.certificate-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.timeline-year {
  font-size: 1.1rem;
  color: #6c24a7;
  font-weight: bold;
  margin-bottom: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
  align-self: flex-start;
}

.timeline-title {
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 0.5rem;
  line-height: 1.3;
  flex-grow: 1;
}

.timeline-location {
  font-size: 1rem;
  color: #6c24a7;
  font-weight: 500;
  margin-bottom: 1rem;
  font-style: italic;
}

.timeline-details {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
  overflow-y: auto;
}

.timeline-details li {
  color: #4d4d4d;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.timeline-details li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #6c24a7;
  font-weight: bold;
  font-size: 1.1rem;
}

.timeline-item:hover .timeline-year {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.timeline-item:hover .timeline-title {
  color: white;
}

.timeline-item:hover .timeline-location {
  color: rgba(255, 255, 255, 0.9);
}

.timeline-item:hover .timeline-details li {
  color: rgba(255, 255, 255, 0.9);
}

.timeline-item:hover .timeline-details li::before {
  color: white;
}

.certificate-title {
  font-size: 1.3rem;
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Certificados */
.certificates-section {
  margin-top: 3rem;
}

.certificates-text {
  font-size: 1.2rem;
  text-align: center;
  margin: 0 0 2rem 0;
  line-height: 1.6;
  color: #4d4d4d;
}

.certificates-text .highlight {
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  color: #6c24a7;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0 4px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.certificates-text .highlight:hover {
  background: linear-gradient(135deg, #a3d8f4, #d6bbfb);
  color: #ffffff;
  transform: scale(1.1);
}

.section-title .highlight {
  color: #6c24a7;
}

.certificate-card .btn-morado {
  margin-top: auto;
}

/* Botones */
.btn-morado {
  background: #6c24a7;
  color: #ffffff;
  border: none;
  font-size: 1.2rem;
  padding: 0.75rem 1.5rem;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-morado:hover {
  background: rgba(219, 192, 246, 0.99);
  color: rgba(113, 64, 159, 0.99);
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

/* Media queries para responsividad */
@media (min-width: 1200px) {
  .experience-education-section {
    padding: 4rem 3rem;
    margin: 0 2rem;
  }

  .intro-title {
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
    margin-top: 3rem;
  }

  .experience-description,
  .certificates-text {
    font-size: 1.3rem;
    margin-bottom: 3rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .experience-education-row {
    gap: 4rem;
  }

  .experience-column,
  .education-column {
    gap: 2rem;
  }

  .timeline-item,
  .certificate-card {
    padding: 2.5rem;
    margin-bottom: 2rem;
    height: 320px;
  }

  .timeline-title {
    font-size: 1.6rem;
    margin-bottom: 0.75rem;
  }

  .timeline-year {
    font-size: 1.2rem;
    padding: 0.6rem 1.2rem;
    margin-bottom: 1rem;
  }

  .timeline-location {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .timeline-details li {
    font-size: 1rem;
    margin-bottom: 0.75rem;
    padding-left: 2rem;
  }

  .certificates-section {
    margin-top: 4rem;
  }

  .certificate-title {
    font-size: 1.5rem;
  }

  .btn-morado {
    font-size: 1.3rem;
    padding: 1rem 2rem;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .experience-education-section {
    padding: 3rem 2rem;
    margin: 0 1rem;
  }

  .intro-title {
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
  }

  .section-title {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .experience-description,
  .certificates-text {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
  }

  .experience-education-row {
    gap: 2.5rem;
  }

  .experience-column,
  .education-column {
    gap: 1.5rem;
  }

  .timeline-item,
  .certificate-card {
    padding: 2rem;
    margin-bottom: 1.5rem;
    height: 300px;
  }

  .timeline-title {
    font-size: 1.5rem;
  }

  .timeline-year {
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
  }

  .timeline-details li {
    font-size: 0.95rem;
  }

  .certificates-section {
    margin-top: 3rem;
  }
}

@media (max-width: 767px) {
  .experience-education-section {
    padding: 2.5rem 1.5rem;
    margin: 0 0.5rem;
  }

  .intro-title {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
  }

  .experience-description,
  .certificates-text {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .experience-education-row {
    flex-direction: column;
    gap: 2rem;
  }

  .experience-column,
  .education-column {
    gap: 1rem;
  }

  .experience-column::after {
    display: none;
  }

  .timeline-item,
  .certificate-card {
    padding: 1.5rem;
    margin-bottom: 1rem;
    height: 280px;
  }

  .timeline-title {
    font-size: 1.3rem;
  }

  .timeline-year {
    font-size: 1rem;
    padding: 0.4rem 0.8rem;
  }

  .timeline-details li {
    font-size: 0.9rem;
  }

  .certificates-section {
    margin-top: 2rem;
  }
}

@media (max-width: 576px) {
  .experience-education-section {
    padding: 2rem 1rem;
    margin: 0 0.25rem;
  }

  .intro-title {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
  }

  .section-title {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .experience-description,
  .certificates-text {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .experience-education-row {
    gap: 1.5rem;
  }

  .experience-column,
  .education-column {
    gap: 0.75rem;
  }

  .timeline-item,
  .certificate-card {
    padding: 1.25rem;
    margin-bottom: 0.75rem;
    height: 260px;
  }

  .timeline-title {
    font-size: 1.2rem;
  }

  .timeline-year {
    font-size: 0.9rem;
    padding: 0.3rem 0.6rem;
  }

  .timeline-location {
    font-size: 0.9rem;
  }

  .timeline-details li {
    font-size: 0.85rem;
    padding-left: 1.25rem;
  }

  .certificates-section {
    margin-top: 1.5rem;
  }

  .btn-morado {
    font-size: 1rem;
    padding: 0.5rem 1rem;
  }
}
</style>
