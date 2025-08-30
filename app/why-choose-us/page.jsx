import { CheckCircle, Users, Award, Heart } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-white to-pink-50 min-h-screen">
      {/* Hero Section */}
      <div className="container text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Why Choose <span className="text-primary">Balance Yoga?</span>
        </h1>
        <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
          At Balance Yoga, we don’t just teach yoga — we help you transform
          your lifestyle. Backed by experienced instructors, proven methods,
          and a supportive community, your journey to balance begins here.
        </p>
      </div>

      {/* USPs Grid */}
      <div className="container grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-20">
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <Award size={40} className="text-primary mb-4" />
          <h3 className="font-bold text-xl mb-2">Certified Instructors</h3>
          <p className="text-gray-600">
            Learn from internationally certified yoga experts with years of
            teaching experience.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <Users size={40} className="text-primary mb-4" />
          <h3 className="font-bold text-xl mb-2">Community Support</h3>
          <p className="text-gray-600">
            Join a growing family of like-minded yogis who motivate and grow
            together.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <Heart size={40} className="text-primary mb-4" />
          <h3 className="font-bold text-xl mb-2">Holistic Wellness</h3>
          <p className="text-gray-600">
            Beyond yoga poses, we focus on breathwork, mindfulness, and
            mental clarity.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition">
          <CheckCircle size={40} className="text-primary mb-4" />
          <h3 className="font-bold text-xl mb-2">Proven Results</h3>
          <p className="text-gray-600">
            95% of our students report improved flexibility, focus, and stress
            relief within 8 weeks.
          </p>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="bg-primary text-white py-16 mb-20">
        <div className="container grid md:grid-cols-3 gap-10 text-center">
          <div>
            <h2 className="text-4xl font-bold mb-2">10+</h2>
            <p className="text-lg">Years of Experience</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">1,200+</h2>
            <p className="text-lg">Happy Clients</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-2">95%</h2>
            <p className="text-lg">Reported Transformation</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Start Your Transformation Today
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Don’t just join a yoga class — join a movement towards a healthier,
          happier, and more mindful you.
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary text-white font-semibold px-10 py-4 rounded-full hover:opacity-90 transition text-lg"
        >
          Book a Free Trial Class
        </a>
      </div>
    </section>
  );
}
