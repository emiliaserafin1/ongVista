<template>
  <div class="adminActs">
    <h1>Administrar actividades</h1>
    <table class="center">
      <thead>
        <tr>
          <th style="width: 50%">Nombre</th>
          <th>Estado</th>
          <th style="width: 25%">Acciones posibles</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(actividad, index) in actividades" :key="index">
          <td>{{ actividad.name }}</td>
          <td>{{ actividad.state }}</td>
          <td>
            <div class="button-container">
              <button class="buttonE" @click="mostrarModal(actividad)">Editar</button>
              <button class="buttonD" @click="eliminar(index)">Dar de Baja</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="fab" @click="mostrarModal(this.actividadSeleccionada)">+</button>
    <ActividadFormModal v-if="mostrarModalBool" :actividad="actividadSeleccionada" @editar="editar" @crear="crear" @cerrarModal="cerrarModal" />
  </div>
</template>

  <script>
  import ActivityService from '~/services/ActivityService';
  import ActividadFormModal from '~/components/ActividadFormModal.vue';
  import { generarMensajeExito, generarMensajeError } from '~/helpers/mensajes';
  import Swal from 'sweetalert2';

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
          generarMensajeExito(`La actividad id: ${this.actividadSeleccionada.id} fue editada exitosamente`);
          this.cerrarModal();
        } else {
          generarMensajeError('Error al editar actividad');
          this.cerrarModal();
        }
      },
      async eliminar(index){
        Swal.fire({
          title: '¿Estás seguro de que quieres eliminar esta actividad?',
          showCancelButton: true,
          confirmButtonColor: 'rgb(207, 18, 18)',
          cancelButtonColor: '#b7b7b7',
          cancelButtonText: 'Volver',
          confirmButtonText: 'Eliminar',
        }).then((result) => {
          if (result.isConfirmed) {
            ActivityService.deleteActivity(this.actividadSeleccionada.id).then((res) => {
              if (res) {
                this.fetchUsers();
                generarMensajeExito('La actividad ha sido eliminada con exito');
              } else {
                generarMensajeError('Error eliminando actividad');
              }
            });
          }
        });
      },
      async crear(){
        const response = await ActivityService.createActivity(this.actividadSeleccionada);
        if (response){
          generarMensajeExito(`La actividad fue creada exitosamente`);
          this.getAllActivities();
          this.cerrarModal();
        } else {
          generarMensajeError('Error al crear actividad');
          this.cerrarModal();
        }
      }
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
  .adminActs {
    min-height: 80vh;
    position: relative;
  }
  .table {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    margin: 25px 0;
    margin-left: 10%;
    font-size: 25px;
    color: #3D3B3B;
    font-weight: bold;
  }

  table {
    margin: auto;
    width: 90%;
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

  .button-container {
    display: flex;
    justify-content: center;
  }
  button {
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    padding: 6px 10px;;
  }
  .buttonE{
    background-color: #fff;
    color: #0092DD;
    margin-right: 10px;
  }
  .buttonD {
    color: #fff;
    background-color: rgb(207, 18, 18);
  }
  .centrar-boton {
    text-align: center;
  }

  .fab {
  
  position: absolute; 
  bottom: 20px; 
  right: 35px; 
  height: 55px;
  width: 55px;
  font-size: 40px;
  border-radius: 50%;
  background-color: #0092DD;
  color: #fff;
  cursor: pointer;
}

.fab:hover {
  background-color: #0077B6; 
}

  @media (max-width: 768px) {
    h1 {
      text-align: center;
      margin-left: 0;
    }
    button {
      padding: 2px 8px;
    }
  }
  </style>