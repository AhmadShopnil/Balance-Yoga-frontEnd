// app/blog/[id]/page.jsx
"use client";

import Image from "next/image";

export default function SingleBlogPage() {
  const blog = {
    id: 1,
    title: "5 Benefits of Daily Yoga Practice",
    desc: "Discover how practicing yoga every day improves your mind and body.",
    date: "Aug 18, 2025",
    image: "/images/service/1.jpg",
    author: {
      name: "Sophia Sharma",
      role: "Yoga Instructor",
      avatar: "/images/clients/3.jpg",
    },
    content: `
      <p>Yoga is more than just physical exercise — it’s a way to bring harmony to your body, mind, and soul. Practicing yoga daily can transform your life in profound ways.</p>

      <h2>1. Improves Flexibility</h2>
      <p>With regular yoga practice, you’ll notice increased flexibility, reduced stiffness, and a greater range of motion in your joints.</p>

      <h2>2. Builds Strength</h2>
      <p>Yoga uses your body weight as resistance, which helps strengthen muscles naturally without heavy weights.</p>

      <h2>3. Reduces Stress</h2>
      <blockquote>“Yoga is the journey of the self, through the self, to the self.” — Bhagavad Gita</blockquote>
      <p>Breathing techniques and mindfulness in yoga reduce stress and promote relaxation.</p>

      <h2>4. Boosts Mental Clarity</h2>
      <p>Yoga improves focus, concentration, and mental clarity. It’s the perfect balance between movement and meditation.</p>

      <h2>5. Enhances Overall Health</h2>
      <p>Daily practice supports heart health, better sleep, and improved digestion — leading to overall wellness.</p>
      
      <p class="font-semibold text-primary">Start your yoga journey today and experience these benefits for yourself!</p>
    `,
  };

  const related = [
    {
      id: 2,
      title: "Breathing Techniques for Stress Relief",
      image: "/images/service/2.jpg",
      date: "Aug 10, 2025",
    },
    {
      id: 3,
      title: "Beginner’s Guide to Yoga Postures",
      image: "/images/service/3.jpg",
      date: "Jul 28, 2025",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-pink-50">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover scale-105 hover:scale-110 transition duration-700"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 md:p-10 max-w-3xl text-center">
            <span className="text-sm uppercase tracking-wider text-gray-200">
              Lifestyle · {blog.date}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
              {blog.title}
            </h1>
            <p className="text-gray-100 mt-4 text-lg">{blog.desc}</p>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="container max-w-4xl py-8">
        {/* Author */}
            <div className="flex items-center gap-4 mb-6">
            <div className="w-[60px] h-[60px] relative">
                <Image
                src={blog.author.avatar}
                alt={blog.author.name}
                fill
                className="rounded-full object-cover border-2 border-primary"
                />
            </div>
            <div>
                <h4 className="font-semibold text-lg">{blog.author.name}</h4>
                <p className="text-sm text-gray-500">{blog.author.role}</p>
            </div>
            </div>


        {/* Content */}
        <article
          className="prose prose-lg md:prose-xl prose-p:text-gray-700 prose-headings:text-gray-900 prose-strong:text-primary prose-blockquote:text-gray-600 prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        ></article>
      </div>

      {/* Related Posts */}
      <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-16 mt-10">
        <div className="container max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            More Articles You’ll Love
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {related.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                <div className="relative h-56">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <h3 className="text-xl font-semibold mt-2 group-hover:text-primary transition">
                    {post.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
