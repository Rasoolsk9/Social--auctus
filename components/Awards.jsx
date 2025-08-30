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
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">We’re multi award-winning</h2>
      <p className="mt-6 text-gray-600"> We know awards aren't the be-all and end-all.But we're proud of what we've achieved and the quality of work our team produces for our clients.
      </p>
      <ul className="mt-6 space-y-3">We know that awards aren’t the ultimate measure of success—but they are an important recognition of the hard work, creativity, and dedication our team puts into everything we do. For us, these accolades are not just trophies; they are a reflection of the trust our clients place in us and the measurable results we consistently deliver.
      Over the years, we’ve had the privilege of working with a wide range of brands and businesses, each with unique challenges and goals. Our approach has always been rooted in innovation, collaboration, and data-driven strategy, which has allowed us to deliver campaigns that not only perform but also stand out in a competitive industry. That effort has been recognized across multiple categories, demonstrating both the breadth and depth of our expertise.
      Some of the key highlights include winning Best Large Social Agency in both 2023 and 2024, a testament to our ability to scale impact while maintaining creativity and agility. We’ve also been awarded for Best Direct Response Campaign, which highlights our strength in driving tangible business results for clients. Additionally, our recognition for the Best Integrated Paid Media Campaign reflects how effectively we blend creativity with performance marketing across channels. Finally, our award for the Best Use of Facebook & Instagram Ads underlines our ability to harness social platforms to their fullest potential, reaching the right audiences with the right messages at the right time.These achievements motivate us to continue pushing boundaries, setting new benchmarks, and delivering exceptional value to our clients every day. </ul>
      <a href="#about" className="btn btn-outline mt-8">Learn More About Us</a>
    </div>
    <img src="/awards.jpg" className="rounded-3xl shadow-soft" alt="Awards" />
  </div>
</section>

  );
}
