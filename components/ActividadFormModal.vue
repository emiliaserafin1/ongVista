<template>
    <div>
          <div class="modal-contenido">
            <span @click="cerrarModal" class="cerrar-modal">X</span>
            <h2 v-if="actividad.id">Editar actividad</h2>
            <h2 v-else>Nueva actividad</h2>
            <div>
              <label for="nombreActividad">Nombre:</label>
              <input type="text" id="nombreActividad" v-model="actividad.name" class="ancho-input">
            </div>
            <div>
              <label for="zona">Zona:</label>
              <input type="text" id="zona" v-model="actividad.location" class="ancho-input">
            </div>
            <div>
              <label for="descripcion">Descripcion:</label>
              <input type="text" id="descripcion" v-model="actividad.description" class="ancho-input">
            </div>
            <div>
              <label for="fechaInicio">Fecha Inicio:</label>
              <input type="date" id="fechaInicio" v-model="actividad.startDate" class="ancho-input">
            </div>
            <div>
              <label for="fechaCierre">Fecha Cierre:</label>
              <input type="date" id="fechaCierre" v-model="actividad.endDate" class="ancho-input">
            </div>
            <div>
              <label for="cantVoluntarios">Cantidad de Voluntarios:</label>
              <input type="number" id="cantVoluntarios" v-model="actividad.volunteerCount" class="ancho-input">
            </div>
            <div>
              <label for="estado">Estado de la Actividad:</label>
              <input type="text" id="estado" v-model="actividad.state" class="ancho-input">
            </div>
            <div v-for="(material, index) in materiales" :key="material.id">
              <label :for="'material_' + index">{{ material.name }}</label>
              <input type="checkbox" :id="'material_' + index" v-model="material.selectedMaterialIds" class="ancho-input">
              <label :for="'cantidad_' + index">Cantidad:</label>
              <input type="text" :id="'cantidad_' + index" v-model="material.materialQuantities" class="ancho-input">
            </div>

            <div class="centrar-boton"><button class="buttonG" @click="editar">Guardar cambios</button></div>
          </div>
      </div>
</template>
<script>
import MaterialService from '~/services/MaterialService';
export default {
  data() {
    return {
      materiales: [],
    }
  },
  props: {
    actividad: {
      type: Object,
      required: true
    }
  },
  methods: {
    cerrarModal() {
      this.$emit('cerrarModal');
    },
    editar() {
      this.$emit('editar');
    },
    async getAllMaterials() {
      const response = await MaterialService.getAllMaterials();
      this.materiales = response;
      console.log('Materiales:', response);
    }
  },
  mounted() {
    this.getAllMaterials();
  }
}
</script>
<style scoped>
.adminActs h1 {
    font-size: 30px;
    color: #3D3B3B;
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