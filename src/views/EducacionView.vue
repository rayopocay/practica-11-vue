<template>
    <div class="body-inicio">
        <img src="../assets/001ies.png" alt="" class="img-back-mh">
    </div>
    <div class="body-educacion">
        <div class="mini-menu">
            <p>
                <router-link to="/">Inicio</router-link> >
                <router-link to="/programas">programas</router-link> > 
                <span>Educación superior</span>
            </p>
        </div>
        <div class="titulo">
           <h1>Educación superior</h1> 
        </div>
        <div class="subtitulo">
            <h2>Documentos</h2>
        </div>
        <div class="subfooter">
            <div class="opcion-foo">
                <div class="opcion-foo-col"> 
                    <div class="conten-fooder">
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                    <h3>
                        Fortalecimiento de capacidades para la implementación de la 
                        Educación Dual en las Instituciones de Educación Superior en 
                        El Salvador (DUALELS)
                    </h3>
                    </div>
                </div>
                <div class="opcion-foo-col"> 
                    <div class="conten-fooder">
                    <i class="fa-solid fa-cloud-arrow-down"></i>
                    <h3> 
                        Caracterización de la atención educativa de estudiantes con 
                        discapacidad en las Instituciones de Educación Superior-IES 
                        de El Salvador
                    </h3>
                    </div>
                </div>
                <div class="opcion-foo-col"> 
                    <div class="conten-fooder">
                    <i class="fa-solid fa-users"></i>
                    <h3> 
                        Publicaciones
                    </h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="subtitulo">
            <h2>Servicios</h2>
        </div>
        <div class="servicio">
            <div class="opcion-servicio">
                <div class="opcion-servicio-col"> 
                    <div class="conten-servicio">
                    <h3>
                        GUIA PARA INCORPORACIÓN DE TITULOS DE EDUCACIÓN SUPERIOR
                    </h3>
                    </div>
                </div>
                <div class="opcion-servicio-col"> 
                    <div class="conten-servicio">
                    <h3> 
                        PROCESO DE ATENCION AL USUARIO GERENCIA REGISTRO- DNES AGOSTO 2020
                    </h3>
                    </div>
                </div>
                <div class="opcion-servicio-col"> 
                    <div class="conten-servicio">
                    <h3> 
                        SOLICITUD VIRTUAL PARA ASIGNACIÓN DE ESPECIALIDAD CURRICULAR A PROFESIONALES NO DOCENTES
                    </h3>
                    </div>
                </div>
            </div>
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

<script setup>

</script>

<style scoped>
a {
    color: #b1c9ff;
}
.body-educacion {
    color: #fff;
    padding: 18px 170px;
}

.body-educacion .mini-menu{
    text-align: left;
}

.body-educacion .titulo {
    text-align: left;
    padding: 40px 0;
}

.body-educacion .titulo h1 {
    font-weight: normal;
}

.body-educacion .subtitulo {
    text-align: left;
}

.body-educacion .subtitulo h2 {
    font-weight: normal;
}

.img-back-mh {
  object-fit: cover;
    width: 100%;
    height: 300px;
}
.opcion-foo,
.opcion-servicio {
  display: flex;
  align-items: center; 
  padding: 10px 0;
  justify-content: center;
  flex-wrap: wrap; 
  gap: 70px;
}

.opcion-foo .opcion-foo-col {
  color: #fff;
  flex-basis: 100px;
  text-align: center;
  padding: 20px 0px;
}

.opcion-servicio .opcion-servicio-col {
  color: #fff;
  flex-basis: 200px;
  text-align: left;
  padding: 20px 0px;
}

.opcion-foo .opcion-foo-col .conten-fooder h3,
.opcion-servicio .opcion-servicio-col .conten-servicio h3 {
  letter-spacing: 0.1em;
}

.opcion-foo .opcion-foo-col .conten-fooder i {
  font-size: 50px;
  padding-bottom: 15px;
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
</style>