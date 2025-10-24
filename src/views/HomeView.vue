<template>
  <div class="body-inicio">
    <img src="../assets/banner_juego.png" alt="" class="img-back-mh">
  </div>
  <div class="opciones">
    <div class="opciones-col">
      <h3>
        Trámites y Servicios en Línea
      </h3>
    </div>
    <div class="opciones-col">
      <h3>
        Portal de Calidad
      </h3>
    </div>
    <div class="opciones-col">
      <h3>
        Educación Familiar
      </h3>
    </div>
    <div class="opciones-col">
      <h3>
        El Do, Re, Mi, Fa, Sol de Mis Derechos
      </h3>
    </div>
    <div class="opciones-col">
      <h3>
        Gestion Educativa
      </h3>
    </div>
    <div class="opciones-col">
      <h3>
        Política del Sistema de Gestión Antisoborno
      </h3>
    </div>
    <div class="opciones-col">
      <h3>
        Código de Ética
      </h3>
    </div>
  </div>
  <div class="imagen-mh">
    <div class="imagen-col">
        <img src="../assets/logo-02.png" alt="Avanzo">
    </div>
    <div class="imagen-col">
      <img src="../assets/avisoydenuncias1.png" alt="Aviso">
    </div>
  </div>
  <div class="servicio shadow-1">
    <div class="flex">
      <img src="../assets/Servicios.svg" alt="" class="img-back"> 
       <p>Avisos</p>
    </div>
  </div>
  <div class="directorio-container">
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
    </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
.img-back-mh {
  object-fit: cover;
    width: 100%;
    height: 300px;
}
p {
  color: #fff;
}

.servicio {
  margin: -4px;
  background-color: #3c4557;
}

.opciones {
  display: flex;
  align-items: center; 
  padding: 10px 0 40px;
  justify-content: center;
  flex-wrap: wrap; 
  gap: 20px;
}

.opciones .opciones-col {
  color: #fff;
  flex-basis: 100px;
  text-align: center;
  padding: 10px 0px;
}

.opciones .opciones-col h3 {
  font-weight: normal;
}

.imagen-mh {
  display: flex;      
  justify-content: center; 
  align-items: center;    
  gap: 20px;              
  padding: 20px; 
  background: #dfdfdf;
}

.imagen-col {
  flex: 1;
}

.imagen-col img {
  max-width: 300px;
  width: 100%;
  margin: 0 auto;
  height: auto;
  display: block;
}

.directorio-container {
  background-color: #29303C;
  color: white;
  font-family: 'Arial', sans-serif;
  padding: 40px 20px;
  max-width: 1200px;
  margin: auto;
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


.servicio .flex img {
  width: 48px;
  padding: 25px 20px;
}

.servicio .flex {
  display: flex;
  align-items: center;
  justify-content: center;
}

.servicio .flex p {
  font-size: 28px;
}

.shadow-1 {
  box-shadow: 0px 0px 30px #000000;
    opacity: 1;
}
</style>
