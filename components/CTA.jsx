import { waLink, igLink, mailLink } from "@/lib/links";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-p my-20 rounded-3xl bg-brand text-gray-900 p-10 md:p-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl sm:text-5xl font-black">Don’t be sheepish — let’s talk</h3>
          <p className="mt-4">Go straight to chat or book a slot that suits you.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn bg-gray-900 text-white hover:opacity-90" href={waLink()}>WhatsApp</a>
            <a className="btn btn-outline bg-white" href={igLink()}>Instagram DM</a>
            <a className="btn btn-outline bg-white" href={mailLink()}>Email us</a>
            <a className="btn btn-outline bg-white" href="#book">Book a Call</a>
          </div>
        </div>
        <img alt="Team" src="/team.jpg" className="rounded-3xl shadow-soft" />
      </div>
    </section>
  );
}
