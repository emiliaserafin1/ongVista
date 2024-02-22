<template>
    <div class="actividad">
        <div class="act-img">
            <img :src="actividad.img.src" :alt="actividad.img.alt">
        </div>
        <div class="act-body">
            <h2>Colecta de alimentos</h2>
            <p>Zona: <span>{{ actividad.zona }}</span></p>
            <p>Fecha inicio: <span>{{ actividad.fechaInicio }}</span></p>
            <p>Duracion estimada: <span>{{ actividad.duracionEstimada }}</span></p>
            <p>Cantidad de voluntarios: <span>{{ actividad.cantVoluntarios }}</span></p>
            <p>Estado de la actividad: <span>{{ actividad.estado }}</span></p>
            <p>Materiales: <span>{{ actividad.materiales }}</span></p>
        </div>
        <button @click="quieroSaberMas">Quiero saber mas</button>
        <Act :actividad="objetoPrueba" />
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
        data() {
    return {
      objetoPrueba: {
        img: {
          alt: 'Colecta del dia 20/01/2024',
        },
        zona: 'Rosario Centro',
        fechaInicio: '14/02/2024',
        duracionEstimada: '2 dias',
        cantVoluntarios: 10,
        estado: 'A realizar',
        materiales: 'Cemento, arena, etc',
      },
    }
  },}
</script>

<style lang="scss" scoped>
    .actividad {
    margin: 30px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 350px;
    border-radius: 5px;
    box-shadow: -2px 4px 14px -1px rgba(0,0,0,0.57);
    -webkit-box-shadow: -2px 4px 14px -1px rgba(0,0,0,0.57);
    -moz-box-shadow: -2px 4px 14px -1px rgba(0,0,0,0.57);
    transition: transform 0.5s ease-out;
    .actividad-img {
        width: 100%;
        height: 170px;
        object-fit: cover;
        border-bottom: 1px solid #464646;
    }
    }

    .actividad:hover{
        transform: translate(0px, -8px);
    }

    .act-body {
        margin: 30px 15px;
    }

    .act-body h2 {
        font-size: 18px;
        margin: auto;
        font-weight: 600;
        margin-bottom: 5px;
    }
</style>