import './globals.css';
import Hero from "@/app/components/Hero";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <html lang="en">
      <body className="min-h-screen relative">
        <Navbar />
        <main className="relative">
          <Hero />
        </main>
      </body>
    </html>
  );
}
