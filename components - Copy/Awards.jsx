export default function Awards() {
  const items = [
    "Best Large Social Agency (2023, 2024)",
    "Best Direct Response Campaign",
    "Best Integrated Paid Media Campaign",
    "Best Use of Facebook & Instagram Ads"
  ];
  return (
    <section className="py-20">
      <div className="container-p grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">We’re multi award‑winning</h2>
          <p className="mt-6 text-gray-600">
            Awards aren’t the be‑all and end‑all — but they do show the quality and consistency of our work.
          </p>
          <ul className="mt-6 space-y-3">
            {items.map(x => (
              <li key={x} className="flex items-start gap-3">
                <span className="mt-1">🏆</span><span>{x}</span>
              </li>
            ))}
          </ul>
          <a href="#about" className="btn btn-outline mt-8">Learn More About Us</a>
        </div>
        <img src="/awards.jpg" className="rounded-3xl shadow-soft" alt="Awards" />
      </div>
    </section>
  );
}
