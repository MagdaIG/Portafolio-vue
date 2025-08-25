<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar />

    <!-- Contenido principal -->
    <main class="content">
      <Home />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Home from "@/views/Home.vue";

export default {
  name: "App",
  components: {
    Home,
    Navbar,
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer,
  },
};
</script>

<style>
/* Estilo global para el contenedor principal */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Estilo para el contenido principal */
.content {
  flex: 1;
  padding: 0;
  background-color: #f9f9f9;
}

/* Media queries para responsividad */
@media (max-width: 768px) {
  .content {
    padding: 0;
  }
}

@media (max-width: 576px) {
  .content {
    padding: 0;
  }
}
</style>
