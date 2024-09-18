import type { Metadata } from "next";
import '../app/global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "Barazer",
  description: "Empowering with democracy and governance like never before.",
};
export default function RootLayout({ 
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-100 antialiased ">
        {/* <Navbar /> */}
        <main>
          
          {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
