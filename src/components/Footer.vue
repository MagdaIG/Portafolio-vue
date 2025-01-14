<template>
  <footer class="footer bg-light text-center py-4">
    <div class="container">
      <p class="mb-0">© 2025 Magdalena Inalaf G. Todos los derechos reservados.</p>
      <p>
        Contacto:
        <a href="mailto:magda.inalaf@gmail.com" class="footer-link">magda.inalaf@gmail.com</a>
      </p>
      <p>
        Hecho con <span style="color: #d6bbfb;">♥</span> y Vue.js.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  border-top: 1px solid #ddd;
  font-size: 0.9rem;
  background-color: #f9f9f9;
}

.footer p {
  margin: 0;
  color: #666;
}

.footer a {
  color: #d6bbfb;
  text-decoration: none;
  font-weight: bold;
}

.footer a:hover {
  text-decoration: underline;
}

.footer span {
  font-size: 1.2rem;
}
</style>