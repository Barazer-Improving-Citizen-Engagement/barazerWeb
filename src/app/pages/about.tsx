import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="text-lg">
            Barazer was founded with the mission to enhance government-citizen engagement through real-time data visualization and feedback tools. We aim to address critical issues of transparency, participation, and service delivery in democracies.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-lg">
            Our team consists of passionate individuals committed to improving civic engagement and government transparency. With expertise in technology, data analysis, and user experience design, we strive to create solutions that empower both citizens and governments.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <p className="text-lg">
            Barazer offers a range of services including real-time data dashboards, personalized recommendations, and feedback tools. Our platform is designed to provide valuable insights and facilitate better decision-making for governments and citizens alike.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
