import Input from "./Input";

export default function ContactRefactor() {
  return (
    <form className="p-6">
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <button className="mt-3 bg-black text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
}
