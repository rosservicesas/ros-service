"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  { src: "/projects/amenagement-exterieur.jpeg", title: "Aménagement extérieur" },
  { src: "/projects/salle de bain1.jpeg", title: "Salle de bain moderne" },
  { src: "/projects/salle de bain.jpeg", title: "Salle de bain design" },
  { src: "/projects/salle de douche.jpeg", title: "Salle de douche italienne" },
  { src: "/projects/sejour-cuisine.jpeg", title: "Séjour & cuisine" },
  { src: "/projects/cuisine-moderne.jpeg", title: "Cuisine moderne" },
  { src: "/projects/cuisine-bois.jpeg", title: "Cuisine bois" },
  { src: "/projects/sol parquet.jpeg", title: "Pose de parquet" },
  { src: "/projects/wc.jpeg", title: "WC" },
  { src: "/projects/douche.jpeg", title: "Douche" },
  { src: "/projects/meinuserie sur mesure.jpeg", title: "Menuiserie sur mesure" },
];

export default function ServicesPage() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-[#d4af37] mb-6">Nos réalisations</h1>
        <p className="text-white/70 mb-8">Cliquez sur une image pour l’agrandir.</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg bg-[#101010]"
              onClick={() => setSelected(img)}
            >
              <div className="relative w-full h-64">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="max-w-4xl w-full">
              <div className="relative w-full h-[80vh] bg-black rounded-xl overflow-hidden">
                <Image src={selected.src} alt={selected.title} fill className="object-contain" unoptimized />
              </div>
              <div className="text-center mt-4 text-white">
                <h3 className="text-xl font-semibold">{selected.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
