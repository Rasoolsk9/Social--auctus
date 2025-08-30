"use client";
import { useState } from "react";

const services = [
  {
    title: "Social",
    points: [
      "Social Strategy",
      "Channel & Community Management",
      "Social-first Content Creation",
      "Social Listening & Insights",
    ],
    details:
      "Our Social service helps you build, manage, and grow online communities with tailored strategies, engaging campaigns, and consistent performance insights.",
  },
  {
    title: "Paid",
    points: [
      "Paid Social & Paid Search",
      "Full-Funnel Media Strategy",
      "Creative + Analytics + Testing",
      "Feed Optimisation & Shopping",
    ],
    details:
      "Our Paid service delivers high-performance ad campaigns across all platforms with a full-funnel strategy, advanced targeting, and real-time optimization for ROI.",
  },
  {
    title: "Creative",
    points: [
      "Organic & Paid Social Video",
      "UGC to High-Production",
      "Creative Strategy & Art Direction",
      "Motion Design & Graphics",
    ],
    details:
      "Our Creative team crafts compelling visuals, storytelling, and production assets that connect with audiences and elevate your brand identity.",
  },
];

export default function Services() {
  const [open, setOpen] = useState(null);

  const toggleService = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our full-service offering...
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <ul className="mb-6 space-y-2 text-gray-700">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    ✅ <span className="ml-2">{point}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => toggleService(index)}
                className="px-4 py-2 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition"
              >
                {open === index
                  ? "Hide Details"
                  : `Learn More about ${service.title}`}
              </button>

              {open === index && (
                <div className="mt-6 bg-white border border-gray-200 rounded-xl shadow-md p-5 text-gray-900 transition-all duration-300">
                  <h4 className="text-lg font-semibold mb-2">
                    {service.title} Services
                  </h4>
                  <p className="leading-relaxed text-gray-700">
                    {service.details}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
