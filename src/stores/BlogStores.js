import { defineStore } from "pinia";

export const useBlogStore = defineStore("BlogStore", {

    state: () => ({

        blogposts: [
            {
                id: 0, 
                title: "First Blogpost on ReallyCoolBlog.com", 
                author: "Nick", 
                content: "Damn this new website reallycoolblog.com is nice damn, that css needs some work though, who thought adding margin 1000px to everything was a good idea."
            },
            {
                id: 1, 
                title: "I'm starting to think cats are cool.", 
                author: "Gaz", 
                content: "Look my dog is great and all that, but my girlfriends cat always approaches me and I think its pretty cool now, might buy one."
            },
            {
                id: 2, 
                title: "I'm not offline, I'm secretly making my inventory system", 
                author: "Mik", 
                content: "I've bashed Java all these years, but honestly I can really see why people like it, I've started using Spring Web & Spring Data to make the Tinkerbrick™ Inventory System. Release Q4 2026"
            }
        ]

    }),

    actions: {
        addPost(post) {
            this.blogposts.push(post)
        },

        getNextId() {
            return this.blogposts.length
        }
    }
})