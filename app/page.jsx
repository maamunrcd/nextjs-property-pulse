import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
import connectDB from "@/config/dababase";
const HomePage = async () => {
  console.log(process.env.MONGODB_URI, "ENV------");
  await connectDB();
  return (
    <>
      <Hero/>
      <InfoBoxes/>
      <HomeProperties/>
    </>
  );
};

export default HomePage;
