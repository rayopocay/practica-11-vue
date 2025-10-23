<template>
  <div class="servicios-destacados">
    <!-- Encabezado -->
    <header class="titulo-seccion text-center">
      <h2>Servicios Destacados</h2>
      <p>
        Encuentra los principales servicios y trámites disponibles en línea del Ministerio de Educación.
      </p>
    </header>

    <div class="container mt-5">
      <!-- Servicios en línea -->
      <section class="bloque-servicio">
        <h3><i class="fas fa-globe"></i> Servicios y trámites en línea</h3>
        <ul>
          <li>Servicios educación básica y media</li>
          <li>Certificación de registro de título de educación media</li>
          <li>Certificación de registro de notas</li>
          <li>Auténticas de documentos académicos</li>
          <li>Equivalencia de estudios en el extranjero</li>
          <li>Incorporación de títulos de educación media del extranjero</li>
          <li>Marginación de documentos académicos</li>
        </ul>
      </section>

      <!-- Servicios adicionales -->
      <section class="bloque-servicio">
        <h3><i class="fas fa-laptop-code"></i> Servicios en Línea</h3>
        <ul>
          <li>Bachillerato Virtual (en línea)</li>
          <li>Directorio de Centros Educativos</li>
          <li>Boleta de resultados PAES / AVANZO</li>
        </ul>
      </section>

      <!-- Educación superior -->
      <section class="bloque-servicio">
        <h3><i class="fas fa-university"></i> Servicios educación superior</h3>
        <ul>
          <li>Reposición de certificado de registro y auténtica de título de Educación Superior</li>
          <li>Auténtica de diferentes documentos emitidos por las Instituciones de Educación Superior</li>
          <li>Registro y auténtica de título de Educación Superior con estudios por equivalencia</li>
          <li>Registro y auténtica de títulos de Educación Superior</li>
          <li>Registro y auténtica de títulos de Educación Superior – Postgrados (Maestrías y especialidades)</li>
          <li>Auténtica de Curso de Formación Pedagógica de Educación Superior</li>
          <li>Incorporación de títulos de Educación Superior procedentes del extranjero</li>
          <li>Solicitud de constancia de notas de Instituciones de Educación Superior cerradas</li>
          <li>Registro de Firmas y Sellos de Autoridades de las Instituciones de Educación Superior</li>
          <li>Información sobre el estado legal de las instituciones de educación superior y las carreras que ofrecen</li>
        </ul>
      </section>

      <!-- Preguntas frecuentes -->
      <section class="preguntas-frecuentes text-center">
        <h4>¿Tiene dudas?</h4>
        <p>
          Visita nuestras
          <a href="#" class="link-preguntas">preguntas frecuentes aquí</a>.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiciosDestacados",
};
</script>

<style scoped>
.servicios-destacados {
  background: #f4f7fa;
  padding: 60px 15px 80px;
  font-family: "Open Sans", sans-serif;
}

/* Título principal */
.titulo-seccion h2 {
  color: #003366;
  font-weight: 800;
  font-size: 2.1rem;
  margin-bottom: 12px;
}

.titulo-seccion p {
  color: #555;
  font-size: 1rem;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Bloques de servicios */
.bloque-servicio {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);
  padding: 35px 30px;
  margin-bottom: 40px;
  transition: all 0.3s ease;
}

.bloque-servicio:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Títulos de cada bloque */
.bloque-servicio h3 {
  font-size: 1.35rem;
  font-weight: 700;
  color: #003366;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.bloque-servicio h3 i {
  color: #0066cc;
  font-size: 1.4rem;
  margin-right: 10px;
}

/* Lista */
.bloque-servicio ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.bloque-servicio ul li {
  font-size: 1rem;
  color: #333;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
  transition: color 0.3s;
}

.bloque-servicio ul li:last-child {
  border-bottom: none;
}

.bloque-servicio ul li:hover {
  color: #0066cc;
}

/* Sección de preguntas */
.preguntas-frecuentes h4 {
  font-size: 1.3rem;
  color: #003366;
  margin-top: 40px;
  font-weight: 700;
}

.preguntas-frecuentes p {
  color: #555;
  margin-top: 8px;
}

.link-preguntas {
  color: #0066cc;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: 0.3s;
}

.link-preguntas:hover {
  border-bottom: 1px solid #0066cc;
}
</style>
