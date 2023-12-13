"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const LandingSectionDashboard = () => {
  const dashboardRef = useRef();

  useEffect(() => {
    // Add a scroll event listener to trigger the animation
    const handleScroll = () => {
      const dashboard = dashboardRef.current;

      if (dashboard) {
        const rect = dashboard.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Customize the offset and animation class as per your requirements
        if (rect.top < viewportHeight - 100) {
          dashboard.classList.add("float-up-animation");
        } else {
          dashboard.classList.remove("float-up-animation");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="section pb-18 sm:pb-36 h-fit relative">
      <img
        className="product-shot opacity-1 inline-block mb-10"
        src="/dashboard-md.png"
        alt="dashboard"
        ref={dashboardRef}
      />
      <div className="px-10 pb-20 max-w-2xl">
        <h3 className="text-center text-3xl text-white font-extrabold mb-10">
          Unlock the power of artificial intelligence with Intelligent.
        </h3>
        <p className="text-zinc-400 text-sm md:text-sm font-normal text-center">
          Whether you&apos;re a creative individual looking for innovative tools
          or a business seeking automation and optimization, Intelligent&apos;s
          suite of AI tools has you covered. From generating stunning images and
          videos to enhancing conversations and automating code generation, this
          platform revolutionizes how you work.{" "}
        </p>
      </div>
    </div>
  );
};

export default LandingSectionDashboard;
