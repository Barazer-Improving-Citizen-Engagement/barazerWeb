import Link from 'next/link';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">Engage with Democracy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/signup">
                <a className="bg-white shadow-lg p-6 rounded-lg hover:bg-blue-600 hover:text-white transition">
                  <h3 className="text-2xl font-semibold">Get Started</h3>
                  <p>Sign up and join the movement for transparency.</p>
                </a>
              </Link>
              <Link href="/login">
                <a className="bg-white shadow-lg p-6 rounded-lg hover:bg-blue-600 hover:text-white transition">
                  <h3 className="text-2xl font-semibold">Login</h3>
                  <p>Already a member? Sign in to participate.</p>
                </a>
              </Link>
              {/* Add more sections as needed */}
              
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
