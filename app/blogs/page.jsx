const posts = [
  {
    id: 1,
    title: "5 Benefits of Daily Yoga Practice",
    desc: "Discover how practicing yoga every day improves your mind and body.",
    date: "Aug 18, 2025",
    image: "/images/service/1.jpg",
  },
  {
    id: 2,
    title: "Breathing Techniques for Stress Relief",
    desc: "Learn simple pranayama methods to calm your mind and reduce stress.",
    date: "Aug 10, 2025",
    image: "/images/service/2.jpg",
  },
  {
    id: 3,
    title: "Beginner’s Guide to Yoga Postures",
    desc: "A step-by-step guide to start your yoga journey with confidence.",
    date: "Jul 28, 2025",
    image: "/images/service/3.jpg",
  },
   {
    id: 4,
    title: "5 Benefits of Daily Yoga Practice",
    desc: "Discover how practicing yoga every day improves your mind and body.",
    date: "Aug 18, 2025",
    image: "/images/service/1.jpg",
  },
  {
    id: 5,
    title: "Breathing Techniques for Stress Relief",
    desc: "Learn simple pranayama methods to calm your mind and reduce stress.",
    date: "Aug 10, 2025",
    image: "/images/service/2.jpg",
  },
  {
    id: 3,
    title: "Beginner’s Guide to Yoga Postures",
    desc: "A step-by-step guide to start your yoga journey with confidence.",
    date: "Jul 28, 2025",
    image: "/images/service/3.jpg",
  },
  {
    id: 5,
    title: "Breathing Techniques for Stress Relief",
    desc: "Learn simple pranayama methods to calm your mind and reduce stress.",
    date: "Aug 10, 2025",
    image: "/images/service/2.jpg",
  },
  {
    id: 3,
    title: "Beginner’s Guide to Yoga Postures",
    desc: "A step-by-step guide to start your yoga journey with confidence.",
    date: "Jul 28, 2025",
    image: "/images/service/3.jpg",
  },
];

export default function BlogPage() {
  return (
    <section className="pt-20 md:pt-28 pb-12 md:pb-20 container">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Latest <span className="text-primary">Insights</span>
        </h1>
        <p className="text-gray-600 md:text-lg">
          Explore tips, techniques, and guides to deepen your yoga journey and lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <span className="text-sm text-gray-500">{post.date}</span>
              <h3 className="text-xl font-semibold mb-2 mt-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.desc}</p>
              <a
                href="#"
                className="text-primary font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
