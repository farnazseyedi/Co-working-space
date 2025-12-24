import Footer from "./pages/HomePage/Footer";
import FAQ from "./pages/HomePage/F&Q";
import Info from "./pages/HomePage/Info";
import WebLog from "./pages/HomePage/WebLog";
import Header from "@/app/pages/HomePage/Header";
import FeaturesSection from "./pages/HomePage/features-section";
import CalendarSection from "./pages/HomePage/CalendarSection";
import HomePageSlider from "./pages/HomePage/HomePageSlider";

export default function Home() {
  return (
    <>
      <Header />
      <FeaturesSection />
      <Info />
      <WebLog />
      <CalendarSection />
      <HomePageSlider />
      <FAQ />
      <Footer />
    </>
  );
}
