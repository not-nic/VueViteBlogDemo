<template>
    <div class="container">
        <Header :pageTitle="'Create A Post'" />
        <form onsubmit="return false">
            <label>Title:</label>
            <input v-model="postTitle" type="text">
            <label>Author:</label>
            <input v-model="postAuthor" type="text">
            <label >Content:</label>
            <textarea v-model="postContent" type="text"></textarea>
            <input class="submit" type="submit" value="Create Post!" v-on:click="addBlogpost()"/>
        </form>
        <span v-if="createdPost">Post Created! <br> Check /blogposts to see it.</span>
        <router-link class="link" :to="{ path: '/blogposts' }">Blogposts</router-link>
    </div>
</template>

<script>
import { useBlogStore } from "../stores/BlogStores"
import Header from "../components/Header.vue"

export default {
    setup() {
        const blogStore = useBlogStore()

        return {
            blogStore
        }
    },

    components: {
        Header
    },

    data() {
        return {
            postTitle: "",
            postAuthor: "",
            postContent: "",
            store: useBlogStore(),

            createdPost: false
        }
    },

    methods: {
        addBlogpost: function() {

            let post = {
                id: this.store.getNextId(),
                title: this.postTitle,
                author: this.postAuthor,
                content: this.postContent
            }

            this.store.addPost(post)

            this.createdPost = true
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
    form {
        width: 700px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    label {
        font-weight: 700;
    }

    input, textarea {
        padding: 12px;
        font-size: 16px;
        font-family: 'Work Sans', sans-serif;
        resize: vertical;
        border-radius: 5px;
        border: none;
    }

    .submit {
        background-color: #3fcf8e;
        color: white;
    }

    span {
        text-align: center;
    }

    .link {
        text-decoration: none;
        color: white;
    }

    .link:hover {
        color: #3fcf8e;
    }
</style>