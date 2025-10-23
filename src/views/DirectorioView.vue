<template>
  <section class="directorio-container">
    <!-- Encabezado -->
    <div class="header">
      <h1 class="title">DIRECTORIO MINED</h1>
      <div class="icon">
        <i class="fas fa-phone-alt"></i>
      </div>
    </div>

    <!-- Breadcrumb -->
    <nav class="breadcrumb">Inicio &gt; Directorio</nav>

    <!-- Información principal -->
    <div class="info">
      <h2>Ministerio de Educación, Ciencia y Tecnología</h2>
      <p>Unidad de Registro</p>
      <p>Atención desde 7am hasta 3pm y de 7am a 5pm (Lunes a Viernes)</p>
      <p>Centro de Atención en Santa Tecla, San Salvador, El Salvador</p>
    </div>

    <!-- Secciones inferiores -->
    <div class="sections">
      <div class="section-item">
        <i class="fas fa-chart-bar"></i>
        <span>Estadísticas Educativas</span>
      </div>
      <div class="section-item">
        <i class="fas fa-download"></i>
        <span>Descargas</span>
      </div>
      <div class="section-item">
        <i class="fas fa-question-circle"></i>
        <span>Preguntas Frecuentes</span>
      </div>
      <div class="section-item">
        <i class="fas fa-book-open"></i>
        <span>Programas</span>
      </div>
      <div class="section-item">
        <i class="fas fa-bullhorn"></i>
        <span>Avisos</span>
      </div>
    </div>
  </section>
</template>

<script setup>
// No se requiere lógica para este diseño estático
</script>

<style scoped>
.directorio-container {
  background-color: #1e2a4a;
  color: white;
  font-family: 'Arial', sans-serif;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

.icon i {
  font-size: 2rem;
  color: #00bfff;
}

.breadcrumb {
  font-size: 0.9rem;
  color: #ccc;
  margin-bottom: 20px;
  text-align: center;
}

.info {
  text-align: center;
  margin-bottom: 40px;
}

.info h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.info p {
  font-size: 1rem;
  margin: 4px 0;
}

.sections {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.section-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  padding: 20px;
  background-color: #2b3b5f;
  border-radius: 8px;
  transition: background 0.3s;
  cursor: pointer;
}

.section-item:hover {
  background-color: #3c4f7a;
}

.section-item i {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #00bfff;
}

.section-item span {
  font-size: 0.95rem;
  text-align: center;
}
</style>