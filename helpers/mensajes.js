import Swal from "sweetalert2";

export function generarMensajeExito(textoMensaje) {
    Swal.fire({
        title: textoMensaje,
        timer: 2000,
        showConfirmButton: false,
        icon: "success",
        toast: true,
    })
}

export function generarMensajeError(textoMensaje) {
    Swal.fire({
        title: textoMensaje,
        timer: 2000,
        showConfirmButton: false,
        icon: "error",
    })
}