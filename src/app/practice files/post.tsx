import { client } from "@/sanity/lib/client"

export default async function  Post (){

    const query = `*[_type == "post"]{
        title, content
      }`

      const boxcontent = await client.fetch(query)
return(
    <>
    <div>
        <h1 className="text-center text-8xl font-bold text-blue-500 p-4"> 
            Post
        </h1>
        {
            boxcontent.map((post: any)=>(
                <div className="bg-gray-200 p-4 m-4" >
                    {post.id}
                    <h1 className="text-center pt-6 pb-3 text-6xl text-blue-700">{post.title}</h1>
                    <p className="text-center text-3xl pt-6 pb-3 text-blue-700">{post.content}</p>
                </div>
            ))
        }
    </div>
    </>
)
}