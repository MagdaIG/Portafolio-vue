<template>
  <section id="skills" class="skills-section">
    <div class="container">
      <h2 class="skills-title mb-4" data-aos="fade-down">
        <span class="line">Habilidades</span> Técnicas
      </h2>
      <p class="skills-description text-center" data-aos="fade-up" data-aos-delay="200">
        Descubre las <span class="highlight">herramientas</span> y
        <span class="highlight">tecnologías</span> con las que he trabajado, desde las que <span class="highlight">domino</span> hasta aquellas en las que he <span class="highlight">incursionado</span>.
        Algunas las he aprendido de forma <span class="highlight">autodidacta</span>, impulsada por mi <span class="highlight">curiosidad</span> y
        <span class="highlight">pasión por el desarrollo</span>; otras, por <span class="highlight">formación académica</span> o como parte de proyectos <span class="highlight">desafiantes</span>.
        Cada una de estas experiencias ha contribuido a enriquecer mis <span class="highlight">habilidades</span> y a crear proyectos
        <span class="highlight">funcionales</span> e <span class="highlight">innovadores</span>. Estoy comprometida con seguir <span class="highlight">perfeccionándome</span> y
        explorando <span class="highlight">nuevas tecnologías</span> para ampliar mi <span class="highlight">impacto</span> y <span class="highlight">crecimiento profesional</span>.
      </p>
      <div class="row justify-content-center">
        <div
            class="col-6 col-md-4 col-lg-3 skill-card"
            v-for="(skill, index) in skills"
            :key="index"
        >
          <div class="card-content">
            <div class="icon-container">
              <img :src="require(`@/assets/icons/${skill.icon}`)" :alt="skill.name" />
            </div>
            <h5 class="skill-name">{{ skill.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Skills",
  data() {
    return {
      skills: [
        { name: "HTML", icon: "html-icon.png" },
        { name: "CSS", icon: "css-icon.png" },
        { name: "JavaScript", icon: "javascript-icon.png" },
        { name: "Bootstrap", icon: "bootstrap-icon.png" },
        { name: "PHP", icon: "php-icon.png" },
        { name: "Laravel", icon: "laravel-icon.png" },
        { name: "Java", icon: "java-icon.png" },
        { name: "jQuery", icon: "jquery-icon.png" },
        { name: "PostgreSQL", icon: "postgresql-icon.png" },
        { name: "NestJS", icon: "nestjs-icon.png" },
        { name: "NextJS", icon: "nextjs-icon.png" },
        { name: "Spring Boot", icon: "springboot-icon.png" },
        { name: "Ionic", icon: "ionic-icon.png" },
        { name: "GitHub", icon: "github-icon.png" },
        { name: "VueJS", icon: "vuejs-icon.png" },
        { name: "Figma", icon: "figma-icon.png" },
      ],
    };
  },
};
</script>

<style>
.skills-section {
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  padding: 3rem 2rem;
  margin: 0 1rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.skills-title {
  color: #ffffff;
  font-weight: bold;
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 1.5rem;
  animation: typing 3s steps(30, end), blink-caret 0.75s step-end infinite;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #fff; /* Efecto de cursor */
}

.line {
  color: rgba(113, 64, 159, 0.99);
}

.skills-description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #4d4d4d;
  font-weight: 400;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem auto;
}

.skills-description .highlight {
  color: #6c24a7;
  font-weight: bold;
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  padding: 2px 5px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: inline-block;
}

.skills-description .highlight:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.skill-card {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  margin: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
}

.skill-card:hover {
  transform: translateY(-10px);
  background: linear-gradient(135deg, #a058cc, #6c24a7);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

.icon-container img {
  max-width: 90px;
  margin-bottom: 1rem;
  filter: grayscale(100%);
  transition: filter 0.3s ease, transform 0.3s ease;
}

.skill-card:hover .icon-container img {
  filter: grayscale(0%);
  transform: scale(1.2);
}

.skill-name {
  font-size: 1.4rem;
  color: #ffffff;
  font-weight: bold;
  margin-top: 0.5rem;
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
    border-color: #fff;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Media queries para responsividad */
@media (max-width: 768px) {
  .skills-section {
    padding: 2.5rem 1.5rem;
    margin: 0 0.5rem;
  }

  .skills-title {
    font-size: 2.2rem;
    margin-bottom: 1rem;
  }

  .skills-description {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }

  .skill-card {
    margin: 0.5rem;
    padding: 1rem;
  }

  .icon-container img {
    max-width: 70px;
  }

  .skill-name {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .skills-section {
    padding: 2rem 1rem;
    margin: 0 0.25rem;
  }

  .skills-title {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
  }

  .skills-description {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .skill-card {
    margin: 0.25rem;
    padding: 0.75rem;
  }

  .icon-container img {
    max-width: 60px;
  }

  .skill-name {
    font-size: 1rem;
  }
}
</style>
