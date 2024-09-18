import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Pricing</h1>
        <p className="text-lg mb-6">
          Choose the plan that fits your needs. Our pricing is designed to offer flexibility and value.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Free</h2>
            <p className="text-lg mb-4">Limited access to features, ideal for trying out the platform.</p>
            <ul className="list-disc list-inside mb-4">
              <li>Basic Data Access</li>
              <li>Limited Recommendations</li>
            </ul>
            <Button text="Sign Up" onClick={() => window.location.href = '/signup'} />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Standard</h2>
            <p className="text-lg mb-4">Access to most features with some advanced tools.</p>
            <ul className="list-disc list-inside mb-4">
              <li>Enhanced Data Access</li>
              <li>Full Recommendations</li>
              <li>Email Support</li>
            </ul>
            <Button text="Sign Up" onClick={() => window.location.href = '/signup'} />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Premium</h2>
            <p className="text-lg mb-4">All features included with priority support and custom solutions.</p>
            <ul className="list-disc list-inside mb-4">
              <li>All Data Access</li>
              <li>Personalized Recommendations</li>
              <li>24/7 Support</li>
              <li>Custom Solutions</li>
            </ul>
            <Button text="Sign Up" onClick={() => window.location.href = '/signup'} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
