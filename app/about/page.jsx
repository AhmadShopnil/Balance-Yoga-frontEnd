import Image from "next/image";

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-14  relative h-[50vh] flex items-center justify-center bg-gradient-to-r from-primary/90 to-purple-700 text-white text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/about.jpg"
            alt="Yoga Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">About Balance Yoga</h1>
          <p className="max-w-2xl mx-auto text-lg">
            A sanctuary for wellness, mindfulness, and inner balance.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/about2.jpg"
              alt="Our Mission"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              At Balance Yoga, our mission is to create a welcoming space where
              people of all backgrounds can explore yoga and mindfulness. We
              believe yoga is not just about poses—it’s about harmony between
              mind, body, and soul.
            </p>
            <p className="text-gray-600">
              Through expert guidance, holistic classes, and a supportive
              community, we empower individuals to discover their fullest
              potential both on and off the mat.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container grid md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Years of Experience", value: "10+" },
            { label: "Happy Students", value: "5,000+" },
            { label: "Classes Weekly", value: "25+" },
            { label: "Certified Trainers", value: "12" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow p-8 hover:shadow-lg transition"
            >
              <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 container">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Meet Our <span className="text-primary">Team</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Ayesha Rahman",
              role: "Founder & Lead Instructor",
              img: "/images/team/1.jpg",
            },
            {
              name: "Rajiv Das",
              role: "Meditation Coach",
              img: "/images/team/2.jpg",
            },
            {
              name: "Sadia Noor",
              role: "Wellness Trainer",
              img: "/images/team/3.jpg",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden text-center p-6"
            >
              <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-6">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
