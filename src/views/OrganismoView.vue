<template>
    <div class="body-educacion">
        <div class="mini-menu">
            <p>
                <router-link to="/">Inicio</router-link> >
                <router-link to="/educacion">Institucional</router-link> > 
                <span>Banco Mundial -Estándares Ambientales y Sociales</span>
            </p>
        </div>
        <div class="titulo">
           <h1>Banco Mundial -Estándares Ambientales y Sociales</h1> 
        </div>
        <div class="subtitulo">
            <ul>
                <li>
                    PPPI – Plan de Participación de Partes Interesadas
                </li>
                <li>
                    PMGO – Procedimientos de Gestión de Mano de Obra
                </li>
                <li>
                    PCAS – Plan de Compromiso Social y Ambiental
                </li>
                <li>
                    MRI – Marco de Reasentamiento Involuntario
                </li>
                <li>
                    MPPI – Marco de Planificación de Pueblos Indígenas
                </li>
                <li>
                    MGAS (Anexos) – Marco de Gestión Ambiental y Social (Anexos)
                </li>
                <li>
                    MGAS – Marco de Gestión Ambiental y Social
                </li>
            </ul>
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
    padding-left: 40px;
}

.subtitulo ul li {
    margin-bottom: 10px
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