"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 md:p-6 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative w-8 h-8 mr-2 sm:mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl text-white", font.className)}>
          Intelligent
        </h1>
      </Link>
      <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
        <Button variant="outline" className="">
          Get started
        </Button>
      </Link>
    </nav>
  );
};
