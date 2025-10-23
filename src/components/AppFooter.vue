<template>
  <footer class="footer-programas">
    <div class="footer-container">
      <div class="footer-left">
        <h2>Ministerio de Educación, Ciencia y Tecnología</h2>
        <p>
          Alameda Juan Pablo II y calle Guadalupe, edificios A, San Salvador, El Salvador, Centro América
        </p>
        <p><strong>Conmutador Edificios A1 y A2:</strong> + (503) 2592-2000, 2592-2122</p>
        <p><strong>Conmutador Edificios A3 y A4:</strong> 2592-3117</p>
        <p><strong>Unidad de Acceso a la Información Pública:</strong> 2281-0274, 2222-2043, 2222-2008</p>
        <p><strong>Quejas, avisos o denuncias:</strong> 2592-2009</p>
        <p>
          <strong>Correo:</strong>
          <a href="mailto:educacion@mined.gob.sv">educacion@mined.gob.sv</a>
        </p>
      </div>

      <div class="footer-center">
        <img src="../assets/Log.svg" alt="Logo Gobierno" />
        <p>GOBIERNO DE EL SALVADOR</p>
      </div>

      <div class="footer-right">
        <p><strong>Horario de atención:</strong><br>Lunes a Viernes de 7:30 a.m. a 3:30 p.m.</p>

        <h3>Únete a nuestra comunidad</h3>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
        </div>

        <ul>
          <li><a href="#">Mapa del Sitio</a></li>
          <li><a href="#">Política Web</a></li>
          <li><a href="#">Preguntas Frecuentes</a></li>
          <li><a href="#">Carta de Derecho</a></li>
          <li><a href="#">Avisos y Denuncias</a></li>
        </ul>
      </div>
    </div>

    <button @click="scrollToTop" class="scroll-top">
      <i class="fas fa-arrow-up"></i>
    </button>
  </footer>
</template>

<script setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped>
.footer-programas {
  background-color: #2b3548;
  color: #ffffff;
  padding: 60px 20px;
  font-family: "Arial", sans-serif;
  line-height: 1.6;
  position: relative;
}

.footer-container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  gap: 30px;
}

/* En pantallas grandes */
@media (min-width: 992px) {
  .footer-container {
    grid-template-columns: 1fr auto 1fr;
    text-align: left;
    align-items: start;
  }
  .footer-center {
    text-align: center;
  }
  .footer-right {
    text-align: right;
  }
}

.footer-left p,
.footer-right p {
  margin: 6px 0;
  font-size: 14px;
}

.footer-center img {
  width: 100px;
  margin-bottom: 10px;
  filter: brightness(1.2);
}

.footer-center p {
  font-weight: bold;
  font-size: 14px;
}

.footer-right h3 {
  margin-top: 15px;
  font-size: 15px;
  font-weight: 600;
}

.footer-right ul {
  list-style: none;
  padding: 0;
  margin-top: 15px;
}

.footer-right ul li {
  margin: 4px 0;
}

.footer-right a {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
}

.footer-right a:hover {
  color: #66d9ff;
  text-decoration: underline;
}

.footer-left a {
  color: #9cd8ff;
  text-decoration: none;
}

.footer-left a:hover {
  color: #66d9ff;
  text-decoration: underline;
}

.social-icons {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 10px;
}

.social-icons a {
  color: #ffffff;
  font-size: 18px;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #66d9ff;
}

/* Botón volver arriba */
.scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #1e2533;
  color: white;
  border: none;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: background 0.3s;
}

.scroll-top:hover {
  background: #3b4966;
}
</style>
