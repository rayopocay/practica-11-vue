<template>
  <AppMenu />
  <nav class="shadow-1">
    
    <router-link to="/">Home</router-link>
    <router-link to="/servicios">Servicio</router-link>
    <router-link to="/programas">programas</router-link>

    <div class="dropdown">
      
      <button @click="toggleMenu('institucion')" class="dropdown-toggle">
        Institución ▾
      </button>
      
      <ul v-show="menuAbierto === 'institucion'" class="dropdown-menu">
        <li>
          <router-link to="/educacion">Educación Superior</router-link>
        </li>
      </ul>
    </div>

    <div class="dropdown">
      
      <button @click="toggleMenu('contactenos')" class="dropdown-toggle">
        Contactenos ▾
      </button>
      
      <ul v-show="menuAbierto === 'contactenos'" class="dropdown-menu">
        <li>
          <router-link to="/directorio">Directorio</router-link>
        </li>
        <li>
          <router-link to="/horarios">Horarios de atención</router-link>
        </li>
      </ul>
    </div>

    <div class="dropdown">
      
      <button @click="toggleMenu('organismo')" class="dropdown-toggle">
        Organismo Internacionales ▾
      </button>
      
      <ul v-show="menuAbierto === 'organismo'" class="dropdown-menu">
        <li>
          <router-link to="/organismo">Banco Mundial</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view/>
  <AppFooter />
</template>

<script>
import AppFooter from './components/AppFooter.vue'
import AppMenu from './components/AppMenu.vue'
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  components: {
    AppFooter,
    AppMenu,
  },

  // --- ARREGLO AQUÍ ---
  // 1. Añade la función setup()
  setup() {
    
    const menuAbierto = ref(null)

    function toggleMenu(nombreMenu) {
      if (menuAbierto.value === nombreMenu) {
        menuAbierto.value = null
      } else {
        menuAbierto.value = nombreMenu
      }
    }

    // --- LÓGICA NUEVA PARA CERRAR AL HACER CLIC FUERA ---

    // 2. Esta función se ejecutará en CADA clic en la página
    function handleClickOutside(event) {
      // event.target es el elemento exacto donde se hizo clic
      // .closest('.dropdown') busca hacia arriba si el clic
      // fue DENTRO de un elemento con la clase 'dropdown'
      
      if (!event.target.closest('.dropdown')) {
        // Si no encuentra un '.dropdown' (devuelve null),
        // significa que el clic fue FUERA.
        menuAbierto.value = null // Cierra cualquier menú que esté abierto
      }
    }

    // 3. Hook onMounted: Se ejecuta cuando el componente está listo
    onMounted(() => {
      // Agregamos el listener a la ventana
      window.addEventListener('click', handleClickOutside);
    });

    // 4. Hook onUnmounted: Se ejecuta cuando el componente se destruye
    onUnmounted(() => {
      // Quitamos el listener para evitar problemas de memoria
      window.removeEventListener('click', handleClickOutside);
    });

    // --- FIN DE LA LÓGICA NUEVA ---

    // Retornamos todo lo que el template necesita
    return {
      menuAbierto,
      toggleMenu
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  overflow-x: hidden;
}
body {
  background-color: #303845;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}

/* --- TUS ESTILOS (CON MODIFICACIONES) --- */

nav {
  background-color: #3c4557;
  display: flex;
  align-items: center; 
  padding: 0 15px;
  justify-content: center;
}

.shadow-1 {
  box-shadow: 0px 20px 20px #00000057;
  opacity: 1;
}

nav a,
.dropdown-toggle {
  color: #fff;
  padding-top: 1.1rem;
  padding-right: 1.5rem;
  padding-bottom: 0.8rem;
  padding-left: 0.9rem;
  letter-spacing: 2px;
  text-decoration: none;
}

.dropdown-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit; /* Hereda la fuente del nav */
  font-size: 15px;
}

nav a:hover,
.dropdown-toggle:hover {
  color: #42b983; /* Tu color activo */
}

nav a.router-link-exact-active {
  color: #42b983;
}


/* --- NUEVOS ESTILOS PARA EL DROPDOWN --- */

/* Contenedor de cada dropdown (botón + menú) */
.dropdown {
  position: relative; /* Necesario para posicionar el menú */
}

/* El menú que se despliega */
.dropdown-menu {
  position: absolute;
  top: 100%; /* Aparece justo debajo del botón */
  left: 0;
  background-color: #3c4557; /* Mismo fondo que el nav */
  border-top: 2px solid #42b983; /* Borde superior con tu color activo */
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  list-style: none;
  padding: 5px 0; /* Espacio vertical dentro del menú */
  margin: 0;
  min-width: 230px; /* Ancho mínimo (ajusta si es necesario) */
  z-index: 1000;
}

/* Cada <li> dentro del menú */
.dropdown-menu li {
  margin: 0;
}

/* Cada link <a> (router-link) DENTRO del menú desplegable */
.dropdown-menu li a {
  display: block;
  padding: 10px 15px;
  color: #fff; /* Texto blanco */
  text-decoration: none;
  white-space: nowrap;
  
  /* Reseteamos los estilos que heredó del nav */
  font-size: 16px;
  letter-spacing: normal;
  padding: 10px 15px; /* Padding propio y uniforme */
}

/* Hover para los links del dropdown */
.dropdown-menu li a:hover {
  background-color: #4a5568; /* Un gris oscuro un poco más claro */
}

/* Link activo DENTRO del dropdown */
.dropdown-menu li a.router-link-exact-active {
  background-color: #4a5568;
  color: #42b983; /* Tu color activo */
}
</style>
