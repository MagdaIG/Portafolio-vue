<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <!-- Título y subtítulo -->
      <h2 class="section-title typing text-center mb-3">
        <span class="line">
          Contá<span class="highlight">ctame</span>
        </span>
      </h2>
      <p class="section-subtitle text-center mb-5">
        Si necesitas <span class="highlight">ayuda con tu proyecto</span>, estás buscando
        <span class="highlight">servicios de desarrollo web</span> o simplemente tienes
        alguna consulta, <span class="highlight">¡hablemos!</span>
      </p>
      <!-- Carta animada -->
      <div v-if="!isOpen" class="envelope-container text-center my-5">
        <div class="envelope" @click="toggleEnvelope">
          <div class="envelope-flap"></div>
          <div class="envelope-body">
            <div class="heart-icon">
              <FontAwesomeIcon :icon="['fas', 'heart']" />
            </div>
            <p class="letter-text">¡Haz clic para contactarme!</p>
          </div>
        </div>
      </div>
      <!-- Contenido del contacto -->
      <div
          v-if="isOpen"
          class="contact-content"
      >
        <!-- Formulario de contacto -->
        <div class="contact-form-container">
          <div class="contact-form-card">
            <h3 class="form-title">¡Escríbeme!</h3>
            <p class="form-description">
              Llena el formulario y te responderé lo antes posible.
            </p>
            <form class="contact-form">
              <!-- Campo de Nombre y Apellido -->
              <div class="form-group">
                <label for="name" class="form-label">Nombre *</label>
                <div class="name-fields">
                  <input
                      type="text"
                      class="form-control"
                      id="first-name"
                      placeholder="Nombre"
                  />
                  <input
                      type="text"
                      class="form-control"
                      id="last-name"
                      placeholder="Apellido"
                  />
                </div>
              </div>
              <!-- Campo de Email -->
              <div class="form-group">
                <label for="email" class="form-label">Email *</label>
                <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="correo@ejemplo.com"
                />
              </div>
              <!-- Campo de Mensaje -->
              <div class="form-group">
                <label for="message" class="form-label">Mensaje *</label>
                <textarea
                    class="form-control"
                    id="message"
                    rows="4"
                    placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <!-- Botón de envío -->
              <button type="submit" class="btn btn-morado">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <!-- Información de contacto -->
        <div class="contact-info-container">
          <div class="contact-info-card">
            <h3 class="contact-title">Información de Contacto</h3>
            <!-- Card interno -->
            <div class="contact-profile-card">
              <img
                  src="@/assets/images/mi-foto2.jpeg"
                  alt="Magdalena Inalaf"
                  class="contact-photo"
              />
              <h4 class="contact-name">Magdalena Inalaf G.</h4>
              <ul class="contact-links">
                <li class="contact-link-item">
                  <a href="https://www.linkedin.com/in/minalaf/" target="_blank" class="contact-link">
                    <i class="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                  </a>
                </li>
                <li class="contact-link-item">
                  <a href="https://github.com/MagdaIG" target="_blank" class="contact-link">
                    <i class="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>
                </li>
                <li class="contact-link-item">
                  <a href="mailto:magda.inalaf@gmail.com" class="contact-link">
                    <i class="fas fa-envelope"></i>
                    <span>magda.inalaf@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Contacto",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleEnvelope() {
      this.isOpen = true;
    },
  },
  components: {
    FontAwesomeIcon,
  }
};
</script>

<style scoped>
.contact-section {
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  padding: 3rem 2rem;
  border-radius: 20px;
  margin: 0 1rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
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

.section-subtitle {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #4d4d4d;
  font-weight: 400;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem auto;
}

.section-subtitle .highlight {
  color: #6c24a7;
  font-weight: bold;
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  padding: 0 5px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.section-subtitle .highlight:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.line {
  color: white;
}

/* Carta animada */
.envelope-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.envelope {
  width: 150px;
  height: 100px;
  position: relative;
  cursor: pointer;
}

.envelope-flap {
  width: 100%;
  height: 50%;
  background: #6c24a7;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px 10px 0 0;
  transform-origin: bottom;
  transition: transform 0.3s ease;
}

.envelope:hover .envelope-flap {
  transform: rotateX(-180deg);
}

.envelope-body {
  background: white;
  border-radius: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
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

.heart-icon {
  color: #6c24a7;
  font-size: 2rem;
  margin-top: 0.5rem;
}

.letter-text {
  color: #6c24a7;
  font-weight: bold;
  margin-top: 0.5rem;
}

/* Contenedores principales */
.contact-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.contact-form-container,
.contact-info-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.contact-form-card {
  background: white;
  border-radius: 15px;
  padding: 2.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 500px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-form-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
}

.contact-info-card {
  background: linear-gradient(135deg, #6c24a7, #9a65c9);
  color: white;
  border-radius: 15px;
  padding: 2.5rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 500px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.2);
}

/* Títulos */
.form-title,
.contact-title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: #6c24a7;
}

.contact-title {
  color: white;
}

.form-description {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
  font-size: 1rem;
}

/* Formulario */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex-grow: 1;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
}

.name-fields {
  display: flex;
  gap: 1rem;
}

.form-control {
  padding: 0.75rem;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  background: #f8f9fa;
}

.form-control:focus {
  outline: none;
  border-color: #6c24a7;
  box-shadow: 0 0 0 3px rgba(108, 36, 167, 0.1);
  background: white;
}

textarea.form-control {
  resize: vertical;
  min-height: 120px;
  flex-grow: 1;
}

/* Botón */
.btn-morado {
  background: #6c24a7;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: auto;
}

.btn-morado:hover {
  background: #5a1f8a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(108, 36, 167, 0.3);
}

/* Tarjeta de perfil */
.contact-profile-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-top: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 4px solid #6c24a7;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.contact-name {
  font-size: 1.4rem;
  font-weight: bold;
  color: #6c24a7;
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
}

/* Enlaces de contacto */
.contact-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-grow: 1;
  justify-content: center;
}

.contact-link-item {
  display: flex;
  justify-content: center;
}

.contact-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #6c24a7;
  text-decoration: none;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 250px;
  justify-content: center;
}

.contact-link:hover {
  background: linear-gradient(135deg, #6c24a7, #9a65c9);
  color: white;
  transform: translateY(-3px);
  text-decoration: none;
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 6px 20px rgba(108, 36, 167, 0.4);
}

.contact-link i {
  font-size: 1.3rem;
  width: 24px;
  text-align: center;
}

.contact-link span {
  font-weight: 600;
}

/* Media queries para responsividad */
@media (min-width: 1200px) {
  .contact-content {
    flex-direction: row;
    gap: 3rem;
    align-items: stretch;
  }

  .contact-form-card,
  .contact-info-card {
    max-width: 550px;
    padding: 3rem;
    min-height: 650px;
  }

  .form-title,
  .contact-title {
    font-size: 2rem;
  }

  .contact-photo {
    width: 120px;
    height: 120px;
  }

  .contact-name {
    font-size: 1.6rem;
  }

  .contact-link {
    padding: 1.2rem 1.8rem;
    font-size: 1.1rem;
    max-width: 280px;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .contact-content {
    flex-direction: row;
    gap: 2rem;
    align-items: stretch;
  }

  .contact-form-card,
  .contact-info-card {
    max-width: 480px;
    padding: 2.5rem;
    min-height: 600px;
  }

  .form-title,
  .contact-title {
    font-size: 1.8rem;
  }

  .contact-photo {
    width: 100px;
    height: 100px;
  }

  .contact-link {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    max-width: 250px;
  }
}

@media (max-width: 767px) {
  .contact-content {
    flex-direction: column;
    gap: 2rem;
  }

  .contact-form-card,
  .contact-info-card {
    max-width: 100%;
    padding: 2rem;
    min-height: auto;
  }

  .form-title,
  .contact-title {
    font-size: 1.6rem;
  }

  .name-fields {
    flex-direction: column;
    gap: 0.75rem;
  }

  .contact-photo {
    width: 90px;
    height: 90px;
  }

  .contact-name {
    font-size: 1.3rem;
  }

  .contact-links {
    gap: 0.75rem;
  }

  .contact-link {
    padding: 0.8rem 1.2rem;
    font-size: 0.95rem;
    max-width: 220px;
  }
}

@media (max-width: 576px) {
  .contact-section {
    padding: 2rem 1rem;
    margin: 0 0.25rem;
  }

  .contact-content {
    gap: 1.5rem;
  }

  .contact-form-card,
  .contact-info-card {
    padding: 1.5rem;
  }

  .form-title,
  .contact-title {
    font-size: 1.4rem;
  }

  .form-description {
    font-size: 0.9rem;
  }

  .contact-form {
    gap: 1.25rem;
  }

  .form-control {
    padding: 0.6rem;
    font-size: 0.9rem;
  }

  .btn-morado {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  .contact-photo {
    width: 80px;
    height: 80px;
  }

  .contact-name {
    font-size: 1.2rem;
  }

  .contact-link {
    padding: 0.7rem 1rem;
    font-size: 0.9rem;
    max-width: 200px;
  }

  .contact-link i {
    font-size: 1.1rem;
  }
}
</style>
