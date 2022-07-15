<template>
    <div class="container">
        <!-- V-for, is looping over each post in the store's blogpost -->
        <div class="blogpost" v-for="post in store.blogposts" :key="post.id">
            <h2>{{post.title}}</h2>
            <h3>{{post.author}}</h3>
            <span>{{post.content}}</span>
        </div>
    </div>
</template>

<script>
// Imported  Store from pinia 
import { useBlogStore } from "../stores/BlogStores"

export default {
    // I use a setup here, if not pinia will fight you saying it doesn't exist because the page is loaded before Pinia (I don't think this is the correct fix, but it works)
    setup() {
        const blogStore = useBlogStore()

        return {
            blogStore
        }
    },

    data() {
        return {
            store: useBlogStore()
        }
    }
}
</script>

<style>
    h2, h3, span {
        margin: 0px;
    }

    h3 {
        font-weight: 300;
        font-size: 16px;
    }

    .blogpost {
        width: 1000px;
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 25px;
        border-radius: 12px;
        border: solid 1.5px gray;
    }

    .blogpost:hover {
        border: solid 1.5px #3fcf8e;
    }

    @media only screen and (max-width: 600px) {
        .blogpost {
            width: 100%;
        }
    }
</style>