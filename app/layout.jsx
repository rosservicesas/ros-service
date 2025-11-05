import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ROSSERVICE | Rénovation intérieure & extérieure",
  description:
    "ROSSERVICE - Spécialiste en rénovation tout corps d’état à Mantes-la-Ville et en Île-de-France.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-[#1c1c1c] text-white font-sans antialiased">
        {/* HEADER */}
        <header className="bg-black/60 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 py-4 px-6">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/Logo.png"
                alt="Logo ROSSERVICE"
                width={54}
                height={54}
                className="object-contain rounded-md"
                priority
              />
              <span className="text-2xl font-extrabold tracking-widest text-[#d4af37]">
                ROSSERVICE
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-[#d4af37] transition">
                Accueil
              </Link>
              <Link href="/services" className="hover:text-[#d4af37] transition">
                Nos réalisations
              </Link>
              <Link href="/contact" className="hover:text-[#d4af37] transition">
                Contact
              </Link>
            </nav>

            {/* menu mobile simple */}
            <div className="md:hidden text-sm">
              <Link href="/services" className="px-3 py-2 bg-[#2a2a2a] rounded-lg text-sm">
                Menu
              </Link>
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-white/6 bg-black/70">
          <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Image src="/Logo.png" alt="Logo" width={48} height={48} className="object-contain" />
              <div>
                <div className="text-[#d4af37] font-bold">ROSSERVICE</div>
                <div className="text-sm text-white/70">Rénovation intérieure & extérieure</div>
              </div>
            </div>

            <div className="text-center md:text-left text-sm text-white/70">
              <div>9 Rue de Vert, 78711 Mantes-la-Ville</div>
              <div className="mt-1">Tél : 06 23 01 18 03 · 06 20 81 33 22</div>
              <div className="mt-1">rosservice.sas@gmail.com</div>
            </div>

            <div className="text-xs text-white/50">
              © {new Date().getFullYear()} ROSSERVICE — Tous droits réservés
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
