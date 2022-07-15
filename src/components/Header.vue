<template>
    <h1>{{pageTitle}}</h1>
</template>

<script>
export default {
    // A prop is data that is immutable, you can change it when importing the Header component on Landing.vue
    props: {
        pageTitle: String,
    }
}
</script>

<style>

</style>