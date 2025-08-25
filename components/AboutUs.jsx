import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
          <Image
            src="/images/about.jpg"
            alt="About Balance Yoga"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            About <span className="text-primary">Balance Yoga</span>
          </h2>
          <p className="text-gray-600 mb-4">
            At Balance Yoga, we believe in harmonizing body, mind, and spirit. 
            With years of experience, our certified instructors provide 
            personalized guidance to help you achieve strength, flexibility, 
            and inner calm.
          </p>
          <p className="text-gray-600 mb-6">
            Whether you’re new to yoga or a seasoned practitioner, Balance Yoga 
            offers classes and private sessions tailored to your lifestyle.
          </p>
          <a
            href="#contact"
            className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
