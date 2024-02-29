<template>
  <div class="adminActs">
    <h1>Administrar actividades</h1>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Acciones posibles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(actividad, index) in actividades" :key="index">
          <td>{{ actividad.name }}</td>
          <td>{{ actividad.state }}</td>
          <td>
            <button class="buttonE" @click="mostrarModal(actividad)">Editar</button>
            <button class="buttonD" @click="darDeBaja(index)">Dar de Baja</button>
          </td>
        </tr>
      </tbody>
    </table>
    <ActividadFormModal v-if="mostrarModalBool" :actividad="actividadSeleccionada" @editar="editar" @cerrarModal="cerrarModal" />
  </div>
  </template>
  <script>
  import ActivityService from '~/services/ActivityService';
  import ActividadFormModal from '~/components/ActividadFormModal.vue';

  export default {
    data() {
      return {
        mostrarModalBool: false,
        actividades: [],
        actividadSeleccionada: {},
      };
    },
    methods: {
      mostrarModal(actividad) {
        this.mostrarModalBool = true;
        this.actividadSeleccionada = actividad;
      },
      cerrarModal() {
        this.mostrarModalBool = false;
        this.actividadSeleccionada = {};
      },
      async getAllActivities() {
        const response = await ActivityService.getAllActivities();
        this.actividades = response;
      },
      async editar(){
        const response = await ActivityService.editActivity(this.actividadSeleccionada);
        if (response){
          alert('Actividad editada correctamente');
          this.cerrarModal();
        } else {
          alert('Error al editar actividad');
          this.cerrarModal();
        }
      },
    },
    components: {
      ActividadFormModal
    },
    mounted() {
      this.getAllActivities();
    }, 
  }
  </script>
  <style scoped>
  .adminActs h1 {
    font-size: 30px;
    color: #3D3B3B;
    font-weight: bold;
  }
  table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      background-color: #48B1E8;
      font-size: 18px;
    }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    color: #fff;
  }
  th {
    background-color: #0092DD;
  }
  .buttonE{
    background-color: #fff;
    color: #0092DD;
    padding: 5px;
    border-radius: 5%;
    font-weight: bold;
    margin-right: 30px;
    margin-left: 30px;
    cursor: pointer;
  }
  .buttonD {
    background-color: rgb(207, 18, 18);
    color: #fff;
    padding: 5px;
    border-radius: 5%;
    font-weight: bold;
    cursor: pointer;
  }
  .buttonG {
    background-color: rgb(17, 171, 241);
    color: #fff;
    padding: 8px;
    border-radius: 5%;
    font-weight: bold;
    cursor: pointer;
  }
  .centrar-boton {
     text-align: center;
  }
    .mostrar-modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }
  .modal-contenido {
    color: #fff;
    background-color: #115B97;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #242323;
    width: 35%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  .modal-contenido div {
    margin-bottom: 10px;
  }
  .modal-contenido h2 {
    text-align: center;
  }
  .cerrar-modal{
    color: #000000;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }
  .ancho-input {
    width: 50%;
    box-sizing: border-box;
    margin-top: 5px;
  }
  </style>