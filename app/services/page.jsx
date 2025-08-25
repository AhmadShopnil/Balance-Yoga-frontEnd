import Link from "next/link";
import Image from "next/image";
import { services } from "../../data_content";

const classes = [
  {
    slug: "hatha-yoga",
    title: "Hatha Yoga",
    desc: "Find balance with traditional yoga postures and breathing techniques.",
    img: "/images/class1.jpg",
  },
  {
    slug: "vinyasa-flow",
    title: "Vinyasa Flow",
    desc: "Dynamic flow classes linking breath with movement for strength & flexibility.",
    img: "/images/class2.jpg",
  },
  {
    slug: "meditation",
    title: "Meditation",
    desc: "Calm your mind and find inner peace through guided meditation sessions.",
    img: "/images/class3.jpg",
  },
  {
    slug: "prenatal-yoga",
    title: "Prenatal Yoga",
    desc: "Gentle, safe, and supportive classes for mothers-to-be.",
    img: "/images/class4.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="">
      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-20  flex items-center justify-center bg-gradient-to-r from-primary/90 to-purple-700 text-white text-center">
        <div>
          <h1 className="text-5xl font-bold mb-4">Our Classes</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Explore yoga classes designed for every level, from beginner to advanced.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 container">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-56 w-full">
                <Image src={c.img} alt={c.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{c.title}</h3>
                <p className="text-gray-600 mb-4">{c.desc}</p>
                <Link
                  href={`/services/${c.slug}`}
                  className="inline-block bg-primary text-white px-5 py-2 rounded-xl hover:bg-purple-800 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
