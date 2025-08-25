export default function Benefits() {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Benefits of Yoga</h2>
          <p className="text-gray-600 mb-4">
            Build strength, improve flexibility, and cultivate a calm mind. Yoga supports holistic wellness through mindful movement and breathwork.
          </p>
          <p className="text-gray-600">
            Whether you seek energy, relaxation, or a balanced routine, find a class that aligns with your goals and lifestyle.
          </p>
        </div>
        <div className="rounded-3xl bg-pink-100 p-8 text-center">
          <p className="text-2xl font-bold mb-3">Be Fit Today</p>
          <p className="text-gray-700 mb-6">Start your wellness journey with personalized sessions crafted for you.</p>
          <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-full font-semibold inline-block hover:opacity-90 transition">
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
}