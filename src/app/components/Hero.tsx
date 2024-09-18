import Button from './Button';

export default function Hero() {
  const handleGetStarted = () => {
    window.location.href = '/signup';
  };

  return (
    <section className="text-center py-20 bg-gradient-to-b from-blue-900 to-indigo-700 text-white">
      <h1 className="text-6xl font-bold">Barazer: Your Gateway to Transparency</h1>
      <p className="text-xl mt-4 max-w-2xl mx-auto">
        Empowering citizens and governments with real-time data, personalized recommendations, and feedback tools to improve democracy and service delivery.
      </p>
      <Button text="Get Started" onClick={handleGetStarted} className="mt-8" />
    </section>
  );
}
