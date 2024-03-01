<template>
  <div class="mostrar-modal">
    <div class="modal-contenido">
      <span @click="cerrarModal" class="cerrar-modal">X</span>
      <h2>{{ actividad.id ? 'Editar actividad' : 'Nueva actividad' }}</h2>
      <div class="form-group">
        <label for="nombreActividad">Nombre:</label>
        <input type="text" id="nombreActividad" v-model="actividad.name" class="ancho-input">
      </div>
      <div class="form-group">
        <label for="zona">Zona:</label>
        <input type="text" id="zona" v-model="actividad.location" class="ancho-input">
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" v-model="actividad.description" class="ancho-input"></textarea>
      </div>
      <div class="form-group">
        <label for="fechaInicio">Fecha Inicio:</label>
        <input type="date" id="fechaInicio" v-model="actividad.startDate" class="ancho-input">
      </div>
      <div class="form-group">
        <label for="fechaCierre">Fecha Cierre:</label>
        <input type="date" id="fechaCierre" v-model="actividad.endDate" class="ancho-input">
      </div>
      <div class="form-group">
          <label for="estado">Estado de la Actividad:</label>
          <select id="estado" v-model="actividad.state" class="ancho-input">
            <option value="1">Con Cupo</option>
            <option value="2">Sin Cupo</option>
            <option value="3">Subscripto</option>
            <option value="4">Realizada</option>
          </select>
      </div>
      <div class="form-group">
        <label for="jefeId">Id del jefe designado:</label>
        <input type="number" id="jefeId" v-model="actividad.jefeId" class="ancho-input">
      </div>
      <div class="materiales-group" v-for="(material, index) in materiales" :key="material.id">
          <div class="material-nombres">
            <label :for="'material_' + index">{{ material.name }}</label>
          </div>
          <div class="check">
            <input type="checkbox" :id="'material_' + index" v-model="material.selectedMaterialIds">
          </div>
          <div class="material-cantidad">
            <label :for="'cantidad_' + index">Cantidad:</label>
            <input type="number" :id="'cantidad_' + index" v-model="material.materialQuantities">
          </div>
      </div>
      <div class="button-container">
        <button class="buttonE" @click="editarCrear">Guardar cambios</button>
        <button class="buttonD" @click="cerrarModal">Cancelar</button>
      </div>
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
    editarCrear() {
      // Mapear los materiales seleccionados y sus cantidades
      const selectedMaterialIds = [];
      const materialQuantities = [];
      this.materiales.forEach(material => {
        if (material.selectedMaterialIds) {
          selectedMaterialIds.push(material.id);
          materialQuantities.push(material.materialQuantities);
        }
      });

      // Asignar los datos a la actividad antes de emitir el evento de edición
      this.actividad.selectedMaterialIds = selectedMaterialIds;
      this.actividad.materialQuantities = materialQuantities;

      // Actualizar las propiedades en el objeto actividad
      this.actividad.startDate = new Date(this.actividad.startDate).toISOString();
      this.actividad.endDate = new Date(this.actividad.endDate).toISOString();

      this.actividad.state = parseInt(this.actividad.state);

      // Emitir el evento de edición
      if (this.actividad.id) {
        this.$emit('editar');
      } else {
        this.$emit('crear');
      }
    },
    async getAllMaterials() {
      const response = await MaterialService.getAllMaterials();
      this.materiales = response;
    }
  },
  mounted() {
    this.getAllMaterials();
  }
}
</script>

<style scoped>
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
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
    background-color: rgba(0, 0, 0, 0.4);
  }

  input, textarea, select {
    font-family: Lato, sans-serif;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  .ancho-input {
    width: 100%;
    box-sizing: border-box;
    margin-top: 5px;
  }
  .modal-contenido {
    color: #fff;
    background-color: #0092dd;
    padding: 20px 20px;
    width: 50%;
    border-radius: 10px;
  }
  .cerrar-modal {
    color: rgba(255, 255, 255, 0.816);
    float: right;
    font-size: 20px;
    cursor: pointer;
  }

  .form-group, .materiales-group{
    margin: 10px 0;
  }

  .materiales-group {
    display: flex;
    align-items: center;
  }

  .material-nombres {
    width: 70px;
  }

  .check {
    margin-right: 40px;
  }

  .material-cantidad label {
    margin-right: 5px;
  }
  .materiales-group input[type="number"] {
    width: 60px;
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
    padding: 6px 10px;
    margin-top: 15px;
  }
  .buttonE{
    background-color: #fff;
    color: #0092DD;
    margin-right: 10px;

  }
  .buttonD {
    color: #fff;
    background-color: rgb(109, 109, 109);
  }

  @media (max-width: 768px) {
    .modal-contenido {
      width: 90%;
  }
  }
</style>