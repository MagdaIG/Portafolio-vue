<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar />

    <!-- Contenido principal -->
    <main class="content">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
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
  padding: 20px;
  background-color: #f9f9f9;
}
</style>