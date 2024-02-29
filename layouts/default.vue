<template>
    <div>
        <Header>
            <div class="navbar">
                <div class="nav-links">
                <a href="/dashboard">Dashboard</a>
                </div>
            </div>
        </Header>
        <slot></slot>
    </div>
</template>

<script>
    import Header from './../components/Header.vue'
    export default {
        components: {
            Header
        }
    }
</script>

<style>
@import '././../assets/styles/global.css';
Header {
    color: #fff;
    background-color: #0092DD;
    border: 1px solid #ccc;
    display: flex;
    padding: 14px;
}
</style>