import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import Awards from "../components/Awards.jsx"
import CTA from "../components/CTA.jsx";
import CalendlyEmbed from "../components/CalendlyEmbed.jsx";
import Footer from "../components/Footer.jsx";
import FloatingChat from "../components/FloatingChat.jsx";
import { CONTACT } from "../lib/links.js";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <section id="about" className="container-p py-12">
          <h2 className="text-3xl font-black">We blend creative and performance</h2>
          <p className="mt-4 text-gray-600 max-w-3xl">
            Not many creative agencies understand performance, and not many performance agencies understand creative.
            This is where we're different. Whether we're growing your communities, delivering performance-driven Paid Media,
            or producing social-first Creative — everything is backed by data and insight.
          </p>
        </section>
        <Services />
        <Awards />
        <CTA />
        <CalendlyEmbed url={CONTACT.calendly} />
      </main>
      <Footer />
      <FloatingChat />
    </>
  );
}
