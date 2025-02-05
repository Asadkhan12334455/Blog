import { client } from "@/sanity/lib/client";

interface Post {
  _id: string;  // Assuming you have a field "_id" in your Sanity documents
  title: string;
  content: string;
}

export default async function Post() {
  const query = `*[_type == "post"]{
    _id,
    title,
    content
  }`;

  const boxcontent = await client.fetch(query);

  return (
    <>
      <div>
        <h1 className="text-center text-8xl font-bold text-blue-500 p-4"> 
          Post
        </h1>
        {
          boxcontent.map((post: Post) => (
            <div key={post._id} className="bg-gray-200 p-4 m-4">
              <h1 className="text-center pt-6 pb-3 text-6xl text-blue-700">{post.title}</h1>
              <p className="text-center text-3xl pt-6 pb-3 text-blue-700">{post.content}</p>
            </div>
          ))
        }
      </div>
    </>
  );
}
