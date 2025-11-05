"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* SECTION HERO */}
      <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/hero-renovation.jpg" // 👉 place une belle photo dans public/
          alt="Travaux de rénovation ROSService"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 px-6">
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ROSSERVICE
          </motion.h1>
          <motion.p
            className="text-lg sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, delay: 0.3 }}
          >
            Spécialiste en rénovation intérieure et extérieure — tout corps d’état en Île-de-France.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 0.6 }}
          >
            <Link
              href="/projects"
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition"
            >
              Voir nos réalisations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION SERVICES */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Nos domaines d’intervention</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Depuis plus de <strong>10 ans</strong>, ROSSERVICE accompagne ses clients dans leurs projets
          de rénovation, de construction et d’aménagement. Nous assurons des prestations
          sur mesure avec une qualité irréprochable.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Peinture & Finitions", icon: "🎨", desc: "Peinture intérieure, enduits, finitions haut de gamme." },
            { title: "Maçonnerie & Gros Œuvre", icon: "🧱", desc: "Création, ouverture, cloisonnement, béton, plâtre." },
            { title: "Plomberie & Salle de Bain", icon: "🚿", desc: "Installation sanitaire complète et rénovation clé en main." },
            { title: "Électricité", icon: "💡", desc: "Mise aux normes, éclairage moderne, domotique." },
            { title: "Menuiserie sur mesure", icon: "🪚", desc: "Mobilier, escaliers, rangements et agencements personnalisés." },
            { title: "Revêtements de sols", icon: "🏡", desc: "Parquet, carrelage, sols PVC — pose et rénovation." },
          ].map((s, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION AVANTAGES */}
      <section className="bg-yellow-500 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Pourquoi choisir ROSSERVICE ?</h2>
        <p className="max-w-3xl mx-auto text-lg mb-10">
          Parce que la qualité, la réactivité et la satisfaction client sont au cœur de nos valeurs.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            "Travail soigné & rapide",
            "Matériaux de qualité",
            "Garantie décennale",
            "Devis gratuit sous 48h",
            "Équipe qualifiée et passionnée",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full text-lg font-medium"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION CONTACT */}
      <section className="py-20 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Vous avez un projet ?</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Contactez-nous dès aujourd’hui pour obtenir un devis gratuit et des conseils adaptés à vos besoins.
        </p>
        <Link
          href="/contact"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition"
        >
          Demander un devis
        </Link>
      </section>
    </main>
  );
}
