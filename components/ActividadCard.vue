<template>
    <div class="actividad">
        <div class="act-img">
            <img src="https://via.placeholder.com/280x280" alt="Actividad">
        </div>
        <div class="act-body">
            <h2>{{ actividad.name }}</h2>
            <p>Zona: <span>{{ actividad.location }}</span></p>
            <p>Fecha inicio: <span>{{ actividad.startDate }}</span></p>
            <p>Finalización: <span>{{ actividad.endDate }}</span></p>
            <p>Duración estimada: <span>{{ duracionEstimada }}</span></p>
            <p>Cantidad de voluntarios: <span>{{ actividad.volunteerCount }}</span></p>
            <p>Estado de la actividad: <span>{{ actividad.state }}</span></p>
            <button @click="mostrarModal">Quiero saber más</button> 
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
        computed: {
            duracionEstimada() {
                const fechaInicio = new Date(this.actividad.startDate);
                const fechaFin = new Date(this.actividad.endDate);
                const diferencia = fechaFin.getTime() - fechaInicio.getTime();

                const dias = Math.floor(diferencia / (1000 * 3600 * 24));

                const horasRestantes = Math.floor((diferencia % (1000 * 3600 * 24)) / (1000 * 3600));

                if (dias === 0) {
                    return `${horasRestantes} horas`;
                } else {
                    return `${dias} días y ${horasRestantes} horas`;
                }
            }
        },
        methods: {
            mostrarModal() {
                this.$emit('mostrarModal')
            }
        }
    }
</script>

<style scoped>
.actividad {
    background-color: rgb(241, 241, 241);
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
.act-body p {
    margin: 12px 0;
    color: #494949;
    font-weight: bold;
}

.act-body p span {
    font-weight: normal;
}

button {
  padding: 10px;
  background-color: #007bff;
  width: 100%;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: medium;
}
</style>