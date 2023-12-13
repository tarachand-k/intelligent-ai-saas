import React from "react";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import LandingSectionDashboard from "@/components/landing-section-dashboard";

function LandingPage() {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingSectionDashboard />
      <LandingContent />
      {/* <LandingFooter /> */}
    </div>
  );
}
export default LandingPage;
