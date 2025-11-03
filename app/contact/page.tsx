"use client";

export default function Contact() {
  return (
    <section className="p-10 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 mb-8 text-center">
        Contactez ROS Service
      </h1>

      {/* Coordonnées */}
      <div className="bg-gray-100 p-8 rounded-2xl shadow-lg mb-10">
        <p className="mb-3">
          📍 <strong>Adresse :</strong> 9 Rue de Vert, 78711 Mantes-la-Ville
        </p>
        <p className="mb-3">
          📞 <strong>Téléphone :</strong> 06 23 01 18 03 • 06 20 81 33 22
        </p>
        <p className="mb-6">
          ✉️ <strong>Email :</strong>{" "}
          <a
            href="mailto:rosservice.sas@gmail.com"
            className="text-blue-700 underline hover:text-blue-900"
          >
            rosservice.sas@gmail.com
          </a>
        </p>

        {/* Formulaire */}
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">
          Envoyez-nous un message
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Votre email"
            className="border border-gray-300 p-3 rounded-lg"
          />
          <textarea
            placeholder="Votre message"
            rows="4"
            className="border border-gray-300 p-3 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Envoyer
          </button>
        </form>
      </div>

      {/* Carte Google Maps */}
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.266635276725!2d1.6947774768274024!3d48.96793997134032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e69ad1b930b4a7%3A0x1cb2d9a6d9d1a0f1!2s9%20Rue%20de%20Vert%2C%2078711%20Mantes-la-Ville!5e0!3m2!1sfr!2sfr!4v1730580000000!5m2!1sfr!2sfr"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Contactez-nous</h1>
      <p className="text-gray-700 mb-4 text-center">
        Nous serions ravis de discuter de vos projets de rénovation ou de construction.
      </p>

      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center mb-8">
        <p><strong>Téléphone :</strong> 06 23 01 18 03 / 06 20 81 33 22</p>
        <p><strong>Email :</strong> rosservice.sas@gmail.com</p>
        <p><strong>Adresse :</strong> 9 Rue de Vert, 78711 Mantes-la-Ville</p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2613.765429843148!2d1.7085!3d48.9773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e69b0b2c4eebdf%3A0x6a9b0b8c6e6dd1e7!2s9%20Rue%20de%20Vert%2C%2078711%20Mantes-la-Ville!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
        width="100%"
        height="350"
        allowFullScreen=""
        loading="lazy"
        className="rounded-xl shadow-md"
      ></iframe>
    </main>
  );
}
