<template>
    <div>
        <Header></Header>
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
</style>