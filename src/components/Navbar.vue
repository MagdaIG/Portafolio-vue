<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light navbar-gradient">
      <div class="container">
        <a class="navbar-brand" href="#">Magdalena Inalaf González</a>
        <button class="navbar-toggler" type="button" @click="toggleSidebar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-none d-lg-block">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link link-hover" href="#home">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-hover" href="#skills">Habilidades</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-hover" href="#proyectos">Proyectos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-hover" href="#servicios">Servicios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-hover" href="#experience-education">Experiencia</a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-hover" href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Sidebar -->
    <!-- Sidebar -->
    <div :class="['sidebar', { 'sidebar-open': isSidebarOpen }]" @click.self="toggleSidebar">
      <div class="sidebar-content">
        <button class="close-btn" @click="toggleSidebar">&times;</button>
        <ul class="sidebar-menu">
          <li class="sidebar-item">
            <a href="#home" class="sidebar-link link-hover" @click="toggleSidebar">Inicio</a>
          </li>
          <li class="sidebar-item">
            <a href="#skills" class="sidebar-link link-hover" @click="toggleSidebar">Habilidades</a>
          </li>
          <li class="sidebar-item">
            <a href="#proyectos" class="sidebar-link link-hover" @click="toggleSidebar">Proyectos</a>
          </li>
          <li class="sidebar-item">
            <a href="#servicios" class="sidebar-link link-hover" @click="toggleSidebar">Servicios</a>
          </li>
          <li class="sidebar-item">
            <a href="#experiencia" class="sidebar-link link-hover" @click="toggleSidebar">Experiencia</a>
          </li>
          <li class="sidebar-item">
            <a href="#contact" class="sidebar-link link-hover" @click="toggleSidebar">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style scoped>
.navbar-gradient {
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;
}

.navbar-brand {
  font-weight: bold;
  color: white;
}

.navbar-toggler-icon {
  filter: invert(100%);
}

/* Espaciado para el contenido */
body {
  padding-top: 100px;
}

.link-hover {
  color: white;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.link-hover::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background: rgba(219, 192, 246, 0.99);
  left: 50%;
  bottom: 0;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.link-hover:hover {
  color: rgba(113, 64, 159, 0.99);
}

.link-hover:hover::after {
  width: 100%;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background: linear-gradient(135deg, #d6bbfb, #a3d8f4);
  color: white;
  overflow-y: auto;
  transition: left 0.3s ease;
  z-index: 1050;
}

.sidebar-open {
  left: 0;
}

.sidebar-content {
  padding: 20px;
}

.close-btn {
  font-size: 1.5rem;
  color: white;
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}

.sidebar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-item {
  margin: 15px 0;
}

.sidebar-link {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.sidebar-link:hover {
  background-color: #6c24a7;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>