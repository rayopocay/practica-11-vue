<template>
  <div class="body-inicio">
    <img src="../assets/banner_juego.png" alt="" class="img-back-mh">
  </div>
  <div class="servicio shadow-1">
    <div class="flex">
      <img src="../assets/Servicios.svg" alt="" class="img-back"> 
       <p>Servicios Frecuentes</p>
    </div>
  </div>
  <br><br><br><br><br><br><br><br><br><br><br><br>
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

.servicio .flex img {
  width: 48px;
  padding: 50px;
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
