import "@/assets/styles/globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "PropertyPulse | Find perfect rentals",
  description:
    "PropertyPulse is a real estate platform that connects buyers and sellers.",
  author: "PropertyPulse Team",
  keywords: "property, real estate, buy, sell",
};
const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
};

export default MainLayout;
