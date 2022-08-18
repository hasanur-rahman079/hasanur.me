import React from "react";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import PubSection from "../components/PubSection";

export default function Home() {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div>
      <HeroSection />
      <PubSection />
      <FooterSection />
    </div>
  );
}
