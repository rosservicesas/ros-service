export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-900">ROS Service</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Accueil</a></li>
          <li><a href="/services" className="hover:underline">Services</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

