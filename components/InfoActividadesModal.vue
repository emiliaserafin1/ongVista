<template>
  <div class="modal-container">
    <div class="close-container"><span class="close" @click="close">X</span></div>
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
      },
      inscribirme(){
        this.$emit('inscribirme');
      }
    
    }
  }
</script>
<style scoped>
  .modal-container {
    position: fixed;
    z-index: 1000;
    top: 130px;
    left: 0;
    right: 0;
    bottom: 50px;
    background-color: rgb(221, 50, 50);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 80px;
  }


  .close-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }

  .actividad {
    display: flex;
    flex-direction: column;
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
    margin: 10px;
  }

  .close {
    cursor: pointer;
    color: #aaa;
    margin-left: auto;
    font-size: 28px;
    font-weight: bold;
  }
</style>







