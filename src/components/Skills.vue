<template>
  <section id="skills" class="skills-section py-5">
    <div class="container">
      <h2 class="skills-title mb-4" data-aos="fade-down">
        <span class="line">Habilidades</span> Técnicas
      </h2>
      <p class="skills-description" data-aos="fade-up" data-aos-delay="200">
        Estas son algunas de las tecnologías y herramientas con las que trabajo, organizadas de manera visual e interactiva.
      </p>
      <div class="row justify-content-center">
        <div
            class="col-6 col-md-4 col-lg-3 skill-card"
            v-for="(skill, index) in skills"
            :key="index"
        >
          <div class="card-content">
            <div class="icon-container">
              <img :src="`/src/assets/icons/${skill.icon}`" :alt="skill.name" />
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
      ],
    };
  },
};
</script>

<style>
.skills-section {
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  padding: 50px 20px;
}

.skills-title {
  color: #ffffff;
  font-weight: bold;
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 20px;
  animation: typing 3s steps(30, end), blink-caret 0.75s step-end infinite;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #fff; /* Efecto de cursor */
}

.line {
  color: rgba(113, 64, 159, 0.99);
}

.skills-description {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 40px;
  text-align: center;
  opacity: 0;
  animation: fadeIn 2s 3s forwards;
}

.skill-card {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 15px;
  margin: 15px;
  padding: 25px;
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
  margin-bottom: 20px;
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
  margin-top: 10px;
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
</style>