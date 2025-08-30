export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-p py-16 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-extrabold text-xl">Social — Auctus</div>
          <p className="text-sm text-gray-300 mt-4">Stay in touch with the herd and receive up-to-date insights, strategies and news.</p>
          <form className="mt-4 flex items-center">
            <input placeholder="Email" className="rounded-l-2xl px-4 py-3 text-black w-full" />
            <button className="rounded-r-2xl px-4 py-3 bg-brand text-black font-medium">→</button>
          </form>
        </div>
        <div>
          <div className="font-semibold mb-3">Our Services</div>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/services/social" className="hover:text-white">Social</a></li>
            <li><a href="/services/paid" className="hover:text-white">Paid</a></li>
            <li><a href="/services/creative" className="hover:text-white">Creative</a></li>
            <li><a href="/services/influencer" className="hover:text-white">Influencer</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#insights" className="hover:text-white">Newsletter</a></li>
            <li><a href="#work" className="hover:text-white">Case Studies</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-p py-6 text-sm text-gray-400">© {new Date().getFullYear()} Social Auctus. All rights reserved.</div>
      </div>
    </footer>
  );
}
