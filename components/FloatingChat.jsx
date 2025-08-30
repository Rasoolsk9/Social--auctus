"use client";
import { waLink, igLink, mailLink } from "@/lib/links";

export default function FloatingChat() {
  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-2 z-50">
      <a href={waLink()} className="rounded-full p-4 bg-green-500 text-white shadow-soft" aria-label="Chat on WhatsApp">🟢</a>
      <a href={igLink()} className="rounded-full p-4 bg-pink-500 text-white shadow-soft" aria-label="Instagram DM">📸</a>
      <a href={mailLink()} className="rounded-full p-4 bg-gray-900 text-white shadow-soft" aria-label="Email">✉️</a>
    </div>
  );
}
