"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesPage() {
  const [selected, setSelected] = useState(null);

  const images = [
    { src: "/projects/cuisine-moderne.jpg", title: "Cuisine moderne sur mesure" },
    { src: "/projects/salle-de-bain-design.jpg", title: "Salle de bain design" },
    { src: "/projects/menuiserie.jpg", title: "Menuiserie sur mesure" },
    { src: "/projects/terrasse-bois.jpg", title: "Aménagement extérieur" },
    { src: "/projects/peinture-murale.jpg", title: "Peinture & finitions" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Section de présentation */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
          Réalisations & Savoir-Faire ROSSERVICE
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <strong>ROSSERVICE</strong> met à votre service plus de
          <strong> 10 ans d’expérience</strong> dans la rénovation tout corps d’état.
          Chaque projet est réalisé avec passion, précision et souci du détail — qu’il s’agisse
          de <strong>cuisines</strong>, <strong>salles de bain</strong>,
          <strong>menuiseries</strong> ou <strong>aménagements extérieurs</strong>.
        </p>
      </motion.section>

      {/* Galerie d’images */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-lg"
            onClick={() => setSelected(img)}
          >
            <Image
              src={img.src}
              alt={img.title}
              width={600}
              height={400}
              quality={90}
              className="object-cover w-full h-72 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 text-white flex items-center justify-center text-xl font-semibold transition">
              {img.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src={selected.src}
                alt={selected.title}
                width={1200}
                height={800}
                quality={95}
                className="rounded-2xl shadow-2xl max-h-[90vh] object-contain"
              />
              <p className="text-white text-center mt-4 text-lg">{selected.title}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
