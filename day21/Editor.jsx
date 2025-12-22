import { useState } from "react";

export default function Editor() {
  const [title,setTitle] = useState("");
  const [content,setContent] = useState("");

  return (
    <div className="p-10">
      <input className="border p-2 w-full mb-3" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <textarea className="border p-2 w-full mb-3" placeholder="Content" value={content} onChange={(e)=>setContent(e.target.value)} />
      <button className="bg-black text-white p-2 rounded">Publish</button>
    </div>
  );
}
