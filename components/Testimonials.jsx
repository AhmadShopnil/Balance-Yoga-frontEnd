import Image from "next/image";
import { testimonials } from "../data_content";

export default function Testimonials() {
  return (
    <section className="py-12 md:py-20 bg-gray-50" id="publications">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">What Clients Say</h2>
          <p className="text-gray-600 mb-10">Real stories from people who found balance, strength, and peace.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl border p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={t.img} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
              <p className="text-gray-700">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}