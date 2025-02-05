import { defineType } from "sanity";


const imagePost = defineType({
    title: "Image Post", 
    name: "imagePost", 
    type: "document", 
    fields: [
      {
        title: "Title", 
        name: "title", 
        type: "string", 
      },
      {
        title: "Content", 
        name: "content",
        type: "text", 
      },
      {
        title: "Image", 
        name: "image", 
        type: "image", 
     }
     
    ]
})
export default imagePost;