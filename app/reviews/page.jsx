"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Ayesha Rahman",
    quote: "Yoga transformed my mornings. Feeling more balanced every day.",
    thumbnail: "/images/clients/1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    name: "Farhan Ahmed",
    quote: "The breathing techniques improved my focus at work.",
    thumbnail: "/images/clients/3.jpg",
    videoUrl: "https://www.youtube.com/embed/oHg5SJYRHA0",
  },
  {
    id: 3,
    name: "Sadia Karim",
    quote: "Classes are fun, energetic, and deeply calming at the same time.",
    thumbnail: "/images/clients/4.jpg",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
];

export default function VideoReviewsPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="pt-28 pb-20 bg-gradient-to-b from-white to-pink-50 min-h-screen">
      <div className="container text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Student Video Reviews
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Hear directly from our Balance Yoga community. Real stories,
          real transformations.
        </p>
      </div>

      {/* Grid of Reviews */}
      <div className="container grid gap-8 md:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer"
            onClick={() => setSelectedVideo(review.videoUrl)}
          >
            {/* Thumbnail */}
            <img
              src={review.thumbnail}
              alt={review.name}
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <Play size={48} className="text-white" />
            </div>
            {/* Info */}
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg">{review.name}</h3>
              <p className="text-gray-600 text-sm mt-1 italic">
                “{review.quote}”
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-3xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <iframe
                src={selectedVideo}
                title="Video Review"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
