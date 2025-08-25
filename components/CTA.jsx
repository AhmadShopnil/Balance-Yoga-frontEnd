export default function CTA() {
  return (
    <section className="py-16 md:py-24 text-center">
      <div className="container">
        <div className="rounded-3xl bg-gradient-to-r from-pink-500 to-pink-400 text-white p-10 md:p-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Join Hundreds of Healthy People</h2>
          <p className="text-pink-50 mb-8 max-w-2xl mx-auto">Your path to wellness starts here. Book a class or a private session today.</p>
          <a href="#contact" className="bg-white text-pink-600 font-semibold px-8 py-3 rounded-full inline-block hover:opacity-90 transition">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}