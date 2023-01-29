import React from "react";
import { HeroSection, StatSection, PubSection } from "../container";
import SEO from "../lib/SEO";

export default function Home() {
  return (
    <>
      <SEO pageTitle="Home" />
      <div className="pageContainer">
        <HeroSection />
        <StatSection />
        <PubSection />
      </div>
    </>
  );
}
