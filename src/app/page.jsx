import Testimonial from "./components/Testimonial";
import AboutSection from "./components/AboutSection";
import NearbySection from "./components/NearbySection";
import ProjectSection from "./components/ProjectSection";
import FeatureSection from "./components/FeatureSection";
import Gallery from "./components/Gallery";
import Lamp from "./components/Lamp";
import Contact from "./components/Contact";
import GoogleMap from "./components/GoogleMap";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <>
      <Lamp />
      <div className="container-full p-6 bg-black z-50">
        <AboutSection />
        <Gallery />
        <NearbySection />
        <ProjectSection />
        <FeatureSection />
        <Contact />
        <Testimonial />
        <GoogleMap />
        <FooterSection />
      </div>
    </>
  );
}
