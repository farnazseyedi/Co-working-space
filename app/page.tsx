import Footer from "./pages/HomePage/Footer";
import FAQ from "./pages/HomePage/F&Q";
import Info from "./pages/HomePage/Info";
import WebLog from "./pages/HomePage/WebLog"

export default function Home() {
  return (
    <div>
      <Info />
      <WebLog />
      <FAQ />
      <Footer />
    </div>
  );
}
