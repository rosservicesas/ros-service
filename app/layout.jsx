import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "ROS SERVICE - Rénovation & BTP en Île-de-France",
  description:
    "Société ROS Service, spécialiste en rénovation intérieure et extérieure depuis plus de 10 ans : peinture, maçonnerie, plomberie, électricité, revêtements de sols et plus encore.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        {/* HEADER */}
        <Header />

        {/* LOGO */}
        <div className="flex justify-center my-6">
          <Image
            src="/Logo.png" // le logo doit être dans /public
            alt="Logo ROS Service"
            width={200}
            height={200}
            className="rounded-xl shadow-md"
          />
        </div>

        {/* CONTENU PRINCIPAL */}
        <main className="flex-1 container mx-auto px-4">{children}</main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
