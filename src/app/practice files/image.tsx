import { client } from "@/sanity/lib/client";
import Image from 'next/image';

interface Post {
  title: string;
  content: string;
  imageUrl: string;
}

export default async function Imagepost() {
  const query = `*[_type == "imagePost"]{
    title, 
    content, 
    "imageUrl": image.asset->url
  }`;

  const posts = await client.fetch(query);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 bg-gray-100">
      {posts.map((post: Post, index: number) => (
        <div key={index} className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image */}
          {post.imageUrl && (
            <Image
              className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              src={post.imageUrl}
              alt={post.title}
              width={500} // Add width and height attributes
              height={400} // Set an appropriate height for your image
            />
          )}
          
          {/* Content */}
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-800 mb-4">{post.title}</h1>
            <p className="text-gray-600 leading-relaxed">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
