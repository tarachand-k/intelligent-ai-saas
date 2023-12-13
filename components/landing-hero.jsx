"use client";

import { useAuth } from "@clerk/nextjs";
import TypewriterComponent from "typewriter-effect";
import { Button } from "./ui/button";
import Link from "next/link";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5 px-8 h-fit">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        <h1>Unleash the power of AI with Intelligent.</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Music Generation.",
                "Video Generation.",
                "Code Generation.",
              ],
              autoStart: true,
              loop: true,
            }}
          ></TypewriterComponent>
        </div>
      </div>
      <p className="text-sm md:text-xl font-light text-zinc-500">
        Create content using AI 10x faster
      </p>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg md:p-6 font-semibold">
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <p className="text-zinc-400 text-xs md:text-sm font-normal">
        No credit card required
      </p>

      <div className="hidden md:flex items-center mt-lg w-full mx-auto max-w-lg flex-wrap justify-center text-center py-8 grayscale">
        <div className="logo-container h-10">
          <img
            src="http://api.writesonic.com/static/images/Groups.png"
            alt="intercom logo"
            className="intercom"
          />
        </div>
        <div className="logo-container">
          <img
            src="http://api.writesonic.com/static/images/Group.png"
            alt=""
            className="buffer"
          />
        </div>
        <div className="logo-container">
          <img
            src="http://api.writesonic.com/static/images/product-hunt-1.png"
            alt=""
            className="product-hunt"
          />
        </div>
        <div className="logo-container">
          <img
            src="http://api.writesonic.com/static/images/icon_slack.png"
            alt=""
            className="slack"
          />
        </div>
        <div className="logo-container">
          <img
            src="http://api.writesonic.com/static/images/580b57fcd9996e24bc43c513.png"
            alt=""
            className="airbnb"
          />
        </div>
      </div>
    </div>
  );
};
