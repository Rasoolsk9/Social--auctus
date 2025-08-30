import { CONTACT } from "@/lib/links";

export default function Services() {
  const cards = [
    {
      title: "Social",
      bullets: [
        "Social Strategy",
        "Channel & Community Management",
        "Social-first Content Creation",
        "Social Listening & Insights"
      ],
      cta: { label: "Learn More About Social", href: "/services/social" }
    },
    {
      title: "Paid",
      bullets: [
        "Paid Social & Paid Search",
        "Full-Funnel Media Strategy",
        "Creative + Analytics + Testing",
        "Feed Optimisation & Shopping"
      ],
      cta: { label: "Learn More About Paid", href: "/services/paid" }
    },
    {
      title: "Creative",
      bullets: [
        "Organic & Paid Social Video",
        "UGC to High-Production",
        "Creative Strategy & Art Direction",
        "Motion Design & Graphics"
      ],
      cta: { label: "Learn More About Creative", href: "/services/creative" }
    }
  ];
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container-p">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-10">Our full‑service offering…</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="rounded-3xl bg-white p-8 shadow-soft border border-gray-100">
              <div className="text-2xl font-bold mb-4">{c.title}</div>
              <ul className="space-y-3 text-gray-700">
                {c.bullets.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1">✅</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href={CONTACT.calendly} 
 target="_blank" rel="noopener noreferrer" className="btn bg-black text-white">Book Our Services</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
