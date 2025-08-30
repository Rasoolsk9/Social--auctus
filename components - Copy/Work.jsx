export default function Work() {
  const cases = [
    { brand: "Arla", metric: "3.2x ROAS", img: "/case-1.jpg" },
    { brand: "Premier Inn", metric: "+48% engagement", img: "/case-2.jpg" },
    { brand: "Passenger", metric: "-32% CPA", img: "/case-3.jpg" }
  ];
  return (
    <section id="work" className="bg-gray-50 py-20">
      <div className="container-p">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Selected case studies</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {cases.map((c, i) => (
            <article key={i} className="rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-soft">
              <img src={c.img} alt={c.brand} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm text-gray-500">{c.brand}</div>
                <div className="text-xl font-semibold">{c.metric}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
