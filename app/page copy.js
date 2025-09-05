import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/bg.svg"
        alt="Background"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Launching Soon Banner */}
      <div className="absolute top-1/3 ml-16">
        <Image
          src="/logo.jpg"
          alt="Launching Soon"
          width={800}
          height={400}
          className="drop-shadow-lg"
        />
      </div>

      {/* Tagline */}
      <div className="absolute top-1/3 right-12 text-right text-white max-w-sm">
        <p className="text-lg">Experience</p>
        <h2 className="text-4xl font-bold leading-tight">
          Luxury <span className="text-gray-300">&</span> Convenience
        </h2>
        <p className="text-lg mt-2">with Fenix Air</p>
      </div>

      {/* Bottom Navigation */}
      <nav className="absolute bottom-6 right-12 text-white flex space-x-8 text-lg">
        <a href="#" className="hover:text-yellow-400">Charters</a>
        <a href="#" className="hover:text-yellow-400">Flight School</a>
        <a href="#" className="hover:text-yellow-400">Helicopter</a>
      </nav>

      {/* Left Social Icons */}
      <div className="absolute left-4 top-1/3 flex flex-col space-y-4 text-yellow-400">
        <a href="#" className="bg-black/70 p-3 rounded-md hover:bg-yellow-500 hover:text-black transition">
          <FaWhatsapp size={20} />
        </a>
        <a href="#" className="bg-black/70 p-3 rounded-md hover:bg-yellow-500 hover:text-black transition">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="bg-black/70 p-3 rounded-md hover:bg-yellow-500 hover:text-black transition">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="bg-black/70 p-3 rounded-md hover:bg-yellow-500 hover:text-black transition">
          <FaLinkedin size={20} />
        </a>
      </div>
    </main>
  );
}
