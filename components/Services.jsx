import Image from "next/image";
import { services } from "../data_content";

export default function Services() {
  return (
    <section id="classes" className="py-12 md:py-20 bg-gray-50 ">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">Dive in the World of Health & Fitness</h2>
          <p className="text-gray-600 mb-10">
            Explore classes designed for every level—from energizing flows to calming, mindful practices.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {services.slice(0,4).map((s, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3]">
                <Image src={s.img} alt={s.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}