export default function Portfolio() {
  const projects = [
    { name: "UI Design System", desc: "Reusable UI library" },
    { name: "API Service", desc: "Fast REST API system" }
  ];

  return (
    <section className="p-10">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      {projects.map((p, i)=>(
        <div key={i} className="p-4 border mb-4 rounded">
          <h2 className="text-xl font-semibold">{p.name}</h2>
          <p>{p.desc}</p>
        </div>
      ))}
    </section>
  );
}
