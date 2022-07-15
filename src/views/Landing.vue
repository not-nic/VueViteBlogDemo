<template>
<div class="container">
    <Header :pageTitle="'Really Cool Blog'"/>
    <div class="routes">
        <!-- Have it as a button with a on click method -->
        <button v-on:click="goToPosts()">Vist Posts</button>
        <!-- have it as a router-link, kinda looks like a link (I think?) but you can css it -->
        <router-link class="link" :to="{ path: '/createpost' }">Create Post</router-link>
    </div>
</div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
    components: {
        Header
    }, 

    methods: {
        goToPosts: function() {
            // In methods anything to do with vue router is done with $router
            this.$router.push( { path: "blogposts" } )
        }
    }
}
</script>

<style>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 30px;
    }

    .routes {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    
    button {
        padding: 10px;
        border: none;
        border-radius: 4px;
        background-color: #3fcf8e;
        font-family: 'Poppins', sans-serif;
        color: white;
    }

    button:hover {
        box-shadow: 0px 0px 0px 5px rgba(159, 159, 159, 0.16);
    }

    .link {
        text-decoration: none;
        color: white;
    }

    .link:hover {
        color: #3fcf8e;
        text-decoration: underline;
    }
</style>