<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-container">
        <!-- Logo y derechos -->
        <div class="footer-brand">
          <div class="brand-logo">
            <div class="brand-icon">
              <i class="fas fa-code"></i>
            </div>
            <span class="brand-name">Magdalena Inalaf G.</span>
          </div>
          <div class="copyright">
            <small>© 2025 Todos los derechos reservados</small>
          </div>
        </div>

        <!-- Enlaces -->
        <div class="footer-links">
          <a href="https://inalaf.ca" target="_blank" class="footer-link" aria-label="Sitio web">
            <div class="icon-container">
              <i class="fas fa-globe"></i>
            </div>
            <span class="link-text">Web</span>
          </a>
          <a href="https://github.com/MagdaIG" target="_blank" class="footer-link" aria-label="GitHub">
            <div class="icon-container">
              <i class="fab fa-github"></i>
            </div>
            <span class="link-text">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/minalaf/" target="_blank" class="footer-link" aria-label="LinkedIn">
            <div class="icon-container">
              <i class="fab fa-linkedin-in"></i>
            </div>
            <span class="link-text">LinkedIn</span>
          </a>
          <a href="mailto:magda.inalaf@gmail.com" class="footer-link" aria-label="Email">
            <div class="icon-container">
              <i class="fas fa-envelope"></i>
            </div>
            <span class="link-text">Email</span>
          </a>
        </div>

        <!-- Créditos -->
        <div class="footer-credits">
          <div class="credits-content">
            <span class="credits-text">Desarrollado con <i class="fas fa-heart"></i> por</span>
            <span class="developer-name">Magdalena Inalaf G.</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.site-footer {
  background: linear-gradient(135deg, #2c3e50, #34495e);
  color: white;
  padding: 2rem 0;
  margin-top: 3rem;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
}

.footer-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;
}

/* Logo y marca */
.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.brand-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.brand-name {
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}

.copyright {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

/* Enlaces */
.footer-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
}

.footer-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  color: white;
  text-decoration: none;
}

.icon-container {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.footer-link:hover .icon-container {
  transform: scale(1.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.link-text {
  font-weight: 500;
  font-size: 0.9rem;
}

/* Créditos */
.footer-credits {
  text-align: center;
}

.credits-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.credits-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.credits-text .fa-heart {
  color: #e74c3c;
  animation: heartbeat 1.5s ease-in-out infinite;
}

.developer-name {
  font-weight: 600;
  color: white;
  font-size: 1rem;
}

/* Animación del corazón */
@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}

/* Media queries para responsividad */
@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }

  .footer-brand {
    align-items: flex-start;
  }

  .footer-credits {
    text-align: right;
  }

  .footer-links {
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .site-footer {
    padding: 1.5rem 0;
    margin-top: 2rem;
  }

  .footer-container {
    gap: 1.5rem;
  }

  .footer-links {
    gap: 0.75rem;
  }

  .footer-link {
    padding: 0.4rem;
  }

  .icon-container {
    width: 28px;
    height: 28px;
    font-size: 0.8rem;
  }

  .link-text {
    font-size: 0.8rem;
  }

  .brand-name {
    font-size: 1.1rem;
  }

  .brand-icon {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
}
</style>
