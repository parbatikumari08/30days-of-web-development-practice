export async function getBlogs() {
  const res = await fetch("http://localhost:4000/blog");
  return res.json();
}
