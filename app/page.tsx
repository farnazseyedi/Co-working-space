import Footer from "@/app/pages/HomePage/Footer";
import FAQ from "@/app/pages/HomePage/F&Q";
import Header from "@/app/pages/HomePage/Header";
import FeaturesSection from "./pages/HomePage/features-section";
import CalendarSection from "./pages/HomePage/CalendarSection";
import HomePageSlider from "./pages/HomePage/HomePageSlider";

export default function Home() {
  return (
    <div className="">
      <Header/>
      <FeaturesSection/>
      <CalendarSection/>
      <HomePageSlider/>
      <FAQ />
      <Footer />
    </div>
  );
}
