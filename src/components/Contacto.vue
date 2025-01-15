<template>
  <section id="contact" class="contact-section py-5">
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
          class="row justify-content-center align-items-stretch mt-4 contact-content"
      >
        <!-- Formulario de contacto -->
        <div class="col-lg-5 col-md-12 d-flex">
          <div class="card shadow-lg w-100">
            <div class="card-body">
              <h3 class="card-title text-center text-purple mb-4">¡Escríbeme!</h3>
              <p class="card-text text-center mb-4">
                Llena el formulario y te responderé lo antes posible.
              </p>
              <form>
                <!-- Campo de Nombre y Apellido -->
                <div class="mb-4">
                  <label for="name" class="form-label">Nombre *</label>
                  <div class="row">
                    <div class="col">
                      <input
                          type="text"
                          class="form-control"
                          id="first-name"
                          placeholder="Nombre"
                      />
                    </div>
                    <div class="col">
                      <input
                          type="text"
                          class="form-control"
                          id="last-name"
                          placeholder="Apellido"
                      />
                    </div>
                  </div>
                </div>
                <!-- Campo de Email -->
                <div class="mb-4">
                  <label for="email" class="form-label">Email *</label>
                  <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="correo@ejemplo.com"
                  />
                </div>
                <!-- Campo de Mensaje -->
                <div class="mb-4">
                  <label for="message" class="form-label">Mensaje *</label>
                  <textarea
                      class="form-control"
                      id="message"
                      rows="4"
                      placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                <!-- Botón de envío -->
                <button type="submit" class="btn btn-morado w-100">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>

        <!-- Información de contacto -->
        <div class="col-lg-5 col-md-12 d-flex">
          <div class="contact-card card shadow-lg w-100 bg-purple text-white contact-info-card">
            <div class="card-body">
              <h3 class="card-title text-center mb-4">Información de Contacto</h3>
              <!-- Card interno -->
              <div class="card shadow-sm text-center bg-white text-purple mx-auto">
                <img
                    src="@/assets/images/mi-foto2.jpeg"
                    alt="Magdalena Inalaf"
                    class="rounded-circle mx-auto d-block my-3"
                    style="width: 80px; height: 80px; object-fit: cover;"
                />
                <h4 class="card-title mb-3">Magdalena Inalaf G.</h4>
                <ul class="list-unstyled">
                  <li class="mb-2">
              <span class="me-2">
                <FontAwesomeIcon :icon="['fab', 'linkedin']" class="text-purple" />
              </span>
                    <a href="https://www.linkedin.com/in/minalaf/" target="_blank" class="text-purple text-decoration-none">
                      LinkedIn
                    </a>
                  </li>
                  <li class="mb-2">
              <span class="me-2">
                <FontAwesomeIcon :icon="['fab', 'github']" class="text-purple" />
              </span>
                    <a href="https://github.com/MagdaIG" target="_blank" class="text-purple text-decoration-none">
                      GitHub
                    </a>
                  </li>
                  <li>
              <span class="me-2">
                <FontAwesomeIcon :icon="['fas', 'envelope']" class="text-purple" />
              </span>
                    <a href="mailto:magda.inalaf@gmail.com" class="text-purple text-decoration-none">
                      magda.inalaf@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>    </div>
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
  padding: 60px 20px;
  border-radius: 20px;
  margin-top: 70px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1.3;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #ffffff;
  animation: typing 3s steps(30, end), blink-caret 0.5s step-end infinite;
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
  margin: 0 auto;
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
  margin-top: 10px;
}

.letter-text {
  color: #6c24a7;
  font-weight: bold;
  margin-top: 10px;
}

/* Contenedores */
.contact-card {
  background: white;
  border: 2px solid #6c24a7;
  border-radius: 10px;
  padding: 30px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.form-title {
  font-size: 1.8rem;
  color: #6c24a7;
  font-weight: bold;
}

.form-description {
  font-size: 1rem;
  color: #666;
}

.input-style {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.input-style:focus {
  border-color: #6c24a7;
  box-shadow: 0 0 8px rgba(108, 36, 167, 0.3);
  outline: none;
}

.btn-morado {
  background: #6c24a7;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-morado:hover {
  background: #9a65c9;
  transform: scale(1.05);
}

.contact-info-card {
  background: #6c24a7;
  color: white;
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
}

.contact-info-card .contact-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.contact-info-card:hover {
  background: #9a65c9;
}

.contact-card.inner-card {
  background: white;
  color: #6c24a7;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin-top: 15px;
  max-width: 300px;
  width: 100%;
}

.contact-card.inner-card:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.contact-photo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}

.contact-info {
  margin-top: 15px;
}

.contact-info li {
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.contact-info .icon {
  font-size: 1.2rem;
  margin-right: 5px;
  color: #6c24a7;
}
</style>