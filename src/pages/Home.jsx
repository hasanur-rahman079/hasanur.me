import React from "react";
import { HeroSection, StatSection, PubSection } from "../container";
import { TabTitle } from "../utils/GeneralFunctions";

export default function Home() {
  TabTitle("Home - MD. Hasanur Rahman");

  return (
    <div className="pageContainer">
      <HeroSection />
      <StatSection />
      <PubSection />
    </div>
  );
}
