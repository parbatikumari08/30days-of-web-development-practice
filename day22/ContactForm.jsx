import useFormValidation from "./useFormValidation";

function validate(values) {
  const errors = {};
  if (!values.name) errors.name = "Name is required";
  if (!values.email) errors.email = "Email is required";
  if (!values.message) errors.message = "Message is required";
  return errors;
}

export default function ContactForm() {
  const { values, errors, handleChange, handleSubmit } =
    useFormValidation({ name: "", email: "", message: "" }, validate);

  function submitForm() {
    console.log("Form submitted:", values);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(submitForm);
      }}
      className="p-6 max-w-md"
    >
      <h2 className="text-2xl font-bold mb-4">Contact</h2>

      <input
        name="name"
        placeholder="Name"
        className="border p-2 w-full mb-1"
        onChange={handleChange}
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <input
        name="email"
        placeholder="Email"
        className="border p-2 w-full mb-1 mt-3"
        onChange={handleChange}
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <textarea
        name="message"
        placeholder="Message"
        className="border p-2 w-full mb-1 mt-3"
        onChange={handleChange}
      />
      {errors.message && <p className="text-red-500">{errors.message}</p>}

      <button className="mt-4 bg-black text-white px-4 py-2 rounded">
        Send
      </button>
    </form>
  );
}
