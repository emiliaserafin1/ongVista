<template>
    <div class="actividades">
        <ActividadCard v-for="(actividad, index) in actividades" :actividad="actividad" v-bind="index" @mostrarModal="mostrarModal(actividad)" />
        <InfoActividadesModal v-if="mostrarModalBool" :actividad="actividadSeleccionada" @close="ocultarModal" @inscribirme="inscribirme"/>
    </div>
</template>

<script>
    import ActivityService from '~/services/ActivityService';
    import ActividadCard from '~/components/ActividadCard.vue';
    import InfoActividadesModal from '~/components/InfoActividadesModal.vue';
    import Swal from 'sweetalert2';
    import { generarMensajeExito, generarMensajeError } from '~/helpers/mensajes';
    import UserService from '~/services/UserService';


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
                Swal.fire({
                title: `¿Estás seguro de que quieres inscribirte en ${this.actividadSeleccionada.name}?`,
                showCancelButton: true,
                confirmButtonColor: '#0092DD',
                cancelButtonColor: '#b7b7b7',
                cancelButtonText: 'Volver',
                confirmButtonText: 'Inscribirme',
                }).then((result) => {
                if (result.isConfirmed) {
                    UserService .registerForActivity(this.actividadSeleccionada.id).then((res) => {
                    if (res) {
                        this.getAllActivities();
                        this.mostrarModalBool = false;
                        generarMensajeExito('Te has inscripto con exito');
                    } else {
                        this.mostrarModalBool = false;
                        generarMensajeError('No se ha podido confirmar tu inscripcion');
                    }
                    });
                }
                });
                
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

<style>
    .actividades {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
