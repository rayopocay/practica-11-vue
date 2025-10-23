<template>
  <div class="programas-institucionales">
    <!-- Encabezado -->
    <header class="titulo-seccion text-center">
      <h2>Programas Institucionales</h2>
      <p>
        Conoce los programas estratégicos que impulsa el Ministerio de Educación, Ciencia y Tecnología para fortalecer la calidad educativa en El Salvador.
      </p>
    </header>

    <div class="container mt-6 grid-programas">
      <!-- Lista de programas -->
      <div v-for="(programa, index) in programas" :key="index" class="card-programa">
        <div class="icono">
          <i class="fas fa-graduation-cap"></i>
        </div>
        <h3>{{ programa }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramasInstitucionales",
  data() {
    return {
      programas: [
        "Aprendizaje de calidad y significativo para la Primera Infancia",
        "Aprendizajes de calidad y significativos en los niveles de Educación Básica, Media y sus modalidades",
        "Fortalecimiento de la Educación Superior",
        "Inclusividad Educativa",
        "Evaluación Educativa para la mejora de los aprendizajes",
        "Profesionalización Docente, para la dignificación del magisterio al servicio de los aprendizajes",
        "Acceso Universal a las Tecnologías Educativas, conocido como: “Enlaces con la Educación”",
        "Programa Ciencia, Tecnología e innovación, que impactan el sector educativo, productivo y académico",
        "Mejora integral de infraestructura con ambientes escolares inclusivos, seguros y sostenibles",
        "Dotación de Uniformes, Zapatos y Útiles Escolares",
        "Alimentación y Salud Escolar - Vaso de Leche",
        "Modernización Institucional",
        "Protección y Convivencia Escolar para el Desarrollo de la Comunidad Educativa",
        "Sistema Nacional de Asesoramiento Educativo (SISNAE)",
        "Fortalecimiento de la Gestión en el Territorio",
        "Consejería Escolar para la Comunidad Educativa",
        "Protección y Gestión de Riesgos Medioambientales en la Comunidad Educativa"
      ]
    };
  }
};
</script>

<style scoped>
.programas-institucionales {
  background: #f4f7fa;
  padding: 70px 20px;
  font-family: "Open Sans", sans-serif;
}

/* Encabezado */
.titulo-seccion h2 {
  color: #003366;
  font-weight: 800;
  font-size: 2.1rem;
  margin-bottom: 10px;
}

.titulo-seccion p {
  color: #555;
  font-size: 1rem;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Grid */
.grid-programas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 50px;
}

/* Tarjetas */
.card-programa {
  background: #fff;
  border-radius: 14px;
  padding: 25px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-programa:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

/* Icono */
.icono {
  background: #0066cc;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px auto;
  color: #fff;
  font-size: 1.4rem;
}

/* Texto */
.card-programa h3 {
  color: #003366;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
}
</style>
