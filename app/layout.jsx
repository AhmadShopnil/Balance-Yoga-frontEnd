import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export const metadata = {
  title: "Yoga Instructor — Next.js + Tailwind",
  description: "A Yoga Instructor landing page recreated with Next.js and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
         <Header />
        {children}
         <Footer />
        </body>
    </html>
  );
}