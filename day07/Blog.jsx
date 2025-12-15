export default function Blog() {
  const posts = [
    { title: "How Web Apps Work", date: "2025-01-01" },
    { title: "Understanding React Architecture", date: "2025-01-05" }
  ];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      {posts.map((post,i)=>(
        <div key={i} className="border p-4 mb-4 rounded">
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-600">{post.date}</p>
        </div>
      ))}
    </div>
  );
}
