import { stats } from "../data_content";

export default function Stats() {
  return (
    <section className="py-12 md:py-20 ">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border">
              <div className="text-3xl md:text-4xl font-extrabold">{s.value}</div>
              <div className="text-gray-600 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}