<template>
    <div class="actividades">
        <ActividadCard v-for="(actividad, index) in actividades" :actividad="actividad" v-bind="index" @mostrarModal="mostrarModal(actividad)" />
        <InfoActividadesModal v-if="mostrarModalBool" :actividad="actividadSeleccionada" @close="ocultarModal" @inscribirme="inscribirme"/>
    </div>
</template>

<script>
    import ActivityService from '~/services/ActivityService';
    import UserService from '~/services/UserService';
    import ActividadCard from '~/components/ActividadCard.vue';
    import InfoActividadesModal from '~/components/InfoActividadesModal.vue';

    export default {
        data() {
            return {
                actividades: [],
                mostrarModalBool: false,
                actividadSeleccionada: {},
            }
        },
        methods: {
            async getAllActivities() {
                const response = await ActivityService.getAllActivities();
                console.log('Actividades:', response);
                this.actividades = response;
            },
            mostrarModal(actividad) {
                this.mostrarModalBool = true;
                this.actividadSeleccionada = actividad;
            },
            ocultarModal() {
                this.mostrarModalBool = false;
                this.actividadSeleccionada = {};
            },
            async inscribirme(){
                const res = await UserService.registerForActivity(this.actividadSeleccionada.id);
                console.log(res)
            }
        },
        mounted() {
            this.actividades = this.getAllActivities();
        },
        components: {
            ActividadCard,
            InfoActividadesModal
        }
    }
</script>
