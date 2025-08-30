"use client";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function FloatingChat() {
  return (
    <div className="fixed right-5 bottom-5 flex flex-col gap-4 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/917993909809" // replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/____sharuk__" // replace with your Instagram page
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaInstagram size={28} />
      </a>
    </div>
  );
}

