<template>
    <header>
        <div>
            <img src="./../assets/img/logo-techo-blanco.png" alt="">
            <nav>
                <p><a href="actividades" :class="{ 'active-link': $route.path === '/actividades' }">INICIO</a></p>
                <p><router-link to="adminActs" :class="{ 'active-link': $route.path === '/adminActs' }">ADMINISTRAR</router-link></p>
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
        background-color: #0092DD;
        display: flex;
        padding: 14px;
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
    }

    nav p a {
        color: #fff;
        text-decoration: none;
        margin: 15px;
    }

    .active-link {
        border-bottom: #fff 2px solid;
        
    }

    @media (max-width: 768px) {
        header img {
            margin-left: 20px;
            height: 30px;
        }
        nav {
            margin-right: 20px;
        }
        nav p a {
            margin: 5px;
        }
    }
</style>
