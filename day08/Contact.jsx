export default function Contact() {
  return (
    <form className="p-10 max-w-lg">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <input className="border p-2 w-full mb-3" placeholder="Your Name" />
      <input className="border p-2 w-full mb-3" placeholder="Email" />
      <textarea className="border p-2 w-full mb-3" placeholder="Message"></textarea>
      <button className="bg-black text-white p-3 rounded">Send</button>
    </form>
  );
}
