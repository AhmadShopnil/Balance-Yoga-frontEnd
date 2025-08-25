export default function ContactPage() {
  return (
    <section className="py-20 container">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Contact <span className="text-primary">Us</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-2xl shadow space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              rows="5"
              className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600">
            Have questions about our classes or want to book a private session?  
            Fill out the form or reach us directly:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li><strong>📍 Address:</strong> 123 Yoga Street, Dhaka, Bangladesh</li>
            <li><strong>📞 Phone:</strong> +880 123 456 789</li>
            <li><strong>✉️ Email:</strong> info@balanceyoga.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
