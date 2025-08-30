export default function CalendlyEmbed({ url }) {
  return (
    <div id="book" className="container-p py-16">
      <h3 className="text-3xl font-black mb-6">Book an intro call</h3>
      <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-soft">
        <iframe
          title="Calendly Scheduling"
          src={url}
          width="100%"
          height="720"
          frameBorder="0">
        </iframe>
      </div>
    </div>
  );
}
