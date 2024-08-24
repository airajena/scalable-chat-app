import FeatureSection from "@/components/base/FeatureSection";
import HeroSection from "@/components/base/HeroSection";
import Navbar from "@/components/base/Navbar";

export default async function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
    </div>
  );
}
