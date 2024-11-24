import "@/assets/styles/globals.css";
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
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
