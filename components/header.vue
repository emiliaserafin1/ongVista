<template>
    <header>
        <div>
            <img src="./../assets/img/logo-techo-blanco.png" alt="">
            <nav>
                <p><a href="actividades">INICIO</a></p>
                <p><router-link to="adminActs">ADMINISTRAR</router-link></p>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    header {
        height: 70px;
        display: flex;
        align-items: center;
    }

    header img {
        margin-left: 40px;
        height: 35px;
    }

    header div {
        display: flex;
        width: 100%;
    }

    nav {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        margin-right: 40px;
        p a{
            color: #fff;
            text-decoration: none;
            margin: 15px;
        }
    }
</style>