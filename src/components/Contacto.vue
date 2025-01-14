<template>
  <section id="contact" class="contact-section py-5">
    <div class="container">
      <!-- Título -->
      <h2 class="section-title typing text-center">
        <span class="line">
          Contá<span class="highlight">ctame</span>
        </span>
      </h2>
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
          class="row justify-content-center align-items-center mt-4 contact-content"
      >
        <!-- Formulario de contacto -->
        <div class="col-lg-5 col-md-12 d-flex justify-content-center">
          <div class="contact-card shadow">
            <form>
              <div class="mb-4">
                <label for="name" class="form-label">Nombre *</label>
                <div class="row">
                  <div class="col">
                    <input
                        type="text"
                        class="form-control input-style"
                        id="first-name"
                        placeholder="Nombre"
                    />
                  </div>
                  <div class="col">
                    <input
                        type="text"
                        class="form-control input-style"
                        id="last-name"
                        placeholder="Apellido"
                    />
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <label for="email" class="form-label">Email *</label>
                <input
                    type="email"
                    class="form-control input-style"
                    id="email"
                    placeholder="correo@ejemplo.com"
                />
              </div>
              <div class="mb-4">
                <label for="message" class="form-label">Mensaje *</label>
                <textarea
                    class="form-control input-style"
                    id="message"
                    rows="4"
                    placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <button type="submit" class="btn btn-morado btn-lg w-100">
                Enviar
              </button>
            </form>
          </div>
        </div>
        <!-- Información de contacto -->
        <div class="col-lg-5 col-md-12 d-flex justify-content-center">
          <div class="contact-card shadow contact-info-card">
            <div class="text-center">
              <img
                  src="@/assets/images/mi-foto2.jpeg"
                  alt="Magdalena Inalaf"
                  class="contact-photo mb-4"
              />
              <h3 class="contact-title">Magdalena Inalaf G.</h3>
              <ul class="contact-info list-unstyled">
                <li>
                  <span class="icon"> <FontAwesomeIcon :icon="['fab', 'linkedin']" /></span>
                  <a href="https://www.linkedin.com/in/minalaf/" target="_blank">LinkedIn</a>
                </li>
                <li>
                  <span class="icon"><FontAwesomeIcon :icon="['fab', 'github']" /></span>
                  <a href="https://github.com/MagdaIG" target="_blank">GitHub</a>
                </li>
                <li>
                  <span class="icon"><FontAwesomeIcon :icon="['fas', 'envelope']" /></span>
                  <a href="mailto:magda.inalaf@gmail.com">Magda.inalaf@gmail.com</a>
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
  padding: 60px 20px;
  border-radius: 20px;
  margin-top: 50px;
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
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.contact-info-card {
  background: #6c24a7;
  color: white;
}

.contact-info-card:hover {
  background: #9a65c9;
  color: white;
}

.contact-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.icon {
  font-size: 1.8rem;
  color: white;
  margin-right: 10px;
}

.btn-morado {
  background: #6c24a7;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
}

.btn-morado:hover {
  background: #9a65c9;
}
</style>