<template>
    <div class="actividades">
        <ActividadCard :actividad="objetoPrueba" />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                objetoPrueba: {
                    img: {
                        src: 'https://via.placeholder.com/350x280',
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
        }
    }
</script>
