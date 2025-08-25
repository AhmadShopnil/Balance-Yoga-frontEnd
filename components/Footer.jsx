export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} BalanceYoga. All rights reserved.</p>
        {/* <p>Powered by Next.js & Tailwind CSS</p> */}
      </div>
    </footer>
  );
}