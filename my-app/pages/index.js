// /pages/index.js
import AnimatedCursor from "../components/AnimatedCursor";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="relative">
      <AnimatedCursor />
      <HeroSection />
    </div>
  );
}
