<template>
  <div class="box-container">
    <div class="modal-container">
      <div class="close-container"><span class="close" @click="close">x</span></div>
      <div class="actividad">
          <div class="act-img">
              <img src="https://via.placeholder.com/500x280" alt="Actividad">
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
  .box-container {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-container {
  background-color: #0092DD;
  border-radius: 20px;
  padding: 20px;
  width: 80%;
  max-width: 500px; /* Ancho máximo del modal */
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

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 25px;
  color: #fff;
}
p {
  font-size: 16px;
  margin-bottom: 5px;
  color: #fff;
  font-weight: bold;
}

  p span{
  font-weight: normal;
}
.inscribirme{
  background-color: #fff;
  color: #0092DD;
  padding: 12px;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  margin-top: 15px;
  cursor: pointer;
  width: 100%;
}
.close {
  cursor: pointer;
  color: #fff;
  margin-left: auto;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 10px;
}

</style>







