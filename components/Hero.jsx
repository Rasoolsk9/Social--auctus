"use client";
import { waLink } from "@/lib/links";

export default function Hero() {
  return (
    <section className="container-p grid md:grid-cols-2 gap-10 items-center py-20">
      <div>
        <p className="badge mb-6 font-medium text-sm bg-black text-white">Social Auctus</p>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
          The Results driven <span className="text-brand">social-first</span> agency
          you’ve been looking for
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          We blend creative and performance to grow your brand communities.
          Chat with us and book in under 60 seconds.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
           <a href="#contact" className="btn bg-black text-white hover:bg-gray-800">Book Our Service  </a>
        </div>
      </div>
      <div className="mx-auto">
        <div className="phone-frame mx-auto">
          <div className="phone-notch" />
          <video className="phone-video" autoPlay muted loop playsInline>
            <source src="/myshowreel.mp4" type="video/mp4" />
          </video>
        </div>
        <p className="text-center text-sm text-gray-500 mt-3">A quick peek at our creatives.</p>
      </div>
    </section>
  );
}
