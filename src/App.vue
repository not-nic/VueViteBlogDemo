<template>
    <!-- Look in router/index.js,  we do not need to add anything else to App.vue apart from this -->
    <router-view />
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;700&display=swap');

html, body, #app {
    font-family: 'Poppins', sans-serif;
    background-color: #1c1c1c;
    color: #ededed;
    margin: 0px;
    width: 100%;
    height: 100%;
}

.container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 30px;
}

</style>

