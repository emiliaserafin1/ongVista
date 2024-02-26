<template>
    <div>
        <Header title="Techo ONG"></Header>
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
    font-family: 'Times New Roman', Times, serif;
    color: #fff;
    background-color: #0092DD;
    border: 1px solid #ccc;
    display: flex;
    padding: 14px;
}
</style>