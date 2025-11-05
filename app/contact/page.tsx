"use client";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#141414] py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl font-bold text-[#d4af37] mb-4">
          Contactez ROSSERVICE
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-white/80 mb-8">
          Besoin d’un devis ou d’un rendez-vous ? Retrouvez-nous ou contactez-nous via les informations ci-dessous.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-[#1b1b1b] p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-white">Adresse</h3>
            <p className="text-white/80 mt-2">9 Rue de Vert, 78711 Mantes-la-Ville</p>
            <h3 className="text-lg font-semibold text-white mt-6">Téléphones</h3>
            <p className="text-white/80 mt-2">06 23 01 18 03<br/>06 20 81 33 22</p>
            <h3 className="text-lg font-semibold text-white mt-6">Email</h3>
            <p className="text-white/80 mt-2">rosservice.sas@gmail.com</p>
          </div>

          <form className="bg-[#1b1b1b] p-6 rounded-2xl" onSubmit={(e) => e.preventDefault()}>
            <label className="text-white/80 block mb-2">Nom</label>
            <input className="w-full p-3 rounded-md bg-[#0f0f0f] text-white mb-4" required />

            <label className="text-white/80 block mb-2">Email</label>
            <input type="email" className="w-full p-3 rounded-md bg-[#0f0f0f] text-white mb-4" required />

            <label className="text-white/80 block mb-2">Message</label>
            <textarea rows={5} className="w-full p-3 rounded-md bg-[#0f0f0f] text-white mb-4" required />

            <button className="bg-gradient-to-r from-[#d4af37] to-yellow-400 text-black font-semibold px-6 py-3 rounded-md">Envoyer</button>
          </form>
        </div>
      </div>
    </main>
  );
}
