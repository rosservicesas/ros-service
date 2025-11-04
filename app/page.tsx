export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-10 text-center">
      <h1 className="text-5xl font-bold text-blue-900 mb-6">
        Bienvenue chez ROS Service
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mb-8">
        Spécialistes en rénovation, maçonnerie et services du bâtiment à Mantes-la-Ville.
      </p>
      <a
        href="/contact"
        className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
      >
        Nous contacter
      </a>
    </main>
  );
}

