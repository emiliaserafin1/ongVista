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
            <td>{{ actividad.nombre }}</td>
            <td>{{ actividad.estado }}</td>
            <td>
              <button class="buttonE" @click="abrirModal(index)">Editar</button>
              <button class="buttonD" @click="darDeBaja(index)">Dar de Baja</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="mostrarModal" class="modal">
        <div class="modal-contenido">
          <span @click="cerrarModal" class="cerrar-modal">X</span>
          <h2>Edicion de Datos</h2>
          <p>Nombre actividad: {{ actividadModal.nombre }}</p>
          <p>Zona: {{ actividadModal.zona }}</p>
          <p>Fecha Inicio: {{ actividadModal.fechaInicio }}</p>
          <p>Fecha Cierre: {{ actividadModal.fechaEstimada }}</p>
          <p>Cantidad de Voluntarios: {{ actividadModal.cantVoluntarios }}</p>
          <p>Estado de la Actividad: {{ actividadModal.estado }}</p>
          <p>Materiales: {{ actividadModal.materiales }}</p>
          <button>Guardar cambios</button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        actividades: [
          { nombre: 'Colecta de alimentos: Rosario', estado: 'A realizar' },
          { nombre: 'Refaccion de viviendas', estado: 'Finalizada' },
          { nombre: 'Colecta de alimentos: Funes', estado: 'Finalizada' },
          { nombre: 'Colecta de utiles escolares', estado: 'A realizar' },
        ],
      };
    },
    methods: {
      editarAct(index) {
        console.log('Editar actividad: ', this.actividades[index]);
      },
      darDeBaja(index) {
        // Lógica para dar de baja la actividad, lo mismo arriba
        console.log('Dar de baja actividad:', this.actividades[index]);
      }
    }
}
</script>

<style lang="scss" scoped>
.adminActs h1 {
  font-size: 30px;
  color: #3d3b3b;
  font-family: Arial, Helvetica, sans-serif;
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
  }
  .buttonD {
    background-color: rgb(207, 18, 18);
    color: #fff;
    padding: 5px;
    border-radius: 5%;
    font-weight: bold;
  }
</style>