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
  <div class="subfooter">
    <div class="opcion-foo">
      <div class="opcion-foo-col"> 
        <div class="conten-fooder">
          <i class="fa-solid fa-chart-line"></i>
          <h3>
            Estadísticas Educativas
          </h3>
        </div>
      </div>
      <div class="opcion-foo-col"> 
        <div class="conten-fooder">
          <i class="fa-solid fa-cloud-arrow-down"></i>
          <h3> 
            Descargas
          </h3>
        </div>
      </div>
      <div class="opcion-foo-col"> 
        <div class="conten-fooder">
          <i class="fa-regular fa-circle-question"></i>
          <h3> 
            Preguntas Frecuentes
          </h3>
        </div>
      </div>
      <div class="opcion-foo-col"> 
        <div class="conten-fooder">
          <i class="fa-solid fa-users"></i>
          <h3> 
            Programas
          </h3>
        </div>
      </div>
      <div class="opcion-foo-col"> 
        <div class="conten-fooder">
          <i class="fa-regular fa-bell"></i>
          <h3> 
            Avisos
          </h3>
        </div>
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

.subfooter {
  background-color: #29303C;
}

.opcion-foo {
  display: flex;
  align-items: center; 
  padding: 10px 0 40px;
  justify-content: center;
  flex-wrap: wrap; 
  gap: 70px;
}

.opcion-foo .opcion-foo-col {
  color: #fff;
  flex-basis: 100px;
  text-align: center;
  padding: 10px 0px;
}

.opcion-foo .opcion-foo-col .conten-fooder h3 {
  letter-spacing: 0.1em;
}

.opcion-foo .opcion-foo-col .conten-fooder i {
  font-size: 50px;
  padding-bottom: 15px;
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
