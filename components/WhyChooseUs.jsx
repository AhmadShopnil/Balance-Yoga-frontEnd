import { FaHeartbeat, FaLeaf, FaSmile, FaUsers } from "react-icons/fa";

const reasons = [
  {
    icon: <FaHeartbeat className="text-primary text-3xl mb-3" />,
    title: "Holistic Wellness",
    desc: "We focus on physical strength, mental clarity, and emotional balance.",
  },
  {
    icon: <FaLeaf className="text-primary text-3xl mb-3" />,
    title: "Certified Instructors",
    desc: "Experienced teachers committed to guiding you safely and effectively.",
  },
  {
    icon: <FaSmile className="text-primary text-3xl mb-3" />,
    title: "Positive Energy",
    desc: "Friendly, welcoming community that supports your journey.",
  },
  {
    icon: <FaUsers className="text-primary text-3xl mb-3" />,
    title: "Tailored Classes",
    desc: "Group or private sessions customized for every skill level.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Why Choose <span className="text-primary">Balance Yoga</span>?
          </h2>
          <p className="text-gray-600">
            More than just a yoga studio, Balance Yoga is a community where 
            wellness and transformation meet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center bg-white p-6 rounded-2xl border text-center hover:shadow-lg transition"
            >
              {r.icon}
              <h3 className="text-lg font-bold mb-2">{r.title}</h3>
              <p className="text-gray-600 text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
