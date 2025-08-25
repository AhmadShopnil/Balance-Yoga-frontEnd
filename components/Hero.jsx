export default function Hero() {
  return (
    <section className="pt-28 md:pt-36 pb-12 md:pb-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Experienced Instructor <br className="hidden md:block" /> in Bangladesh
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Learn the art of balance, breathing, and mindfulness. Start your transformation journey today with guided yoga practices tailored to your lifestyle.
        </p>
        <a
          href="#contact"
          className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
        >
          Contact Today
        </a>
      </div>
    </section>
  );
}