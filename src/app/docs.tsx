import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Documentation</h1>
        <p className="text-lg">
          Learn how to use Barazer, explore platform support, and discover how you can be a part of it.
        </p>
        {/* Add sections with procedural guides */}
      </main>
      <Footer />
    </div>
  );
}
