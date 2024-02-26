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
            <button @click="quieroSaberMas">Quiero saber mas</button>
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
            quieroSaberMas() {
                console.log('Quiero saber mas sobre la actividad: ', this.objetoPrueba);
            }
        }
    }
</script>

<style scoped>
.actividad {
    background-color: rgb(241, 235, 235);
    margin: 30px;
    overflow: hidden;
    display: flex;
    width: 600px;
    height: 280px;
    border-radius: 5px;
    transition: transform 0.5s ease-out;
    .actividad-img {
        width: 100%;
        height: 170px;
        object-fit: cover;
        border-bottom: 1px solid #464646;
    }
}

.actividad:hover{
    transform: translate(0px, -2px);
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