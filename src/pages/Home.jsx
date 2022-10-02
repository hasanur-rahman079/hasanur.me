import React from "react";
import { HeroSection, StatSection, PubSection } from "../container";

export default function Home() {
  return (
    <div className="pageContainer">
      <HeroSection />
      <StatSection />
      <PubSection />
    </div>
  );
}
