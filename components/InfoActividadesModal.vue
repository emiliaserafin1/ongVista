<template>
  <div class="modal-container">
    <div><span class="close" @click="close">X</span></div>
    <div class="actividad">
        <div class="act-img">
            <img src="https://via.placeholder.com/280x280" alt="Actividad">
        </div>
        <div class="act-body">
            <h2>{{ actividad.name }}</h2>
            <p>Descripcion: <span>{{ actividad.description }}</span></p>
            <p>Zona: <span>{{ actividad.location }}</span></p>
            <p>Fecha inicio: <span>{{ actividad.startDate }}</span></p>
            <p>Finalización: <span>{{ actividad.endDate }}</span></p>
            <p>Duración estimada: <span>{{ duracionEstimada }}</span></p>
            <p>Cantidad de voluntarios: <span>{{ actividad.volunteerCount }}</span></p>
            <p>Estado de la actividad: <span>{{ actividad.state }}</span></p>
            <button class="inscribirme" @click="inscribirme">Inscribirme</button> 
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      actividad: {
        type: Object,
        required: true
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    
    }
  }
</script>
<style scoped>
  .modal-container {
    position: fixed;
    z-index: 1000;
    width: 100%;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: whitesmoke;
  }
  h1 {
    font-size: 24px;
  }
  p {
    font-size: 16px;
  }
  .inscribirme{
    background-color: rgb(207, 18, 18);
    color: #fff;
    padding: 12px;
    border-radius: 10%;
    font-weight: bold;
    margin: 10px 10px 20px 140px;
  }
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }
  .modal-content {
    background-color: #FEFEFE;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  .close {
    cursor: pointer;
    color: #aaa;
    text-align: right;
    font-size: 28px;
    font-weight: bold;
  }
</style>







