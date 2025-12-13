export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 shadow">
      <h2 className="font-bold text-xl">DevFolio Pro</h2>
      <ul className="flex gap-6">
        <li>Home</li><li>About</li><li>Blog</li><li>Contact</li>
      </ul>
    </nav>
  );
}
