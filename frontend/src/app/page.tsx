import FeatureSection from "@/components/base/FeatureSection";
import Footer from "@/components/base/Footer";
import HeroSection from "@/components/base/HeroSection";
import Navbar from "@/components/base/Navbar";
import UserReviews from "@/components/base/UserReviews";

export default async function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar/>
      <HeroSection/>
      <FeatureSection/>
      <UserReviews/>
      <Footer/>
    </div>
  );
}
