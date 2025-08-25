import Image from "next/image";

const classData = {
  "healing": {
    title: "HEALING",
    img: "/images/service/1.jpg",
    desc: "Hatha Yoga focuses on physical postures (asanas) and breathing techniques (pranayama). It helps you improve flexibility, strength, and mindfulness.",
    benefits: [
      "Improves flexibility and posture",
      "Reduces stress and anxiety",
      "Boosts energy and vitality",
    ],
    schedule: [
      { day: "Monday", time: "7:00 AM - 8:00 AM" },
      { day: "Wednesday", time: "6:00 PM - 7:00 PM" },
      { day: "Saturday", time: "9:00 AM - 10:00 AM" },
    ],
  },
  "meditation": {
    title: "Meditation",
    img: "/images/service/2.jpg",
    desc: "Vinyasa Yoga is a dynamic practice that links breath with movement, offering strength, flexibility, and mindfulness.",
    benefits: [
      "Enhances strength and stamina",
      "Encourages mindfulness",
      "Boosts cardiovascular health",
    ],
    schedule: [
      { day: "Tuesday", time: "6:30 PM - 7:30 PM" },
      { day: "Thursday", time: "7:00 AM - 8:00 AM" },
    ],
  },
  "weight-loss": {
    title: "Weight Loss",
    img: "/images/service/3.jpg",
    desc: "Meditation helps calm the mind, reduce stress, and cultivate self-awareness.",
    benefits: [
      "Improves focus and clarity",
      "Reduces stress & anxiety",
      "Promotes better sleep",
    ],
    schedule: [
      { day: "Friday", time: "6:00 PM - 7:00 PM" },
      { day: "Sunday", time: "8:00 AM - 9:00 AM" },
    ],
  },
  "yoga-for-kids": {
    title: "Yoga for Kids",
   img: "/images/service/4.jpg",
    desc: "Gentle yoga practices designed to support expecting mothers with relaxation, strength, and preparation for childbirth.",
    benefits: [
      "Relieves pregnancy discomfort",
      "Builds strength & flexibility",
      "Encourages relaxation",
    ],
    schedule: [
      { day: "Monday", time: "10:00 AM - 11:00 AM" },
      { day: "Thursday", time: "5:00 PM - 6:00 PM" },
    ],
  },
};

export default function ServiceSingle({ params }) {
  const data = classData[params.slug];

  if (!data) return <div className="container pt-28 md:pt-36 pb-12 md:pb-20">Class not found</div>;

  return (
    <div className="">
      {/* Hero */}
      <section className="pt-12  relative h-[50vh] flex items-center justify-center text-white">
        <Image
          src={data.img}
          alt={data.title}
          fill
          className="object-cover brightness-50"
        />
        <h1 className="text-5xl font-bold relative z-10">{data.title}</h1>
      </section>

      {/* Content */}
      <section className="py-20 container grid md:grid-cols-2 gap-12">
        {/* Left: Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About {data.title}</h2>
          <p className="text-gray-700 mb-6">{data.desc}</p>
          <h3 className="text-xl font-semibold mb-3">Benefits</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
            {data.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-6 py-3 rounded-xl hover:bg-purple-800 transition"
          >
            Join This Class
          </a>
        </div>

        {/* Right: Schedule */}
        <div className="bg-gray-50 rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Class Schedule</h3>
          <ul className="space-y-4">
            {data.schedule.map((s, i) => (
              <li
                key={i}
                className="flex justify-between bg-white p-4 rounded-lg shadow"
              >
                <span className="font-medium">{s.day}</span>
                <span className="text-gray-600">{s.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
